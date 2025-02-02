import {
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
  useSuspenseQuery,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'

import { fetcher } from './fetcher'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never }
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }

type FetchOptions = {
  cache?: RequestCache
  next?: NextFetchRequestConfig
}

type RequestInit = {
  headers: (HeadersInit & FetchOptions) | FetchOptions
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
  DateTime: { input: any; output: any }
  EmailAddress: { input: any; output: any }
  JSON: { input: any; output: any }
  JSONObject: { input: any; output: any }
}

export type Access = {
  __typename?: 'Access'
  blogs?: Maybe<BlogsAccess>
  canAccessAdmin: Scalars['Boolean']['output']
  media?: Maybe<MediaAccess>
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>
  payload_preferences?: Maybe<Payload_PreferencesAccess>
  users?: Maybe<UsersAccess>
}

export type Blog = {
  __typename?: 'Blog'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  title_en?: Maybe<Scalars['String']['output']>
  title_nl?: Maybe<Scalars['String']['output']>
  title_tr?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type Blog_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Blog_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Int']['input']>
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>
  less_than?: InputMaybe<Scalars['Int']['input']>
  less_than_equal?: InputMaybe<Scalars['Int']['input']>
  not_equals?: InputMaybe<Scalars['Int']['input']>
}

export type Blog_Title_En_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Blog_Title_Nl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Blog_Title_Tr_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Blog_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Blog_Where = {
  AND?: InputMaybe<Array<InputMaybe<Blog_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Blog_Where_Or>>>
  createdAt?: InputMaybe<Blog_CreatedAt_Operator>
  id?: InputMaybe<Blog_Id_Operator>
  title_en?: InputMaybe<Blog_Title_En_Operator>
  title_nl?: InputMaybe<Blog_Title_Nl_Operator>
  title_tr?: InputMaybe<Blog_Title_Tr_Operator>
  updatedAt?: InputMaybe<Blog_UpdatedAt_Operator>
}

export type Blog_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Blog_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Blog_Where_Or>>>
  createdAt?: InputMaybe<Blog_CreatedAt_Operator>
  id?: InputMaybe<Blog_Id_Operator>
  title_en?: InputMaybe<Blog_Title_En_Operator>
  title_nl?: InputMaybe<Blog_Title_Nl_Operator>
  title_tr?: InputMaybe<Blog_Title_Tr_Operator>
  updatedAt?: InputMaybe<Blog_UpdatedAt_Operator>
}

export type Blog_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Blog_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Blog_Where_Or>>>
  createdAt?: InputMaybe<Blog_CreatedAt_Operator>
  id?: InputMaybe<Blog_Id_Operator>
  title_en?: InputMaybe<Blog_Title_En_Operator>
  title_nl?: InputMaybe<Blog_Title_Nl_Operator>
  title_tr?: InputMaybe<Blog_Title_Tr_Operator>
  updatedAt?: InputMaybe<Blog_UpdatedAt_Operator>
}

export type Blogs = {
  __typename?: 'Blogs'
  docs?: Maybe<Array<Maybe<Blog>>>
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page?: Maybe<Scalars['Int']['output']>
  pagingCounter?: Maybe<Scalars['Int']['output']>
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs?: Maybe<Scalars['Int']['output']>
  totalPages?: Maybe<Scalars['Int']['output']>
}

export type BlogsCreateAccess = {
  __typename?: 'BlogsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsCreateDocAccess = {
  __typename?: 'BlogsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsDeleteAccess = {
  __typename?: 'BlogsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsDeleteDocAccess = {
  __typename?: 'BlogsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsDocAccessFields = {
  __typename?: 'BlogsDocAccessFields'
  createdAt?: Maybe<BlogsDocAccessFields_CreatedAt>
  title_en?: Maybe<BlogsDocAccessFields_Title_En>
  title_nl?: Maybe<BlogsDocAccessFields_Title_Nl>
  title_tr?: Maybe<BlogsDocAccessFields_Title_Tr>
  updatedAt?: Maybe<BlogsDocAccessFields_UpdatedAt>
}

export type BlogsDocAccessFields_CreatedAt = {
  __typename?: 'BlogsDocAccessFields_createdAt'
  create?: Maybe<BlogsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<BlogsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<BlogsDocAccessFields_CreatedAt_Read>
  update?: Maybe<BlogsDocAccessFields_CreatedAt_Update>
}

export type BlogsDocAccessFields_CreatedAt_Create = {
  __typename?: 'BlogsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'BlogsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_CreatedAt_Read = {
  __typename?: 'BlogsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_CreatedAt_Update = {
  __typename?: 'BlogsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_En = {
  __typename?: 'BlogsDocAccessFields_title_en'
  create?: Maybe<BlogsDocAccessFields_Title_En_Create>
  delete?: Maybe<BlogsDocAccessFields_Title_En_Delete>
  read?: Maybe<BlogsDocAccessFields_Title_En_Read>
  update?: Maybe<BlogsDocAccessFields_Title_En_Update>
}

export type BlogsDocAccessFields_Title_En_Create = {
  __typename?: 'BlogsDocAccessFields_title_en_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_En_Delete = {
  __typename?: 'BlogsDocAccessFields_title_en_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_En_Read = {
  __typename?: 'BlogsDocAccessFields_title_en_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_En_Update = {
  __typename?: 'BlogsDocAccessFields_title_en_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Nl = {
  __typename?: 'BlogsDocAccessFields_title_nl'
  create?: Maybe<BlogsDocAccessFields_Title_Nl_Create>
  delete?: Maybe<BlogsDocAccessFields_Title_Nl_Delete>
  read?: Maybe<BlogsDocAccessFields_Title_Nl_Read>
  update?: Maybe<BlogsDocAccessFields_Title_Nl_Update>
}

export type BlogsDocAccessFields_Title_Nl_Create = {
  __typename?: 'BlogsDocAccessFields_title_nl_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Nl_Delete = {
  __typename?: 'BlogsDocAccessFields_title_nl_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Nl_Read = {
  __typename?: 'BlogsDocAccessFields_title_nl_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Nl_Update = {
  __typename?: 'BlogsDocAccessFields_title_nl_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Tr = {
  __typename?: 'BlogsDocAccessFields_title_tr'
  create?: Maybe<BlogsDocAccessFields_Title_Tr_Create>
  delete?: Maybe<BlogsDocAccessFields_Title_Tr_Delete>
  read?: Maybe<BlogsDocAccessFields_Title_Tr_Read>
  update?: Maybe<BlogsDocAccessFields_Title_Tr_Update>
}

export type BlogsDocAccessFields_Title_Tr_Create = {
  __typename?: 'BlogsDocAccessFields_title_tr_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Tr_Delete = {
  __typename?: 'BlogsDocAccessFields_title_tr_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Tr_Read = {
  __typename?: 'BlogsDocAccessFields_title_tr_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Tr_Update = {
  __typename?: 'BlogsDocAccessFields_title_tr_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_UpdatedAt = {
  __typename?: 'BlogsDocAccessFields_updatedAt'
  create?: Maybe<BlogsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<BlogsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<BlogsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<BlogsDocAccessFields_UpdatedAt_Update>
}

export type BlogsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'BlogsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'BlogsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'BlogsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'BlogsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields = {
  __typename?: 'BlogsFields'
  createdAt?: Maybe<BlogsFields_CreatedAt>
  title_en?: Maybe<BlogsFields_Title_En>
  title_nl?: Maybe<BlogsFields_Title_Nl>
  title_tr?: Maybe<BlogsFields_Title_Tr>
  updatedAt?: Maybe<BlogsFields_UpdatedAt>
}

export type BlogsFields_CreatedAt = {
  __typename?: 'BlogsFields_createdAt'
  create?: Maybe<BlogsFields_CreatedAt_Create>
  delete?: Maybe<BlogsFields_CreatedAt_Delete>
  read?: Maybe<BlogsFields_CreatedAt_Read>
  update?: Maybe<BlogsFields_CreatedAt_Update>
}

export type BlogsFields_CreatedAt_Create = {
  __typename?: 'BlogsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_CreatedAt_Delete = {
  __typename?: 'BlogsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_CreatedAt_Read = {
  __typename?: 'BlogsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_CreatedAt_Update = {
  __typename?: 'BlogsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_En = {
  __typename?: 'BlogsFields_title_en'
  create?: Maybe<BlogsFields_Title_En_Create>
  delete?: Maybe<BlogsFields_Title_En_Delete>
  read?: Maybe<BlogsFields_Title_En_Read>
  update?: Maybe<BlogsFields_Title_En_Update>
}

export type BlogsFields_Title_En_Create = {
  __typename?: 'BlogsFields_title_en_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_En_Delete = {
  __typename?: 'BlogsFields_title_en_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_En_Read = {
  __typename?: 'BlogsFields_title_en_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_En_Update = {
  __typename?: 'BlogsFields_title_en_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Nl = {
  __typename?: 'BlogsFields_title_nl'
  create?: Maybe<BlogsFields_Title_Nl_Create>
  delete?: Maybe<BlogsFields_Title_Nl_Delete>
  read?: Maybe<BlogsFields_Title_Nl_Read>
  update?: Maybe<BlogsFields_Title_Nl_Update>
}

export type BlogsFields_Title_Nl_Create = {
  __typename?: 'BlogsFields_title_nl_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Nl_Delete = {
  __typename?: 'BlogsFields_title_nl_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Nl_Read = {
  __typename?: 'BlogsFields_title_nl_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Nl_Update = {
  __typename?: 'BlogsFields_title_nl_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Tr = {
  __typename?: 'BlogsFields_title_tr'
  create?: Maybe<BlogsFields_Title_Tr_Create>
  delete?: Maybe<BlogsFields_Title_Tr_Delete>
  read?: Maybe<BlogsFields_Title_Tr_Read>
  update?: Maybe<BlogsFields_Title_Tr_Update>
}

export type BlogsFields_Title_Tr_Create = {
  __typename?: 'BlogsFields_title_tr_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Tr_Delete = {
  __typename?: 'BlogsFields_title_tr_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Tr_Read = {
  __typename?: 'BlogsFields_title_tr_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Tr_Update = {
  __typename?: 'BlogsFields_title_tr_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_UpdatedAt = {
  __typename?: 'BlogsFields_updatedAt'
  create?: Maybe<BlogsFields_UpdatedAt_Create>
  delete?: Maybe<BlogsFields_UpdatedAt_Delete>
  read?: Maybe<BlogsFields_UpdatedAt_Read>
  update?: Maybe<BlogsFields_UpdatedAt_Update>
}

export type BlogsFields_UpdatedAt_Create = {
  __typename?: 'BlogsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_UpdatedAt_Delete = {
  __typename?: 'BlogsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_UpdatedAt_Read = {
  __typename?: 'BlogsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_UpdatedAt_Update = {
  __typename?: 'BlogsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type BlogsReadAccess = {
  __typename?: 'BlogsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsReadDocAccess = {
  __typename?: 'BlogsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsUpdateAccess = {
  __typename?: 'BlogsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type BlogsUpdateDocAccess = {
  __typename?: 'BlogsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type Media = {
  __typename?: 'Media'
  alt: Scalars['String']['output']
  createdAt?: Maybe<Scalars['DateTime']['output']>
  filename?: Maybe<Scalars['String']['output']>
  filesize?: Maybe<Scalars['Float']['output']>
  focalX?: Maybe<Scalars['Float']['output']>
  focalY?: Maybe<Scalars['Float']['output']>
  height?: Maybe<Scalars['Float']['output']>
  id: Scalars['Int']['output']
  mimeType?: Maybe<Scalars['String']['output']>
  thumbnailURL?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type MediaCreateAccess = {
  __typename?: 'MediaCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaCreateDocAccess = {
  __typename?: 'MediaCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaDeleteAccess = {
  __typename?: 'MediaDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaDeleteDocAccess = {
  __typename?: 'MediaDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaDocAccessFields = {
  __typename?: 'MediaDocAccessFields'
  alt?: Maybe<MediaDocAccessFields_Alt>
  createdAt?: Maybe<MediaDocAccessFields_CreatedAt>
  filename?: Maybe<MediaDocAccessFields_Filename>
  filesize?: Maybe<MediaDocAccessFields_Filesize>
  focalX?: Maybe<MediaDocAccessFields_FocalX>
  focalY?: Maybe<MediaDocAccessFields_FocalY>
  height?: Maybe<MediaDocAccessFields_Height>
  mimeType?: Maybe<MediaDocAccessFields_MimeType>
  thumbnailURL?: Maybe<MediaDocAccessFields_ThumbnailUrl>
  updatedAt?: Maybe<MediaDocAccessFields_UpdatedAt>
  url?: Maybe<MediaDocAccessFields_Url>
  width?: Maybe<MediaDocAccessFields_Width>
}

export type MediaDocAccessFields_Alt = {
  __typename?: 'MediaDocAccessFields_alt'
  create?: Maybe<MediaDocAccessFields_Alt_Create>
  delete?: Maybe<MediaDocAccessFields_Alt_Delete>
  read?: Maybe<MediaDocAccessFields_Alt_Read>
  update?: Maybe<MediaDocAccessFields_Alt_Update>
}

export type MediaDocAccessFields_Alt_Create = {
  __typename?: 'MediaDocAccessFields_alt_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Alt_Delete = {
  __typename?: 'MediaDocAccessFields_alt_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Alt_Read = {
  __typename?: 'MediaDocAccessFields_alt_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Alt_Update = {
  __typename?: 'MediaDocAccessFields_alt_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_CreatedAt = {
  __typename?: 'MediaDocAccessFields_createdAt'
  create?: Maybe<MediaDocAccessFields_CreatedAt_Create>
  delete?: Maybe<MediaDocAccessFields_CreatedAt_Delete>
  read?: Maybe<MediaDocAccessFields_CreatedAt_Read>
  update?: Maybe<MediaDocAccessFields_CreatedAt_Update>
}

export type MediaDocAccessFields_CreatedAt_Create = {
  __typename?: 'MediaDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_CreatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_CreatedAt_Read = {
  __typename?: 'MediaDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_CreatedAt_Update = {
  __typename?: 'MediaDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filename = {
  __typename?: 'MediaDocAccessFields_filename'
  create?: Maybe<MediaDocAccessFields_Filename_Create>
  delete?: Maybe<MediaDocAccessFields_Filename_Delete>
  read?: Maybe<MediaDocAccessFields_Filename_Read>
  update?: Maybe<MediaDocAccessFields_Filename_Update>
}

export type MediaDocAccessFields_Filename_Create = {
  __typename?: 'MediaDocAccessFields_filename_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filename_Delete = {
  __typename?: 'MediaDocAccessFields_filename_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filename_Read = {
  __typename?: 'MediaDocAccessFields_filename_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filename_Update = {
  __typename?: 'MediaDocAccessFields_filename_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filesize = {
  __typename?: 'MediaDocAccessFields_filesize'
  create?: Maybe<MediaDocAccessFields_Filesize_Create>
  delete?: Maybe<MediaDocAccessFields_Filesize_Delete>
  read?: Maybe<MediaDocAccessFields_Filesize_Read>
  update?: Maybe<MediaDocAccessFields_Filesize_Update>
}

export type MediaDocAccessFields_Filesize_Create = {
  __typename?: 'MediaDocAccessFields_filesize_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filesize_Delete = {
  __typename?: 'MediaDocAccessFields_filesize_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filesize_Read = {
  __typename?: 'MediaDocAccessFields_filesize_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Filesize_Update = {
  __typename?: 'MediaDocAccessFields_filesize_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalX = {
  __typename?: 'MediaDocAccessFields_focalX'
  create?: Maybe<MediaDocAccessFields_FocalX_Create>
  delete?: Maybe<MediaDocAccessFields_FocalX_Delete>
  read?: Maybe<MediaDocAccessFields_FocalX_Read>
  update?: Maybe<MediaDocAccessFields_FocalX_Update>
}

export type MediaDocAccessFields_FocalX_Create = {
  __typename?: 'MediaDocAccessFields_focalX_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalX_Delete = {
  __typename?: 'MediaDocAccessFields_focalX_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalX_Read = {
  __typename?: 'MediaDocAccessFields_focalX_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalX_Update = {
  __typename?: 'MediaDocAccessFields_focalX_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalY = {
  __typename?: 'MediaDocAccessFields_focalY'
  create?: Maybe<MediaDocAccessFields_FocalY_Create>
  delete?: Maybe<MediaDocAccessFields_FocalY_Delete>
  read?: Maybe<MediaDocAccessFields_FocalY_Read>
  update?: Maybe<MediaDocAccessFields_FocalY_Update>
}

export type MediaDocAccessFields_FocalY_Create = {
  __typename?: 'MediaDocAccessFields_focalY_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalY_Delete = {
  __typename?: 'MediaDocAccessFields_focalY_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalY_Read = {
  __typename?: 'MediaDocAccessFields_focalY_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_FocalY_Update = {
  __typename?: 'MediaDocAccessFields_focalY_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Height = {
  __typename?: 'MediaDocAccessFields_height'
  create?: Maybe<MediaDocAccessFields_Height_Create>
  delete?: Maybe<MediaDocAccessFields_Height_Delete>
  read?: Maybe<MediaDocAccessFields_Height_Read>
  update?: Maybe<MediaDocAccessFields_Height_Update>
}

export type MediaDocAccessFields_Height_Create = {
  __typename?: 'MediaDocAccessFields_height_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Height_Delete = {
  __typename?: 'MediaDocAccessFields_height_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Height_Read = {
  __typename?: 'MediaDocAccessFields_height_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Height_Update = {
  __typename?: 'MediaDocAccessFields_height_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_MimeType = {
  __typename?: 'MediaDocAccessFields_mimeType'
  create?: Maybe<MediaDocAccessFields_MimeType_Create>
  delete?: Maybe<MediaDocAccessFields_MimeType_Delete>
  read?: Maybe<MediaDocAccessFields_MimeType_Read>
  update?: Maybe<MediaDocAccessFields_MimeType_Update>
}

export type MediaDocAccessFields_MimeType_Create = {
  __typename?: 'MediaDocAccessFields_mimeType_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_MimeType_Delete = {
  __typename?: 'MediaDocAccessFields_mimeType_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_MimeType_Read = {
  __typename?: 'MediaDocAccessFields_mimeType_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_MimeType_Update = {
  __typename?: 'MediaDocAccessFields_mimeType_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_ThumbnailUrl = {
  __typename?: 'MediaDocAccessFields_thumbnailURL'
  create?: Maybe<MediaDocAccessFields_ThumbnailUrl_Create>
  delete?: Maybe<MediaDocAccessFields_ThumbnailUrl_Delete>
  read?: Maybe<MediaDocAccessFields_ThumbnailUrl_Read>
  update?: Maybe<MediaDocAccessFields_ThumbnailUrl_Update>
}

export type MediaDocAccessFields_ThumbnailUrl_Create = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_ThumbnailUrl_Read = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_ThumbnailUrl_Update = {
  __typename?: 'MediaDocAccessFields_thumbnailURL_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_UpdatedAt = {
  __typename?: 'MediaDocAccessFields_updatedAt'
  create?: Maybe<MediaDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<MediaDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<MediaDocAccessFields_UpdatedAt_Read>
  update?: Maybe<MediaDocAccessFields_UpdatedAt_Update>
}

export type MediaDocAccessFields_UpdatedAt_Create = {
  __typename?: 'MediaDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'MediaDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_UpdatedAt_Read = {
  __typename?: 'MediaDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_UpdatedAt_Update = {
  __typename?: 'MediaDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Url = {
  __typename?: 'MediaDocAccessFields_url'
  create?: Maybe<MediaDocAccessFields_Url_Create>
  delete?: Maybe<MediaDocAccessFields_Url_Delete>
  read?: Maybe<MediaDocAccessFields_Url_Read>
  update?: Maybe<MediaDocAccessFields_Url_Update>
}

export type MediaDocAccessFields_Url_Create = {
  __typename?: 'MediaDocAccessFields_url_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Url_Delete = {
  __typename?: 'MediaDocAccessFields_url_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Url_Read = {
  __typename?: 'MediaDocAccessFields_url_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Url_Update = {
  __typename?: 'MediaDocAccessFields_url_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Width = {
  __typename?: 'MediaDocAccessFields_width'
  create?: Maybe<MediaDocAccessFields_Width_Create>
  delete?: Maybe<MediaDocAccessFields_Width_Delete>
  read?: Maybe<MediaDocAccessFields_Width_Read>
  update?: Maybe<MediaDocAccessFields_Width_Update>
}

export type MediaDocAccessFields_Width_Create = {
  __typename?: 'MediaDocAccessFields_width_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Width_Delete = {
  __typename?: 'MediaDocAccessFields_width_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Width_Read = {
  __typename?: 'MediaDocAccessFields_width_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaDocAccessFields_Width_Update = {
  __typename?: 'MediaDocAccessFields_width_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields = {
  __typename?: 'MediaFields'
  alt?: Maybe<MediaFields_Alt>
  createdAt?: Maybe<MediaFields_CreatedAt>
  filename?: Maybe<MediaFields_Filename>
  filesize?: Maybe<MediaFields_Filesize>
  focalX?: Maybe<MediaFields_FocalX>
  focalY?: Maybe<MediaFields_FocalY>
  height?: Maybe<MediaFields_Height>
  mimeType?: Maybe<MediaFields_MimeType>
  thumbnailURL?: Maybe<MediaFields_ThumbnailUrl>
  updatedAt?: Maybe<MediaFields_UpdatedAt>
  url?: Maybe<MediaFields_Url>
  width?: Maybe<MediaFields_Width>
}

export type MediaFields_Alt = {
  __typename?: 'MediaFields_alt'
  create?: Maybe<MediaFields_Alt_Create>
  delete?: Maybe<MediaFields_Alt_Delete>
  read?: Maybe<MediaFields_Alt_Read>
  update?: Maybe<MediaFields_Alt_Update>
}

export type MediaFields_Alt_Create = {
  __typename?: 'MediaFields_alt_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Alt_Delete = {
  __typename?: 'MediaFields_alt_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Alt_Read = {
  __typename?: 'MediaFields_alt_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Alt_Update = {
  __typename?: 'MediaFields_alt_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_CreatedAt = {
  __typename?: 'MediaFields_createdAt'
  create?: Maybe<MediaFields_CreatedAt_Create>
  delete?: Maybe<MediaFields_CreatedAt_Delete>
  read?: Maybe<MediaFields_CreatedAt_Read>
  update?: Maybe<MediaFields_CreatedAt_Update>
}

export type MediaFields_CreatedAt_Create = {
  __typename?: 'MediaFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_CreatedAt_Delete = {
  __typename?: 'MediaFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_CreatedAt_Read = {
  __typename?: 'MediaFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_CreatedAt_Update = {
  __typename?: 'MediaFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filename = {
  __typename?: 'MediaFields_filename'
  create?: Maybe<MediaFields_Filename_Create>
  delete?: Maybe<MediaFields_Filename_Delete>
  read?: Maybe<MediaFields_Filename_Read>
  update?: Maybe<MediaFields_Filename_Update>
}

export type MediaFields_Filename_Create = {
  __typename?: 'MediaFields_filename_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filename_Delete = {
  __typename?: 'MediaFields_filename_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filename_Read = {
  __typename?: 'MediaFields_filename_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filename_Update = {
  __typename?: 'MediaFields_filename_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filesize = {
  __typename?: 'MediaFields_filesize'
  create?: Maybe<MediaFields_Filesize_Create>
  delete?: Maybe<MediaFields_Filesize_Delete>
  read?: Maybe<MediaFields_Filesize_Read>
  update?: Maybe<MediaFields_Filesize_Update>
}

export type MediaFields_Filesize_Create = {
  __typename?: 'MediaFields_filesize_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filesize_Delete = {
  __typename?: 'MediaFields_filesize_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filesize_Read = {
  __typename?: 'MediaFields_filesize_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Filesize_Update = {
  __typename?: 'MediaFields_filesize_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalX = {
  __typename?: 'MediaFields_focalX'
  create?: Maybe<MediaFields_FocalX_Create>
  delete?: Maybe<MediaFields_FocalX_Delete>
  read?: Maybe<MediaFields_FocalX_Read>
  update?: Maybe<MediaFields_FocalX_Update>
}

export type MediaFields_FocalX_Create = {
  __typename?: 'MediaFields_focalX_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalX_Delete = {
  __typename?: 'MediaFields_focalX_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalX_Read = {
  __typename?: 'MediaFields_focalX_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalX_Update = {
  __typename?: 'MediaFields_focalX_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalY = {
  __typename?: 'MediaFields_focalY'
  create?: Maybe<MediaFields_FocalY_Create>
  delete?: Maybe<MediaFields_FocalY_Delete>
  read?: Maybe<MediaFields_FocalY_Read>
  update?: Maybe<MediaFields_FocalY_Update>
}

export type MediaFields_FocalY_Create = {
  __typename?: 'MediaFields_focalY_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalY_Delete = {
  __typename?: 'MediaFields_focalY_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalY_Read = {
  __typename?: 'MediaFields_focalY_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_FocalY_Update = {
  __typename?: 'MediaFields_focalY_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Height = {
  __typename?: 'MediaFields_height'
  create?: Maybe<MediaFields_Height_Create>
  delete?: Maybe<MediaFields_Height_Delete>
  read?: Maybe<MediaFields_Height_Read>
  update?: Maybe<MediaFields_Height_Update>
}

export type MediaFields_Height_Create = {
  __typename?: 'MediaFields_height_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Height_Delete = {
  __typename?: 'MediaFields_height_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Height_Read = {
  __typename?: 'MediaFields_height_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Height_Update = {
  __typename?: 'MediaFields_height_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_MimeType = {
  __typename?: 'MediaFields_mimeType'
  create?: Maybe<MediaFields_MimeType_Create>
  delete?: Maybe<MediaFields_MimeType_Delete>
  read?: Maybe<MediaFields_MimeType_Read>
  update?: Maybe<MediaFields_MimeType_Update>
}

export type MediaFields_MimeType_Create = {
  __typename?: 'MediaFields_mimeType_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_MimeType_Delete = {
  __typename?: 'MediaFields_mimeType_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_MimeType_Read = {
  __typename?: 'MediaFields_mimeType_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_MimeType_Update = {
  __typename?: 'MediaFields_mimeType_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_ThumbnailUrl = {
  __typename?: 'MediaFields_thumbnailURL'
  create?: Maybe<MediaFields_ThumbnailUrl_Create>
  delete?: Maybe<MediaFields_ThumbnailUrl_Delete>
  read?: Maybe<MediaFields_ThumbnailUrl_Read>
  update?: Maybe<MediaFields_ThumbnailUrl_Update>
}

export type MediaFields_ThumbnailUrl_Create = {
  __typename?: 'MediaFields_thumbnailURL_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_ThumbnailUrl_Delete = {
  __typename?: 'MediaFields_thumbnailURL_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_ThumbnailUrl_Read = {
  __typename?: 'MediaFields_thumbnailURL_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_ThumbnailUrl_Update = {
  __typename?: 'MediaFields_thumbnailURL_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_UpdatedAt = {
  __typename?: 'MediaFields_updatedAt'
  create?: Maybe<MediaFields_UpdatedAt_Create>
  delete?: Maybe<MediaFields_UpdatedAt_Delete>
  read?: Maybe<MediaFields_UpdatedAt_Read>
  update?: Maybe<MediaFields_UpdatedAt_Update>
}

export type MediaFields_UpdatedAt_Create = {
  __typename?: 'MediaFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_UpdatedAt_Delete = {
  __typename?: 'MediaFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_UpdatedAt_Read = {
  __typename?: 'MediaFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_UpdatedAt_Update = {
  __typename?: 'MediaFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Url = {
  __typename?: 'MediaFields_url'
  create?: Maybe<MediaFields_Url_Create>
  delete?: Maybe<MediaFields_Url_Delete>
  read?: Maybe<MediaFields_Url_Read>
  update?: Maybe<MediaFields_Url_Update>
}

export type MediaFields_Url_Create = {
  __typename?: 'MediaFields_url_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Url_Delete = {
  __typename?: 'MediaFields_url_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Url_Read = {
  __typename?: 'MediaFields_url_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Url_Update = {
  __typename?: 'MediaFields_url_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Width = {
  __typename?: 'MediaFields_width'
  create?: Maybe<MediaFields_Width_Create>
  delete?: Maybe<MediaFields_Width_Delete>
  read?: Maybe<MediaFields_Width_Read>
  update?: Maybe<MediaFields_Width_Update>
}

export type MediaFields_Width_Create = {
  __typename?: 'MediaFields_width_Create'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Width_Delete = {
  __typename?: 'MediaFields_width_Delete'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Width_Read = {
  __typename?: 'MediaFields_width_Read'
  permission: Scalars['Boolean']['output']
}

export type MediaFields_Width_Update = {
  __typename?: 'MediaFields_width_Update'
  permission: Scalars['Boolean']['output']
}

export type MediaReadAccess = {
  __typename?: 'MediaReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaReadDocAccess = {
  __typename?: 'MediaReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaUpdateAccess = {
  __typename?: 'MediaUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type MediaUpdateDocAccess = {
  __typename?: 'MediaUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type Media_Alt_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Media_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Media_Filename_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Media_Filesize_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type Media_FocalX_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type Media_FocalY_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type Media_Height_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type Media_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Int']['input']>
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>
  less_than?: InputMaybe<Scalars['Int']['input']>
  less_than_equal?: InputMaybe<Scalars['Int']['input']>
  not_equals?: InputMaybe<Scalars['Int']['input']>
}

export type Media_MimeType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Media_ThumbnailUrl_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Media_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Media_Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Media_Where = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>
  alt?: InputMaybe<Media_Alt_Operator>
  createdAt?: InputMaybe<Media_CreatedAt_Operator>
  filename?: InputMaybe<Media_Filename_Operator>
  filesize?: InputMaybe<Media_Filesize_Operator>
  focalX?: InputMaybe<Media_FocalX_Operator>
  focalY?: InputMaybe<Media_FocalY_Operator>
  height?: InputMaybe<Media_Height_Operator>
  id?: InputMaybe<Media_Id_Operator>
  mimeType?: InputMaybe<Media_MimeType_Operator>
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>
  url?: InputMaybe<Media_Url_Operator>
  width?: InputMaybe<Media_Width_Operator>
}

export type Media_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>
  alt?: InputMaybe<Media_Alt_Operator>
  createdAt?: InputMaybe<Media_CreatedAt_Operator>
  filename?: InputMaybe<Media_Filename_Operator>
  filesize?: InputMaybe<Media_Filesize_Operator>
  focalX?: InputMaybe<Media_FocalX_Operator>
  focalY?: InputMaybe<Media_FocalY_Operator>
  height?: InputMaybe<Media_Height_Operator>
  id?: InputMaybe<Media_Id_Operator>
  mimeType?: InputMaybe<Media_MimeType_Operator>
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>
  url?: InputMaybe<Media_Url_Operator>
  width?: InputMaybe<Media_Width_Operator>
}

export type Media_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Media_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Media_Where_Or>>>
  alt?: InputMaybe<Media_Alt_Operator>
  createdAt?: InputMaybe<Media_CreatedAt_Operator>
  filename?: InputMaybe<Media_Filename_Operator>
  filesize?: InputMaybe<Media_Filesize_Operator>
  focalX?: InputMaybe<Media_FocalX_Operator>
  focalY?: InputMaybe<Media_FocalY_Operator>
  height?: InputMaybe<Media_Height_Operator>
  id?: InputMaybe<Media_Id_Operator>
  mimeType?: InputMaybe<Media_MimeType_Operator>
  thumbnailURL?: InputMaybe<Media_ThumbnailUrl_Operator>
  updatedAt?: InputMaybe<Media_UpdatedAt_Operator>
  url?: InputMaybe<Media_Url_Operator>
  width?: InputMaybe<Media_Width_Operator>
}

export type Media_Width_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createBlog?: Maybe<Blog>
  createMedia?: Maybe<Media>
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>
  createPayloadPreference?: Maybe<PayloadPreference>
  createUser?: Maybe<User>
  deleteBlog?: Maybe<Blog>
  deleteMedia?: Maybe<Media>
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  deletePayloadPreference?: Maybe<PayloadPreference>
  deleteUser?: Maybe<User>
  duplicateBlog?: Maybe<Blog>
  duplicateMedia?: Maybe<Media>
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  duplicatePayloadPreference?: Maybe<PayloadPreference>
  forgotPasswordUser: Scalars['Boolean']['output']
  loginUser?: Maybe<UsersLoginResult>
  logoutUser?: Maybe<Scalars['String']['output']>
  refreshTokenUser?: Maybe<UsersRefreshedUser>
  resetPasswordUser?: Maybe<UsersResetPassword>
  unlockUser: Scalars['Boolean']['output']
  updateBlog?: Maybe<Blog>
  updateMedia?: Maybe<Media>
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  updatePayloadPreference?: Maybe<PayloadPreference>
  updateUser?: Maybe<User>
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>
}

export type MutationCreateBlogArgs = {
  data: MutationBlogInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateMediaArgs = {
  data: MutationMediaInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationCreateUserArgs = {
  data: MutationUserInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeleteBlogArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteMediaArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input']
}

export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input']
}

export type MutationDuplicateBlogArgs = {
  data: MutationBlogInput
  id: Scalars['Int']['input']
}

export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput
  id: Scalars['Int']['input']
}

export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput
  id: Scalars['Int']['input']
}

export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput
  id: Scalars['Int']['input']
}

export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>
  email: Scalars['String']['input']
  expiration?: InputMaybe<Scalars['Int']['input']>
}

export type MutationLoginUserArgs = {
  email: Scalars['String']['input']
  password?: InputMaybe<Scalars['String']['input']>
}

export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['String']['input']>
}

export type MutationUnlockUserArgs = {
  email: Scalars['String']['input']
}

export type MutationUpdateBlogArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationBlogUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationMediaUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadLockedDocumentUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadPreferenceUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationUserUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>
}

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  document?: Maybe<PayloadLockedDocument_Document_Relationship>
  globalSlug?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user: PayloadLockedDocument_User_Relationship
}

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Blogs = 'blogs',
  Media = 'media',
  Users = 'users',
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users',
}

export type PayloadLockedDocument_Document = Blog | Media | User

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Blogs = 'blogs',
  Media = 'media',
  Users = 'users',
}

export enum PayloadLockedDocument_Document_RelationTo {
  Blogs = 'blogs',
  Media = 'media',
  Users = 'users',
}

export type PayloadLockedDocument_Document_Relationship = {
  __typename?: 'PayloadLockedDocument_Document_Relationship'
  relationTo?: Maybe<PayloadLockedDocument_Document_RelationTo>
  value?: Maybe<PayloadLockedDocument_Document>
}

export type PayloadLockedDocument_User = User

export type PayloadLockedDocument_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocument_UserRelationshipInputRelationTo {
  Users = 'users',
}

export enum PayloadLockedDocument_User_RelationTo {
  Users = 'users',
}

export type PayloadLockedDocument_User_Relationship = {
  __typename?: 'PayloadLockedDocument_User_Relationship'
  relationTo?: Maybe<PayloadLockedDocument_User_RelationTo>
  value?: Maybe<PayloadLockedDocument_User>
}

export type PayloadLockedDocument_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadLockedDocument_Document_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_Document_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocument_Document_Relation_RelationTo {
  Blogs = 'blogs',
  Media = 'media',
  Users = 'users',
}

export type PayloadLockedDocument_GlobalSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PayloadLockedDocument_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Int']['input']>
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>
  less_than?: InputMaybe<Scalars['Int']['input']>
  less_than_equal?: InputMaybe<Scalars['Int']['input']>
  not_equals?: InputMaybe<Scalars['Int']['input']>
}

export type PayloadLockedDocument_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadLockedDocument_User_Relation = {
  relationTo?: InputMaybe<PayloadLockedDocument_User_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocument_User_Relation_RelationTo {
  Users = 'users',
}

export type PayloadLockedDocument_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>
  user?: InputMaybe<PayloadLockedDocument_User_Relation>
}

export type PayloadLockedDocument_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>
  user?: InputMaybe<PayloadLockedDocument_User_Relation>
}

export type PayloadLockedDocument_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadLockedDocument_Where_Or>>>
  createdAt?: InputMaybe<PayloadLockedDocument_CreatedAt_Operator>
  document?: InputMaybe<PayloadLockedDocument_Document_Relation>
  globalSlug?: InputMaybe<PayloadLockedDocument_GlobalSlug_Operator>
  id?: InputMaybe<PayloadLockedDocument_Id_Operator>
  updatedAt?: InputMaybe<PayloadLockedDocument_UpdatedAt_Operator>
  user?: InputMaybe<PayloadLockedDocument_User_Relation>
}

export type PayloadLockedDocuments = {
  __typename?: 'PayloadLockedDocuments'
  docs?: Maybe<Array<Maybe<PayloadLockedDocument>>>
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page?: Maybe<Scalars['Int']['output']>
  pagingCounter?: Maybe<Scalars['Int']['output']>
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs?: Maybe<Scalars['Int']['output']>
  totalPages?: Maybe<Scalars['Int']['output']>
}

export type PayloadLockedDocumentsCreateAccess = {
  __typename?: 'PayloadLockedDocumentsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsCreateDocAccess = {
  __typename?: 'PayloadLockedDocumentsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsDeleteAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsDeleteDocAccess = {
  __typename?: 'PayloadLockedDocumentsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsDocAccessFields = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields'
  createdAt?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt>
  document?: Maybe<PayloadLockedDocumentsDocAccessFields_Document>
  globalSlug?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug>
  updatedAt?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt>
  user?: Maybe<PayloadLockedDocumentsDocAccessFields_User>
}

export type PayloadLockedDocumentsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt'
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Read>
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_CreatedAt_Update>
}

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_Document = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document'
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Create>
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Delete>
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Read>
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_Document_Update>
}

export type PayloadLockedDocumentsDocAccessFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_document_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug'
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create>
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete>
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read>
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update>
}

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_globalSlug_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt'
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update>
}

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_User = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user'
  create?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Create>
  delete?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Delete>
  read?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Read>
  update?: Maybe<PayloadLockedDocumentsDocAccessFields_User_Update>
}

export type PayloadLockedDocumentsDocAccessFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsDocAccessFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsDocAccessFields_user_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields = {
  __typename?: 'PayloadLockedDocumentsFields'
  createdAt?: Maybe<PayloadLockedDocumentsFields_CreatedAt>
  document?: Maybe<PayloadLockedDocumentsFields_Document>
  globalSlug?: Maybe<PayloadLockedDocumentsFields_GlobalSlug>
  updatedAt?: Maybe<PayloadLockedDocumentsFields_UpdatedAt>
  user?: Maybe<PayloadLockedDocumentsFields_User>
}

export type PayloadLockedDocumentsFields_CreatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt'
  create?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Create>
  delete?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Delete>
  read?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Read>
  update?: Maybe<PayloadLockedDocumentsFields_CreatedAt_Update>
}

export type PayloadLockedDocumentsFields_CreatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_CreatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_CreatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_CreatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_Document = {
  __typename?: 'PayloadLockedDocumentsFields_document'
  create?: Maybe<PayloadLockedDocumentsFields_Document_Create>
  delete?: Maybe<PayloadLockedDocumentsFields_Document_Delete>
  read?: Maybe<PayloadLockedDocumentsFields_Document_Read>
  update?: Maybe<PayloadLockedDocumentsFields_Document_Update>
}

export type PayloadLockedDocumentsFields_Document_Create = {
  __typename?: 'PayloadLockedDocumentsFields_document_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_Document_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_document_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_Document_Read = {
  __typename?: 'PayloadLockedDocumentsFields_document_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_Document_Update = {
  __typename?: 'PayloadLockedDocumentsFields_document_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_GlobalSlug = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug'
  create?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Create>
  delete?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Delete>
  read?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Read>
  update?: Maybe<PayloadLockedDocumentsFields_GlobalSlug_Update>
}

export type PayloadLockedDocumentsFields_GlobalSlug_Create = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_GlobalSlug_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_GlobalSlug_Read = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_GlobalSlug_Update = {
  __typename?: 'PayloadLockedDocumentsFields_globalSlug_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_UpdatedAt = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt'
  create?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Create>
  delete?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Delete>
  read?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Read>
  update?: Maybe<PayloadLockedDocumentsFields_UpdatedAt_Update>
}

export type PayloadLockedDocumentsFields_UpdatedAt_Create = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_UpdatedAt_Read = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_UpdatedAt_Update = {
  __typename?: 'PayloadLockedDocumentsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_User = {
  __typename?: 'PayloadLockedDocumentsFields_user'
  create?: Maybe<PayloadLockedDocumentsFields_User_Create>
  delete?: Maybe<PayloadLockedDocumentsFields_User_Delete>
  read?: Maybe<PayloadLockedDocumentsFields_User_Read>
  update?: Maybe<PayloadLockedDocumentsFields_User_Update>
}

export type PayloadLockedDocumentsFields_User_Create = {
  __typename?: 'PayloadLockedDocumentsFields_user_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_User_Delete = {
  __typename?: 'PayloadLockedDocumentsFields_user_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_User_Read = {
  __typename?: 'PayloadLockedDocumentsFields_user_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsFields_User_Update = {
  __typename?: 'PayloadLockedDocumentsFields_user_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadLockedDocumentsReadAccess = {
  __typename?: 'PayloadLockedDocumentsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsReadDocAccess = {
  __typename?: 'PayloadLockedDocumentsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsUpdateAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocumentsUpdateDocAccess = {
  __typename?: 'PayloadLockedDocumentsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreference = {
  __typename?: 'PayloadPreference'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['Int']['output']
  key?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user: PayloadPreference_User_Relationship
  value?: Maybe<Scalars['JSON']['output']>
}

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users',
}

export type PayloadPreference_User = User

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users',
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users',
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship'
  relationTo?: Maybe<PayloadPreference_User_RelationTo>
  value?: Maybe<PayloadPreference_User>
}

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Int']['input']>
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>
  less_than?: InputMaybe<Scalars['Int']['input']>
  less_than_equal?: InputMaybe<Scalars['Int']['input']>
  not_equals?: InputMaybe<Scalars['Int']['input']>
}

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users',
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>
  id?: InputMaybe<PayloadPreference_Id_Operator>
  key?: InputMaybe<PayloadPreference_Key_Operator>
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>
  user?: InputMaybe<PayloadPreference_User_Relation>
  value?: InputMaybe<PayloadPreference_Value_Operator>
}

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>
  id?: InputMaybe<PayloadPreference_Id_Operator>
  key?: InputMaybe<PayloadPreference_Key_Operator>
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>
  user?: InputMaybe<PayloadPreference_User_Relation>
  value?: InputMaybe<PayloadPreference_Value_Operator>
}

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>
  id?: InputMaybe<PayloadPreference_Id_Operator>
  key?: InputMaybe<PayloadPreference_Key_Operator>
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>
  user?: InputMaybe<PayloadPreference_User_Relation>
  value?: InputMaybe<PayloadPreference_Value_Operator>
}

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences'
  docs?: Maybe<Array<Maybe<PayloadPreference>>>
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page?: Maybe<Scalars['Int']['output']>
  pagingCounter?: Maybe<Scalars['Int']['output']>
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs?: Maybe<Scalars['Int']['output']>
  totalPages?: Maybe<Scalars['Int']['output']>
}

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields'
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>
  user?: Maybe<PayloadPreferencesDocAccessFields_User>
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>
}

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt'
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>
}

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key'
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>
}

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt'
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>
}

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user'
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>
}

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value'
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>
}

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields'
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>
  key?: Maybe<PayloadPreferencesFields_Key>
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>
  user?: Maybe<PayloadPreferencesFields_User>
  value?: Maybe<PayloadPreferencesFields_Value>
}

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt'
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>
}

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key'
  create?: Maybe<PayloadPreferencesFields_Key_Create>
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>
  read?: Maybe<PayloadPreferencesFields_Key_Read>
  update?: Maybe<PayloadPreferencesFields_Key_Update>
}

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt'
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>
}

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user'
  create?: Maybe<PayloadPreferencesFields_User_Create>
  delete?: Maybe<PayloadPreferencesFields_User_Delete>
  read?: Maybe<PayloadPreferencesFields_User_Read>
  update?: Maybe<PayloadPreferencesFields_User_Update>
}

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value'
  create?: Maybe<PayloadPreferencesFields_Value_Create>
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>
  read?: Maybe<PayloadPreferencesFields_Value_Read>
  update?: Maybe<PayloadPreferencesFields_Value_Update>
}

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type Query = {
  __typename?: 'Query'
  Access?: Maybe<Access>
  Blog?: Maybe<Blog>
  Blogs?: Maybe<Blogs>
  Media?: Maybe<Media>
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>
  PayloadPreference?: Maybe<PayloadPreference>
  PayloadPreferences?: Maybe<PayloadPreferences>
  User?: Maybe<User>
  Users?: Maybe<Users>
  allMedia?: Maybe<AllMedia>
  countBlogs?: Maybe<CountBlogs>
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>
  countPayloadPreferences?: Maybe<CountPayloadPreferences>
  countUsers?: Maybe<CountUsers>
  countallMedia?: Maybe<CountallMedia>
  docAccessBlog?: Maybe<BlogsDocAccess>
  docAccessMedia?: Maybe<MediaDocAccess>
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>
  docAccessUser?: Maybe<UsersDocAccess>
  initializedUser?: Maybe<Scalars['Boolean']['output']>
  meUser?: Maybe<UsersMe>
}

export type QueryBlogArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type QueryBlogsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<Blog_Where>
}

export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<PayloadLockedDocument_Where>
}

export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<PayloadPreference_Where>
}

export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['Int']['input']
}

export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<User_Where>
}

export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<Media_Where>
}

export type QueryCountBlogsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Blog_Where>
}

export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadLockedDocument_Where>
}

export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadPreference_Where>
}

export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<User_Where>
}

export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Media_Where>
}

export type QueryDocAccessBlogArgs = {
  id: Scalars['Int']['input']
}

export type QueryDocAccessMediaArgs = {
  id: Scalars['Int']['input']
}

export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['Int']['input']
}

export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input']
}

export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input']
}

export type User = {
  __typename?: 'User'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['EmailAddress']['output']
  hash?: Maybe<Scalars['String']['output']>
  id: Scalars['Int']['output']
  lockUntil?: Maybe<Scalars['DateTime']['output']>
  loginAttempts?: Maybe<Scalars['Float']['output']>
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>
  resetPasswordToken?: Maybe<Scalars['String']['output']>
  salt?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>
  contains?: InputMaybe<Scalars['EmailAddress']['input']>
  equals?: InputMaybe<Scalars['EmailAddress']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>
  like?: InputMaybe<Scalars['EmailAddress']['input']>
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>
}

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Int']['input']>
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>
  less_than?: InputMaybe<Scalars['Int']['input']>
  less_than_equal?: InputMaybe<Scalars['Int']['input']>
  not_equals?: InputMaybe<Scalars['Int']['input']>
}

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type Users = {
  __typename?: 'Users'
  docs?: Maybe<Array<Maybe<User>>>
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page?: Maybe<Scalars['Int']['output']>
  pagingCounter?: Maybe<Scalars['Int']['output']>
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs?: Maybe<Scalars['Int']['output']>
  totalPages?: Maybe<Scalars['Int']['output']>
}

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields'
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>
  email?: Maybe<UsersDocAccessFields_Email>
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>
}

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt'
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>
}

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email'
  create?: Maybe<UsersDocAccessFields_Email_Create>
  delete?: Maybe<UsersDocAccessFields_Email_Delete>
  read?: Maybe<UsersDocAccessFields_Email_Read>
  update?: Maybe<UsersDocAccessFields_Email_Update>
}

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt'
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>
}

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields = {
  __typename?: 'UsersFields'
  createdAt?: Maybe<UsersFields_CreatedAt>
  email?: Maybe<UsersFields_Email>
  updatedAt?: Maybe<UsersFields_UpdatedAt>
}

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt'
  create?: Maybe<UsersFields_CreatedAt_Create>
  delete?: Maybe<UsersFields_CreatedAt_Delete>
  read?: Maybe<UsersFields_CreatedAt_Read>
  update?: Maybe<UsersFields_CreatedAt_Update>
}

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Email = {
  __typename?: 'UsersFields_email'
  create?: Maybe<UsersFields_Email_Create>
  delete?: Maybe<UsersFields_Email_Delete>
  read?: Maybe<UsersFields_Email_Read>
  update?: Maybe<UsersFields_Email_Update>
}

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt'
  create?: Maybe<UsersFields_UpdatedAt_Create>
  delete?: Maybe<UsersFields_UpdatedAt_Delete>
  read?: Maybe<UsersFields_UpdatedAt_Read>
  update?: Maybe<UsersFields_UpdatedAt_Update>
}

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AllMedia = {
  __typename?: 'allMedia'
  docs?: Maybe<Array<Maybe<Media>>>
  hasNextPage?: Maybe<Scalars['Boolean']['output']>
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>
  limit?: Maybe<Scalars['Int']['output']>
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page?: Maybe<Scalars['Int']['output']>
  pagingCounter?: Maybe<Scalars['Int']['output']>
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs?: Maybe<Scalars['Int']['output']>
  totalPages?: Maybe<Scalars['Int']['output']>
}

export type BlogsAccess = {
  __typename?: 'blogsAccess'
  create?: Maybe<BlogsCreateAccess>
  delete?: Maybe<BlogsDeleteAccess>
  fields?: Maybe<BlogsFields>
  read?: Maybe<BlogsReadAccess>
  update?: Maybe<BlogsUpdateAccess>
}

export type BlogsDocAccess = {
  __typename?: 'blogsDocAccess'
  create?: Maybe<BlogsCreateDocAccess>
  delete?: Maybe<BlogsDeleteDocAccess>
  fields?: Maybe<BlogsDocAccessFields>
  read?: Maybe<BlogsReadDocAccess>
  update?: Maybe<BlogsUpdateDocAccess>
}

export type CountBlogs = {
  __typename?: 'countBlogs'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountPayloadLockedDocuments = {
  __typename?: 'countPayloadLockedDocuments'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountPayloadPreferences = {
  __typename?: 'countPayloadPreferences'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountUsers = {
  __typename?: 'countUsers'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountallMedia = {
  __typename?: 'countallMedia'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type MediaAccess = {
  __typename?: 'mediaAccess'
  create?: Maybe<MediaCreateAccess>
  delete?: Maybe<MediaDeleteAccess>
  fields?: Maybe<MediaFields>
  read?: Maybe<MediaReadAccess>
  update?: Maybe<MediaUpdateAccess>
}

export type MediaDocAccess = {
  __typename?: 'mediaDocAccess'
  create?: Maybe<MediaCreateDocAccess>
  delete?: Maybe<MediaDeleteDocAccess>
  fields?: Maybe<MediaDocAccessFields>
  read?: Maybe<MediaReadDocAccess>
  update?: Maybe<MediaUpdateDocAccess>
}

export type MutationBlogInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  title_en?: InputMaybe<Scalars['String']['input']>
  title_nl?: InputMaybe<Scalars['String']['input']>
  title_tr?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationBlogUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  title_en?: InputMaybe<Scalars['String']['input']>
  title_nl?: InputMaybe<Scalars['String']['input']>
  title_tr?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationMediaInput = {
  alt: Scalars['String']['input']
  createdAt?: InputMaybe<Scalars['String']['input']>
  filename?: InputMaybe<Scalars['String']['input']>
  filesize?: InputMaybe<Scalars['Float']['input']>
  focalX?: InputMaybe<Scalars['Float']['input']>
  focalY?: InputMaybe<Scalars['Float']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  thumbnailURL?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type MutationMediaUpdateInput = {
  alt?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  filename?: InputMaybe<Scalars['String']['input']>
  filesize?: InputMaybe<Scalars['Float']['input']>
  focalX?: InputMaybe<Scalars['Float']['input']>
  focalY?: InputMaybe<Scalars['Float']['input']>
  height?: InputMaybe<Scalars['Float']['input']>
  mimeType?: InputMaybe<Scalars['String']['input']>
  thumbnailURL?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
  width?: InputMaybe<Scalars['Float']['input']>
}

export type MutationPayloadLockedDocumentInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  document?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInput>
  globalSlug?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<PayloadLockedDocument_UserRelationshipInput>
}

export type MutationPayloadLockedDocumentUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  document?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInput>
  globalSlug?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInput>
}

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  key?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  email: Scalars['String']['input']
  hash?: InputMaybe<Scalars['String']['input']>
  lockUntil?: InputMaybe<Scalars['String']['input']>
  loginAttempts?: InputMaybe<Scalars['Float']['input']>
  password: Scalars['String']['input']
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  salt?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  lockUntil?: InputMaybe<Scalars['String']['input']>
  loginAttempts?: InputMaybe<Scalars['Float']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  salt?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type Payload_Locked_DocumentsAccess = {
  __typename?: 'payload_locked_documentsAccess'
  create?: Maybe<PayloadLockedDocumentsCreateAccess>
  delete?: Maybe<PayloadLockedDocumentsDeleteAccess>
  fields?: Maybe<PayloadLockedDocumentsFields>
  read?: Maybe<PayloadLockedDocumentsReadAccess>
  update?: Maybe<PayloadLockedDocumentsUpdateAccess>
}

export type Payload_Locked_DocumentsDocAccess = {
  __typename?: 'payload_locked_documentsDocAccess'
  create?: Maybe<PayloadLockedDocumentsCreateDocAccess>
  delete?: Maybe<PayloadLockedDocumentsDeleteDocAccess>
  fields?: Maybe<PayloadLockedDocumentsDocAccessFields>
  read?: Maybe<PayloadLockedDocumentsReadDocAccess>
  update?: Maybe<PayloadLockedDocumentsUpdateDocAccess>
}

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess'
  create?: Maybe<PayloadPreferencesCreateAccess>
  delete?: Maybe<PayloadPreferencesDeleteAccess>
  fields?: Maybe<PayloadPreferencesFields>
  read?: Maybe<PayloadPreferencesReadAccess>
  update?: Maybe<PayloadPreferencesUpdateAccess>
}

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess'
  create?: Maybe<PayloadPreferencesCreateDocAccess>
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>
  fields?: Maybe<PayloadPreferencesDocAccessFields>
  read?: Maybe<PayloadPreferencesReadDocAccess>
  update?: Maybe<PayloadPreferencesUpdateDocAccess>
}

export type UsersAccess = {
  __typename?: 'usersAccess'
  create?: Maybe<UsersCreateAccess>
  delete?: Maybe<UsersDeleteAccess>
  fields?: Maybe<UsersFields>
  read?: Maybe<UsersReadAccess>
  unlock?: Maybe<UsersUnlockAccess>
  update?: Maybe<UsersUpdateAccess>
}

export type UsersDocAccess = {
  __typename?: 'usersDocAccess'
  create?: Maybe<UsersCreateDocAccess>
  delete?: Maybe<UsersDeleteDocAccess>
  fields?: Maybe<UsersDocAccessFields>
  read?: Maybe<UsersReadDocAccess>
  unlock?: Maybe<UsersUnlockDocAccess>
  update?: Maybe<UsersUpdateDocAccess>
}

export type UsersJwt = {
  __typename?: 'usersJWT'
  collection: Scalars['String']['output']
  email: Scalars['EmailAddress']['output']
}

export type UsersLoginResult = {
  __typename?: 'usersLoginResult'
  exp?: Maybe<Scalars['Int']['output']>
  token?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
}

export type UsersMe = {
  __typename?: 'usersMe'
  collection?: Maybe<Scalars['String']['output']>
  exp?: Maybe<Scalars['Int']['output']>
  strategy?: Maybe<Scalars['String']['output']>
  token?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
}

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser'
  exp?: Maybe<Scalars['Int']['output']>
  refreshedToken?: Maybe<Scalars['String']['output']>
  strategy?: Maybe<Scalars['String']['output']>
  user?: Maybe<UsersJwt>
}

export type UsersResetPassword = {
  __typename?: 'usersResetPassword'
  token?: Maybe<Scalars['String']['output']>
  user?: Maybe<User>
}

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input']
  password: Scalars['String']['input']
}>

export type LoginMutation = {
  __typename?: 'Mutation'
  loginUser?: {
    __typename?: 'usersLoginResult'
    exp?: number | null
    token?: string | null
    user?: { __typename?: 'User'; email: any } | null
  } | null
}

export type GetBlogsQueryVariables = Exact<{
  draft?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Blog_Where>
  limit?: InputMaybe<Scalars['Int']['input']>
  page?: InputMaybe<Scalars['Int']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
}>

export type GetBlogsQuery = {
  __typename?: 'Query'
  Blogs?: {
    __typename?: 'Blogs'
    hasNextPage?: boolean | null
    hasPrevPage?: boolean | null
    limit?: number | null
    offset?: number | null
    page?: number | null
    pagingCounter?: number | null
    prevPage?: number | null
    totalDocs?: number | null
    totalPages?: number | null
    docs?: Array<{
      __typename?: 'Blog'
      id: number
      title_en?: string | null
      title_nl?: string | null
      title_tr?: string | null
    } | null> | null
  } | null
}

export type GetAllMediaQueryVariables = Exact<{ [key: string]: never }>

export type GetAllMediaQuery = {
  __typename?: 'Query'
  allMedia?: { __typename?: 'allMedia'; docs?: Array<{ __typename?: 'Media'; id: number } | null> | null } | null
}

export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  loginUser(email: $email, password: $password) {
    exp
    token
    user {
      email
    }
  }
}
    `

export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>,
) => {
  return useMutation<LoginMutation, TError, LoginMutationVariables, TContext>({
    mutationFn: (variables?: LoginMutationVariables) =>
      fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
    mutationKey: ['Login'],
    ...options,
  })
}

useLoginMutation.fetcher = (variables: LoginMutationVariables, options?: RequestInit['headers']) =>
  fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables, options)

export const GetBlogsDocument = `
    query GetBlogs($draft: Boolean, $where: Blog_where, $limit: Int, $page: Int, $sort: String) {
  Blogs(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
    docs {
      id
      title_en
      title_nl
      title_tr
    }
    hasNextPage
    hasPrevPage
    limit
    offset
    page
    pagingCounter
    prevPage
    totalDocs
    totalPages
  }
}
    `

export const useGetBlogsQuery = <TData = GetBlogsQuery, TError = unknown>(
  variables?: GetBlogsQueryVariables,
  options?: Omit<UseQueryOptions<GetBlogsQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetBlogsQuery, TError, TData>['queryKey']
  },
) => {
  return useQuery<GetBlogsQuery, TError, TData>({
    queryFn: fetcher<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, variables),
    queryKey: variables === undefined ? ['GetBlogs'] : ['GetBlogs', variables],
    ...options,
  })
}

useGetBlogsQuery.getKey = (variables?: GetBlogsQueryVariables) =>
  variables === undefined ? ['GetBlogs'] : ['GetBlogs', variables]

export const useSuspenseGetBlogsQuery = <TData = GetBlogsQuery, TError = unknown>(
  variables?: GetBlogsQueryVariables,
  options?: Omit<UseSuspenseQueryOptions<GetBlogsQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseSuspenseQueryOptions<GetBlogsQuery, TError, TData>['queryKey']
  },
) => {
  return useSuspenseQuery<GetBlogsQuery, TError, TData>({
    queryFn: fetcher<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, variables),
    queryKey: variables === undefined ? ['GetBlogsSuspense'] : ['GetBlogsSuspense', variables],
    ...options,
  })
}

useSuspenseGetBlogsQuery.getKey = (variables?: GetBlogsQueryVariables) =>
  variables === undefined ? ['GetBlogsSuspense'] : ['GetBlogsSuspense', variables]

useGetBlogsQuery.fetcher = (variables?: GetBlogsQueryVariables, options?: RequestInit['headers']) =>
  fetcher<GetBlogsQuery, GetBlogsQueryVariables>(GetBlogsDocument, variables, options)

export const GetAllMediaDocument = `
    query GetAllMedia {
  allMedia {
    docs {
      id
    }
  }
}
    `

export const useGetAllMediaQuery = <TData = GetAllMediaQuery, TError = unknown>(
  variables?: GetAllMediaQueryVariables,
  options?: Omit<UseQueryOptions<GetAllMediaQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseQueryOptions<GetAllMediaQuery, TError, TData>['queryKey']
  },
) => {
  return useQuery<GetAllMediaQuery, TError, TData>({
    queryFn: fetcher<GetAllMediaQuery, GetAllMediaQueryVariables>(GetAllMediaDocument, variables),
    queryKey: variables === undefined ? ['GetAllMedia'] : ['GetAllMedia', variables],
    ...options,
  })
}

useGetAllMediaQuery.getKey = (variables?: GetAllMediaQueryVariables) =>
  variables === undefined ? ['GetAllMedia'] : ['GetAllMedia', variables]

export const useSuspenseGetAllMediaQuery = <TData = GetAllMediaQuery, TError = unknown>(
  variables?: GetAllMediaQueryVariables,
  options?: Omit<UseSuspenseQueryOptions<GetAllMediaQuery, TError, TData>, 'queryKey'> & {
    queryKey?: UseSuspenseQueryOptions<GetAllMediaQuery, TError, TData>['queryKey']
  },
) => {
  return useSuspenseQuery<GetAllMediaQuery, TError, TData>({
    queryFn: fetcher<GetAllMediaQuery, GetAllMediaQueryVariables>(GetAllMediaDocument, variables),
    queryKey: variables === undefined ? ['GetAllMediaSuspense'] : ['GetAllMediaSuspense', variables],
    ...options,
  })
}

useSuspenseGetAllMediaQuery.getKey = (variables?: GetAllMediaQueryVariables) =>
  variables === undefined ? ['GetAllMediaSuspense'] : ['GetAllMediaSuspense', variables]

useGetAllMediaQuery.fetcher = (variables?: GetAllMediaQueryVariables, options?: RequestInit['headers']) =>
  fetcher<GetAllMediaQuery, GetAllMediaQueryVariables>(GetAllMediaDocument, variables, options)
