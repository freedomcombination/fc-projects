import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: './src/**/*.graphql',
  generates: {
    // Where the generated types and hooks file will be placed
    './src/generated.ts': {
      config: {
        addSuspenseQuery: true,
        exposeFetcher: true,
        exposeQueryKeys: true,
        // Allows us to specify a custom fetcher function that will leverage
        // Next.js caching fetaures within our generated query hooks.
        fetcher: './fetcher#fetcher',
        legacyMode: false,
        // Needed to support the updated React Query 5 API
        reactQueryVersion: 5,
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
        // Important! The "add" plugin will inject this into our generated file.
        // This extends RequestInit['Headers'] to include the Next.js extended "fetch"
        // options for caching. This will allow for fine grained cache control
        // with our generated hooks.
        {
          add: {
            content: `
type FetchOptions = {
cache?: RequestCache;
next?: NextFetchRequestConfig;
};

            type RequestInit = {
              headers: (HeadersInit & FetchOptions) | FetchOptions;
            };`,
          },
        },
      ],
    },
  },
  overwrite: true,
  // Where your GQL schema is located (could also be externally hosted)
  schema: `${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`,
}
export default config
