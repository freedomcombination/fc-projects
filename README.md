# FC Projects Monorepo

## Getting started

```bash
pnpm install
pnpm dev
```

### Projects

- PayloadCMS http://localhost:1337
- Lotus http://localhost:3000
- HVN http://localhost:3001

### Adding components

To add components to your app, run the following command at the root monorepo directory:

```bash
pnpm add-components
```

This will place the ui components in the `packages/ui/src/base` directory.

### Using components

To use the components in your app, import them from the `ui` package.

```tsx
import { Button } from '@fc/ui/base/button'
```
