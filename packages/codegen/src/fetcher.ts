import 'next'

type FetchOptions = {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions
}

export const fetcher = <TData, TVariables>(query: string, variables?: TVariables, options?: RequestInit['headers']) => {
  return async (): Promise<TData> => {
    const { cache, next, ...restOptions } = options || {}
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`, {
      body: JSON.stringify({ query, variables }),
      cache,
      headers: {
        'Content-Type': 'application/json',
        ...restOptions,
      },
      method: 'POST',
      next,
    })

    const json = await res.json()

    if (json.errors) {
      console.log('json.errors', json.errors)
      const { message } = json.errors[0]

      throw new Error(message)
    }

    return json.data
  }
}
