import { GetBlogsQuery, useGetBlogsQuery } from '@fc/codegen/generated'

import { QueryClient } from '@tanstack/react-query'

export default async function BlogsPage() {
  const queryClient = new QueryClient()

  const data = await queryClient.fetchQuery<GetBlogsQuery>({
    queryFn: useGetBlogsQuery.fetcher(),
    queryKey: useGetBlogsQuery.getKey(),
  })

  return <pre>{JSON.stringify(data, null, 2)}</pre>
}
