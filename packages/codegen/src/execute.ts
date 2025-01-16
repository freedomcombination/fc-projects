import { TypedDocumentString } from './graphql/graphql'

export async function execute<TResult, TVariables>(
  query: TypedDocumentString<TResult, TVariables>,
  ...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
) {
  const response = await fetch(process.env.GRAPHQL_ENDPOINT || 'http://localhost:1337/api/graphql', {
    body: JSON.stringify({
      query,
      variables,
    }),
    headers: {
      Accept: 'application/graphql-response+json',
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return response.json() as TResult
}
