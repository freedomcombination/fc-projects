import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  documents: './src/**/*.graphql',
  generates: {
    './generates.ts': {
      config: {
        fetcher: {
          endpoint: process.env.GRAPHQL_ENDPOINT || 'http://localhost:1337/graphql',
          fetchParams: {
            headers: {
              'Content-Type': 'application/json',
            },
          },
        },
        reactQueryVersion: 5,
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query'],
    },
  },
  schema: process.env.GRAPHQL_ENDPOINT || 'http://localhost:1337/graphql',
}

export default config
