FROM node:20.18.3-alpine AS base

WORKDIR /app

ENV NODE_ENV=production
ENV TURBO_TELEMETRY_DISABLED=1
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV CI=1

RUN npm install -g corepack@latest
RUN corepack enable pnpm

# =========================================================================== #

FROM base AS builder

RUN pnpm install --global turbo@^2

COPY . .

# https://turbo.build/repo/docs/guides/tools/docker#the-solution
RUN turbo prune lotus --docker

# =========================================================================== #

FROM base AS installer

COPY --from=builder /app/out/json/ .
RUN pnpm install --frozen-lockfile

COPY --from=builder /app/out/full/ .
RUN pnpm build

# =========================================================================== #

FROM base AS runner

# Don't run production as root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=installer --chown=nextjs:nodejs /app/apps/lotus/.next/standalone ./
COPY --from=installer --chown=nextjs:nodejs /app/apps/lotus/.next/static ./apps/lotus/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/lotus/public ./apps/lotus/public

CMD node apps/lotus/server.js