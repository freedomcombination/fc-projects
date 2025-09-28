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
  announcements?: Maybe<AnnouncementsAccess>
  canAccessAdmin: Scalars['Boolean']['output']
  donations?: Maybe<DonationsAccess>
  form_submissions?: Maybe<Form_SubmissionsAccess>
  forms?: Maybe<FormsAccess>
  media?: Maybe<MediaAccess>
  pages?: Maybe<PagesAccess>
  payload_jobs?: Maybe<Payload_JobsAccess>
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>
  payload_preferences?: Maybe<Payload_PreferencesAccess>
  users?: Maybe<UsersAccess>
}

export type Announcement = {
  __typename?: 'Announcement'
  _status?: Maybe<Announcement__Status>
  content?: Maybe<Scalars['JSON']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  image?: Maybe<Media>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type AnnouncementContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type AnnouncementImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export enum AnnouncementUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type AnnouncementVersion = {
  __typename?: 'AnnouncementVersion'
  autosave?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  latest?: Maybe<Scalars['Boolean']['output']>
  parent?: Maybe<Announcement>
  publishedLocale?: Maybe<AnnouncementVersion_PublishedLocale>
  snapshot?: Maybe<Scalars['Boolean']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  version?: Maybe<AnnouncementVersion_Version>
}

export type AnnouncementVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type AnnouncementVersion_Version = {
  __typename?: 'AnnouncementVersion_Version'
  _status?: Maybe<AnnouncementVersion_Version__Status>
  content?: Maybe<Scalars['JSON']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<Media>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type AnnouncementVersion_VersionContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type AnnouncementVersion_VersionImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export enum AnnouncementVersion_Version__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum AnnouncementVersion_PublishedLocale {
  En = 'en',
  Nl = 'nl',
  Tr = 'tr',
}

export enum Announcement__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum Announcement__Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export enum Announcement__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type Announcement__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Announcement__Status_Input>>>
  equals?: InputMaybe<Announcement__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Announcement__Status_Input>>>
  not_equals?: InputMaybe<Announcement__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Announcement__Status_Input>>>
}

export type Announcement_Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
}

export type Announcement_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Announcement_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
}

export type Announcement_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Announcement_Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type Announcement_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Announcement_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Announcement_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Announcement_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Announcement_Where = {
  AND?: InputMaybe<Array<InputMaybe<Announcement_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Announcement_Where_Or>>>
  _status?: InputMaybe<Announcement__Status_Operator>
  content?: InputMaybe<Announcement_Content_Operator>
  createdAt?: InputMaybe<Announcement_CreatedAt_Operator>
  description?: InputMaybe<Announcement_Description_Operator>
  id?: InputMaybe<Announcement_Id_Operator>
  image?: InputMaybe<Announcement_Image_Operator>
  publishedAt?: InputMaybe<Announcement_PublishedAt_Operator>
  slug?: InputMaybe<Announcement_Slug_Operator>
  title?: InputMaybe<Announcement_Title_Operator>
  updatedAt?: InputMaybe<Announcement_UpdatedAt_Operator>
}

export type Announcement_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Announcement_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Announcement_Where_Or>>>
  _status?: InputMaybe<Announcement__Status_Operator>
  content?: InputMaybe<Announcement_Content_Operator>
  createdAt?: InputMaybe<Announcement_CreatedAt_Operator>
  description?: InputMaybe<Announcement_Description_Operator>
  id?: InputMaybe<Announcement_Id_Operator>
  image?: InputMaybe<Announcement_Image_Operator>
  publishedAt?: InputMaybe<Announcement_PublishedAt_Operator>
  slug?: InputMaybe<Announcement_Slug_Operator>
  title?: InputMaybe<Announcement_Title_Operator>
  updatedAt?: InputMaybe<Announcement_UpdatedAt_Operator>
}

export type Announcement_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Announcement_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Announcement_Where_Or>>>
  _status?: InputMaybe<Announcement__Status_Operator>
  content?: InputMaybe<Announcement_Content_Operator>
  createdAt?: InputMaybe<Announcement_CreatedAt_Operator>
  description?: InputMaybe<Announcement_Description_Operator>
  id?: InputMaybe<Announcement_Id_Operator>
  image?: InputMaybe<Announcement_Image_Operator>
  publishedAt?: InputMaybe<Announcement_PublishedAt_Operator>
  slug?: InputMaybe<Announcement_Slug_Operator>
  title?: InputMaybe<Announcement_Title_Operator>
  updatedAt?: InputMaybe<Announcement_UpdatedAt_Operator>
}

export type Announcements = {
  __typename?: 'Announcements'
  docs: Array<Announcement>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type AnnouncementsCreateAccess = {
  __typename?: 'AnnouncementsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsCreateDocAccess = {
  __typename?: 'AnnouncementsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsDeleteAccess = {
  __typename?: 'AnnouncementsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsDeleteDocAccess = {
  __typename?: 'AnnouncementsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsDocAccessFields = {
  __typename?: 'AnnouncementsDocAccessFields'
  _status?: Maybe<AnnouncementsDocAccessFields__Status>
  content?: Maybe<AnnouncementsDocAccessFields_Content>
  createdAt?: Maybe<AnnouncementsDocAccessFields_CreatedAt>
  description?: Maybe<AnnouncementsDocAccessFields_Description>
  image?: Maybe<AnnouncementsDocAccessFields_Image>
  publishedAt?: Maybe<AnnouncementsDocAccessFields_PublishedAt>
  slug?: Maybe<AnnouncementsDocAccessFields_Slug>
  title?: Maybe<AnnouncementsDocAccessFields_Title>
  updatedAt?: Maybe<AnnouncementsDocAccessFields_UpdatedAt>
}

export type AnnouncementsDocAccessFields__Status = {
  __typename?: 'AnnouncementsDocAccessFields__status'
  create?: Maybe<AnnouncementsDocAccessFields__Status_Create>
  delete?: Maybe<AnnouncementsDocAccessFields__Status_Delete>
  read?: Maybe<AnnouncementsDocAccessFields__Status_Read>
  update?: Maybe<AnnouncementsDocAccessFields__Status_Update>
}

export type AnnouncementsDocAccessFields__Status_Create = {
  __typename?: 'AnnouncementsDocAccessFields__status_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields__Status_Delete = {
  __typename?: 'AnnouncementsDocAccessFields__status_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields__Status_Read = {
  __typename?: 'AnnouncementsDocAccessFields__status_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields__Status_Update = {
  __typename?: 'AnnouncementsDocAccessFields__status_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Content = {
  __typename?: 'AnnouncementsDocAccessFields_content'
  create?: Maybe<AnnouncementsDocAccessFields_Content_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_Content_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_Content_Read>
  update?: Maybe<AnnouncementsDocAccessFields_Content_Update>
}

export type AnnouncementsDocAccessFields_Content_Create = {
  __typename?: 'AnnouncementsDocAccessFields_content_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Content_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_content_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Content_Read = {
  __typename?: 'AnnouncementsDocAccessFields_content_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Content_Update = {
  __typename?: 'AnnouncementsDocAccessFields_content_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_CreatedAt = {
  __typename?: 'AnnouncementsDocAccessFields_createdAt'
  create?: Maybe<AnnouncementsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_CreatedAt_Read>
  update?: Maybe<AnnouncementsDocAccessFields_CreatedAt_Update>
}

export type AnnouncementsDocAccessFields_CreatedAt_Create = {
  __typename?: 'AnnouncementsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_CreatedAt_Read = {
  __typename?: 'AnnouncementsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_CreatedAt_Update = {
  __typename?: 'AnnouncementsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Description = {
  __typename?: 'AnnouncementsDocAccessFields_description'
  create?: Maybe<AnnouncementsDocAccessFields_Description_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_Description_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_Description_Read>
  update?: Maybe<AnnouncementsDocAccessFields_Description_Update>
}

export type AnnouncementsDocAccessFields_Description_Create = {
  __typename?: 'AnnouncementsDocAccessFields_description_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Description_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_description_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Description_Read = {
  __typename?: 'AnnouncementsDocAccessFields_description_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Description_Update = {
  __typename?: 'AnnouncementsDocAccessFields_description_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Image = {
  __typename?: 'AnnouncementsDocAccessFields_image'
  create?: Maybe<AnnouncementsDocAccessFields_Image_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_Image_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_Image_Read>
  update?: Maybe<AnnouncementsDocAccessFields_Image_Update>
}

export type AnnouncementsDocAccessFields_Image_Create = {
  __typename?: 'AnnouncementsDocAccessFields_image_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Image_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_image_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Image_Read = {
  __typename?: 'AnnouncementsDocAccessFields_image_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Image_Update = {
  __typename?: 'AnnouncementsDocAccessFields_image_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_PublishedAt = {
  __typename?: 'AnnouncementsDocAccessFields_publishedAt'
  create?: Maybe<AnnouncementsDocAccessFields_PublishedAt_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_PublishedAt_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_PublishedAt_Read>
  update?: Maybe<AnnouncementsDocAccessFields_PublishedAt_Update>
}

export type AnnouncementsDocAccessFields_PublishedAt_Create = {
  __typename?: 'AnnouncementsDocAccessFields_publishedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_PublishedAt_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_publishedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_PublishedAt_Read = {
  __typename?: 'AnnouncementsDocAccessFields_publishedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_PublishedAt_Update = {
  __typename?: 'AnnouncementsDocAccessFields_publishedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Slug = {
  __typename?: 'AnnouncementsDocAccessFields_slug'
  create?: Maybe<AnnouncementsDocAccessFields_Slug_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_Slug_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_Slug_Read>
  update?: Maybe<AnnouncementsDocAccessFields_Slug_Update>
}

export type AnnouncementsDocAccessFields_Slug_Create = {
  __typename?: 'AnnouncementsDocAccessFields_slug_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Slug_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_slug_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Slug_Read = {
  __typename?: 'AnnouncementsDocAccessFields_slug_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Slug_Update = {
  __typename?: 'AnnouncementsDocAccessFields_slug_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Title = {
  __typename?: 'AnnouncementsDocAccessFields_title'
  create?: Maybe<AnnouncementsDocAccessFields_Title_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_Title_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_Title_Read>
  update?: Maybe<AnnouncementsDocAccessFields_Title_Update>
}

export type AnnouncementsDocAccessFields_Title_Create = {
  __typename?: 'AnnouncementsDocAccessFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Title_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Title_Read = {
  __typename?: 'AnnouncementsDocAccessFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_Title_Update = {
  __typename?: 'AnnouncementsDocAccessFields_title_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_UpdatedAt = {
  __typename?: 'AnnouncementsDocAccessFields_updatedAt'
  create?: Maybe<AnnouncementsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<AnnouncementsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<AnnouncementsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<AnnouncementsDocAccessFields_UpdatedAt_Update>
}

export type AnnouncementsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'AnnouncementsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'AnnouncementsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'AnnouncementsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'AnnouncementsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields = {
  __typename?: 'AnnouncementsFields'
  _status?: Maybe<AnnouncementsFields__Status>
  content?: Maybe<AnnouncementsFields_Content>
  createdAt?: Maybe<AnnouncementsFields_CreatedAt>
  description?: Maybe<AnnouncementsFields_Description>
  image?: Maybe<AnnouncementsFields_Image>
  publishedAt?: Maybe<AnnouncementsFields_PublishedAt>
  slug?: Maybe<AnnouncementsFields_Slug>
  title?: Maybe<AnnouncementsFields_Title>
  updatedAt?: Maybe<AnnouncementsFields_UpdatedAt>
}

export type AnnouncementsFields__Status = {
  __typename?: 'AnnouncementsFields__status'
  create?: Maybe<AnnouncementsFields__Status_Create>
  delete?: Maybe<AnnouncementsFields__Status_Delete>
  read?: Maybe<AnnouncementsFields__Status_Read>
  update?: Maybe<AnnouncementsFields__Status_Update>
}

export type AnnouncementsFields__Status_Create = {
  __typename?: 'AnnouncementsFields__status_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields__Status_Delete = {
  __typename?: 'AnnouncementsFields__status_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields__Status_Read = {
  __typename?: 'AnnouncementsFields__status_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields__Status_Update = {
  __typename?: 'AnnouncementsFields__status_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Content = {
  __typename?: 'AnnouncementsFields_content'
  create?: Maybe<AnnouncementsFields_Content_Create>
  delete?: Maybe<AnnouncementsFields_Content_Delete>
  read?: Maybe<AnnouncementsFields_Content_Read>
  update?: Maybe<AnnouncementsFields_Content_Update>
}

export type AnnouncementsFields_Content_Create = {
  __typename?: 'AnnouncementsFields_content_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Content_Delete = {
  __typename?: 'AnnouncementsFields_content_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Content_Read = {
  __typename?: 'AnnouncementsFields_content_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Content_Update = {
  __typename?: 'AnnouncementsFields_content_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_CreatedAt = {
  __typename?: 'AnnouncementsFields_createdAt'
  create?: Maybe<AnnouncementsFields_CreatedAt_Create>
  delete?: Maybe<AnnouncementsFields_CreatedAt_Delete>
  read?: Maybe<AnnouncementsFields_CreatedAt_Read>
  update?: Maybe<AnnouncementsFields_CreatedAt_Update>
}

export type AnnouncementsFields_CreatedAt_Create = {
  __typename?: 'AnnouncementsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_CreatedAt_Delete = {
  __typename?: 'AnnouncementsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_CreatedAt_Read = {
  __typename?: 'AnnouncementsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_CreatedAt_Update = {
  __typename?: 'AnnouncementsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Description = {
  __typename?: 'AnnouncementsFields_description'
  create?: Maybe<AnnouncementsFields_Description_Create>
  delete?: Maybe<AnnouncementsFields_Description_Delete>
  read?: Maybe<AnnouncementsFields_Description_Read>
  update?: Maybe<AnnouncementsFields_Description_Update>
}

export type AnnouncementsFields_Description_Create = {
  __typename?: 'AnnouncementsFields_description_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Description_Delete = {
  __typename?: 'AnnouncementsFields_description_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Description_Read = {
  __typename?: 'AnnouncementsFields_description_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Description_Update = {
  __typename?: 'AnnouncementsFields_description_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Image = {
  __typename?: 'AnnouncementsFields_image'
  create?: Maybe<AnnouncementsFields_Image_Create>
  delete?: Maybe<AnnouncementsFields_Image_Delete>
  read?: Maybe<AnnouncementsFields_Image_Read>
  update?: Maybe<AnnouncementsFields_Image_Update>
}

export type AnnouncementsFields_Image_Create = {
  __typename?: 'AnnouncementsFields_image_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Image_Delete = {
  __typename?: 'AnnouncementsFields_image_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Image_Read = {
  __typename?: 'AnnouncementsFields_image_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Image_Update = {
  __typename?: 'AnnouncementsFields_image_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_PublishedAt = {
  __typename?: 'AnnouncementsFields_publishedAt'
  create?: Maybe<AnnouncementsFields_PublishedAt_Create>
  delete?: Maybe<AnnouncementsFields_PublishedAt_Delete>
  read?: Maybe<AnnouncementsFields_PublishedAt_Read>
  update?: Maybe<AnnouncementsFields_PublishedAt_Update>
}

export type AnnouncementsFields_PublishedAt_Create = {
  __typename?: 'AnnouncementsFields_publishedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_PublishedAt_Delete = {
  __typename?: 'AnnouncementsFields_publishedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_PublishedAt_Read = {
  __typename?: 'AnnouncementsFields_publishedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_PublishedAt_Update = {
  __typename?: 'AnnouncementsFields_publishedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Slug = {
  __typename?: 'AnnouncementsFields_slug'
  create?: Maybe<AnnouncementsFields_Slug_Create>
  delete?: Maybe<AnnouncementsFields_Slug_Delete>
  read?: Maybe<AnnouncementsFields_Slug_Read>
  update?: Maybe<AnnouncementsFields_Slug_Update>
}

export type AnnouncementsFields_Slug_Create = {
  __typename?: 'AnnouncementsFields_slug_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Slug_Delete = {
  __typename?: 'AnnouncementsFields_slug_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Slug_Read = {
  __typename?: 'AnnouncementsFields_slug_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Slug_Update = {
  __typename?: 'AnnouncementsFields_slug_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Title = {
  __typename?: 'AnnouncementsFields_title'
  create?: Maybe<AnnouncementsFields_Title_Create>
  delete?: Maybe<AnnouncementsFields_Title_Delete>
  read?: Maybe<AnnouncementsFields_Title_Read>
  update?: Maybe<AnnouncementsFields_Title_Update>
}

export type AnnouncementsFields_Title_Create = {
  __typename?: 'AnnouncementsFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Title_Delete = {
  __typename?: 'AnnouncementsFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Title_Read = {
  __typename?: 'AnnouncementsFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_Title_Update = {
  __typename?: 'AnnouncementsFields_title_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_UpdatedAt = {
  __typename?: 'AnnouncementsFields_updatedAt'
  create?: Maybe<AnnouncementsFields_UpdatedAt_Create>
  delete?: Maybe<AnnouncementsFields_UpdatedAt_Delete>
  read?: Maybe<AnnouncementsFields_UpdatedAt_Read>
  update?: Maybe<AnnouncementsFields_UpdatedAt_Update>
}

export type AnnouncementsFields_UpdatedAt_Create = {
  __typename?: 'AnnouncementsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_UpdatedAt_Delete = {
  __typename?: 'AnnouncementsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_UpdatedAt_Read = {
  __typename?: 'AnnouncementsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsFields_UpdatedAt_Update = {
  __typename?: 'AnnouncementsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type AnnouncementsReadAccess = {
  __typename?: 'AnnouncementsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsReadDocAccess = {
  __typename?: 'AnnouncementsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsReadVersionsAccess = {
  __typename?: 'AnnouncementsReadVersionsAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsReadVersionsDocAccess = {
  __typename?: 'AnnouncementsReadVersionsDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsUpdateAccess = {
  __typename?: 'AnnouncementsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type AnnouncementsUpdateDocAccess = {
  __typename?: 'AnnouncementsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type Checkbox = {
  __typename?: 'Checkbox'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  defaultValue?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type Container = {
  __typename?: 'Container'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  blocks?: Maybe<Array<Container_Blocks>>
  fluid?: Maybe<Scalars['Boolean']['output']>
  id?: Maybe<Scalars['String']['output']>
  spacing?: Maybe<Container_Spacing>
}

export type Container_Blocks = FormBlock | MediaBlock

export enum Container_Spacing {
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
}

export type Country = {
  __typename?: 'Country'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type Donation = {
  __typename?: 'Donation'
  amount: Scalars['Float']['output']
  campaign?: Maybe<Scalars['String']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  currency: Scalars['String']['output']
  date: Scalars['DateTime']['output']
  email?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  message?: Maybe<Scalars['String']['output']>
  paymentType?: Maybe<Donation_PaymentType>
  status?: Maybe<Donation_Status>
  stripePaymentIntentId: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export enum DonationUpdate_PaymentType_MutationInput {
  Monthly = 'monthly',
  OneTime = 'one_time',
}

export enum DonationUpdate_Status_MutationInput {
  Paid = 'paid',
  Pending = 'pending',
}

export type Donation_Amount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type Donation_Campaign_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Donation_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Donation_Currency_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Donation_Date_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Donation_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Donation_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Donation_Message_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
}

export enum Donation_PaymentType {
  Monthly = 'monthly',
  OneTime = 'one_time',
}

export enum Donation_PaymentType_Input {
  Monthly = 'monthly',
  OneTime = 'one_time',
}

export enum Donation_PaymentType_MutationInput {
  Monthly = 'monthly',
  OneTime = 'one_time',
}

export type Donation_PaymentType_Operator = {
  all?: InputMaybe<Array<InputMaybe<Donation_PaymentType_Input>>>
  equals?: InputMaybe<Donation_PaymentType_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Donation_PaymentType_Input>>>
  not_equals?: InputMaybe<Donation_PaymentType_Input>
  not_in?: InputMaybe<Array<InputMaybe<Donation_PaymentType_Input>>>
}

export enum Donation_Status {
  Paid = 'paid',
  Pending = 'pending',
}

export enum Donation_Status_Input {
  Paid = 'paid',
  Pending = 'pending',
}

export enum Donation_Status_MutationInput {
  Paid = 'paid',
  Pending = 'pending',
}

export type Donation_Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Donation_Status_Input>>>
  equals?: InputMaybe<Donation_Status_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Donation_Status_Input>>>
  not_equals?: InputMaybe<Donation_Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Donation_Status_Input>>>
}

export type Donation_StripePaymentIntentId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Donation_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Donation_Where = {
  AND?: InputMaybe<Array<InputMaybe<Donation_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Donation_Where_Or>>>
  amount?: InputMaybe<Donation_Amount_Operator>
  campaign?: InputMaybe<Donation_Campaign_Operator>
  createdAt?: InputMaybe<Donation_CreatedAt_Operator>
  currency?: InputMaybe<Donation_Currency_Operator>
  date?: InputMaybe<Donation_Date_Operator>
  email?: InputMaybe<Donation_Email_Operator>
  id?: InputMaybe<Donation_Id_Operator>
  message?: InputMaybe<Donation_Message_Operator>
  paymentType?: InputMaybe<Donation_PaymentType_Operator>
  status?: InputMaybe<Donation_Status_Operator>
  stripePaymentIntentId?: InputMaybe<Donation_StripePaymentIntentId_Operator>
  updatedAt?: InputMaybe<Donation_UpdatedAt_Operator>
}

export type Donation_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Donation_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Donation_Where_Or>>>
  amount?: InputMaybe<Donation_Amount_Operator>
  campaign?: InputMaybe<Donation_Campaign_Operator>
  createdAt?: InputMaybe<Donation_CreatedAt_Operator>
  currency?: InputMaybe<Donation_Currency_Operator>
  date?: InputMaybe<Donation_Date_Operator>
  email?: InputMaybe<Donation_Email_Operator>
  id?: InputMaybe<Donation_Id_Operator>
  message?: InputMaybe<Donation_Message_Operator>
  paymentType?: InputMaybe<Donation_PaymentType_Operator>
  status?: InputMaybe<Donation_Status_Operator>
  stripePaymentIntentId?: InputMaybe<Donation_StripePaymentIntentId_Operator>
  updatedAt?: InputMaybe<Donation_UpdatedAt_Operator>
}

export type Donation_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Donation_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Donation_Where_Or>>>
  amount?: InputMaybe<Donation_Amount_Operator>
  campaign?: InputMaybe<Donation_Campaign_Operator>
  createdAt?: InputMaybe<Donation_CreatedAt_Operator>
  currency?: InputMaybe<Donation_Currency_Operator>
  date?: InputMaybe<Donation_Date_Operator>
  email?: InputMaybe<Donation_Email_Operator>
  id?: InputMaybe<Donation_Id_Operator>
  message?: InputMaybe<Donation_Message_Operator>
  paymentType?: InputMaybe<Donation_PaymentType_Operator>
  status?: InputMaybe<Donation_Status_Operator>
  stripePaymentIntentId?: InputMaybe<Donation_StripePaymentIntentId_Operator>
  updatedAt?: InputMaybe<Donation_UpdatedAt_Operator>
}

export type Donations = {
  __typename?: 'Donations'
  docs: Array<Donation>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type DonationsCreateAccess = {
  __typename?: 'DonationsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsCreateDocAccess = {
  __typename?: 'DonationsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsDeleteAccess = {
  __typename?: 'DonationsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsDeleteDocAccess = {
  __typename?: 'DonationsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsDocAccessFields = {
  __typename?: 'DonationsDocAccessFields'
  amount?: Maybe<DonationsDocAccessFields_Amount>
  campaign?: Maybe<DonationsDocAccessFields_Campaign>
  createdAt?: Maybe<DonationsDocAccessFields_CreatedAt>
  currency?: Maybe<DonationsDocAccessFields_Currency>
  date?: Maybe<DonationsDocAccessFields_Date>
  email?: Maybe<DonationsDocAccessFields_Email>
  message?: Maybe<DonationsDocAccessFields_Message>
  paymentType?: Maybe<DonationsDocAccessFields_PaymentType>
  status?: Maybe<DonationsDocAccessFields_Status>
  stripePaymentIntentId?: Maybe<DonationsDocAccessFields_StripePaymentIntentId>
  updatedAt?: Maybe<DonationsDocAccessFields_UpdatedAt>
}

export type DonationsDocAccessFields_Amount = {
  __typename?: 'DonationsDocAccessFields_amount'
  create?: Maybe<DonationsDocAccessFields_Amount_Create>
  delete?: Maybe<DonationsDocAccessFields_Amount_Delete>
  read?: Maybe<DonationsDocAccessFields_Amount_Read>
  update?: Maybe<DonationsDocAccessFields_Amount_Update>
}

export type DonationsDocAccessFields_Amount_Create = {
  __typename?: 'DonationsDocAccessFields_amount_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Amount_Delete = {
  __typename?: 'DonationsDocAccessFields_amount_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Amount_Read = {
  __typename?: 'DonationsDocAccessFields_amount_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Amount_Update = {
  __typename?: 'DonationsDocAccessFields_amount_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Campaign = {
  __typename?: 'DonationsDocAccessFields_campaign'
  create?: Maybe<DonationsDocAccessFields_Campaign_Create>
  delete?: Maybe<DonationsDocAccessFields_Campaign_Delete>
  read?: Maybe<DonationsDocAccessFields_Campaign_Read>
  update?: Maybe<DonationsDocAccessFields_Campaign_Update>
}

export type DonationsDocAccessFields_Campaign_Create = {
  __typename?: 'DonationsDocAccessFields_campaign_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Campaign_Delete = {
  __typename?: 'DonationsDocAccessFields_campaign_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Campaign_Read = {
  __typename?: 'DonationsDocAccessFields_campaign_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Campaign_Update = {
  __typename?: 'DonationsDocAccessFields_campaign_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_CreatedAt = {
  __typename?: 'DonationsDocAccessFields_createdAt'
  create?: Maybe<DonationsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<DonationsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<DonationsDocAccessFields_CreatedAt_Read>
  update?: Maybe<DonationsDocAccessFields_CreatedAt_Update>
}

export type DonationsDocAccessFields_CreatedAt_Create = {
  __typename?: 'DonationsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'DonationsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_CreatedAt_Read = {
  __typename?: 'DonationsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_CreatedAt_Update = {
  __typename?: 'DonationsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Currency = {
  __typename?: 'DonationsDocAccessFields_currency'
  create?: Maybe<DonationsDocAccessFields_Currency_Create>
  delete?: Maybe<DonationsDocAccessFields_Currency_Delete>
  read?: Maybe<DonationsDocAccessFields_Currency_Read>
  update?: Maybe<DonationsDocAccessFields_Currency_Update>
}

export type DonationsDocAccessFields_Currency_Create = {
  __typename?: 'DonationsDocAccessFields_currency_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Currency_Delete = {
  __typename?: 'DonationsDocAccessFields_currency_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Currency_Read = {
  __typename?: 'DonationsDocAccessFields_currency_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Currency_Update = {
  __typename?: 'DonationsDocAccessFields_currency_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Date = {
  __typename?: 'DonationsDocAccessFields_date'
  create?: Maybe<DonationsDocAccessFields_Date_Create>
  delete?: Maybe<DonationsDocAccessFields_Date_Delete>
  read?: Maybe<DonationsDocAccessFields_Date_Read>
  update?: Maybe<DonationsDocAccessFields_Date_Update>
}

export type DonationsDocAccessFields_Date_Create = {
  __typename?: 'DonationsDocAccessFields_date_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Date_Delete = {
  __typename?: 'DonationsDocAccessFields_date_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Date_Read = {
  __typename?: 'DonationsDocAccessFields_date_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Date_Update = {
  __typename?: 'DonationsDocAccessFields_date_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Email = {
  __typename?: 'DonationsDocAccessFields_email'
  create?: Maybe<DonationsDocAccessFields_Email_Create>
  delete?: Maybe<DonationsDocAccessFields_Email_Delete>
  read?: Maybe<DonationsDocAccessFields_Email_Read>
  update?: Maybe<DonationsDocAccessFields_Email_Update>
}

export type DonationsDocAccessFields_Email_Create = {
  __typename?: 'DonationsDocAccessFields_email_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Email_Delete = {
  __typename?: 'DonationsDocAccessFields_email_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Email_Read = {
  __typename?: 'DonationsDocAccessFields_email_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Email_Update = {
  __typename?: 'DonationsDocAccessFields_email_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Message = {
  __typename?: 'DonationsDocAccessFields_message'
  create?: Maybe<DonationsDocAccessFields_Message_Create>
  delete?: Maybe<DonationsDocAccessFields_Message_Delete>
  read?: Maybe<DonationsDocAccessFields_Message_Read>
  update?: Maybe<DonationsDocAccessFields_Message_Update>
}

export type DonationsDocAccessFields_Message_Create = {
  __typename?: 'DonationsDocAccessFields_message_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Message_Delete = {
  __typename?: 'DonationsDocAccessFields_message_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Message_Read = {
  __typename?: 'DonationsDocAccessFields_message_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Message_Update = {
  __typename?: 'DonationsDocAccessFields_message_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_PaymentType = {
  __typename?: 'DonationsDocAccessFields_paymentType'
  create?: Maybe<DonationsDocAccessFields_PaymentType_Create>
  delete?: Maybe<DonationsDocAccessFields_PaymentType_Delete>
  read?: Maybe<DonationsDocAccessFields_PaymentType_Read>
  update?: Maybe<DonationsDocAccessFields_PaymentType_Update>
}

export type DonationsDocAccessFields_PaymentType_Create = {
  __typename?: 'DonationsDocAccessFields_paymentType_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_PaymentType_Delete = {
  __typename?: 'DonationsDocAccessFields_paymentType_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_PaymentType_Read = {
  __typename?: 'DonationsDocAccessFields_paymentType_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_PaymentType_Update = {
  __typename?: 'DonationsDocAccessFields_paymentType_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Status = {
  __typename?: 'DonationsDocAccessFields_status'
  create?: Maybe<DonationsDocAccessFields_Status_Create>
  delete?: Maybe<DonationsDocAccessFields_Status_Delete>
  read?: Maybe<DonationsDocAccessFields_Status_Read>
  update?: Maybe<DonationsDocAccessFields_Status_Update>
}

export type DonationsDocAccessFields_Status_Create = {
  __typename?: 'DonationsDocAccessFields_status_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Status_Delete = {
  __typename?: 'DonationsDocAccessFields_status_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Status_Read = {
  __typename?: 'DonationsDocAccessFields_status_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_Status_Update = {
  __typename?: 'DonationsDocAccessFields_status_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_StripePaymentIntentId = {
  __typename?: 'DonationsDocAccessFields_stripePaymentIntentId'
  create?: Maybe<DonationsDocAccessFields_StripePaymentIntentId_Create>
  delete?: Maybe<DonationsDocAccessFields_StripePaymentIntentId_Delete>
  read?: Maybe<DonationsDocAccessFields_StripePaymentIntentId_Read>
  update?: Maybe<DonationsDocAccessFields_StripePaymentIntentId_Update>
}

export type DonationsDocAccessFields_StripePaymentIntentId_Create = {
  __typename?: 'DonationsDocAccessFields_stripePaymentIntentId_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_StripePaymentIntentId_Delete = {
  __typename?: 'DonationsDocAccessFields_stripePaymentIntentId_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_StripePaymentIntentId_Read = {
  __typename?: 'DonationsDocAccessFields_stripePaymentIntentId_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_StripePaymentIntentId_Update = {
  __typename?: 'DonationsDocAccessFields_stripePaymentIntentId_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_UpdatedAt = {
  __typename?: 'DonationsDocAccessFields_updatedAt'
  create?: Maybe<DonationsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<DonationsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<DonationsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<DonationsDocAccessFields_UpdatedAt_Update>
}

export type DonationsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'DonationsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'DonationsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'DonationsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'DonationsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields = {
  __typename?: 'DonationsFields'
  amount?: Maybe<DonationsFields_Amount>
  campaign?: Maybe<DonationsFields_Campaign>
  createdAt?: Maybe<DonationsFields_CreatedAt>
  currency?: Maybe<DonationsFields_Currency>
  date?: Maybe<DonationsFields_Date>
  email?: Maybe<DonationsFields_Email>
  message?: Maybe<DonationsFields_Message>
  paymentType?: Maybe<DonationsFields_PaymentType>
  status?: Maybe<DonationsFields_Status>
  stripePaymentIntentId?: Maybe<DonationsFields_StripePaymentIntentId>
  updatedAt?: Maybe<DonationsFields_UpdatedAt>
}

export type DonationsFields_Amount = {
  __typename?: 'DonationsFields_amount'
  create?: Maybe<DonationsFields_Amount_Create>
  delete?: Maybe<DonationsFields_Amount_Delete>
  read?: Maybe<DonationsFields_Amount_Read>
  update?: Maybe<DonationsFields_Amount_Update>
}

export type DonationsFields_Amount_Create = {
  __typename?: 'DonationsFields_amount_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Amount_Delete = {
  __typename?: 'DonationsFields_amount_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Amount_Read = {
  __typename?: 'DonationsFields_amount_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Amount_Update = {
  __typename?: 'DonationsFields_amount_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Campaign = {
  __typename?: 'DonationsFields_campaign'
  create?: Maybe<DonationsFields_Campaign_Create>
  delete?: Maybe<DonationsFields_Campaign_Delete>
  read?: Maybe<DonationsFields_Campaign_Read>
  update?: Maybe<DonationsFields_Campaign_Update>
}

export type DonationsFields_Campaign_Create = {
  __typename?: 'DonationsFields_campaign_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Campaign_Delete = {
  __typename?: 'DonationsFields_campaign_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Campaign_Read = {
  __typename?: 'DonationsFields_campaign_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Campaign_Update = {
  __typename?: 'DonationsFields_campaign_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_CreatedAt = {
  __typename?: 'DonationsFields_createdAt'
  create?: Maybe<DonationsFields_CreatedAt_Create>
  delete?: Maybe<DonationsFields_CreatedAt_Delete>
  read?: Maybe<DonationsFields_CreatedAt_Read>
  update?: Maybe<DonationsFields_CreatedAt_Update>
}

export type DonationsFields_CreatedAt_Create = {
  __typename?: 'DonationsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_CreatedAt_Delete = {
  __typename?: 'DonationsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_CreatedAt_Read = {
  __typename?: 'DonationsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_CreatedAt_Update = {
  __typename?: 'DonationsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Currency = {
  __typename?: 'DonationsFields_currency'
  create?: Maybe<DonationsFields_Currency_Create>
  delete?: Maybe<DonationsFields_Currency_Delete>
  read?: Maybe<DonationsFields_Currency_Read>
  update?: Maybe<DonationsFields_Currency_Update>
}

export type DonationsFields_Currency_Create = {
  __typename?: 'DonationsFields_currency_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Currency_Delete = {
  __typename?: 'DonationsFields_currency_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Currency_Read = {
  __typename?: 'DonationsFields_currency_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Currency_Update = {
  __typename?: 'DonationsFields_currency_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Date = {
  __typename?: 'DonationsFields_date'
  create?: Maybe<DonationsFields_Date_Create>
  delete?: Maybe<DonationsFields_Date_Delete>
  read?: Maybe<DonationsFields_Date_Read>
  update?: Maybe<DonationsFields_Date_Update>
}

export type DonationsFields_Date_Create = {
  __typename?: 'DonationsFields_date_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Date_Delete = {
  __typename?: 'DonationsFields_date_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Date_Read = {
  __typename?: 'DonationsFields_date_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Date_Update = {
  __typename?: 'DonationsFields_date_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Email = {
  __typename?: 'DonationsFields_email'
  create?: Maybe<DonationsFields_Email_Create>
  delete?: Maybe<DonationsFields_Email_Delete>
  read?: Maybe<DonationsFields_Email_Read>
  update?: Maybe<DonationsFields_Email_Update>
}

export type DonationsFields_Email_Create = {
  __typename?: 'DonationsFields_email_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Email_Delete = {
  __typename?: 'DonationsFields_email_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Email_Read = {
  __typename?: 'DonationsFields_email_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Email_Update = {
  __typename?: 'DonationsFields_email_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Message = {
  __typename?: 'DonationsFields_message'
  create?: Maybe<DonationsFields_Message_Create>
  delete?: Maybe<DonationsFields_Message_Delete>
  read?: Maybe<DonationsFields_Message_Read>
  update?: Maybe<DonationsFields_Message_Update>
}

export type DonationsFields_Message_Create = {
  __typename?: 'DonationsFields_message_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Message_Delete = {
  __typename?: 'DonationsFields_message_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Message_Read = {
  __typename?: 'DonationsFields_message_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Message_Update = {
  __typename?: 'DonationsFields_message_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_PaymentType = {
  __typename?: 'DonationsFields_paymentType'
  create?: Maybe<DonationsFields_PaymentType_Create>
  delete?: Maybe<DonationsFields_PaymentType_Delete>
  read?: Maybe<DonationsFields_PaymentType_Read>
  update?: Maybe<DonationsFields_PaymentType_Update>
}

export type DonationsFields_PaymentType_Create = {
  __typename?: 'DonationsFields_paymentType_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_PaymentType_Delete = {
  __typename?: 'DonationsFields_paymentType_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_PaymentType_Read = {
  __typename?: 'DonationsFields_paymentType_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_PaymentType_Update = {
  __typename?: 'DonationsFields_paymentType_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Status = {
  __typename?: 'DonationsFields_status'
  create?: Maybe<DonationsFields_Status_Create>
  delete?: Maybe<DonationsFields_Status_Delete>
  read?: Maybe<DonationsFields_Status_Read>
  update?: Maybe<DonationsFields_Status_Update>
}

export type DonationsFields_Status_Create = {
  __typename?: 'DonationsFields_status_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Status_Delete = {
  __typename?: 'DonationsFields_status_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Status_Read = {
  __typename?: 'DonationsFields_status_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_Status_Update = {
  __typename?: 'DonationsFields_status_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_StripePaymentIntentId = {
  __typename?: 'DonationsFields_stripePaymentIntentId'
  create?: Maybe<DonationsFields_StripePaymentIntentId_Create>
  delete?: Maybe<DonationsFields_StripePaymentIntentId_Delete>
  read?: Maybe<DonationsFields_StripePaymentIntentId_Read>
  update?: Maybe<DonationsFields_StripePaymentIntentId_Update>
}

export type DonationsFields_StripePaymentIntentId_Create = {
  __typename?: 'DonationsFields_stripePaymentIntentId_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_StripePaymentIntentId_Delete = {
  __typename?: 'DonationsFields_stripePaymentIntentId_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_StripePaymentIntentId_Read = {
  __typename?: 'DonationsFields_stripePaymentIntentId_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_StripePaymentIntentId_Update = {
  __typename?: 'DonationsFields_stripePaymentIntentId_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_UpdatedAt = {
  __typename?: 'DonationsFields_updatedAt'
  create?: Maybe<DonationsFields_UpdatedAt_Create>
  delete?: Maybe<DonationsFields_UpdatedAt_Delete>
  read?: Maybe<DonationsFields_UpdatedAt_Read>
  update?: Maybe<DonationsFields_UpdatedAt_Update>
}

export type DonationsFields_UpdatedAt_Create = {
  __typename?: 'DonationsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_UpdatedAt_Delete = {
  __typename?: 'DonationsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_UpdatedAt_Read = {
  __typename?: 'DonationsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type DonationsFields_UpdatedAt_Update = {
  __typename?: 'DonationsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type DonationsReadAccess = {
  __typename?: 'DonationsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsReadDocAccess = {
  __typename?: 'DonationsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsUpdateAccess = {
  __typename?: 'DonationsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type DonationsUpdateDocAccess = {
  __typename?: 'DonationsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type Email = {
  __typename?: 'Email'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export enum FallbackLocaleInputType {
  En = 'en',
  Nl = 'nl',
  None = 'none',
  Tr = 'tr',
}

export type Form = {
  __typename?: 'Form'
  confirmationMessage?: Maybe<Scalars['JSON']['output']>
  confirmationType?: Maybe<Form_ConfirmationType>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  emails?: Maybe<Array<Form_Emails>>
  fields?: Maybe<Array<Form_Fields>>
  id: Scalars['String']['output']
  redirect?: Maybe<Form_Redirect>
  submitButtonLabel?: Maybe<Scalars['String']['output']>
  title: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type FormConfirmationMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type FormBlock = {
  __typename?: 'FormBlock'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  enableIntro?: Maybe<Scalars['Boolean']['output']>
  form?: Maybe<Form>
  id?: Maybe<Scalars['String']['output']>
  introContent?: Maybe<Scalars['JSON']['output']>
}

export type FormBlockFormArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type FormBlockIntroContentArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type FormSubmission = {
  __typename?: 'FormSubmission'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  form: Form
  id: Scalars['String']['output']
  submissionData?: Maybe<Array<FormSubmission_SubmissionData>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type FormSubmissionFormArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type FormSubmission_SubmissionData = {
  __typename?: 'FormSubmission_SubmissionData'
  field?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export type FormSubmission_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type FormSubmission_Form_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type FormSubmission_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FormSubmission_SubmissionData__Field_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FormSubmission_SubmissionData__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FormSubmission_SubmissionData__Value_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type FormSubmission_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type FormSubmission_Where = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>
  form?: InputMaybe<FormSubmission_Form_Operator>
  id?: InputMaybe<FormSubmission_Id_Operator>
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>
}

export type FormSubmission_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>
  form?: InputMaybe<FormSubmission_Form_Operator>
  id?: InputMaybe<FormSubmission_Id_Operator>
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>
}

export type FormSubmission_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<FormSubmission_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<FormSubmission_Where_Or>>>
  createdAt?: InputMaybe<FormSubmission_CreatedAt_Operator>
  form?: InputMaybe<FormSubmission_Form_Operator>
  id?: InputMaybe<FormSubmission_Id_Operator>
  submissionData__field?: InputMaybe<FormSubmission_SubmissionData__Field_Operator>
  submissionData__id?: InputMaybe<FormSubmission_SubmissionData__Id_Operator>
  submissionData__value?: InputMaybe<FormSubmission_SubmissionData__Value_Operator>
  updatedAt?: InputMaybe<FormSubmission_UpdatedAt_Operator>
}

export type FormSubmissions = {
  __typename?: 'FormSubmissions'
  docs: Array<FormSubmission>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type FormSubmissionsCreateAccess = {
  __typename?: 'FormSubmissionsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsCreateDocAccess = {
  __typename?: 'FormSubmissionsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsDeleteAccess = {
  __typename?: 'FormSubmissionsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsDeleteDocAccess = {
  __typename?: 'FormSubmissionsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsDocAccessFields = {
  __typename?: 'FormSubmissionsDocAccessFields'
  createdAt?: Maybe<FormSubmissionsDocAccessFields_CreatedAt>
  form?: Maybe<FormSubmissionsDocAccessFields_Form>
  submissionData?: Maybe<FormSubmissionsDocAccessFields_SubmissionData>
  updatedAt?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt>
}

export type FormSubmissionsDocAccessFields_CreatedAt = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt'
  create?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_CreatedAt_Update>
}

export type FormSubmissionsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_Form = {
  __typename?: 'FormSubmissionsDocAccessFields_form'
  create?: Maybe<FormSubmissionsDocAccessFields_Form_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_Form_Delete>
  read?: Maybe<FormSubmissionsDocAccessFields_Form_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_Form_Update>
}

export type FormSubmissionsDocAccessFields_Form_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_Form_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_Form_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_Form_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_form_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData'
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Delete>
  fields?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Fields>
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Update>
}

export type FormSubmissionsDocAccessFields_SubmissionData_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Fields = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Fields'
  field?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field>
  id?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id>
  value?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value>
}

export type FormSubmissionsDocAccessFields_SubmissionData_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Field = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field'
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Delete>
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Field_Update>
}

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Field_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_field_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Id = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id'
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Delete>
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Id_Update>
}

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Id_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_id_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Value = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value'
  create?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Delete>
  read?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_SubmissionData_Value_Update>
}

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_SubmissionData_Value_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_submissionData_value_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_UpdatedAt = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt'
  create?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<FormSubmissionsDocAccessFields_UpdatedAt_Update>
}

export type FormSubmissionsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FormSubmissionsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields = {
  __typename?: 'FormSubmissionsFields'
  createdAt?: Maybe<FormSubmissionsFields_CreatedAt>
  form?: Maybe<FormSubmissionsFields_Form>
  submissionData?: Maybe<FormSubmissionsFields_SubmissionData>
  updatedAt?: Maybe<FormSubmissionsFields_UpdatedAt>
}

export type FormSubmissionsFields_CreatedAt = {
  __typename?: 'FormSubmissionsFields_createdAt'
  create?: Maybe<FormSubmissionsFields_CreatedAt_Create>
  delete?: Maybe<FormSubmissionsFields_CreatedAt_Delete>
  read?: Maybe<FormSubmissionsFields_CreatedAt_Read>
  update?: Maybe<FormSubmissionsFields_CreatedAt_Update>
}

export type FormSubmissionsFields_CreatedAt_Create = {
  __typename?: 'FormSubmissionsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_CreatedAt_Delete = {
  __typename?: 'FormSubmissionsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_CreatedAt_Read = {
  __typename?: 'FormSubmissionsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_CreatedAt_Update = {
  __typename?: 'FormSubmissionsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_Form = {
  __typename?: 'FormSubmissionsFields_form'
  create?: Maybe<FormSubmissionsFields_Form_Create>
  delete?: Maybe<FormSubmissionsFields_Form_Delete>
  read?: Maybe<FormSubmissionsFields_Form_Read>
  update?: Maybe<FormSubmissionsFields_Form_Update>
}

export type FormSubmissionsFields_Form_Create = {
  __typename?: 'FormSubmissionsFields_form_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_Form_Delete = {
  __typename?: 'FormSubmissionsFields_form_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_Form_Read = {
  __typename?: 'FormSubmissionsFields_form_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_Form_Update = {
  __typename?: 'FormSubmissionsFields_form_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData = {
  __typename?: 'FormSubmissionsFields_submissionData'
  create?: Maybe<FormSubmissionsFields_SubmissionData_Create>
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Delete>
  fields?: Maybe<FormSubmissionsFields_SubmissionData_Fields>
  read?: Maybe<FormSubmissionsFields_SubmissionData_Read>
  update?: Maybe<FormSubmissionsFields_SubmissionData_Update>
}

export type FormSubmissionsFields_SubmissionData_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Fields = {
  __typename?: 'FormSubmissionsFields_submissionData_Fields'
  field?: Maybe<FormSubmissionsFields_SubmissionData_Field>
  id?: Maybe<FormSubmissionsFields_SubmissionData_Id>
  value?: Maybe<FormSubmissionsFields_SubmissionData_Value>
}

export type FormSubmissionsFields_SubmissionData_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Field = {
  __typename?: 'FormSubmissionsFields_submissionData_field'
  create?: Maybe<FormSubmissionsFields_SubmissionData_Field_Create>
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Field_Delete>
  read?: Maybe<FormSubmissionsFields_SubmissionData_Field_Read>
  update?: Maybe<FormSubmissionsFields_SubmissionData_Field_Update>
}

export type FormSubmissionsFields_SubmissionData_Field_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Field_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Field_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Field_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_field_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Id = {
  __typename?: 'FormSubmissionsFields_submissionData_id'
  create?: Maybe<FormSubmissionsFields_SubmissionData_Id_Create>
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Id_Delete>
  read?: Maybe<FormSubmissionsFields_SubmissionData_Id_Read>
  update?: Maybe<FormSubmissionsFields_SubmissionData_Id_Update>
}

export type FormSubmissionsFields_SubmissionData_Id_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Id_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Id_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Id_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_id_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Value = {
  __typename?: 'FormSubmissionsFields_submissionData_value'
  create?: Maybe<FormSubmissionsFields_SubmissionData_Value_Create>
  delete?: Maybe<FormSubmissionsFields_SubmissionData_Value_Delete>
  read?: Maybe<FormSubmissionsFields_SubmissionData_Value_Read>
  update?: Maybe<FormSubmissionsFields_SubmissionData_Value_Update>
}

export type FormSubmissionsFields_SubmissionData_Value_Create = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Value_Delete = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Value_Read = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_SubmissionData_Value_Update = {
  __typename?: 'FormSubmissionsFields_submissionData_value_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_UpdatedAt = {
  __typename?: 'FormSubmissionsFields_updatedAt'
  create?: Maybe<FormSubmissionsFields_UpdatedAt_Create>
  delete?: Maybe<FormSubmissionsFields_UpdatedAt_Delete>
  read?: Maybe<FormSubmissionsFields_UpdatedAt_Read>
  update?: Maybe<FormSubmissionsFields_UpdatedAt_Update>
}

export type FormSubmissionsFields_UpdatedAt_Create = {
  __typename?: 'FormSubmissionsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_UpdatedAt_Delete = {
  __typename?: 'FormSubmissionsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_UpdatedAt_Read = {
  __typename?: 'FormSubmissionsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsFields_UpdatedAt_Update = {
  __typename?: 'FormSubmissionsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormSubmissionsReadAccess = {
  __typename?: 'FormSubmissionsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsReadDocAccess = {
  __typename?: 'FormSubmissionsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsUpdateAccess = {
  __typename?: 'FormSubmissionsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormSubmissionsUpdateDocAccess = {
  __typename?: 'FormSubmissionsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type Form_Emails = {
  __typename?: 'Form_Emails'
  bcc?: Maybe<Scalars['String']['output']>
  cc?: Maybe<Scalars['String']['output']>
  emailFrom?: Maybe<Scalars['String']['output']>
  emailTo?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  message?: Maybe<Scalars['JSON']['output']>
  replyTo?: Maybe<Scalars['String']['output']>
  subject?: Maybe<Scalars['String']['output']>
}

export type Form_EmailsMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type Form_Fields = Checkbox | Country | Email | Message | Number | Select | Text | Textarea

export type Form_Redirect = {
  __typename?: 'Form_Redirect'
  url?: Maybe<Scalars['String']['output']>
}

export type Form_ConfirmationMessage_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
}

export enum Form_ConfirmationType {
  Message = 'message',
  Redirect = 'redirect',
}

export enum Form_ConfirmationType_Input {
  Message = 'message',
  Redirect = 'redirect',
}

export type Form_ConfirmationType_Operator = {
  contains?: InputMaybe<Form_ConfirmationType_Input>
  equals?: InputMaybe<Form_ConfirmationType_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Form_ConfirmationType_Input>
  not_equals?: InputMaybe<Form_ConfirmationType_Input>
}

export type Form_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Form_Emails__Bcc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Emails__Cc_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Emails__EmailFrom_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Emails__EmailTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Emails__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Emails__Message_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
}

export type Form_Emails__ReplyTo_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Emails__Subject_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Redirect__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_SubmitButtonLabel_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Form_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Form_Where = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>
  createdAt?: InputMaybe<Form_CreatedAt_Operator>
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>
  emails__id?: InputMaybe<Form_Emails__Id_Operator>
  emails__message?: InputMaybe<Form_Emails__Message_Operator>
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>
  id?: InputMaybe<Form_Id_Operator>
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>
  title?: InputMaybe<Form_Title_Operator>
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>
}

export type Form_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>
  createdAt?: InputMaybe<Form_CreatedAt_Operator>
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>
  emails__id?: InputMaybe<Form_Emails__Id_Operator>
  emails__message?: InputMaybe<Form_Emails__Message_Operator>
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>
  id?: InputMaybe<Form_Id_Operator>
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>
  title?: InputMaybe<Form_Title_Operator>
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>
}

export type Form_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Form_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Form_Where_Or>>>
  confirmationMessage?: InputMaybe<Form_ConfirmationMessage_Operator>
  confirmationType?: InputMaybe<Form_ConfirmationType_Operator>
  createdAt?: InputMaybe<Form_CreatedAt_Operator>
  emails__bcc?: InputMaybe<Form_Emails__Bcc_Operator>
  emails__cc?: InputMaybe<Form_Emails__Cc_Operator>
  emails__emailFrom?: InputMaybe<Form_Emails__EmailFrom_Operator>
  emails__emailTo?: InputMaybe<Form_Emails__EmailTo_Operator>
  emails__id?: InputMaybe<Form_Emails__Id_Operator>
  emails__message?: InputMaybe<Form_Emails__Message_Operator>
  emails__replyTo?: InputMaybe<Form_Emails__ReplyTo_Operator>
  emails__subject?: InputMaybe<Form_Emails__Subject_Operator>
  id?: InputMaybe<Form_Id_Operator>
  redirect__url?: InputMaybe<Form_Redirect__Url_Operator>
  submitButtonLabel?: InputMaybe<Form_SubmitButtonLabel_Operator>
  title?: InputMaybe<Form_Title_Operator>
  updatedAt?: InputMaybe<Form_UpdatedAt_Operator>
}

export type Forms = {
  __typename?: 'Forms'
  docs: Array<Form>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type FormsCreateAccess = {
  __typename?: 'FormsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsCreateDocAccess = {
  __typename?: 'FormsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsDeleteAccess = {
  __typename?: 'FormsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsDeleteDocAccess = {
  __typename?: 'FormsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsDocAccessFields = {
  __typename?: 'FormsDocAccessFields'
  confirmationMessage?: Maybe<FormsDocAccessFields_ConfirmationMessage>
  confirmationType?: Maybe<FormsDocAccessFields_ConfirmationType>
  createdAt?: Maybe<FormsDocAccessFields_CreatedAt>
  emails?: Maybe<FormsDocAccessFields_Emails>
  fields?: Maybe<FormsDocAccessFields_Fields>
  redirect?: Maybe<FormsDocAccessFields_Redirect>
  submitButtonLabel?: Maybe<FormsDocAccessFields_SubmitButtonLabel>
  title?: Maybe<FormsDocAccessFields_Title>
  updatedAt?: Maybe<FormsDocAccessFields_UpdatedAt>
}

export type FormsDocAccessFields_ConfirmationMessage = {
  __typename?: 'FormsDocAccessFields_confirmationMessage'
  create?: Maybe<FormsDocAccessFields_ConfirmationMessage_Create>
  delete?: Maybe<FormsDocAccessFields_ConfirmationMessage_Delete>
  read?: Maybe<FormsDocAccessFields_ConfirmationMessage_Read>
  update?: Maybe<FormsDocAccessFields_ConfirmationMessage_Update>
}

export type FormsDocAccessFields_ConfirmationMessage_Create = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationMessage_Delete = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationMessage_Read = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationMessage_Update = {
  __typename?: 'FormsDocAccessFields_confirmationMessage_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationType = {
  __typename?: 'FormsDocAccessFields_confirmationType'
  create?: Maybe<FormsDocAccessFields_ConfirmationType_Create>
  delete?: Maybe<FormsDocAccessFields_ConfirmationType_Delete>
  read?: Maybe<FormsDocAccessFields_ConfirmationType_Read>
  update?: Maybe<FormsDocAccessFields_ConfirmationType_Update>
}

export type FormsDocAccessFields_ConfirmationType_Create = {
  __typename?: 'FormsDocAccessFields_confirmationType_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationType_Delete = {
  __typename?: 'FormsDocAccessFields_confirmationType_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationType_Read = {
  __typename?: 'FormsDocAccessFields_confirmationType_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_ConfirmationType_Update = {
  __typename?: 'FormsDocAccessFields_confirmationType_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_CreatedAt = {
  __typename?: 'FormsDocAccessFields_createdAt'
  create?: Maybe<FormsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<FormsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<FormsDocAccessFields_CreatedAt_Read>
  update?: Maybe<FormsDocAccessFields_CreatedAt_Update>
}

export type FormsDocAccessFields_CreatedAt_Create = {
  __typename?: 'FormsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'FormsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_CreatedAt_Read = {
  __typename?: 'FormsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_CreatedAt_Update = {
  __typename?: 'FormsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails = {
  __typename?: 'FormsDocAccessFields_emails'
  create?: Maybe<FormsDocAccessFields_Emails_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_Delete>
  fields?: Maybe<FormsDocAccessFields_Emails_Fields>
  read?: Maybe<FormsDocAccessFields_Emails_Read>
  update?: Maybe<FormsDocAccessFields_Emails_Update>
}

export type FormsDocAccessFields_Emails_Create = {
  __typename?: 'FormsDocAccessFields_emails_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Delete = {
  __typename?: 'FormsDocAccessFields_emails_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Fields = {
  __typename?: 'FormsDocAccessFields_emails_Fields'
  bcc?: Maybe<FormsDocAccessFields_Emails_Bcc>
  cc?: Maybe<FormsDocAccessFields_Emails_Cc>
  emailFrom?: Maybe<FormsDocAccessFields_Emails_EmailFrom>
  emailTo?: Maybe<FormsDocAccessFields_Emails_EmailTo>
  id?: Maybe<FormsDocAccessFields_Emails_Id>
  message?: Maybe<FormsDocAccessFields_Emails_Message>
  replyTo?: Maybe<FormsDocAccessFields_Emails_ReplyTo>
  subject?: Maybe<FormsDocAccessFields_Emails_Subject>
}

export type FormsDocAccessFields_Emails_Read = {
  __typename?: 'FormsDocAccessFields_emails_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Update = {
  __typename?: 'FormsDocAccessFields_emails_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Bcc = {
  __typename?: 'FormsDocAccessFields_emails_bcc'
  create?: Maybe<FormsDocAccessFields_Emails_Bcc_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_Bcc_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_Bcc_Read>
  update?: Maybe<FormsDocAccessFields_Emails_Bcc_Update>
}

export type FormsDocAccessFields_Emails_Bcc_Create = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Bcc_Delete = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Bcc_Read = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Bcc_Update = {
  __typename?: 'FormsDocAccessFields_emails_bcc_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Cc = {
  __typename?: 'FormsDocAccessFields_emails_cc'
  create?: Maybe<FormsDocAccessFields_Emails_Cc_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_Cc_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_Cc_Read>
  update?: Maybe<FormsDocAccessFields_Emails_Cc_Update>
}

export type FormsDocAccessFields_Emails_Cc_Create = {
  __typename?: 'FormsDocAccessFields_emails_cc_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Cc_Delete = {
  __typename?: 'FormsDocAccessFields_emails_cc_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Cc_Read = {
  __typename?: 'FormsDocAccessFields_emails_cc_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Cc_Update = {
  __typename?: 'FormsDocAccessFields_emails_cc_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailFrom = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom'
  create?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Read>
  update?: Maybe<FormsDocAccessFields_Emails_EmailFrom_Update>
}

export type FormsDocAccessFields_Emails_EmailFrom_Create = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailFrom_Delete = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailFrom_Read = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailFrom_Update = {
  __typename?: 'FormsDocAccessFields_emails_emailFrom_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailTo = {
  __typename?: 'FormsDocAccessFields_emails_emailTo'
  create?: Maybe<FormsDocAccessFields_Emails_EmailTo_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_EmailTo_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_EmailTo_Read>
  update?: Maybe<FormsDocAccessFields_Emails_EmailTo_Update>
}

export type FormsDocAccessFields_Emails_EmailTo_Create = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailTo_Delete = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailTo_Read = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_EmailTo_Update = {
  __typename?: 'FormsDocAccessFields_emails_emailTo_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Id = {
  __typename?: 'FormsDocAccessFields_emails_id'
  create?: Maybe<FormsDocAccessFields_Emails_Id_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_Id_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_Id_Read>
  update?: Maybe<FormsDocAccessFields_Emails_Id_Update>
}

export type FormsDocAccessFields_Emails_Id_Create = {
  __typename?: 'FormsDocAccessFields_emails_id_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Id_Delete = {
  __typename?: 'FormsDocAccessFields_emails_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Id_Read = {
  __typename?: 'FormsDocAccessFields_emails_id_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Id_Update = {
  __typename?: 'FormsDocAccessFields_emails_id_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Message = {
  __typename?: 'FormsDocAccessFields_emails_message'
  create?: Maybe<FormsDocAccessFields_Emails_Message_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_Message_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_Message_Read>
  update?: Maybe<FormsDocAccessFields_Emails_Message_Update>
}

export type FormsDocAccessFields_Emails_Message_Create = {
  __typename?: 'FormsDocAccessFields_emails_message_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Message_Delete = {
  __typename?: 'FormsDocAccessFields_emails_message_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Message_Read = {
  __typename?: 'FormsDocAccessFields_emails_message_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Message_Update = {
  __typename?: 'FormsDocAccessFields_emails_message_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_ReplyTo = {
  __typename?: 'FormsDocAccessFields_emails_replyTo'
  create?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Read>
  update?: Maybe<FormsDocAccessFields_Emails_ReplyTo_Update>
}

export type FormsDocAccessFields_Emails_ReplyTo_Create = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_ReplyTo_Delete = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_ReplyTo_Read = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_ReplyTo_Update = {
  __typename?: 'FormsDocAccessFields_emails_replyTo_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Subject = {
  __typename?: 'FormsDocAccessFields_emails_subject'
  create?: Maybe<FormsDocAccessFields_Emails_Subject_Create>
  delete?: Maybe<FormsDocAccessFields_Emails_Subject_Delete>
  read?: Maybe<FormsDocAccessFields_Emails_Subject_Read>
  update?: Maybe<FormsDocAccessFields_Emails_Subject_Update>
}

export type FormsDocAccessFields_Emails_Subject_Create = {
  __typename?: 'FormsDocAccessFields_emails_subject_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Subject_Delete = {
  __typename?: 'FormsDocAccessFields_emails_subject_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Subject_Read = {
  __typename?: 'FormsDocAccessFields_emails_subject_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Emails_Subject_Update = {
  __typename?: 'FormsDocAccessFields_emails_subject_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Fields = {
  __typename?: 'FormsDocAccessFields_fields'
  create?: Maybe<FormsDocAccessFields_Fields_Create>
  delete?: Maybe<FormsDocAccessFields_Fields_Delete>
  read?: Maybe<FormsDocAccessFields_Fields_Read>
  update?: Maybe<FormsDocAccessFields_Fields_Update>
}

export type FormsDocAccessFields_Fields_Create = {
  __typename?: 'FormsDocAccessFields_fields_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Fields_Delete = {
  __typename?: 'FormsDocAccessFields_fields_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Fields_Read = {
  __typename?: 'FormsDocAccessFields_fields_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Fields_Update = {
  __typename?: 'FormsDocAccessFields_fields_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect = {
  __typename?: 'FormsDocAccessFields_redirect'
  create?: Maybe<FormsDocAccessFields_Redirect_Create>
  delete?: Maybe<FormsDocAccessFields_Redirect_Delete>
  fields?: Maybe<FormsDocAccessFields_Redirect_Fields>
  read?: Maybe<FormsDocAccessFields_Redirect_Read>
  update?: Maybe<FormsDocAccessFields_Redirect_Update>
}

export type FormsDocAccessFields_Redirect_Create = {
  __typename?: 'FormsDocAccessFields_redirect_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Delete = {
  __typename?: 'FormsDocAccessFields_redirect_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Fields = {
  __typename?: 'FormsDocAccessFields_redirect_Fields'
  url?: Maybe<FormsDocAccessFields_Redirect_Url>
}

export type FormsDocAccessFields_Redirect_Read = {
  __typename?: 'FormsDocAccessFields_redirect_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Update = {
  __typename?: 'FormsDocAccessFields_redirect_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Url = {
  __typename?: 'FormsDocAccessFields_redirect_url'
  create?: Maybe<FormsDocAccessFields_Redirect_Url_Create>
  delete?: Maybe<FormsDocAccessFields_Redirect_Url_Delete>
  read?: Maybe<FormsDocAccessFields_Redirect_Url_Read>
  update?: Maybe<FormsDocAccessFields_Redirect_Url_Update>
}

export type FormsDocAccessFields_Redirect_Url_Create = {
  __typename?: 'FormsDocAccessFields_redirect_url_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Url_Delete = {
  __typename?: 'FormsDocAccessFields_redirect_url_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Url_Read = {
  __typename?: 'FormsDocAccessFields_redirect_url_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Redirect_Url_Update = {
  __typename?: 'FormsDocAccessFields_redirect_url_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_SubmitButtonLabel = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel'
  create?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Create>
  delete?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Delete>
  read?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Read>
  update?: Maybe<FormsDocAccessFields_SubmitButtonLabel_Update>
}

export type FormsDocAccessFields_SubmitButtonLabel_Create = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_SubmitButtonLabel_Delete = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_SubmitButtonLabel_Read = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_SubmitButtonLabel_Update = {
  __typename?: 'FormsDocAccessFields_submitButtonLabel_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Title = {
  __typename?: 'FormsDocAccessFields_title'
  create?: Maybe<FormsDocAccessFields_Title_Create>
  delete?: Maybe<FormsDocAccessFields_Title_Delete>
  read?: Maybe<FormsDocAccessFields_Title_Read>
  update?: Maybe<FormsDocAccessFields_Title_Update>
}

export type FormsDocAccessFields_Title_Create = {
  __typename?: 'FormsDocAccessFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Title_Delete = {
  __typename?: 'FormsDocAccessFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Title_Read = {
  __typename?: 'FormsDocAccessFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_Title_Update = {
  __typename?: 'FormsDocAccessFields_title_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_UpdatedAt = {
  __typename?: 'FormsDocAccessFields_updatedAt'
  create?: Maybe<FormsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<FormsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<FormsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<FormsDocAccessFields_UpdatedAt_Update>
}

export type FormsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'FormsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'FormsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'FormsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'FormsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields = {
  __typename?: 'FormsFields'
  confirmationMessage?: Maybe<FormsFields_ConfirmationMessage>
  confirmationType?: Maybe<FormsFields_ConfirmationType>
  createdAt?: Maybe<FormsFields_CreatedAt>
  emails?: Maybe<FormsFields_Emails>
  fields?: Maybe<FormsFields_Fields>
  redirect?: Maybe<FormsFields_Redirect>
  submitButtonLabel?: Maybe<FormsFields_SubmitButtonLabel>
  title?: Maybe<FormsFields_Title>
  updatedAt?: Maybe<FormsFields_UpdatedAt>
}

export type FormsFields_ConfirmationMessage = {
  __typename?: 'FormsFields_confirmationMessage'
  create?: Maybe<FormsFields_ConfirmationMessage_Create>
  delete?: Maybe<FormsFields_ConfirmationMessage_Delete>
  read?: Maybe<FormsFields_ConfirmationMessage_Read>
  update?: Maybe<FormsFields_ConfirmationMessage_Update>
}

export type FormsFields_ConfirmationMessage_Create = {
  __typename?: 'FormsFields_confirmationMessage_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationMessage_Delete = {
  __typename?: 'FormsFields_confirmationMessage_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationMessage_Read = {
  __typename?: 'FormsFields_confirmationMessage_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationMessage_Update = {
  __typename?: 'FormsFields_confirmationMessage_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationType = {
  __typename?: 'FormsFields_confirmationType'
  create?: Maybe<FormsFields_ConfirmationType_Create>
  delete?: Maybe<FormsFields_ConfirmationType_Delete>
  read?: Maybe<FormsFields_ConfirmationType_Read>
  update?: Maybe<FormsFields_ConfirmationType_Update>
}

export type FormsFields_ConfirmationType_Create = {
  __typename?: 'FormsFields_confirmationType_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationType_Delete = {
  __typename?: 'FormsFields_confirmationType_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationType_Read = {
  __typename?: 'FormsFields_confirmationType_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_ConfirmationType_Update = {
  __typename?: 'FormsFields_confirmationType_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_CreatedAt = {
  __typename?: 'FormsFields_createdAt'
  create?: Maybe<FormsFields_CreatedAt_Create>
  delete?: Maybe<FormsFields_CreatedAt_Delete>
  read?: Maybe<FormsFields_CreatedAt_Read>
  update?: Maybe<FormsFields_CreatedAt_Update>
}

export type FormsFields_CreatedAt_Create = {
  __typename?: 'FormsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_CreatedAt_Delete = {
  __typename?: 'FormsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_CreatedAt_Read = {
  __typename?: 'FormsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_CreatedAt_Update = {
  __typename?: 'FormsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails = {
  __typename?: 'FormsFields_emails'
  create?: Maybe<FormsFields_Emails_Create>
  delete?: Maybe<FormsFields_Emails_Delete>
  fields?: Maybe<FormsFields_Emails_Fields>
  read?: Maybe<FormsFields_Emails_Read>
  update?: Maybe<FormsFields_Emails_Update>
}

export type FormsFields_Emails_Create = {
  __typename?: 'FormsFields_emails_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Delete = {
  __typename?: 'FormsFields_emails_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Fields = {
  __typename?: 'FormsFields_emails_Fields'
  bcc?: Maybe<FormsFields_Emails_Bcc>
  cc?: Maybe<FormsFields_Emails_Cc>
  emailFrom?: Maybe<FormsFields_Emails_EmailFrom>
  emailTo?: Maybe<FormsFields_Emails_EmailTo>
  id?: Maybe<FormsFields_Emails_Id>
  message?: Maybe<FormsFields_Emails_Message>
  replyTo?: Maybe<FormsFields_Emails_ReplyTo>
  subject?: Maybe<FormsFields_Emails_Subject>
}

export type FormsFields_Emails_Read = {
  __typename?: 'FormsFields_emails_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Update = {
  __typename?: 'FormsFields_emails_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Bcc = {
  __typename?: 'FormsFields_emails_bcc'
  create?: Maybe<FormsFields_Emails_Bcc_Create>
  delete?: Maybe<FormsFields_Emails_Bcc_Delete>
  read?: Maybe<FormsFields_Emails_Bcc_Read>
  update?: Maybe<FormsFields_Emails_Bcc_Update>
}

export type FormsFields_Emails_Bcc_Create = {
  __typename?: 'FormsFields_emails_bcc_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Bcc_Delete = {
  __typename?: 'FormsFields_emails_bcc_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Bcc_Read = {
  __typename?: 'FormsFields_emails_bcc_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Bcc_Update = {
  __typename?: 'FormsFields_emails_bcc_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Cc = {
  __typename?: 'FormsFields_emails_cc'
  create?: Maybe<FormsFields_Emails_Cc_Create>
  delete?: Maybe<FormsFields_Emails_Cc_Delete>
  read?: Maybe<FormsFields_Emails_Cc_Read>
  update?: Maybe<FormsFields_Emails_Cc_Update>
}

export type FormsFields_Emails_Cc_Create = {
  __typename?: 'FormsFields_emails_cc_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Cc_Delete = {
  __typename?: 'FormsFields_emails_cc_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Cc_Read = {
  __typename?: 'FormsFields_emails_cc_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Cc_Update = {
  __typename?: 'FormsFields_emails_cc_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailFrom = {
  __typename?: 'FormsFields_emails_emailFrom'
  create?: Maybe<FormsFields_Emails_EmailFrom_Create>
  delete?: Maybe<FormsFields_Emails_EmailFrom_Delete>
  read?: Maybe<FormsFields_Emails_EmailFrom_Read>
  update?: Maybe<FormsFields_Emails_EmailFrom_Update>
}

export type FormsFields_Emails_EmailFrom_Create = {
  __typename?: 'FormsFields_emails_emailFrom_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailFrom_Delete = {
  __typename?: 'FormsFields_emails_emailFrom_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailFrom_Read = {
  __typename?: 'FormsFields_emails_emailFrom_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailFrom_Update = {
  __typename?: 'FormsFields_emails_emailFrom_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailTo = {
  __typename?: 'FormsFields_emails_emailTo'
  create?: Maybe<FormsFields_Emails_EmailTo_Create>
  delete?: Maybe<FormsFields_Emails_EmailTo_Delete>
  read?: Maybe<FormsFields_Emails_EmailTo_Read>
  update?: Maybe<FormsFields_Emails_EmailTo_Update>
}

export type FormsFields_Emails_EmailTo_Create = {
  __typename?: 'FormsFields_emails_emailTo_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailTo_Delete = {
  __typename?: 'FormsFields_emails_emailTo_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailTo_Read = {
  __typename?: 'FormsFields_emails_emailTo_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_EmailTo_Update = {
  __typename?: 'FormsFields_emails_emailTo_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Id = {
  __typename?: 'FormsFields_emails_id'
  create?: Maybe<FormsFields_Emails_Id_Create>
  delete?: Maybe<FormsFields_Emails_Id_Delete>
  read?: Maybe<FormsFields_Emails_Id_Read>
  update?: Maybe<FormsFields_Emails_Id_Update>
}

export type FormsFields_Emails_Id_Create = {
  __typename?: 'FormsFields_emails_id_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Id_Delete = {
  __typename?: 'FormsFields_emails_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Id_Read = {
  __typename?: 'FormsFields_emails_id_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Id_Update = {
  __typename?: 'FormsFields_emails_id_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Message = {
  __typename?: 'FormsFields_emails_message'
  create?: Maybe<FormsFields_Emails_Message_Create>
  delete?: Maybe<FormsFields_Emails_Message_Delete>
  read?: Maybe<FormsFields_Emails_Message_Read>
  update?: Maybe<FormsFields_Emails_Message_Update>
}

export type FormsFields_Emails_Message_Create = {
  __typename?: 'FormsFields_emails_message_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Message_Delete = {
  __typename?: 'FormsFields_emails_message_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Message_Read = {
  __typename?: 'FormsFields_emails_message_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Message_Update = {
  __typename?: 'FormsFields_emails_message_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_ReplyTo = {
  __typename?: 'FormsFields_emails_replyTo'
  create?: Maybe<FormsFields_Emails_ReplyTo_Create>
  delete?: Maybe<FormsFields_Emails_ReplyTo_Delete>
  read?: Maybe<FormsFields_Emails_ReplyTo_Read>
  update?: Maybe<FormsFields_Emails_ReplyTo_Update>
}

export type FormsFields_Emails_ReplyTo_Create = {
  __typename?: 'FormsFields_emails_replyTo_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_ReplyTo_Delete = {
  __typename?: 'FormsFields_emails_replyTo_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_ReplyTo_Read = {
  __typename?: 'FormsFields_emails_replyTo_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_ReplyTo_Update = {
  __typename?: 'FormsFields_emails_replyTo_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Subject = {
  __typename?: 'FormsFields_emails_subject'
  create?: Maybe<FormsFields_Emails_Subject_Create>
  delete?: Maybe<FormsFields_Emails_Subject_Delete>
  read?: Maybe<FormsFields_Emails_Subject_Read>
  update?: Maybe<FormsFields_Emails_Subject_Update>
}

export type FormsFields_Emails_Subject_Create = {
  __typename?: 'FormsFields_emails_subject_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Subject_Delete = {
  __typename?: 'FormsFields_emails_subject_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Subject_Read = {
  __typename?: 'FormsFields_emails_subject_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Emails_Subject_Update = {
  __typename?: 'FormsFields_emails_subject_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Fields = {
  __typename?: 'FormsFields_fields'
  create?: Maybe<FormsFields_Fields_Create>
  delete?: Maybe<FormsFields_Fields_Delete>
  read?: Maybe<FormsFields_Fields_Read>
  update?: Maybe<FormsFields_Fields_Update>
}

export type FormsFields_Fields_Create = {
  __typename?: 'FormsFields_fields_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Fields_Delete = {
  __typename?: 'FormsFields_fields_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Fields_Read = {
  __typename?: 'FormsFields_fields_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Fields_Update = {
  __typename?: 'FormsFields_fields_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect = {
  __typename?: 'FormsFields_redirect'
  create?: Maybe<FormsFields_Redirect_Create>
  delete?: Maybe<FormsFields_Redirect_Delete>
  fields?: Maybe<FormsFields_Redirect_Fields>
  read?: Maybe<FormsFields_Redirect_Read>
  update?: Maybe<FormsFields_Redirect_Update>
}

export type FormsFields_Redirect_Create = {
  __typename?: 'FormsFields_redirect_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Delete = {
  __typename?: 'FormsFields_redirect_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Fields = {
  __typename?: 'FormsFields_redirect_Fields'
  url?: Maybe<FormsFields_Redirect_Url>
}

export type FormsFields_Redirect_Read = {
  __typename?: 'FormsFields_redirect_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Update = {
  __typename?: 'FormsFields_redirect_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Url = {
  __typename?: 'FormsFields_redirect_url'
  create?: Maybe<FormsFields_Redirect_Url_Create>
  delete?: Maybe<FormsFields_Redirect_Url_Delete>
  read?: Maybe<FormsFields_Redirect_Url_Read>
  update?: Maybe<FormsFields_Redirect_Url_Update>
}

export type FormsFields_Redirect_Url_Create = {
  __typename?: 'FormsFields_redirect_url_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Url_Delete = {
  __typename?: 'FormsFields_redirect_url_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Url_Read = {
  __typename?: 'FormsFields_redirect_url_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Redirect_Url_Update = {
  __typename?: 'FormsFields_redirect_url_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_SubmitButtonLabel = {
  __typename?: 'FormsFields_submitButtonLabel'
  create?: Maybe<FormsFields_SubmitButtonLabel_Create>
  delete?: Maybe<FormsFields_SubmitButtonLabel_Delete>
  read?: Maybe<FormsFields_SubmitButtonLabel_Read>
  update?: Maybe<FormsFields_SubmitButtonLabel_Update>
}

export type FormsFields_SubmitButtonLabel_Create = {
  __typename?: 'FormsFields_submitButtonLabel_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_SubmitButtonLabel_Delete = {
  __typename?: 'FormsFields_submitButtonLabel_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_SubmitButtonLabel_Read = {
  __typename?: 'FormsFields_submitButtonLabel_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_SubmitButtonLabel_Update = {
  __typename?: 'FormsFields_submitButtonLabel_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Title = {
  __typename?: 'FormsFields_title'
  create?: Maybe<FormsFields_Title_Create>
  delete?: Maybe<FormsFields_Title_Delete>
  read?: Maybe<FormsFields_Title_Read>
  update?: Maybe<FormsFields_Title_Update>
}

export type FormsFields_Title_Create = {
  __typename?: 'FormsFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Title_Delete = {
  __typename?: 'FormsFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Title_Read = {
  __typename?: 'FormsFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_Title_Update = {
  __typename?: 'FormsFields_title_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_UpdatedAt = {
  __typename?: 'FormsFields_updatedAt'
  create?: Maybe<FormsFields_UpdatedAt_Create>
  delete?: Maybe<FormsFields_UpdatedAt_Delete>
  read?: Maybe<FormsFields_UpdatedAt_Read>
  update?: Maybe<FormsFields_UpdatedAt_Update>
}

export type FormsFields_UpdatedAt_Create = {
  __typename?: 'FormsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_UpdatedAt_Delete = {
  __typename?: 'FormsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_UpdatedAt_Read = {
  __typename?: 'FormsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type FormsFields_UpdatedAt_Update = {
  __typename?: 'FormsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type FormsReadAccess = {
  __typename?: 'FormsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsReadDocAccess = {
  __typename?: 'FormsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsUpdateAccess = {
  __typename?: 'FormsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type FormsUpdateDocAccess = {
  __typename?: 'FormsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export enum LocaleInputType {
  En = 'en',
  Nl = 'nl',
  Tr = 'tr',
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
  id: Scalars['String']['output']
  mimeType?: Maybe<Scalars['String']['output']>
  thumbnailURL?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  url?: Maybe<Scalars['String']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type MediaBlock = {
  __typename?: 'MediaBlock'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  media?: Maybe<Media>
}

export type MediaBlockMediaArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
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
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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

export type Message = {
  __typename?: 'Message'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  message?: Maybe<Scalars['JSON']['output']>
}

export type MessageMessageArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type Mutation = {
  __typename?: 'Mutation'
  createAnnouncement?: Maybe<Announcement>
  createDonation?: Maybe<Donation>
  createForm?: Maybe<Form>
  createFormSubmission?: Maybe<FormSubmission>
  createMedia?: Maybe<Media>
  createPage?: Maybe<Page>
  createPayloadJob?: Maybe<PayloadJob>
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>
  createPayloadPreference?: Maybe<PayloadPreference>
  createUser?: Maybe<User>
  deleteAnnouncement?: Maybe<Announcement>
  deleteDonation?: Maybe<Donation>
  deleteForm?: Maybe<Form>
  deleteFormSubmission?: Maybe<FormSubmission>
  deleteMedia?: Maybe<Media>
  deletePage?: Maybe<Page>
  deletePayloadJob?: Maybe<PayloadJob>
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  deletePayloadPreference?: Maybe<PayloadPreference>
  deleteUser?: Maybe<User>
  duplicateAnnouncement?: Maybe<Announcement>
  duplicateDonation?: Maybe<Donation>
  duplicateForm?: Maybe<Form>
  duplicateFormSubmission?: Maybe<FormSubmission>
  duplicateMedia?: Maybe<Media>
  duplicatePage?: Maybe<Page>
  duplicatePayloadJob?: Maybe<PayloadJob>
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  duplicatePayloadPreference?: Maybe<PayloadPreference>
  forgotPasswordUser: Scalars['Boolean']['output']
  loginUser?: Maybe<UsersLoginResult>
  logoutUser?: Maybe<Scalars['String']['output']>
  refreshTokenUser?: Maybe<UsersRefreshedUser>
  resetPasswordUser?: Maybe<UsersResetPassword>
  restoreVersionAnnouncement?: Maybe<Announcement>
  restoreVersionPage?: Maybe<Page>
  unlockUser: Scalars['Boolean']['output']
  updateAnnouncement?: Maybe<Announcement>
  updateDonation?: Maybe<Donation>
  updateForm?: Maybe<Form>
  updateFormSubmission?: Maybe<FormSubmission>
  updateMedia?: Maybe<Media>
  updatePage?: Maybe<Page>
  updatePayloadJob?: Maybe<PayloadJob>
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  updatePayloadPreference?: Maybe<PayloadPreference>
  updateUser?: Maybe<User>
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>
}

export type MutationCreateAnnouncementArgs = {
  data: MutationAnnouncementInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreateDonationArgs = {
  data: MutationDonationInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreateFormArgs = {
  data: MutationFormInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreateFormSubmissionArgs = {
  data: MutationFormSubmissionInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreateMediaArgs = {
  data: MutationMediaInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreatePageArgs = {
  data: MutationPageInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreatePayloadJobArgs = {
  data: MutationPayloadJobInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationCreateUserArgs = {
  data: MutationUserInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type MutationDeleteAnnouncementArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeleteDonationArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeleteFormArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeleteFormSubmissionArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeletePageArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeletePayloadJobArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input']
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationDuplicateAnnouncementArgs = {
  data: MutationAnnouncementInput
  id: Scalars['String']['input']
}

export type MutationDuplicateDonationArgs = {
  data: MutationDonationInput
  id: Scalars['String']['input']
}

export type MutationDuplicateFormArgs = {
  data: MutationFormInput
  id: Scalars['String']['input']
}

export type MutationDuplicateFormSubmissionArgs = {
  data: MutationFormSubmissionInput
  id: Scalars['String']['input']
}

export type MutationDuplicateMediaArgs = {
  data: MutationMediaInput
  id: Scalars['String']['input']
}

export type MutationDuplicatePageArgs = {
  data: MutationPageInput
  id: Scalars['String']['input']
}

export type MutationDuplicatePayloadJobArgs = {
  data: MutationPayloadJobInput
  id: Scalars['String']['input']
}

export type MutationDuplicatePayloadLockedDocumentArgs = {
  data: MutationPayloadLockedDocumentInput
  id: Scalars['String']['input']
}

export type MutationDuplicatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput
  id: Scalars['String']['input']
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

export type MutationLogoutUserArgs = {
  allSessions?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['String']['input']>
}

export type MutationRestoreVersionAnnouncementArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['String']['input']>
}

export type MutationRestoreVersionPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['String']['input']>
}

export type MutationUnlockUserArgs = {
  email: Scalars['String']['input']
}

export type MutationUpdateAnnouncementArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationAnnouncementUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdateDonationArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationDonationUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdateFormArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationFormUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdateFormSubmissionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationFormSubmissionUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationMediaUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPageUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdatePayloadJobArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadJobUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadLockedDocumentUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadPreferenceUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationUserUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>
}

export type Number = {
  __typename?: 'Number'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  defaultValue?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type Page = {
  __typename?: 'Page'
  _status?: Maybe<Page__Status>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  hero?: Maybe<Page_Hero>
  id: Scalars['String']['output']
  layout: Array<Page_Layout>
  meta?: Maybe<Page_Meta>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  slugLock?: Maybe<Scalars['Boolean']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PageUpdate_Hero_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<PageUpdate_Hero_Links_Link_ReferenceRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PageUpdate_Hero_Links_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages',
}

export enum PageUpdate_Hero_Links_Link_Appearance_MutationInput {
  Default = 'default',
  Outline = 'outline',
}

export enum PageUpdate_Hero_Type_MutationInput {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type PageVersion = {
  __typename?: 'PageVersion'
  autosave?: Maybe<Scalars['Boolean']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  latest?: Maybe<Scalars['Boolean']['output']>
  parent?: Maybe<Page>
  publishedLocale?: Maybe<PageVersion_PublishedLocale>
  snapshot?: Maybe<Scalars['Boolean']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  version?: Maybe<PageVersion_Version>
}

export type PageVersionParentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type PageVersion_Version = {
  __typename?: 'PageVersion_Version'
  _status?: Maybe<PageVersion_Version__Status>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  hero?: Maybe<PageVersion_Version_Hero>
  layout: Array<PageVersion_Version_Layout>
  meta?: Maybe<PageVersion_Version_Meta>
  publishedAt?: Maybe<Scalars['DateTime']['output']>
  slug?: Maybe<Scalars['String']['output']>
  slugLock?: Maybe<Scalars['Boolean']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PageVersion_Version_Hero = {
  __typename?: 'PageVersion_Version_Hero'
  links?: Maybe<Array<PageVersion_Version_Hero_Links>>
  media?: Maybe<Media>
  richText?: Maybe<Scalars['JSON']['output']>
  type?: Maybe<PageVersion_Version_Hero_Type>
}

export type PageVersion_Version_HeroMediaArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type PageVersion_Version_HeroRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type PageVersion_Version_Hero_Links = {
  __typename?: 'PageVersion_Version_Hero_Links'
  id?: Maybe<Scalars['String']['output']>
  link?: Maybe<PageVersion_Version_Hero_Links_Link>
}

export type PageVersion_Version_Hero_Links_Link = {
  __typename?: 'PageVersion_Version_Hero_Links_Link'
  appearance?: Maybe<PageVersion_Version_Hero_Links_Link_Appearance>
  label?: Maybe<Scalars['String']['output']>
  newTab?: Maybe<Scalars['Boolean']['output']>
  reference?: Maybe<PageVersion_Version_Hero_Links_Link_Reference_Relationship>
  type?: Maybe<PageVersion_Version_Hero_Links_Link_Type>
  url?: Maybe<Scalars['String']['output']>
}

export type PageVersion_Version_Hero_Links_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type PageVersion_Version_Hero_Links_Link_Reference = Page

export enum PageVersion_Version_Hero_Links_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type PageVersion_Version_Hero_Links_Link_Reference_Relationship = {
  __typename?: 'PageVersion_Version_Hero_Links_Link_Reference_Relationship'
  relationTo?: Maybe<PageVersion_Version_Hero_Links_Link_Reference_RelationTo>
  value?: Maybe<PageVersion_Version_Hero_Links_Link_Reference>
}

export enum PageVersion_Version_Hero_Links_Link_Appearance {
  Default = 'default',
  Outline = 'outline',
}

export enum PageVersion_Version_Hero_Links_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export enum PageVersion_Version_Hero_Type {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type PageVersion_Version_Layout = Container | FormBlock | MediaBlock | Section

export type PageVersion_Version_Meta = {
  __typename?: 'PageVersion_Version_Meta'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<Media>
  title?: Maybe<Scalars['String']['output']>
}

export type PageVersion_Version_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum PageVersion_PublishedLocale {
  En = 'en',
  Nl = 'nl',
  Tr = 'tr',
}

export type Page_Hero = {
  __typename?: 'Page_Hero'
  links?: Maybe<Array<Page_Hero_Links>>
  media?: Maybe<Media>
  richText?: Maybe<Scalars['JSON']['output']>
  type?: Maybe<Page_Hero_Type>
}

export type Page_HeroMediaArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type Page_HeroRichTextArgs = {
  depth?: InputMaybe<Scalars['Int']['input']>
}

export type Page_Hero_Links = {
  __typename?: 'Page_Hero_Links'
  id?: Maybe<Scalars['String']['output']>
  link?: Maybe<Page_Hero_Links_Link>
}

export type Page_Hero_Links_Link = {
  __typename?: 'Page_Hero_Links_Link'
  appearance?: Maybe<Page_Hero_Links_Link_Appearance>
  label?: Maybe<Scalars['String']['output']>
  newTab?: Maybe<Scalars['Boolean']['output']>
  reference?: Maybe<Page_Hero_Links_Link_Reference_Relationship>
  type?: Maybe<Page_Hero_Links_Link_Type>
  url?: Maybe<Scalars['String']['output']>
}

export type Page_Hero_Links_LinkReferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type Page_Hero_Links_Link_Reference = Page

export type Page_Hero_Links_Link_ReferenceRelationshipInput = {
  relationTo?: InputMaybe<Page_Hero_Links_Link_ReferenceRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum Page_Hero_Links_Link_ReferenceRelationshipInputRelationTo {
  Pages = 'pages',
}

export enum Page_Hero_Links_Link_Reference_RelationTo {
  Pages = 'pages',
}

export type Page_Hero_Links_Link_Reference_Relationship = {
  __typename?: 'Page_Hero_Links_Link_Reference_Relationship'
  relationTo?: Maybe<Page_Hero_Links_Link_Reference_RelationTo>
  value?: Maybe<Page_Hero_Links_Link_Reference>
}

export enum Page_Hero_Links_Link_Appearance {
  Default = 'default',
  Outline = 'outline',
}

export enum Page_Hero_Links_Link_Appearance_MutationInput {
  Default = 'default',
  Outline = 'outline',
}

export enum Page_Hero_Links_Link_Type {
  Custom = 'custom',
  Reference = 'reference',
}

export enum Page_Hero_Type {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export enum Page_Hero_Type_MutationInput {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type Page_Layout = Container | FormBlock | MediaBlock | Section

export type Page_Meta = {
  __typename?: 'Page_Meta'
  description?: Maybe<Scalars['String']['output']>
  image?: Maybe<Media>
  title?: Maybe<Scalars['String']['output']>
}

export type Page_MetaImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export enum Page__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum Page__Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export enum Page__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type Page__Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>
  equals?: InputMaybe<Page__Status_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>
  not_equals?: InputMaybe<Page__Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<Page__Status_Input>>>
}

export type Page_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Page_Hero__Links__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export enum Page_Hero__Links__Link__Appearance_Input {
  Default = 'default',
  Outline = 'outline',
}

export type Page_Hero__Links__Link__Appearance_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page_Hero__Links__Link__Appearance_Input>>>
  equals?: InputMaybe<Page_Hero__Links__Link__Appearance_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Page_Hero__Links__Link__Appearance_Input>>>
  not_equals?: InputMaybe<Page_Hero__Links__Link__Appearance_Input>
  not_in?: InputMaybe<Array<InputMaybe<Page_Hero__Links__Link__Appearance_Input>>>
}

export type Page_Hero__Links__Link__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_Hero__Links__Link__NewTab_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type Page_Hero__Links__Link__Reference_Relation = {
  relationTo?: InputMaybe<Page_Hero__Links__Link__Reference_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum Page_Hero__Links__Link__Reference_Relation_RelationTo {
  Pages = 'pages',
}

export enum Page_Hero__Links__Link__Type_Input {
  Custom = 'custom',
  Reference = 'reference',
}

export type Page_Hero__Links__Link__Type_Operator = {
  contains?: InputMaybe<Page_Hero__Links__Link__Type_Input>
  equals?: InputMaybe<Page_Hero__Links__Link__Type_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Page_Hero__Links__Link__Type_Input>
  not_equals?: InputMaybe<Page_Hero__Links__Link__Type_Input>
}

export type Page_Hero__Links__Link__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_Hero__Media_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type Page_Hero__RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
}

export enum Page_Hero__Type_Input {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type Page_Hero__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<Page_Hero__Type_Input>>>
  equals?: InputMaybe<Page_Hero__Type_Input>
  in?: InputMaybe<Array<InputMaybe<Page_Hero__Type_Input>>>
  not_equals?: InputMaybe<Page_Hero__Type_Input>
  not_in?: InputMaybe<Array<InputMaybe<Page_Hero__Type_Input>>>
}

export type Page_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
}

export type Page_Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type Page_Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Page_SlugLock_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type Page_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Page_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type Page_Where = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>
  _status?: InputMaybe<Page__Status_Operator>
  createdAt?: InputMaybe<Page_CreatedAt_Operator>
  hero__links__id?: InputMaybe<Page_Hero__Links__Id_Operator>
  hero__links__link__appearance?: InputMaybe<Page_Hero__Links__Link__Appearance_Operator>
  hero__links__link__label?: InputMaybe<Page_Hero__Links__Link__Label_Operator>
  hero__links__link__newTab?: InputMaybe<Page_Hero__Links__Link__NewTab_Operator>
  hero__links__link__reference?: InputMaybe<Page_Hero__Links__Link__Reference_Relation>
  hero__links__link__type?: InputMaybe<Page_Hero__Links__Link__Type_Operator>
  hero__links__link__url?: InputMaybe<Page_Hero__Links__Link__Url_Operator>
  hero__media?: InputMaybe<Page_Hero__Media_Operator>
  hero__richText?: InputMaybe<Page_Hero__RichText_Operator>
  hero__type?: InputMaybe<Page_Hero__Type_Operator>
  id?: InputMaybe<Page_Id_Operator>
  meta__description?: InputMaybe<Page_Meta__Description_Operator>
  meta__image?: InputMaybe<Page_Meta__Image_Operator>
  meta__title?: InputMaybe<Page_Meta__Title_Operator>
  publishedAt?: InputMaybe<Page_PublishedAt_Operator>
  slug?: InputMaybe<Page_Slug_Operator>
  slugLock?: InputMaybe<Page_SlugLock_Operator>
  title?: InputMaybe<Page_Title_Operator>
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>
}

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>
  _status?: InputMaybe<Page__Status_Operator>
  createdAt?: InputMaybe<Page_CreatedAt_Operator>
  hero__links__id?: InputMaybe<Page_Hero__Links__Id_Operator>
  hero__links__link__appearance?: InputMaybe<Page_Hero__Links__Link__Appearance_Operator>
  hero__links__link__label?: InputMaybe<Page_Hero__Links__Link__Label_Operator>
  hero__links__link__newTab?: InputMaybe<Page_Hero__Links__Link__NewTab_Operator>
  hero__links__link__reference?: InputMaybe<Page_Hero__Links__Link__Reference_Relation>
  hero__links__link__type?: InputMaybe<Page_Hero__Links__Link__Type_Operator>
  hero__links__link__url?: InputMaybe<Page_Hero__Links__Link__Url_Operator>
  hero__media?: InputMaybe<Page_Hero__Media_Operator>
  hero__richText?: InputMaybe<Page_Hero__RichText_Operator>
  hero__type?: InputMaybe<Page_Hero__Type_Operator>
  id?: InputMaybe<Page_Id_Operator>
  meta__description?: InputMaybe<Page_Meta__Description_Operator>
  meta__image?: InputMaybe<Page_Meta__Image_Operator>
  meta__title?: InputMaybe<Page_Meta__Title_Operator>
  publishedAt?: InputMaybe<Page_PublishedAt_Operator>
  slug?: InputMaybe<Page_Slug_Operator>
  slugLock?: InputMaybe<Page_SlugLock_Operator>
  title?: InputMaybe<Page_Title_Operator>
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>
}

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>
  _status?: InputMaybe<Page__Status_Operator>
  createdAt?: InputMaybe<Page_CreatedAt_Operator>
  hero__links__id?: InputMaybe<Page_Hero__Links__Id_Operator>
  hero__links__link__appearance?: InputMaybe<Page_Hero__Links__Link__Appearance_Operator>
  hero__links__link__label?: InputMaybe<Page_Hero__Links__Link__Label_Operator>
  hero__links__link__newTab?: InputMaybe<Page_Hero__Links__Link__NewTab_Operator>
  hero__links__link__reference?: InputMaybe<Page_Hero__Links__Link__Reference_Relation>
  hero__links__link__type?: InputMaybe<Page_Hero__Links__Link__Type_Operator>
  hero__links__link__url?: InputMaybe<Page_Hero__Links__Link__Url_Operator>
  hero__media?: InputMaybe<Page_Hero__Media_Operator>
  hero__richText?: InputMaybe<Page_Hero__RichText_Operator>
  hero__type?: InputMaybe<Page_Hero__Type_Operator>
  id?: InputMaybe<Page_Id_Operator>
  meta__description?: InputMaybe<Page_Meta__Description_Operator>
  meta__image?: InputMaybe<Page_Meta__Image_Operator>
  meta__title?: InputMaybe<Page_Meta__Title_Operator>
  publishedAt?: InputMaybe<Page_PublishedAt_Operator>
  slug?: InputMaybe<Page_Slug_Operator>
  slugLock?: InputMaybe<Page_SlugLock_Operator>
  title?: InputMaybe<Page_Title_Operator>
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>
}

export type Pages = {
  __typename?: 'Pages'
  docs: Array<Page>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type PagesCreateAccess = {
  __typename?: 'PagesCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesCreateDocAccess = {
  __typename?: 'PagesCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesDeleteAccess = {
  __typename?: 'PagesDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesDeleteDocAccess = {
  __typename?: 'PagesDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesDocAccessFields = {
  __typename?: 'PagesDocAccessFields'
  _status?: Maybe<PagesDocAccessFields__Status>
  createdAt?: Maybe<PagesDocAccessFields_CreatedAt>
  hero?: Maybe<PagesDocAccessFields_Hero>
  layout?: Maybe<PagesDocAccessFields_Layout>
  meta?: Maybe<PagesDocAccessFields_Meta>
  publishedAt?: Maybe<PagesDocAccessFields_PublishedAt>
  slug?: Maybe<PagesDocAccessFields_Slug>
  slugLock?: Maybe<PagesDocAccessFields_SlugLock>
  title?: Maybe<PagesDocAccessFields_Title>
  updatedAt?: Maybe<PagesDocAccessFields_UpdatedAt>
}

export type PagesDocAccessFields__Status = {
  __typename?: 'PagesDocAccessFields__status'
  create?: Maybe<PagesDocAccessFields__Status_Create>
  delete?: Maybe<PagesDocAccessFields__Status_Delete>
  read?: Maybe<PagesDocAccessFields__Status_Read>
  update?: Maybe<PagesDocAccessFields__Status_Update>
}

export type PagesDocAccessFields__Status_Create = {
  __typename?: 'PagesDocAccessFields__status_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields__Status_Delete = {
  __typename?: 'PagesDocAccessFields__status_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields__Status_Read = {
  __typename?: 'PagesDocAccessFields__status_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields__Status_Update = {
  __typename?: 'PagesDocAccessFields__status_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_CreatedAt = {
  __typename?: 'PagesDocAccessFields_createdAt'
  create?: Maybe<PagesDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PagesDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PagesDocAccessFields_CreatedAt_Read>
  update?: Maybe<PagesDocAccessFields_CreatedAt_Update>
}

export type PagesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PagesDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PagesDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PagesDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero = {
  __typename?: 'PagesDocAccessFields_hero'
  create?: Maybe<PagesDocAccessFields_Hero_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Delete>
  fields?: Maybe<PagesDocAccessFields_Hero_Fields>
  read?: Maybe<PagesDocAccessFields_Hero_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Update>
}

export type PagesDocAccessFields_Hero_Create = {
  __typename?: 'PagesDocAccessFields_hero_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Delete = {
  __typename?: 'PagesDocAccessFields_hero_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Fields = {
  __typename?: 'PagesDocAccessFields_hero_Fields'
  links?: Maybe<PagesDocAccessFields_Hero_Links>
  media?: Maybe<PagesDocAccessFields_Hero_Media>
  richText?: Maybe<PagesDocAccessFields_Hero_RichText>
  type?: Maybe<PagesDocAccessFields_Hero_Type>
}

export type PagesDocAccessFields_Hero_Read = {
  __typename?: 'PagesDocAccessFields_hero_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Update = {
  __typename?: 'PagesDocAccessFields_hero_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links = {
  __typename?: 'PagesDocAccessFields_hero_links'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Delete>
  fields?: Maybe<PagesDocAccessFields_Hero_Links_Fields>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Update>
}

export type PagesDocAccessFields_Hero_Links_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Fields = {
  __typename?: 'PagesDocAccessFields_hero_links_Fields'
  id?: Maybe<PagesDocAccessFields_Hero_Links_Id>
  link?: Maybe<PagesDocAccessFields_Hero_Links_Link>
}

export type PagesDocAccessFields_Hero_Links_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Id = {
  __typename?: 'PagesDocAccessFields_hero_links_id'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Id_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Id_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Id_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Id_Update>
}

export type PagesDocAccessFields_Hero_Links_Id_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_id_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Id_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Id_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_id_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Id_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_id_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link = {
  __typename?: 'PagesDocAccessFields_hero_links_link'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_Delete>
  fields?: Maybe<PagesDocAccessFields_Hero_Links_Link_Fields>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Fields = {
  __typename?: 'PagesDocAccessFields_hero_links_link_Fields'
  appearance?: Maybe<PagesDocAccessFields_Hero_Links_Link_Appearance>
  label?: Maybe<PagesDocAccessFields_Hero_Links_Link_Label>
  newTab?: Maybe<PagesDocAccessFields_Hero_Links_Link_NewTab>
  reference?: Maybe<PagesDocAccessFields_Hero_Links_Link_Reference>
  type?: Maybe<PagesDocAccessFields_Hero_Links_Link_Type>
  url?: Maybe<PagesDocAccessFields_Hero_Links_Link_Url>
}

export type PagesDocAccessFields_Hero_Links_Link_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Appearance = {
  __typename?: 'PagesDocAccessFields_hero_links_link_appearance'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_Appearance_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_Appearance_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_Appearance_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_Appearance_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_Appearance_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_appearance_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Appearance_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_appearance_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Appearance_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_appearance_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Appearance_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_appearance_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Label = {
  __typename?: 'PagesDocAccessFields_hero_links_link_label'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_Label_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_Label_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_Label_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_Label_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_Label_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_label_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Label_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_label_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Label_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_label_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Label_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_label_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_NewTab = {
  __typename?: 'PagesDocAccessFields_hero_links_link_newTab'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_NewTab_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_NewTab_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_NewTab_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_NewTab_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_NewTab_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_newTab_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_NewTab_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_newTab_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_NewTab_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_newTab_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_NewTab_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_newTab_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Reference = {
  __typename?: 'PagesDocAccessFields_hero_links_link_reference'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_Reference_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_Reference_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_Reference_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_Reference_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_Reference_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_reference_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Reference_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_reference_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Reference_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_reference_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Reference_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_reference_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Type = {
  __typename?: 'PagesDocAccessFields_hero_links_link_type'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_Type_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_Type_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_Type_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_Type_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_Type_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_type_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Type_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_type_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Type_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_type_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Type_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_type_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Url = {
  __typename?: 'PagesDocAccessFields_hero_links_link_url'
  create?: Maybe<PagesDocAccessFields_Hero_Links_Link_Url_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Links_Link_Url_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Links_Link_Url_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Links_Link_Url_Update>
}

export type PagesDocAccessFields_Hero_Links_Link_Url_Create = {
  __typename?: 'PagesDocAccessFields_hero_links_link_url_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Url_Delete = {
  __typename?: 'PagesDocAccessFields_hero_links_link_url_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Url_Read = {
  __typename?: 'PagesDocAccessFields_hero_links_link_url_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Links_Link_Url_Update = {
  __typename?: 'PagesDocAccessFields_hero_links_link_url_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Media = {
  __typename?: 'PagesDocAccessFields_hero_media'
  create?: Maybe<PagesDocAccessFields_Hero_Media_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Media_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Media_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Media_Update>
}

export type PagesDocAccessFields_Hero_Media_Create = {
  __typename?: 'PagesDocAccessFields_hero_media_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Media_Delete = {
  __typename?: 'PagesDocAccessFields_hero_media_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Media_Read = {
  __typename?: 'PagesDocAccessFields_hero_media_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Media_Update = {
  __typename?: 'PagesDocAccessFields_hero_media_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_RichText = {
  __typename?: 'PagesDocAccessFields_hero_richText'
  create?: Maybe<PagesDocAccessFields_Hero_RichText_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_RichText_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_RichText_Read>
  update?: Maybe<PagesDocAccessFields_Hero_RichText_Update>
}

export type PagesDocAccessFields_Hero_RichText_Create = {
  __typename?: 'PagesDocAccessFields_hero_richText_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_RichText_Delete = {
  __typename?: 'PagesDocAccessFields_hero_richText_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_RichText_Read = {
  __typename?: 'PagesDocAccessFields_hero_richText_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_RichText_Update = {
  __typename?: 'PagesDocAccessFields_hero_richText_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Type = {
  __typename?: 'PagesDocAccessFields_hero_type'
  create?: Maybe<PagesDocAccessFields_Hero_Type_Create>
  delete?: Maybe<PagesDocAccessFields_Hero_Type_Delete>
  read?: Maybe<PagesDocAccessFields_Hero_Type_Read>
  update?: Maybe<PagesDocAccessFields_Hero_Type_Update>
}

export type PagesDocAccessFields_Hero_Type_Create = {
  __typename?: 'PagesDocAccessFields_hero_type_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Type_Delete = {
  __typename?: 'PagesDocAccessFields_hero_type_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Type_Read = {
  __typename?: 'PagesDocAccessFields_hero_type_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Hero_Type_Update = {
  __typename?: 'PagesDocAccessFields_hero_type_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Layout = {
  __typename?: 'PagesDocAccessFields_layout'
  create?: Maybe<PagesDocAccessFields_Layout_Create>
  delete?: Maybe<PagesDocAccessFields_Layout_Delete>
  read?: Maybe<PagesDocAccessFields_Layout_Read>
  update?: Maybe<PagesDocAccessFields_Layout_Update>
}

export type PagesDocAccessFields_Layout_Create = {
  __typename?: 'PagesDocAccessFields_layout_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Layout_Delete = {
  __typename?: 'PagesDocAccessFields_layout_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Layout_Read = {
  __typename?: 'PagesDocAccessFields_layout_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Layout_Update = {
  __typename?: 'PagesDocAccessFields_layout_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta = {
  __typename?: 'PagesDocAccessFields_meta'
  description?: Maybe<PagesDocAccessFields_Meta_Description>
  image?: Maybe<PagesDocAccessFields_Meta_Image>
  title?: Maybe<PagesDocAccessFields_Meta_Title>
}

export type PagesDocAccessFields_Meta_Description = {
  __typename?: 'PagesDocAccessFields_meta_description'
  create?: Maybe<PagesDocAccessFields_Meta_Description_Create>
  delete?: Maybe<PagesDocAccessFields_Meta_Description_Delete>
  read?: Maybe<PagesDocAccessFields_Meta_Description_Read>
  update?: Maybe<PagesDocAccessFields_Meta_Description_Update>
}

export type PagesDocAccessFields_Meta_Description_Create = {
  __typename?: 'PagesDocAccessFields_meta_description_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Description_Delete = {
  __typename?: 'PagesDocAccessFields_meta_description_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Description_Read = {
  __typename?: 'PagesDocAccessFields_meta_description_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Description_Update = {
  __typename?: 'PagesDocAccessFields_meta_description_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Image = {
  __typename?: 'PagesDocAccessFields_meta_image'
  create?: Maybe<PagesDocAccessFields_Meta_Image_Create>
  delete?: Maybe<PagesDocAccessFields_Meta_Image_Delete>
  read?: Maybe<PagesDocAccessFields_Meta_Image_Read>
  update?: Maybe<PagesDocAccessFields_Meta_Image_Update>
}

export type PagesDocAccessFields_Meta_Image_Create = {
  __typename?: 'PagesDocAccessFields_meta_image_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Image_Delete = {
  __typename?: 'PagesDocAccessFields_meta_image_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Image_Read = {
  __typename?: 'PagesDocAccessFields_meta_image_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Image_Update = {
  __typename?: 'PagesDocAccessFields_meta_image_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Title = {
  __typename?: 'PagesDocAccessFields_meta_title'
  create?: Maybe<PagesDocAccessFields_Meta_Title_Create>
  delete?: Maybe<PagesDocAccessFields_Meta_Title_Delete>
  read?: Maybe<PagesDocAccessFields_Meta_Title_Read>
  update?: Maybe<PagesDocAccessFields_Meta_Title_Update>
}

export type PagesDocAccessFields_Meta_Title_Create = {
  __typename?: 'PagesDocAccessFields_meta_title_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Title_Delete = {
  __typename?: 'PagesDocAccessFields_meta_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Title_Read = {
  __typename?: 'PagesDocAccessFields_meta_title_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Meta_Title_Update = {
  __typename?: 'PagesDocAccessFields_meta_title_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_PublishedAt = {
  __typename?: 'PagesDocAccessFields_publishedAt'
  create?: Maybe<PagesDocAccessFields_PublishedAt_Create>
  delete?: Maybe<PagesDocAccessFields_PublishedAt_Delete>
  read?: Maybe<PagesDocAccessFields_PublishedAt_Read>
  update?: Maybe<PagesDocAccessFields_PublishedAt_Update>
}

export type PagesDocAccessFields_PublishedAt_Create = {
  __typename?: 'PagesDocAccessFields_publishedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_PublishedAt_Delete = {
  __typename?: 'PagesDocAccessFields_publishedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_PublishedAt_Read = {
  __typename?: 'PagesDocAccessFields_publishedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_PublishedAt_Update = {
  __typename?: 'PagesDocAccessFields_publishedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug'
  create?: Maybe<PagesDocAccessFields_Slug_Create>
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>
  read?: Maybe<PagesDocAccessFields_Slug_Read>
  update?: Maybe<PagesDocAccessFields_Slug_Update>
}

export type PagesDocAccessFields_SlugLock = {
  __typename?: 'PagesDocAccessFields_slugLock'
  create?: Maybe<PagesDocAccessFields_SlugLock_Create>
  delete?: Maybe<PagesDocAccessFields_SlugLock_Delete>
  read?: Maybe<PagesDocAccessFields_SlugLock_Read>
  update?: Maybe<PagesDocAccessFields_SlugLock_Update>
}

export type PagesDocAccessFields_SlugLock_Create = {
  __typename?: 'PagesDocAccessFields_slugLock_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_SlugLock_Delete = {
  __typename?: 'PagesDocAccessFields_slugLock_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_SlugLock_Read = {
  __typename?: 'PagesDocAccessFields_slugLock_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_SlugLock_Update = {
  __typename?: 'PagesDocAccessFields_slugLock_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Slug_Create = {
  __typename?: 'PagesDocAccessFields_slug_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Slug_Delete = {
  __typename?: 'PagesDocAccessFields_slug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Slug_Read = {
  __typename?: 'PagesDocAccessFields_slug_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Slug_Update = {
  __typename?: 'PagesDocAccessFields_slug_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Title = {
  __typename?: 'PagesDocAccessFields_title'
  create?: Maybe<PagesDocAccessFields_Title_Create>
  delete?: Maybe<PagesDocAccessFields_Title_Delete>
  read?: Maybe<PagesDocAccessFields_Title_Read>
  update?: Maybe<PagesDocAccessFields_Title_Update>
}

export type PagesDocAccessFields_Title_Create = {
  __typename?: 'PagesDocAccessFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Title_Delete = {
  __typename?: 'PagesDocAccessFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Title_Read = {
  __typename?: 'PagesDocAccessFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_Title_Update = {
  __typename?: 'PagesDocAccessFields_title_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_UpdatedAt = {
  __typename?: 'PagesDocAccessFields_updatedAt'
  create?: Maybe<PagesDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PagesDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PagesDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PagesDocAccessFields_UpdatedAt_Update>
}

export type PagesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PagesDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PagesDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PagesDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PagesDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields = {
  __typename?: 'PagesFields'
  _status?: Maybe<PagesFields__Status>
  createdAt?: Maybe<PagesFields_CreatedAt>
  hero?: Maybe<PagesFields_Hero>
  layout?: Maybe<PagesFields_Layout>
  meta?: Maybe<PagesFields_Meta>
  publishedAt?: Maybe<PagesFields_PublishedAt>
  slug?: Maybe<PagesFields_Slug>
  slugLock?: Maybe<PagesFields_SlugLock>
  title?: Maybe<PagesFields_Title>
  updatedAt?: Maybe<PagesFields_UpdatedAt>
}

export type PagesFields__Status = {
  __typename?: 'PagesFields__status'
  create?: Maybe<PagesFields__Status_Create>
  delete?: Maybe<PagesFields__Status_Delete>
  read?: Maybe<PagesFields__Status_Read>
  update?: Maybe<PagesFields__Status_Update>
}

export type PagesFields__Status_Create = {
  __typename?: 'PagesFields__status_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields__Status_Delete = {
  __typename?: 'PagesFields__status_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields__Status_Read = {
  __typename?: 'PagesFields__status_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields__Status_Update = {
  __typename?: 'PagesFields__status_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_CreatedAt = {
  __typename?: 'PagesFields_createdAt'
  create?: Maybe<PagesFields_CreatedAt_Create>
  delete?: Maybe<PagesFields_CreatedAt_Delete>
  read?: Maybe<PagesFields_CreatedAt_Read>
  update?: Maybe<PagesFields_CreatedAt_Update>
}

export type PagesFields_CreatedAt_Create = {
  __typename?: 'PagesFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_CreatedAt_Delete = {
  __typename?: 'PagesFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_CreatedAt_Read = {
  __typename?: 'PagesFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_CreatedAt_Update = {
  __typename?: 'PagesFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero = {
  __typename?: 'PagesFields_hero'
  create?: Maybe<PagesFields_Hero_Create>
  delete?: Maybe<PagesFields_Hero_Delete>
  fields?: Maybe<PagesFields_Hero_Fields>
  read?: Maybe<PagesFields_Hero_Read>
  update?: Maybe<PagesFields_Hero_Update>
}

export type PagesFields_Hero_Create = {
  __typename?: 'PagesFields_hero_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Delete = {
  __typename?: 'PagesFields_hero_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Fields = {
  __typename?: 'PagesFields_hero_Fields'
  links?: Maybe<PagesFields_Hero_Links>
  media?: Maybe<PagesFields_Hero_Media>
  richText?: Maybe<PagesFields_Hero_RichText>
  type?: Maybe<PagesFields_Hero_Type>
}

export type PagesFields_Hero_Read = {
  __typename?: 'PagesFields_hero_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Update = {
  __typename?: 'PagesFields_hero_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links = {
  __typename?: 'PagesFields_hero_links'
  create?: Maybe<PagesFields_Hero_Links_Create>
  delete?: Maybe<PagesFields_Hero_Links_Delete>
  fields?: Maybe<PagesFields_Hero_Links_Fields>
  read?: Maybe<PagesFields_Hero_Links_Read>
  update?: Maybe<PagesFields_Hero_Links_Update>
}

export type PagesFields_Hero_Links_Create = {
  __typename?: 'PagesFields_hero_links_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Delete = {
  __typename?: 'PagesFields_hero_links_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Fields = {
  __typename?: 'PagesFields_hero_links_Fields'
  id?: Maybe<PagesFields_Hero_Links_Id>
  link?: Maybe<PagesFields_Hero_Links_Link>
}

export type PagesFields_Hero_Links_Read = {
  __typename?: 'PagesFields_hero_links_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Update = {
  __typename?: 'PagesFields_hero_links_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Id = {
  __typename?: 'PagesFields_hero_links_id'
  create?: Maybe<PagesFields_Hero_Links_Id_Create>
  delete?: Maybe<PagesFields_Hero_Links_Id_Delete>
  read?: Maybe<PagesFields_Hero_Links_Id_Read>
  update?: Maybe<PagesFields_Hero_Links_Id_Update>
}

export type PagesFields_Hero_Links_Id_Create = {
  __typename?: 'PagesFields_hero_links_id_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Id_Delete = {
  __typename?: 'PagesFields_hero_links_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Id_Read = {
  __typename?: 'PagesFields_hero_links_id_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Id_Update = {
  __typename?: 'PagesFields_hero_links_id_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link = {
  __typename?: 'PagesFields_hero_links_link'
  create?: Maybe<PagesFields_Hero_Links_Link_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_Delete>
  fields?: Maybe<PagesFields_Hero_Links_Link_Fields>
  read?: Maybe<PagesFields_Hero_Links_Link_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_Update>
}

export type PagesFields_Hero_Links_Link_Create = {
  __typename?: 'PagesFields_hero_links_link_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Delete = {
  __typename?: 'PagesFields_hero_links_link_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Fields = {
  __typename?: 'PagesFields_hero_links_link_Fields'
  appearance?: Maybe<PagesFields_Hero_Links_Link_Appearance>
  label?: Maybe<PagesFields_Hero_Links_Link_Label>
  newTab?: Maybe<PagesFields_Hero_Links_Link_NewTab>
  reference?: Maybe<PagesFields_Hero_Links_Link_Reference>
  type?: Maybe<PagesFields_Hero_Links_Link_Type>
  url?: Maybe<PagesFields_Hero_Links_Link_Url>
}

export type PagesFields_Hero_Links_Link_Read = {
  __typename?: 'PagesFields_hero_links_link_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Update = {
  __typename?: 'PagesFields_hero_links_link_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Appearance = {
  __typename?: 'PagesFields_hero_links_link_appearance'
  create?: Maybe<PagesFields_Hero_Links_Link_Appearance_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_Appearance_Delete>
  read?: Maybe<PagesFields_Hero_Links_Link_Appearance_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_Appearance_Update>
}

export type PagesFields_Hero_Links_Link_Appearance_Create = {
  __typename?: 'PagesFields_hero_links_link_appearance_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Appearance_Delete = {
  __typename?: 'PagesFields_hero_links_link_appearance_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Appearance_Read = {
  __typename?: 'PagesFields_hero_links_link_appearance_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Appearance_Update = {
  __typename?: 'PagesFields_hero_links_link_appearance_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Label = {
  __typename?: 'PagesFields_hero_links_link_label'
  create?: Maybe<PagesFields_Hero_Links_Link_Label_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_Label_Delete>
  read?: Maybe<PagesFields_Hero_Links_Link_Label_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_Label_Update>
}

export type PagesFields_Hero_Links_Link_Label_Create = {
  __typename?: 'PagesFields_hero_links_link_label_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Label_Delete = {
  __typename?: 'PagesFields_hero_links_link_label_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Label_Read = {
  __typename?: 'PagesFields_hero_links_link_label_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Label_Update = {
  __typename?: 'PagesFields_hero_links_link_label_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_NewTab = {
  __typename?: 'PagesFields_hero_links_link_newTab'
  create?: Maybe<PagesFields_Hero_Links_Link_NewTab_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_NewTab_Delete>
  read?: Maybe<PagesFields_Hero_Links_Link_NewTab_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_NewTab_Update>
}

export type PagesFields_Hero_Links_Link_NewTab_Create = {
  __typename?: 'PagesFields_hero_links_link_newTab_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_NewTab_Delete = {
  __typename?: 'PagesFields_hero_links_link_newTab_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_NewTab_Read = {
  __typename?: 'PagesFields_hero_links_link_newTab_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_NewTab_Update = {
  __typename?: 'PagesFields_hero_links_link_newTab_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Reference = {
  __typename?: 'PagesFields_hero_links_link_reference'
  create?: Maybe<PagesFields_Hero_Links_Link_Reference_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_Reference_Delete>
  read?: Maybe<PagesFields_Hero_Links_Link_Reference_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_Reference_Update>
}

export type PagesFields_Hero_Links_Link_Reference_Create = {
  __typename?: 'PagesFields_hero_links_link_reference_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Reference_Delete = {
  __typename?: 'PagesFields_hero_links_link_reference_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Reference_Read = {
  __typename?: 'PagesFields_hero_links_link_reference_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Reference_Update = {
  __typename?: 'PagesFields_hero_links_link_reference_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Type = {
  __typename?: 'PagesFields_hero_links_link_type'
  create?: Maybe<PagesFields_Hero_Links_Link_Type_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_Type_Delete>
  read?: Maybe<PagesFields_Hero_Links_Link_Type_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_Type_Update>
}

export type PagesFields_Hero_Links_Link_Type_Create = {
  __typename?: 'PagesFields_hero_links_link_type_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Type_Delete = {
  __typename?: 'PagesFields_hero_links_link_type_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Type_Read = {
  __typename?: 'PagesFields_hero_links_link_type_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Type_Update = {
  __typename?: 'PagesFields_hero_links_link_type_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Url = {
  __typename?: 'PagesFields_hero_links_link_url'
  create?: Maybe<PagesFields_Hero_Links_Link_Url_Create>
  delete?: Maybe<PagesFields_Hero_Links_Link_Url_Delete>
  read?: Maybe<PagesFields_Hero_Links_Link_Url_Read>
  update?: Maybe<PagesFields_Hero_Links_Link_Url_Update>
}

export type PagesFields_Hero_Links_Link_Url_Create = {
  __typename?: 'PagesFields_hero_links_link_url_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Url_Delete = {
  __typename?: 'PagesFields_hero_links_link_url_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Url_Read = {
  __typename?: 'PagesFields_hero_links_link_url_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Links_Link_Url_Update = {
  __typename?: 'PagesFields_hero_links_link_url_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Media = {
  __typename?: 'PagesFields_hero_media'
  create?: Maybe<PagesFields_Hero_Media_Create>
  delete?: Maybe<PagesFields_Hero_Media_Delete>
  read?: Maybe<PagesFields_Hero_Media_Read>
  update?: Maybe<PagesFields_Hero_Media_Update>
}

export type PagesFields_Hero_Media_Create = {
  __typename?: 'PagesFields_hero_media_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Media_Delete = {
  __typename?: 'PagesFields_hero_media_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Media_Read = {
  __typename?: 'PagesFields_hero_media_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Media_Update = {
  __typename?: 'PagesFields_hero_media_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_RichText = {
  __typename?: 'PagesFields_hero_richText'
  create?: Maybe<PagesFields_Hero_RichText_Create>
  delete?: Maybe<PagesFields_Hero_RichText_Delete>
  read?: Maybe<PagesFields_Hero_RichText_Read>
  update?: Maybe<PagesFields_Hero_RichText_Update>
}

export type PagesFields_Hero_RichText_Create = {
  __typename?: 'PagesFields_hero_richText_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_RichText_Delete = {
  __typename?: 'PagesFields_hero_richText_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_RichText_Read = {
  __typename?: 'PagesFields_hero_richText_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_RichText_Update = {
  __typename?: 'PagesFields_hero_richText_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Type = {
  __typename?: 'PagesFields_hero_type'
  create?: Maybe<PagesFields_Hero_Type_Create>
  delete?: Maybe<PagesFields_Hero_Type_Delete>
  read?: Maybe<PagesFields_Hero_Type_Read>
  update?: Maybe<PagesFields_Hero_Type_Update>
}

export type PagesFields_Hero_Type_Create = {
  __typename?: 'PagesFields_hero_type_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Type_Delete = {
  __typename?: 'PagesFields_hero_type_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Type_Read = {
  __typename?: 'PagesFields_hero_type_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Hero_Type_Update = {
  __typename?: 'PagesFields_hero_type_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Layout = {
  __typename?: 'PagesFields_layout'
  create?: Maybe<PagesFields_Layout_Create>
  delete?: Maybe<PagesFields_Layout_Delete>
  read?: Maybe<PagesFields_Layout_Read>
  update?: Maybe<PagesFields_Layout_Update>
}

export type PagesFields_Layout_Create = {
  __typename?: 'PagesFields_layout_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Layout_Delete = {
  __typename?: 'PagesFields_layout_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Layout_Read = {
  __typename?: 'PagesFields_layout_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Layout_Update = {
  __typename?: 'PagesFields_layout_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta = {
  __typename?: 'PagesFields_meta'
  description?: Maybe<PagesFields_Meta_Description>
  image?: Maybe<PagesFields_Meta_Image>
  title?: Maybe<PagesFields_Meta_Title>
}

export type PagesFields_Meta_Description = {
  __typename?: 'PagesFields_meta_description'
  create?: Maybe<PagesFields_Meta_Description_Create>
  delete?: Maybe<PagesFields_Meta_Description_Delete>
  read?: Maybe<PagesFields_Meta_Description_Read>
  update?: Maybe<PagesFields_Meta_Description_Update>
}

export type PagesFields_Meta_Description_Create = {
  __typename?: 'PagesFields_meta_description_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Description_Delete = {
  __typename?: 'PagesFields_meta_description_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Description_Read = {
  __typename?: 'PagesFields_meta_description_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Description_Update = {
  __typename?: 'PagesFields_meta_description_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Image = {
  __typename?: 'PagesFields_meta_image'
  create?: Maybe<PagesFields_Meta_Image_Create>
  delete?: Maybe<PagesFields_Meta_Image_Delete>
  read?: Maybe<PagesFields_Meta_Image_Read>
  update?: Maybe<PagesFields_Meta_Image_Update>
}

export type PagesFields_Meta_Image_Create = {
  __typename?: 'PagesFields_meta_image_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Image_Delete = {
  __typename?: 'PagesFields_meta_image_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Image_Read = {
  __typename?: 'PagesFields_meta_image_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Image_Update = {
  __typename?: 'PagesFields_meta_image_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Title = {
  __typename?: 'PagesFields_meta_title'
  create?: Maybe<PagesFields_Meta_Title_Create>
  delete?: Maybe<PagesFields_Meta_Title_Delete>
  read?: Maybe<PagesFields_Meta_Title_Read>
  update?: Maybe<PagesFields_Meta_Title_Update>
}

export type PagesFields_Meta_Title_Create = {
  __typename?: 'PagesFields_meta_title_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Title_Delete = {
  __typename?: 'PagesFields_meta_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Title_Read = {
  __typename?: 'PagesFields_meta_title_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Meta_Title_Update = {
  __typename?: 'PagesFields_meta_title_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_PublishedAt = {
  __typename?: 'PagesFields_publishedAt'
  create?: Maybe<PagesFields_PublishedAt_Create>
  delete?: Maybe<PagesFields_PublishedAt_Delete>
  read?: Maybe<PagesFields_PublishedAt_Read>
  update?: Maybe<PagesFields_PublishedAt_Update>
}

export type PagesFields_PublishedAt_Create = {
  __typename?: 'PagesFields_publishedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_PublishedAt_Delete = {
  __typename?: 'PagesFields_publishedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_PublishedAt_Read = {
  __typename?: 'PagesFields_publishedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_PublishedAt_Update = {
  __typename?: 'PagesFields_publishedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug'
  create?: Maybe<PagesFields_Slug_Create>
  delete?: Maybe<PagesFields_Slug_Delete>
  read?: Maybe<PagesFields_Slug_Read>
  update?: Maybe<PagesFields_Slug_Update>
}

export type PagesFields_SlugLock = {
  __typename?: 'PagesFields_slugLock'
  create?: Maybe<PagesFields_SlugLock_Create>
  delete?: Maybe<PagesFields_SlugLock_Delete>
  read?: Maybe<PagesFields_SlugLock_Read>
  update?: Maybe<PagesFields_SlugLock_Update>
}

export type PagesFields_SlugLock_Create = {
  __typename?: 'PagesFields_slugLock_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_SlugLock_Delete = {
  __typename?: 'PagesFields_slugLock_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_SlugLock_Read = {
  __typename?: 'PagesFields_slugLock_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_SlugLock_Update = {
  __typename?: 'PagesFields_slugLock_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Slug_Create = {
  __typename?: 'PagesFields_slug_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Slug_Delete = {
  __typename?: 'PagesFields_slug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Slug_Read = {
  __typename?: 'PagesFields_slug_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Slug_Update = {
  __typename?: 'PagesFields_slug_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Title = {
  __typename?: 'PagesFields_title'
  create?: Maybe<PagesFields_Title_Create>
  delete?: Maybe<PagesFields_Title_Delete>
  read?: Maybe<PagesFields_Title_Read>
  update?: Maybe<PagesFields_Title_Update>
}

export type PagesFields_Title_Create = {
  __typename?: 'PagesFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Title_Delete = {
  __typename?: 'PagesFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Title_Read = {
  __typename?: 'PagesFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_Title_Update = {
  __typename?: 'PagesFields_title_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_UpdatedAt = {
  __typename?: 'PagesFields_updatedAt'
  create?: Maybe<PagesFields_UpdatedAt_Create>
  delete?: Maybe<PagesFields_UpdatedAt_Delete>
  read?: Maybe<PagesFields_UpdatedAt_Read>
  update?: Maybe<PagesFields_UpdatedAt_Update>
}

export type PagesFields_UpdatedAt_Create = {
  __typename?: 'PagesFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_UpdatedAt_Delete = {
  __typename?: 'PagesFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_UpdatedAt_Read = {
  __typename?: 'PagesFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PagesFields_UpdatedAt_Update = {
  __typename?: 'PagesFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PagesReadAccess = {
  __typename?: 'PagesReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesReadDocAccess = {
  __typename?: 'PagesReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesReadVersionsAccess = {
  __typename?: 'PagesReadVersionsAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesReadVersionsDocAccess = {
  __typename?: 'PagesReadVersionsDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesUpdateAccess = {
  __typename?: 'PagesUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PagesUpdateDocAccess = {
  __typename?: 'PagesUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJob = {
  __typename?: 'PayloadJob'
  completedAt?: Maybe<Scalars['DateTime']['output']>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  error?: Maybe<Scalars['JSON']['output']>
  hasError?: Maybe<Scalars['Boolean']['output']>
  id: Scalars['String']['output']
  input?: Maybe<Scalars['JSON']['output']>
  log?: Maybe<Array<PayloadJob_Log>>
  processing?: Maybe<Scalars['Boolean']['output']>
  queue?: Maybe<Scalars['String']['output']>
  taskSlug?: Maybe<PayloadJob_TaskSlug>
  taskStatus?: Maybe<Scalars['JSON']['output']>
  totalTried?: Maybe<Scalars['Float']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  waitUntil?: Maybe<Scalars['DateTime']['output']>
}

export enum PayloadJobUpdate_Log_TaskSlug_MutationInput {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export enum PayloadJobUpdate_TaskSlug_MutationInput {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export type PayloadJob_Log = {
  __typename?: 'PayloadJob_Log'
  completedAt?: Maybe<Scalars['DateTime']['output']>
  error?: Maybe<Scalars['JSON']['output']>
  executedAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
  input?: Maybe<Scalars['JSON']['output']>
  output?: Maybe<Scalars['JSON']['output']>
  state?: Maybe<PayloadJob_Log_State>
  taskID?: Maybe<Scalars['String']['output']>
  taskSlug?: Maybe<PayloadJob_Log_TaskSlug>
}

export enum PayloadJob_Log_State {
  Failed = 'failed',
  Succeeded = 'succeeded',
}

export enum PayloadJob_Log_TaskSlug {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export enum PayloadJob_Log_TaskSlug_MutationInput {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export type PayloadJob_CompletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadJob_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadJob_Error_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export type PayloadJob_HasError_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type PayloadJob_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PayloadJob_Input_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export type PayloadJob_Log__CompletedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadJob_Log__Error_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export type PayloadJob_Log__ExecutedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadJob_Log__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type PayloadJob_Log__Input_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export type PayloadJob_Log__Output_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadJob_Log__State_Input {
  Failed = 'failed',
  Succeeded = 'succeeded',
}

export type PayloadJob_Log__State_Operator = {
  contains?: InputMaybe<PayloadJob_Log__State_Input>
  equals?: InputMaybe<PayloadJob_Log__State_Input>
  like?: InputMaybe<PayloadJob_Log__State_Input>
  not_equals?: InputMaybe<PayloadJob_Log__State_Input>
}

export type PayloadJob_Log__TaskId_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export enum PayloadJob_Log__TaskSlug_Input {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export type PayloadJob_Log__TaskSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_Log__TaskSlug_Input>>>
  equals?: InputMaybe<PayloadJob_Log__TaskSlug_Input>
  in?: InputMaybe<Array<InputMaybe<PayloadJob_Log__TaskSlug_Input>>>
  not_equals?: InputMaybe<PayloadJob_Log__TaskSlug_Input>
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_Log__TaskSlug_Input>>>
}

export type PayloadJob_Processing_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type PayloadJob_Queue_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export enum PayloadJob_TaskSlug {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export enum PayloadJob_TaskSlug_Input {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export enum PayloadJob_TaskSlug_MutationInput {
  Inline = 'inline',
  SchedulePublish = 'schedulePublish',
}

export type PayloadJob_TaskSlug_Operator = {
  all?: InputMaybe<Array<InputMaybe<PayloadJob_TaskSlug_Input>>>
  equals?: InputMaybe<PayloadJob_TaskSlug_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<PayloadJob_TaskSlug_Input>>>
  not_equals?: InputMaybe<PayloadJob_TaskSlug_Input>
  not_in?: InputMaybe<Array<InputMaybe<PayloadJob_TaskSlug_Input>>>
}

export type PayloadJob_TaskStatus_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  intersects?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  within?: InputMaybe<Scalars['JSON']['input']>
}

export type PayloadJob_TotalTried_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['Float']['input']>
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>
  less_than?: InputMaybe<Scalars['Float']['input']>
  less_than_equal?: InputMaybe<Scalars['Float']['input']>
  not_equals?: InputMaybe<Scalars['Float']['input']>
}

export type PayloadJob_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadJob_WaitUntil_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type PayloadJob_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_Where_Or>>>
  completedAt?: InputMaybe<PayloadJob_CompletedAt_Operator>
  createdAt?: InputMaybe<PayloadJob_CreatedAt_Operator>
  error?: InputMaybe<PayloadJob_Error_Operator>
  hasError?: InputMaybe<PayloadJob_HasError_Operator>
  id?: InputMaybe<PayloadJob_Id_Operator>
  input?: InputMaybe<PayloadJob_Input_Operator>
  log__completedAt?: InputMaybe<PayloadJob_Log__CompletedAt_Operator>
  log__error?: InputMaybe<PayloadJob_Log__Error_Operator>
  log__executedAt?: InputMaybe<PayloadJob_Log__ExecutedAt_Operator>
  log__id?: InputMaybe<PayloadJob_Log__Id_Operator>
  log__input?: InputMaybe<PayloadJob_Log__Input_Operator>
  log__output?: InputMaybe<PayloadJob_Log__Output_Operator>
  log__state?: InputMaybe<PayloadJob_Log__State_Operator>
  log__taskID?: InputMaybe<PayloadJob_Log__TaskId_Operator>
  log__taskSlug?: InputMaybe<PayloadJob_Log__TaskSlug_Operator>
  processing?: InputMaybe<PayloadJob_Processing_Operator>
  queue?: InputMaybe<PayloadJob_Queue_Operator>
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_Operator>
  taskStatus?: InputMaybe<PayloadJob_TaskStatus_Operator>
  totalTried?: InputMaybe<PayloadJob_TotalTried_Operator>
  updatedAt?: InputMaybe<PayloadJob_UpdatedAt_Operator>
  waitUntil?: InputMaybe<PayloadJob_WaitUntil_Operator>
}

export type PayloadJob_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_Where_Or>>>
  completedAt?: InputMaybe<PayloadJob_CompletedAt_Operator>
  createdAt?: InputMaybe<PayloadJob_CreatedAt_Operator>
  error?: InputMaybe<PayloadJob_Error_Operator>
  hasError?: InputMaybe<PayloadJob_HasError_Operator>
  id?: InputMaybe<PayloadJob_Id_Operator>
  input?: InputMaybe<PayloadJob_Input_Operator>
  log__completedAt?: InputMaybe<PayloadJob_Log__CompletedAt_Operator>
  log__error?: InputMaybe<PayloadJob_Log__Error_Operator>
  log__executedAt?: InputMaybe<PayloadJob_Log__ExecutedAt_Operator>
  log__id?: InputMaybe<PayloadJob_Log__Id_Operator>
  log__input?: InputMaybe<PayloadJob_Log__Input_Operator>
  log__output?: InputMaybe<PayloadJob_Log__Output_Operator>
  log__state?: InputMaybe<PayloadJob_Log__State_Operator>
  log__taskID?: InputMaybe<PayloadJob_Log__TaskId_Operator>
  log__taskSlug?: InputMaybe<PayloadJob_Log__TaskSlug_Operator>
  processing?: InputMaybe<PayloadJob_Processing_Operator>
  queue?: InputMaybe<PayloadJob_Queue_Operator>
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_Operator>
  taskStatus?: InputMaybe<PayloadJob_TaskStatus_Operator>
  totalTried?: InputMaybe<PayloadJob_TotalTried_Operator>
  updatedAt?: InputMaybe<PayloadJob_UpdatedAt_Operator>
  waitUntil?: InputMaybe<PayloadJob_WaitUntil_Operator>
}

export type PayloadJob_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadJob_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<PayloadJob_Where_Or>>>
  completedAt?: InputMaybe<PayloadJob_CompletedAt_Operator>
  createdAt?: InputMaybe<PayloadJob_CreatedAt_Operator>
  error?: InputMaybe<PayloadJob_Error_Operator>
  hasError?: InputMaybe<PayloadJob_HasError_Operator>
  id?: InputMaybe<PayloadJob_Id_Operator>
  input?: InputMaybe<PayloadJob_Input_Operator>
  log__completedAt?: InputMaybe<PayloadJob_Log__CompletedAt_Operator>
  log__error?: InputMaybe<PayloadJob_Log__Error_Operator>
  log__executedAt?: InputMaybe<PayloadJob_Log__ExecutedAt_Operator>
  log__id?: InputMaybe<PayloadJob_Log__Id_Operator>
  log__input?: InputMaybe<PayloadJob_Log__Input_Operator>
  log__output?: InputMaybe<PayloadJob_Log__Output_Operator>
  log__state?: InputMaybe<PayloadJob_Log__State_Operator>
  log__taskID?: InputMaybe<PayloadJob_Log__TaskId_Operator>
  log__taskSlug?: InputMaybe<PayloadJob_Log__TaskSlug_Operator>
  processing?: InputMaybe<PayloadJob_Processing_Operator>
  queue?: InputMaybe<PayloadJob_Queue_Operator>
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_Operator>
  taskStatus?: InputMaybe<PayloadJob_TaskStatus_Operator>
  totalTried?: InputMaybe<PayloadJob_TotalTried_Operator>
  updatedAt?: InputMaybe<PayloadJob_UpdatedAt_Operator>
  waitUntil?: InputMaybe<PayloadJob_WaitUntil_Operator>
}

export type PayloadJobs = {
  __typename?: 'PayloadJobs'
  docs: Array<PayloadJob>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type PayloadJobsCreateAccess = {
  __typename?: 'PayloadJobsCreateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsCreateDocAccess = {
  __typename?: 'PayloadJobsCreateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsDeleteAccess = {
  __typename?: 'PayloadJobsDeleteAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsDeleteDocAccess = {
  __typename?: 'PayloadJobsDeleteDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsDocAccessFields = {
  __typename?: 'PayloadJobsDocAccessFields'
  completedAt?: Maybe<PayloadJobsDocAccessFields_CompletedAt>
  createdAt?: Maybe<PayloadJobsDocAccessFields_CreatedAt>
  error?: Maybe<PayloadJobsDocAccessFields_Error>
  hasError?: Maybe<PayloadJobsDocAccessFields_HasError>
  input?: Maybe<PayloadJobsDocAccessFields_Input>
  log?: Maybe<PayloadJobsDocAccessFields_Log>
  processing?: Maybe<PayloadJobsDocAccessFields_Processing>
  queue?: Maybe<PayloadJobsDocAccessFields_Queue>
  taskSlug?: Maybe<PayloadJobsDocAccessFields_TaskSlug>
  taskStatus?: Maybe<PayloadJobsDocAccessFields_TaskStatus>
  totalTried?: Maybe<PayloadJobsDocAccessFields_TotalTried>
  updatedAt?: Maybe<PayloadJobsDocAccessFields_UpdatedAt>
  waitUntil?: Maybe<PayloadJobsDocAccessFields_WaitUntil>
}

export type PayloadJobsDocAccessFields_CompletedAt = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt'
  create?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Read>
  update?: Maybe<PayloadJobsDocAccessFields_CompletedAt_Update>
}

export type PayloadJobsDocAccessFields_CompletedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CompletedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CompletedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CompletedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_completedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CreatedAt = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt'
  create?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Read>
  update?: Maybe<PayloadJobsDocAccessFields_CreatedAt_Update>
}

export type PayloadJobsDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Error = {
  __typename?: 'PayloadJobsDocAccessFields_error'
  create?: Maybe<PayloadJobsDocAccessFields_Error_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Error_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Error_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Error_Update>
}

export type PayloadJobsDocAccessFields_Error_Create = {
  __typename?: 'PayloadJobsDocAccessFields_error_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Error_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_error_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Error_Read = {
  __typename?: 'PayloadJobsDocAccessFields_error_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Error_Update = {
  __typename?: 'PayloadJobsDocAccessFields_error_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_HasError = {
  __typename?: 'PayloadJobsDocAccessFields_hasError'
  create?: Maybe<PayloadJobsDocAccessFields_HasError_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_HasError_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_HasError_Read>
  update?: Maybe<PayloadJobsDocAccessFields_HasError_Update>
}

export type PayloadJobsDocAccessFields_HasError_Create = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_HasError_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_HasError_Read = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_HasError_Update = {
  __typename?: 'PayloadJobsDocAccessFields_hasError_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Input = {
  __typename?: 'PayloadJobsDocAccessFields_input'
  create?: Maybe<PayloadJobsDocAccessFields_Input_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Input_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Input_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Input_Update>
}

export type PayloadJobsDocAccessFields_Input_Create = {
  __typename?: 'PayloadJobsDocAccessFields_input_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Input_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_input_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Input_Read = {
  __typename?: 'PayloadJobsDocAccessFields_input_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Input_Update = {
  __typename?: 'PayloadJobsDocAccessFields_input_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log = {
  __typename?: 'PayloadJobsDocAccessFields_log'
  create?: Maybe<PayloadJobsDocAccessFields_Log_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Delete>
  fields?: Maybe<PayloadJobsDocAccessFields_Log_Fields>
  read?: Maybe<PayloadJobsDocAccessFields_Log_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_Update>
}

export type PayloadJobsDocAccessFields_Log_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Fields = {
  __typename?: 'PayloadJobsDocAccessFields_log_Fields'
  completedAt?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt>
  error?: Maybe<PayloadJobsDocAccessFields_Log_Error>
  executedAt?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt>
  id?: Maybe<PayloadJobsDocAccessFields_Log_Id>
  input?: Maybe<PayloadJobsDocAccessFields_Log_Input>
  output?: Maybe<PayloadJobsDocAccessFields_Log_Output>
  state?: Maybe<PayloadJobsDocAccessFields_Log_State>
  taskID?: Maybe<PayloadJobsDocAccessFields_Log_TaskId>
  taskSlug?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug>
}

export type PayloadJobsDocAccessFields_Log_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_CompletedAt = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt'
  create?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_CompletedAt_Update>
}

export type PayloadJobsDocAccessFields_Log_CompletedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_CompletedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_CompletedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_CompletedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_completedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Error = {
  __typename?: 'PayloadJobsDocAccessFields_log_error'
  create?: Maybe<PayloadJobsDocAccessFields_Log_Error_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Error_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_Error_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_Error_Update>
}

export type PayloadJobsDocAccessFields_Log_Error_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Error_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Error_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Error_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_error_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_ExecutedAt = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt'
  create?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_ExecutedAt_Update>
}

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_ExecutedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_executedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Id = {
  __typename?: 'PayloadJobsDocAccessFields_log_id'
  create?: Maybe<PayloadJobsDocAccessFields_Log_Id_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Id_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_Id_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_Id_Update>
}

export type PayloadJobsDocAccessFields_Log_Id_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Id_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Id_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Id_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_id_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Input = {
  __typename?: 'PayloadJobsDocAccessFields_log_input'
  create?: Maybe<PayloadJobsDocAccessFields_Log_Input_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Input_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_Input_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_Input_Update>
}

export type PayloadJobsDocAccessFields_Log_Input_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Input_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Input_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Input_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_input_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Output = {
  __typename?: 'PayloadJobsDocAccessFields_log_output'
  create?: Maybe<PayloadJobsDocAccessFields_Log_Output_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_Output_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_Output_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_Output_Update>
}

export type PayloadJobsDocAccessFields_Log_Output_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Output_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Output_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_Output_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_output_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_State = {
  __typename?: 'PayloadJobsDocAccessFields_log_state'
  create?: Maybe<PayloadJobsDocAccessFields_Log_State_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_State_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_State_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_State_Update>
}

export type PayloadJobsDocAccessFields_Log_State_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_State_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_State_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_State_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_state_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskId = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID'
  create?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_TaskId_Update>
}

export type PayloadJobsDocAccessFields_Log_TaskId_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskId_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskId_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskId_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskID_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug'
  create?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Log_TaskSlug_Update>
}

export type PayloadJobsDocAccessFields_Log_TaskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Log_TaskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_log_taskSlug_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Processing = {
  __typename?: 'PayloadJobsDocAccessFields_processing'
  create?: Maybe<PayloadJobsDocAccessFields_Processing_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Processing_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Processing_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Processing_Update>
}

export type PayloadJobsDocAccessFields_Processing_Create = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Processing_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Processing_Read = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Processing_Update = {
  __typename?: 'PayloadJobsDocAccessFields_processing_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Queue = {
  __typename?: 'PayloadJobsDocAccessFields_queue'
  create?: Maybe<PayloadJobsDocAccessFields_Queue_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_Queue_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_Queue_Read>
  update?: Maybe<PayloadJobsDocAccessFields_Queue_Update>
}

export type PayloadJobsDocAccessFields_Queue_Create = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Queue_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Queue_Read = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_Queue_Update = {
  __typename?: 'PayloadJobsDocAccessFields_queue_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskSlug = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug'
  create?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Read>
  update?: Maybe<PayloadJobsDocAccessFields_TaskSlug_Update>
}

export type PayloadJobsDocAccessFields_TaskSlug_Create = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskSlug_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskSlug_Read = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskSlug_Update = {
  __typename?: 'PayloadJobsDocAccessFields_taskSlug_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskStatus = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus'
  create?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Read>
  update?: Maybe<PayloadJobsDocAccessFields_TaskStatus_Update>
}

export type PayloadJobsDocAccessFields_TaskStatus_Create = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskStatus_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskStatus_Read = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TaskStatus_Update = {
  __typename?: 'PayloadJobsDocAccessFields_taskStatus_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TotalTried = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried'
  create?: Maybe<PayloadJobsDocAccessFields_TotalTried_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_TotalTried_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_TotalTried_Read>
  update?: Maybe<PayloadJobsDocAccessFields_TotalTried_Update>
}

export type PayloadJobsDocAccessFields_TotalTried_Create = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TotalTried_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TotalTried_Read = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_TotalTried_Update = {
  __typename?: 'PayloadJobsDocAccessFields_totalTried_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt'
  create?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Read>
  update?: Maybe<PayloadJobsDocAccessFields_UpdatedAt_Update>
}

export type PayloadJobsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadJobsDocAccessFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_WaitUntil = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil'
  create?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Create>
  delete?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Delete>
  read?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Read>
  update?: Maybe<PayloadJobsDocAccessFields_WaitUntil_Update>
}

export type PayloadJobsDocAccessFields_WaitUntil_Create = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_WaitUntil_Delete = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_WaitUntil_Read = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsDocAccessFields_WaitUntil_Update = {
  __typename?: 'PayloadJobsDocAccessFields_waitUntil_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields = {
  __typename?: 'PayloadJobsFields'
  completedAt?: Maybe<PayloadJobsFields_CompletedAt>
  createdAt?: Maybe<PayloadJobsFields_CreatedAt>
  error?: Maybe<PayloadJobsFields_Error>
  hasError?: Maybe<PayloadJobsFields_HasError>
  input?: Maybe<PayloadJobsFields_Input>
  log?: Maybe<PayloadJobsFields_Log>
  processing?: Maybe<PayloadJobsFields_Processing>
  queue?: Maybe<PayloadJobsFields_Queue>
  taskSlug?: Maybe<PayloadJobsFields_TaskSlug>
  taskStatus?: Maybe<PayloadJobsFields_TaskStatus>
  totalTried?: Maybe<PayloadJobsFields_TotalTried>
  updatedAt?: Maybe<PayloadJobsFields_UpdatedAt>
  waitUntil?: Maybe<PayloadJobsFields_WaitUntil>
}

export type PayloadJobsFields_CompletedAt = {
  __typename?: 'PayloadJobsFields_completedAt'
  create?: Maybe<PayloadJobsFields_CompletedAt_Create>
  delete?: Maybe<PayloadJobsFields_CompletedAt_Delete>
  read?: Maybe<PayloadJobsFields_CompletedAt_Read>
  update?: Maybe<PayloadJobsFields_CompletedAt_Update>
}

export type PayloadJobsFields_CompletedAt_Create = {
  __typename?: 'PayloadJobsFields_completedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CompletedAt_Delete = {
  __typename?: 'PayloadJobsFields_completedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CompletedAt_Read = {
  __typename?: 'PayloadJobsFields_completedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CompletedAt_Update = {
  __typename?: 'PayloadJobsFields_completedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CreatedAt = {
  __typename?: 'PayloadJobsFields_createdAt'
  create?: Maybe<PayloadJobsFields_CreatedAt_Create>
  delete?: Maybe<PayloadJobsFields_CreatedAt_Delete>
  read?: Maybe<PayloadJobsFields_CreatedAt_Read>
  update?: Maybe<PayloadJobsFields_CreatedAt_Update>
}

export type PayloadJobsFields_CreatedAt_Create = {
  __typename?: 'PayloadJobsFields_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CreatedAt_Delete = {
  __typename?: 'PayloadJobsFields_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CreatedAt_Read = {
  __typename?: 'PayloadJobsFields_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_CreatedAt_Update = {
  __typename?: 'PayloadJobsFields_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Error = {
  __typename?: 'PayloadJobsFields_error'
  create?: Maybe<PayloadJobsFields_Error_Create>
  delete?: Maybe<PayloadJobsFields_Error_Delete>
  read?: Maybe<PayloadJobsFields_Error_Read>
  update?: Maybe<PayloadJobsFields_Error_Update>
}

export type PayloadJobsFields_Error_Create = {
  __typename?: 'PayloadJobsFields_error_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Error_Delete = {
  __typename?: 'PayloadJobsFields_error_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Error_Read = {
  __typename?: 'PayloadJobsFields_error_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Error_Update = {
  __typename?: 'PayloadJobsFields_error_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_HasError = {
  __typename?: 'PayloadJobsFields_hasError'
  create?: Maybe<PayloadJobsFields_HasError_Create>
  delete?: Maybe<PayloadJobsFields_HasError_Delete>
  read?: Maybe<PayloadJobsFields_HasError_Read>
  update?: Maybe<PayloadJobsFields_HasError_Update>
}

export type PayloadJobsFields_HasError_Create = {
  __typename?: 'PayloadJobsFields_hasError_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_HasError_Delete = {
  __typename?: 'PayloadJobsFields_hasError_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_HasError_Read = {
  __typename?: 'PayloadJobsFields_hasError_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_HasError_Update = {
  __typename?: 'PayloadJobsFields_hasError_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Input = {
  __typename?: 'PayloadJobsFields_input'
  create?: Maybe<PayloadJobsFields_Input_Create>
  delete?: Maybe<PayloadJobsFields_Input_Delete>
  read?: Maybe<PayloadJobsFields_Input_Read>
  update?: Maybe<PayloadJobsFields_Input_Update>
}

export type PayloadJobsFields_Input_Create = {
  __typename?: 'PayloadJobsFields_input_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Input_Delete = {
  __typename?: 'PayloadJobsFields_input_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Input_Read = {
  __typename?: 'PayloadJobsFields_input_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Input_Update = {
  __typename?: 'PayloadJobsFields_input_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log = {
  __typename?: 'PayloadJobsFields_log'
  create?: Maybe<PayloadJobsFields_Log_Create>
  delete?: Maybe<PayloadJobsFields_Log_Delete>
  fields?: Maybe<PayloadJobsFields_Log_Fields>
  read?: Maybe<PayloadJobsFields_Log_Read>
  update?: Maybe<PayloadJobsFields_Log_Update>
}

export type PayloadJobsFields_Log_Create = {
  __typename?: 'PayloadJobsFields_log_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Delete = {
  __typename?: 'PayloadJobsFields_log_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Fields = {
  __typename?: 'PayloadJobsFields_log_Fields'
  completedAt?: Maybe<PayloadJobsFields_Log_CompletedAt>
  error?: Maybe<PayloadJobsFields_Log_Error>
  executedAt?: Maybe<PayloadJobsFields_Log_ExecutedAt>
  id?: Maybe<PayloadJobsFields_Log_Id>
  input?: Maybe<PayloadJobsFields_Log_Input>
  output?: Maybe<PayloadJobsFields_Log_Output>
  state?: Maybe<PayloadJobsFields_Log_State>
  taskID?: Maybe<PayloadJobsFields_Log_TaskId>
  taskSlug?: Maybe<PayloadJobsFields_Log_TaskSlug>
}

export type PayloadJobsFields_Log_Read = {
  __typename?: 'PayloadJobsFields_log_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Update = {
  __typename?: 'PayloadJobsFields_log_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_CompletedAt = {
  __typename?: 'PayloadJobsFields_log_completedAt'
  create?: Maybe<PayloadJobsFields_Log_CompletedAt_Create>
  delete?: Maybe<PayloadJobsFields_Log_CompletedAt_Delete>
  read?: Maybe<PayloadJobsFields_Log_CompletedAt_Read>
  update?: Maybe<PayloadJobsFields_Log_CompletedAt_Update>
}

export type PayloadJobsFields_Log_CompletedAt_Create = {
  __typename?: 'PayloadJobsFields_log_completedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_CompletedAt_Delete = {
  __typename?: 'PayloadJobsFields_log_completedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_CompletedAt_Read = {
  __typename?: 'PayloadJobsFields_log_completedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_CompletedAt_Update = {
  __typename?: 'PayloadJobsFields_log_completedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Error = {
  __typename?: 'PayloadJobsFields_log_error'
  create?: Maybe<PayloadJobsFields_Log_Error_Create>
  delete?: Maybe<PayloadJobsFields_Log_Error_Delete>
  read?: Maybe<PayloadJobsFields_Log_Error_Read>
  update?: Maybe<PayloadJobsFields_Log_Error_Update>
}

export type PayloadJobsFields_Log_Error_Create = {
  __typename?: 'PayloadJobsFields_log_error_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Error_Delete = {
  __typename?: 'PayloadJobsFields_log_error_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Error_Read = {
  __typename?: 'PayloadJobsFields_log_error_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Error_Update = {
  __typename?: 'PayloadJobsFields_log_error_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_ExecutedAt = {
  __typename?: 'PayloadJobsFields_log_executedAt'
  create?: Maybe<PayloadJobsFields_Log_ExecutedAt_Create>
  delete?: Maybe<PayloadJobsFields_Log_ExecutedAt_Delete>
  read?: Maybe<PayloadJobsFields_Log_ExecutedAt_Read>
  update?: Maybe<PayloadJobsFields_Log_ExecutedAt_Update>
}

export type PayloadJobsFields_Log_ExecutedAt_Create = {
  __typename?: 'PayloadJobsFields_log_executedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_ExecutedAt_Delete = {
  __typename?: 'PayloadJobsFields_log_executedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_ExecutedAt_Read = {
  __typename?: 'PayloadJobsFields_log_executedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_ExecutedAt_Update = {
  __typename?: 'PayloadJobsFields_log_executedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Id = {
  __typename?: 'PayloadJobsFields_log_id'
  create?: Maybe<PayloadJobsFields_Log_Id_Create>
  delete?: Maybe<PayloadJobsFields_Log_Id_Delete>
  read?: Maybe<PayloadJobsFields_Log_Id_Read>
  update?: Maybe<PayloadJobsFields_Log_Id_Update>
}

export type PayloadJobsFields_Log_Id_Create = {
  __typename?: 'PayloadJobsFields_log_id_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Id_Delete = {
  __typename?: 'PayloadJobsFields_log_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Id_Read = {
  __typename?: 'PayloadJobsFields_log_id_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Id_Update = {
  __typename?: 'PayloadJobsFields_log_id_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Input = {
  __typename?: 'PayloadJobsFields_log_input'
  create?: Maybe<PayloadJobsFields_Log_Input_Create>
  delete?: Maybe<PayloadJobsFields_Log_Input_Delete>
  read?: Maybe<PayloadJobsFields_Log_Input_Read>
  update?: Maybe<PayloadJobsFields_Log_Input_Update>
}

export type PayloadJobsFields_Log_Input_Create = {
  __typename?: 'PayloadJobsFields_log_input_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Input_Delete = {
  __typename?: 'PayloadJobsFields_log_input_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Input_Read = {
  __typename?: 'PayloadJobsFields_log_input_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Input_Update = {
  __typename?: 'PayloadJobsFields_log_input_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Output = {
  __typename?: 'PayloadJobsFields_log_output'
  create?: Maybe<PayloadJobsFields_Log_Output_Create>
  delete?: Maybe<PayloadJobsFields_Log_Output_Delete>
  read?: Maybe<PayloadJobsFields_Log_Output_Read>
  update?: Maybe<PayloadJobsFields_Log_Output_Update>
}

export type PayloadJobsFields_Log_Output_Create = {
  __typename?: 'PayloadJobsFields_log_output_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Output_Delete = {
  __typename?: 'PayloadJobsFields_log_output_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Output_Read = {
  __typename?: 'PayloadJobsFields_log_output_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_Output_Update = {
  __typename?: 'PayloadJobsFields_log_output_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_State = {
  __typename?: 'PayloadJobsFields_log_state'
  create?: Maybe<PayloadJobsFields_Log_State_Create>
  delete?: Maybe<PayloadJobsFields_Log_State_Delete>
  read?: Maybe<PayloadJobsFields_Log_State_Read>
  update?: Maybe<PayloadJobsFields_Log_State_Update>
}

export type PayloadJobsFields_Log_State_Create = {
  __typename?: 'PayloadJobsFields_log_state_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_State_Delete = {
  __typename?: 'PayloadJobsFields_log_state_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_State_Read = {
  __typename?: 'PayloadJobsFields_log_state_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_State_Update = {
  __typename?: 'PayloadJobsFields_log_state_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskId = {
  __typename?: 'PayloadJobsFields_log_taskID'
  create?: Maybe<PayloadJobsFields_Log_TaskId_Create>
  delete?: Maybe<PayloadJobsFields_Log_TaskId_Delete>
  read?: Maybe<PayloadJobsFields_Log_TaskId_Read>
  update?: Maybe<PayloadJobsFields_Log_TaskId_Update>
}

export type PayloadJobsFields_Log_TaskId_Create = {
  __typename?: 'PayloadJobsFields_log_taskID_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskId_Delete = {
  __typename?: 'PayloadJobsFields_log_taskID_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskId_Read = {
  __typename?: 'PayloadJobsFields_log_taskID_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskId_Update = {
  __typename?: 'PayloadJobsFields_log_taskID_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskSlug = {
  __typename?: 'PayloadJobsFields_log_taskSlug'
  create?: Maybe<PayloadJobsFields_Log_TaskSlug_Create>
  delete?: Maybe<PayloadJobsFields_Log_TaskSlug_Delete>
  read?: Maybe<PayloadJobsFields_Log_TaskSlug_Read>
  update?: Maybe<PayloadJobsFields_Log_TaskSlug_Update>
}

export type PayloadJobsFields_Log_TaskSlug_Create = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskSlug_Delete = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskSlug_Read = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Log_TaskSlug_Update = {
  __typename?: 'PayloadJobsFields_log_taskSlug_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Processing = {
  __typename?: 'PayloadJobsFields_processing'
  create?: Maybe<PayloadJobsFields_Processing_Create>
  delete?: Maybe<PayloadJobsFields_Processing_Delete>
  read?: Maybe<PayloadJobsFields_Processing_Read>
  update?: Maybe<PayloadJobsFields_Processing_Update>
}

export type PayloadJobsFields_Processing_Create = {
  __typename?: 'PayloadJobsFields_processing_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Processing_Delete = {
  __typename?: 'PayloadJobsFields_processing_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Processing_Read = {
  __typename?: 'PayloadJobsFields_processing_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Processing_Update = {
  __typename?: 'PayloadJobsFields_processing_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Queue = {
  __typename?: 'PayloadJobsFields_queue'
  create?: Maybe<PayloadJobsFields_Queue_Create>
  delete?: Maybe<PayloadJobsFields_Queue_Delete>
  read?: Maybe<PayloadJobsFields_Queue_Read>
  update?: Maybe<PayloadJobsFields_Queue_Update>
}

export type PayloadJobsFields_Queue_Create = {
  __typename?: 'PayloadJobsFields_queue_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Queue_Delete = {
  __typename?: 'PayloadJobsFields_queue_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Queue_Read = {
  __typename?: 'PayloadJobsFields_queue_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_Queue_Update = {
  __typename?: 'PayloadJobsFields_queue_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskSlug = {
  __typename?: 'PayloadJobsFields_taskSlug'
  create?: Maybe<PayloadJobsFields_TaskSlug_Create>
  delete?: Maybe<PayloadJobsFields_TaskSlug_Delete>
  read?: Maybe<PayloadJobsFields_TaskSlug_Read>
  update?: Maybe<PayloadJobsFields_TaskSlug_Update>
}

export type PayloadJobsFields_TaskSlug_Create = {
  __typename?: 'PayloadJobsFields_taskSlug_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskSlug_Delete = {
  __typename?: 'PayloadJobsFields_taskSlug_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskSlug_Read = {
  __typename?: 'PayloadJobsFields_taskSlug_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskSlug_Update = {
  __typename?: 'PayloadJobsFields_taskSlug_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskStatus = {
  __typename?: 'PayloadJobsFields_taskStatus'
  create?: Maybe<PayloadJobsFields_TaskStatus_Create>
  delete?: Maybe<PayloadJobsFields_TaskStatus_Delete>
  read?: Maybe<PayloadJobsFields_TaskStatus_Read>
  update?: Maybe<PayloadJobsFields_TaskStatus_Update>
}

export type PayloadJobsFields_TaskStatus_Create = {
  __typename?: 'PayloadJobsFields_taskStatus_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskStatus_Delete = {
  __typename?: 'PayloadJobsFields_taskStatus_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskStatus_Read = {
  __typename?: 'PayloadJobsFields_taskStatus_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TaskStatus_Update = {
  __typename?: 'PayloadJobsFields_taskStatus_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TotalTried = {
  __typename?: 'PayloadJobsFields_totalTried'
  create?: Maybe<PayloadJobsFields_TotalTried_Create>
  delete?: Maybe<PayloadJobsFields_TotalTried_Delete>
  read?: Maybe<PayloadJobsFields_TotalTried_Read>
  update?: Maybe<PayloadJobsFields_TotalTried_Update>
}

export type PayloadJobsFields_TotalTried_Create = {
  __typename?: 'PayloadJobsFields_totalTried_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TotalTried_Delete = {
  __typename?: 'PayloadJobsFields_totalTried_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TotalTried_Read = {
  __typename?: 'PayloadJobsFields_totalTried_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_TotalTried_Update = {
  __typename?: 'PayloadJobsFields_totalTried_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_UpdatedAt = {
  __typename?: 'PayloadJobsFields_updatedAt'
  create?: Maybe<PayloadJobsFields_UpdatedAt_Create>
  delete?: Maybe<PayloadJobsFields_UpdatedAt_Delete>
  read?: Maybe<PayloadJobsFields_UpdatedAt_Read>
  update?: Maybe<PayloadJobsFields_UpdatedAt_Update>
}

export type PayloadJobsFields_UpdatedAt_Create = {
  __typename?: 'PayloadJobsFields_updatedAt_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_UpdatedAt_Delete = {
  __typename?: 'PayloadJobsFields_updatedAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_UpdatedAt_Read = {
  __typename?: 'PayloadJobsFields_updatedAt_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_UpdatedAt_Update = {
  __typename?: 'PayloadJobsFields_updatedAt_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_WaitUntil = {
  __typename?: 'PayloadJobsFields_waitUntil'
  create?: Maybe<PayloadJobsFields_WaitUntil_Create>
  delete?: Maybe<PayloadJobsFields_WaitUntil_Delete>
  read?: Maybe<PayloadJobsFields_WaitUntil_Read>
  update?: Maybe<PayloadJobsFields_WaitUntil_Update>
}

export type PayloadJobsFields_WaitUntil_Create = {
  __typename?: 'PayloadJobsFields_waitUntil_Create'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_WaitUntil_Delete = {
  __typename?: 'PayloadJobsFields_waitUntil_Delete'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_WaitUntil_Read = {
  __typename?: 'PayloadJobsFields_waitUntil_Read'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsFields_WaitUntil_Update = {
  __typename?: 'PayloadJobsFields_waitUntil_Update'
  permission: Scalars['Boolean']['output']
}

export type PayloadJobsReadAccess = {
  __typename?: 'PayloadJobsReadAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsReadDocAccess = {
  __typename?: 'PayloadJobsReadDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsUpdateAccess = {
  __typename?: 'PayloadJobsUpdateAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadJobsUpdateDocAccess = {
  __typename?: 'PayloadJobsUpdateDocAccess'
  permission: Scalars['Boolean']['output']
  where?: Maybe<Scalars['JSONObject']['output']>
}

export type PayloadLockedDocument = {
  __typename?: 'PayloadLockedDocument'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  document?: Maybe<PayloadLockedDocument_Document_Relationship>
  globalSlug?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user: PayloadLockedDocument_User_Relationship
}

export type PayloadLockedDocumentDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type PayloadLockedDocumentUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type PayloadLockedDocumentUpdate_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocumentUpdate_DocumentRelationshipInputRelationTo {
  Announcements = 'announcements',
  Donations = 'donations',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
  PayloadJobs = 'payload_jobs',
  Users = 'users',
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users',
}

export type PayloadLockedDocument_Document =
  | Announcement
  | Donation
  | Form
  | FormSubmission
  | Media
  | Page
  | PayloadJob
  | User

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Announcements = 'announcements',
  Donations = 'donations',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
  PayloadJobs = 'payload_jobs',
  Users = 'users',
}

export enum PayloadLockedDocument_Document_RelationTo {
  Announcements = 'announcements',
  Donations = 'donations',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
  PayloadJobs = 'payload_jobs',
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
  Announcements = 'announcements',
  Donations = 'donations',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
  PayloadJobs = 'payload_jobs',
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
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
  docs: Array<PayloadLockedDocument>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
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
  id: Scalars['String']['output']
  key?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
  user: PayloadPreference_User_Relationship
  value?: Maybe<Scalars['JSON']['output']>
}

export type PayloadPreferenceUserArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
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
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
  docs: Array<PayloadPreference>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
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
  Announcement?: Maybe<Announcement>
  Announcements?: Maybe<Announcements>
  Donation?: Maybe<Donation>
  Donations?: Maybe<Donations>
  Form?: Maybe<Form>
  FormSubmission?: Maybe<FormSubmission>
  FormSubmissions?: Maybe<FormSubmissions>
  Forms?: Maybe<Forms>
  Media?: Maybe<Media>
  Page?: Maybe<Page>
  Pages?: Maybe<Pages>
  PayloadJob?: Maybe<PayloadJob>
  PayloadJobs?: Maybe<PayloadJobs>
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>
  PayloadPreference?: Maybe<PayloadPreference>
  PayloadPreferences?: Maybe<PayloadPreferences>
  User?: Maybe<User>
  Users?: Maybe<Users>
  allMedia?: Maybe<AllMedia>
  countAnnouncements?: Maybe<CountAnnouncements>
  countDonations?: Maybe<CountDonations>
  countFormSubmissions?: Maybe<CountFormSubmissions>
  countForms?: Maybe<CountForms>
  countPages?: Maybe<CountPages>
  countPayloadJobs?: Maybe<CountPayloadJobs>
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>
  countPayloadPreferences?: Maybe<CountPayloadPreferences>
  countUsers?: Maybe<CountUsers>
  countallMedia?: Maybe<CountallMedia>
  docAccessAnnouncement?: Maybe<AnnouncementsDocAccess>
  docAccessDonation?: Maybe<DonationsDocAccess>
  docAccessForm?: Maybe<FormsDocAccess>
  docAccessFormSubmission?: Maybe<Form_SubmissionsDocAccess>
  docAccessMedia?: Maybe<MediaDocAccess>
  docAccessPage?: Maybe<PagesDocAccess>
  docAccessPayloadJob?: Maybe<Payload_JobsDocAccess>
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>
  docAccessUser?: Maybe<UsersDocAccess>
  initializedUser?: Maybe<Scalars['Boolean']['output']>
  meUser?: Maybe<UsersMe>
  versionAnnouncement?: Maybe<AnnouncementVersion>
  versionPage?: Maybe<PageVersion>
  versionsAnnouncements?: Maybe<VersionsAnnouncements>
  versionsPages?: Maybe<VersionsPages>
}

export type QueryAnnouncementArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryAnnouncementsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Announcement_Where>
}

export type QueryDonationArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryDonationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Donation_Where>
}

export type QueryFormArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFormSubmissionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FormSubmission_Where>
}

export type QueryFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Form_Where>
}

export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Page_Where>
}

export type QueryPayloadJobArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPayloadJobsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadJob_Where>
}

export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadLockedDocument_Where>
}

export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadPreference_Where>
}

export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<User_Where>
}

export type QueryAllMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Media_Where>
}

export type QueryCountAnnouncementsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Announcement_Where>
}

export type QueryCountDonationsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Donation_Where>
}

export type QueryCountFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<FormSubmission_Where>
}

export type QueryCountFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Form_Where>
}

export type QueryCountPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Page_Where>
}

export type QueryCountPayloadJobsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadJob_Where>
}

export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadLockedDocument_Where>
}

export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<PayloadPreference_Where>
}

export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<User_Where>
}

export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<Media_Where>
}

export type QueryDocAccessAnnouncementArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessDonationArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessFormArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessFormSubmissionArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessMediaArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessPageArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessPayloadJobArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input']
}

export type QueryVersionAnnouncementArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryVersionPageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<LocaleInputType>
  trash?: InputMaybe<Scalars['Boolean']['input']>
}

export type QueryVersionsAnnouncementsArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<VersionsAnnouncement_Where>
}

export type QueryVersionsPagesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  trash?: InputMaybe<Scalars['Boolean']['input']>
  where?: InputMaybe<VersionsPage_Where>
}

export type Section = {
  __typename?: 'Section'
  background?: Maybe<Scalars['String']['output']>
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  blocks?: Maybe<Array<Section_Blocks>>
  id?: Maybe<Scalars['String']['output']>
  image?: Maybe<Media>
  spacing?: Maybe<Section_Spacing>
}

export type SectionImageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type Section_Blocks = Container | FormBlock | MediaBlock

export enum Section_Spacing {
  Lg = 'lg',
  Md = 'md',
  Sm = 'sm',
}

export type Select = {
  __typename?: 'Select'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  defaultValue?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  options?: Maybe<Array<Select_Options>>
  placeholder?: Maybe<Scalars['String']['output']>
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type Select_Options = {
  __typename?: 'Select_Options'
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  value?: Maybe<Scalars['String']['output']>
}

export type Text = {
  __typename?: 'Text'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  defaultValue?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type Textarea = {
  __typename?: 'Textarea'
  blockName?: Maybe<Scalars['String']['output']>
  blockType?: Maybe<Scalars['String']['output']>
  defaultValue?: Maybe<Scalars['String']['output']>
  id?: Maybe<Scalars['String']['output']>
  label?: Maybe<Scalars['String']['output']>
  name: Scalars['String']['output']
  required?: Maybe<Scalars['Boolean']['output']>
  width?: Maybe<Scalars['Float']['output']>
}

export type User = {
  __typename?: 'User'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  email: Scalars['EmailAddress']['output']
  hash?: Maybe<Scalars['String']['output']>
  id: Scalars['String']['output']
  lockUntil?: Maybe<Scalars['DateTime']['output']>
  loginAttempts?: Maybe<Scalars['Float']['output']>
  name?: Maybe<Scalars['String']['output']>
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>
  resetPasswordToken?: Maybe<Scalars['String']['output']>
  salt?: Maybe<Scalars['String']['output']>
  sessions?: Maybe<Array<User_Sessions>>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type User_Sessions = {
  __typename?: 'User_Sessions'
  createdAt?: Maybe<Scalars['DateTime']['output']>
  expiresAt?: Maybe<Scalars['DateTime']['output']>
  id?: Maybe<Scalars['String']['output']>
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
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type User_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type User_Sessions__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type User_Sessions__ExpiresAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type User_Sessions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
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
  name?: InputMaybe<User_Name_Operator>
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  name?: InputMaybe<User_Name_Operator>
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  name?: InputMaybe<User_Name_Operator>
  sessions__createdAt?: InputMaybe<User_Sessions__CreatedAt_Operator>
  sessions__expiresAt?: InputMaybe<User_Sessions__ExpiresAt_Operator>
  sessions__id?: InputMaybe<User_Sessions__Id_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type Users = {
  __typename?: 'Users'
  docs: Array<User>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
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
  name?: Maybe<UsersDocAccessFields_Name>
  sessions?: Maybe<UsersDocAccessFields_Sessions>
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

export type UsersDocAccessFields_Name = {
  __typename?: 'UsersDocAccessFields_name'
  create?: Maybe<UsersDocAccessFields_Name_Create>
  delete?: Maybe<UsersDocAccessFields_Name_Delete>
  read?: Maybe<UsersDocAccessFields_Name_Read>
  update?: Maybe<UsersDocAccessFields_Name_Update>
}

export type UsersDocAccessFields_Name_Create = {
  __typename?: 'UsersDocAccessFields_name_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Name_Delete = {
  __typename?: 'UsersDocAccessFields_name_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Name_Read = {
  __typename?: 'UsersDocAccessFields_name_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Name_Update = {
  __typename?: 'UsersDocAccessFields_name_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions = {
  __typename?: 'UsersDocAccessFields_sessions'
  create?: Maybe<UsersDocAccessFields_Sessions_Create>
  delete?: Maybe<UsersDocAccessFields_Sessions_Delete>
  fields?: Maybe<UsersDocAccessFields_Sessions_Fields>
  read?: Maybe<UsersDocAccessFields_Sessions_Read>
  update?: Maybe<UsersDocAccessFields_Sessions_Update>
}

export type UsersDocAccessFields_Sessions_Create = {
  __typename?: 'UsersDocAccessFields_sessions_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Fields = {
  __typename?: 'UsersDocAccessFields_sessions_Fields'
  createdAt?: Maybe<UsersDocAccessFields_Sessions_CreatedAt>
  expiresAt?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt>
  id?: Maybe<UsersDocAccessFields_Sessions_Id>
}

export type UsersDocAccessFields_Sessions_Read = {
  __typename?: 'UsersDocAccessFields_sessions_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Update = {
  __typename?: 'UsersDocAccessFields_sessions_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_CreatedAt = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt'
  create?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Create>
  delete?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Delete>
  read?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Read>
  update?: Maybe<UsersDocAccessFields_Sessions_CreatedAt_Update>
}

export type UsersDocAccessFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_ExpiresAt = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt'
  create?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Create>
  delete?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Delete>
  read?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Read>
  update?: Maybe<UsersDocAccessFields_Sessions_ExpiresAt_Update>
}

export type UsersDocAccessFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersDocAccessFields_sessions_expiresAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Id = {
  __typename?: 'UsersDocAccessFields_sessions_id'
  create?: Maybe<UsersDocAccessFields_Sessions_Id_Create>
  delete?: Maybe<UsersDocAccessFields_Sessions_Id_Delete>
  read?: Maybe<UsersDocAccessFields_Sessions_Id_Read>
  update?: Maybe<UsersDocAccessFields_Sessions_Id_Update>
}

export type UsersDocAccessFields_Sessions_Id_Create = {
  __typename?: 'UsersDocAccessFields_sessions_id_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Id_Delete = {
  __typename?: 'UsersDocAccessFields_sessions_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Id_Read = {
  __typename?: 'UsersDocAccessFields_sessions_id_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersDocAccessFields_Sessions_Id_Update = {
  __typename?: 'UsersDocAccessFields_sessions_id_Update'
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
  name?: Maybe<UsersFields_Name>
  sessions?: Maybe<UsersFields_Sessions>
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

export type UsersFields_Name = {
  __typename?: 'UsersFields_name'
  create?: Maybe<UsersFields_Name_Create>
  delete?: Maybe<UsersFields_Name_Delete>
  read?: Maybe<UsersFields_Name_Read>
  update?: Maybe<UsersFields_Name_Update>
}

export type UsersFields_Name_Create = {
  __typename?: 'UsersFields_name_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Name_Delete = {
  __typename?: 'UsersFields_name_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Name_Read = {
  __typename?: 'UsersFields_name_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Name_Update = {
  __typename?: 'UsersFields_name_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions = {
  __typename?: 'UsersFields_sessions'
  create?: Maybe<UsersFields_Sessions_Create>
  delete?: Maybe<UsersFields_Sessions_Delete>
  fields?: Maybe<UsersFields_Sessions_Fields>
  read?: Maybe<UsersFields_Sessions_Read>
  update?: Maybe<UsersFields_Sessions_Update>
}

export type UsersFields_Sessions_Create = {
  __typename?: 'UsersFields_sessions_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Delete = {
  __typename?: 'UsersFields_sessions_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Fields = {
  __typename?: 'UsersFields_sessions_Fields'
  createdAt?: Maybe<UsersFields_Sessions_CreatedAt>
  expiresAt?: Maybe<UsersFields_Sessions_ExpiresAt>
  id?: Maybe<UsersFields_Sessions_Id>
}

export type UsersFields_Sessions_Read = {
  __typename?: 'UsersFields_sessions_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Update = {
  __typename?: 'UsersFields_sessions_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_CreatedAt = {
  __typename?: 'UsersFields_sessions_createdAt'
  create?: Maybe<UsersFields_Sessions_CreatedAt_Create>
  delete?: Maybe<UsersFields_Sessions_CreatedAt_Delete>
  read?: Maybe<UsersFields_Sessions_CreatedAt_Read>
  update?: Maybe<UsersFields_Sessions_CreatedAt_Update>
}

export type UsersFields_Sessions_CreatedAt_Create = {
  __typename?: 'UsersFields_sessions_createdAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_CreatedAt_Delete = {
  __typename?: 'UsersFields_sessions_createdAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_CreatedAt_Read = {
  __typename?: 'UsersFields_sessions_createdAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_CreatedAt_Update = {
  __typename?: 'UsersFields_sessions_createdAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_ExpiresAt = {
  __typename?: 'UsersFields_sessions_expiresAt'
  create?: Maybe<UsersFields_Sessions_ExpiresAt_Create>
  delete?: Maybe<UsersFields_Sessions_ExpiresAt_Delete>
  read?: Maybe<UsersFields_Sessions_ExpiresAt_Read>
  update?: Maybe<UsersFields_Sessions_ExpiresAt_Update>
}

export type UsersFields_Sessions_ExpiresAt_Create = {
  __typename?: 'UsersFields_sessions_expiresAt_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_ExpiresAt_Delete = {
  __typename?: 'UsersFields_sessions_expiresAt_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_ExpiresAt_Read = {
  __typename?: 'UsersFields_sessions_expiresAt_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_ExpiresAt_Update = {
  __typename?: 'UsersFields_sessions_expiresAt_Update'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Id = {
  __typename?: 'UsersFields_sessions_id'
  create?: Maybe<UsersFields_Sessions_Id_Create>
  delete?: Maybe<UsersFields_Sessions_Id_Delete>
  read?: Maybe<UsersFields_Sessions_Id_Read>
  update?: Maybe<UsersFields_Sessions_Id_Update>
}

export type UsersFields_Sessions_Id_Create = {
  __typename?: 'UsersFields_sessions_id_Create'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Id_Delete = {
  __typename?: 'UsersFields_sessions_id_Delete'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Id_Read = {
  __typename?: 'UsersFields_sessions_id_Read'
  permission: Scalars['Boolean']['output']
}

export type UsersFields_Sessions_Id_Update = {
  __typename?: 'UsersFields_sessions_id_Update'
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
  docs: Array<Media>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type AnnouncementsAccess = {
  __typename?: 'announcementsAccess'
  create?: Maybe<AnnouncementsCreateAccess>
  delete?: Maybe<AnnouncementsDeleteAccess>
  fields?: Maybe<AnnouncementsFields>
  read?: Maybe<AnnouncementsReadAccess>
  readVersions?: Maybe<AnnouncementsReadVersionsAccess>
  update?: Maybe<AnnouncementsUpdateAccess>
}

export type AnnouncementsDocAccess = {
  __typename?: 'announcementsDocAccess'
  create?: Maybe<AnnouncementsCreateDocAccess>
  delete?: Maybe<AnnouncementsDeleteDocAccess>
  fields?: Maybe<AnnouncementsDocAccessFields>
  read?: Maybe<AnnouncementsReadDocAccess>
  readVersions?: Maybe<AnnouncementsReadVersionsDocAccess>
  update?: Maybe<AnnouncementsUpdateDocAccess>
}

export type CountAnnouncements = {
  __typename?: 'countAnnouncements'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountDonations = {
  __typename?: 'countDonations'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountFormSubmissions = {
  __typename?: 'countFormSubmissions'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountForms = {
  __typename?: 'countForms'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountPages = {
  __typename?: 'countPages'
  totalDocs?: Maybe<Scalars['Int']['output']>
}

export type CountPayloadJobs = {
  __typename?: 'countPayloadJobs'
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

export type DonationsAccess = {
  __typename?: 'donationsAccess'
  create?: Maybe<DonationsCreateAccess>
  delete?: Maybe<DonationsDeleteAccess>
  fields?: Maybe<DonationsFields>
  read?: Maybe<DonationsReadAccess>
  update?: Maybe<DonationsUpdateAccess>
}

export type DonationsDocAccess = {
  __typename?: 'donationsDocAccess'
  create?: Maybe<DonationsCreateDocAccess>
  delete?: Maybe<DonationsDeleteDocAccess>
  fields?: Maybe<DonationsDocAccessFields>
  read?: Maybe<DonationsReadDocAccess>
  update?: Maybe<DonationsUpdateDocAccess>
}

export type Form_SubmissionsAccess = {
  __typename?: 'form_submissionsAccess'
  create?: Maybe<FormSubmissionsCreateAccess>
  delete?: Maybe<FormSubmissionsDeleteAccess>
  fields?: Maybe<FormSubmissionsFields>
  read?: Maybe<FormSubmissionsReadAccess>
  update?: Maybe<FormSubmissionsUpdateAccess>
}

export type Form_SubmissionsDocAccess = {
  __typename?: 'form_submissionsDocAccess'
  create?: Maybe<FormSubmissionsCreateDocAccess>
  delete?: Maybe<FormSubmissionsDeleteDocAccess>
  fields?: Maybe<FormSubmissionsDocAccessFields>
  read?: Maybe<FormSubmissionsReadDocAccess>
  update?: Maybe<FormSubmissionsUpdateDocAccess>
}

export type FormsAccess = {
  __typename?: 'formsAccess'
  create?: Maybe<FormsCreateAccess>
  delete?: Maybe<FormsDeleteAccess>
  fields?: Maybe<FormsFields>
  read?: Maybe<FormsReadAccess>
  update?: Maybe<FormsUpdateAccess>
}

export type FormsDocAccess = {
  __typename?: 'formsDocAccess'
  create?: Maybe<FormsCreateDocAccess>
  delete?: Maybe<FormsDeleteDocAccess>
  fields?: Maybe<FormsDocAccessFields>
  read?: Maybe<FormsReadDocAccess>
  update?: Maybe<FormsUpdateDocAccess>
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

export type MutationAnnouncementInput = {
  _status?: InputMaybe<Announcement__Status_MutationInput>
  content: Scalars['JSON']['input']
  createdAt?: InputMaybe<Scalars['String']['input']>
  description: Scalars['String']['input']
  image?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationAnnouncementUpdateInput = {
  _status?: InputMaybe<AnnouncementUpdate__Status_MutationInput>
  content?: InputMaybe<Scalars['JSON']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  publishedAt?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationDonationInput = {
  amount: Scalars['Float']['input']
  campaign?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  currency: Scalars['String']['input']
  date: Scalars['String']['input']
  email?: InputMaybe<Scalars['String']['input']>
  message?: InputMaybe<Scalars['String']['input']>
  paymentType?: InputMaybe<Donation_PaymentType_MutationInput>
  status?: InputMaybe<Donation_Status_MutationInput>
  stripePaymentIntentId: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationDonationUpdateInput = {
  amount?: InputMaybe<Scalars['Float']['input']>
  campaign?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  currency?: InputMaybe<Scalars['String']['input']>
  date?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  message?: InputMaybe<Scalars['String']['input']>
  paymentType?: InputMaybe<DonationUpdate_PaymentType_MutationInput>
  status?: InputMaybe<DonationUpdate_Status_MutationInput>
  stripePaymentIntentId?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationFormInput = {
  confirmationMessage?: InputMaybe<Scalars['JSON']['input']>
  confirmationType?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  emails?: InputMaybe<Array<InputMaybe<MutationForm_EmailsInput>>>
  fields?: InputMaybe<Scalars['JSON']['input']>
  redirect: MutationForm_RedirectInput
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationFormSubmissionInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  form?: InputMaybe<Scalars['String']['input']>
  submissionData?: InputMaybe<Array<InputMaybe<MutationFormSubmission_SubmissionDataInput>>>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationFormSubmissionUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  form?: InputMaybe<Scalars['String']['input']>
  submissionData?: InputMaybe<Array<InputMaybe<MutationFormSubmissionUpdate_SubmissionDataInput>>>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationFormSubmissionUpdate_SubmissionDataInput = {
  field: Scalars['String']['input']
  id?: InputMaybe<Scalars['String']['input']>
  value: Scalars['String']['input']
}

export type MutationFormSubmission_SubmissionDataInput = {
  field: Scalars['String']['input']
  id?: InputMaybe<Scalars['String']['input']>
  value: Scalars['String']['input']
}

export type MutationFormUpdateInput = {
  confirmationMessage?: InputMaybe<Scalars['JSON']['input']>
  confirmationType?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  emails?: InputMaybe<Array<InputMaybe<MutationFormUpdate_EmailsInput>>>
  fields?: InputMaybe<Scalars['JSON']['input']>
  redirect: MutationFormUpdate_RedirectInput
  submitButtonLabel?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationFormUpdate_EmailsInput = {
  bcc?: InputMaybe<Scalars['String']['input']>
  cc?: InputMaybe<Scalars['String']['input']>
  emailFrom?: InputMaybe<Scalars['String']['input']>
  emailTo?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  message?: InputMaybe<Scalars['JSON']['input']>
  replyTo?: InputMaybe<Scalars['String']['input']>
  subject?: InputMaybe<Scalars['String']['input']>
}

export type MutationFormUpdate_RedirectInput = {
  url: Scalars['String']['input']
}

export type MutationForm_EmailsInput = {
  bcc?: InputMaybe<Scalars['String']['input']>
  cc?: InputMaybe<Scalars['String']['input']>
  emailFrom?: InputMaybe<Scalars['String']['input']>
  emailTo?: InputMaybe<Scalars['String']['input']>
  id?: InputMaybe<Scalars['String']['input']>
  message?: InputMaybe<Scalars['JSON']['input']>
  replyTo?: InputMaybe<Scalars['String']['input']>
  subject?: InputMaybe<Scalars['String']['input']>
}

export type MutationForm_RedirectInput = {
  url: Scalars['String']['input']
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

export type MutationPageInput = {
  _status?: InputMaybe<Page__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']['input']>
  hero: MutationPage_HeroInput
  layout?: InputMaybe<Scalars['JSON']['input']>
  meta?: InputMaybe<MutationPage_MetaInput>
  publishedAt?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  slugLock?: InputMaybe<Scalars['Boolean']['input']>
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']['input']>
  hero: MutationPageUpdate_HeroInput
  layout?: InputMaybe<Scalars['JSON']['input']>
  meta?: InputMaybe<MutationPageUpdate_MetaInput>
  publishedAt?: InputMaybe<Scalars['String']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  slugLock?: InputMaybe<Scalars['Boolean']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationPageUpdate_HeroInput = {
  links?: InputMaybe<Array<InputMaybe<MutationPageUpdate_Hero_LinksInput>>>
  media?: InputMaybe<Scalars['String']['input']>
  richText?: InputMaybe<Scalars['JSON']['input']>
  type: PageUpdate_Hero_Type_MutationInput
}

export type MutationPageUpdate_Hero_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<MutationPageUpdate_Hero_Links_LinkInput>
}

export type MutationPageUpdate_Hero_Links_LinkInput = {
  appearance?: InputMaybe<PageUpdate_Hero_Links_Link_Appearance_MutationInput>
  label: Scalars['String']['input']
  newTab?: InputMaybe<Scalars['Boolean']['input']>
  reference?: InputMaybe<PageUpdate_Hero_Links_Link_ReferenceRelationshipInput>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type MutationPageUpdate_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type MutationPage_HeroInput = {
  links?: InputMaybe<Array<InputMaybe<MutationPage_Hero_LinksInput>>>
  media?: InputMaybe<Scalars['String']['input']>
  richText?: InputMaybe<Scalars['JSON']['input']>
  type: Page_Hero_Type_MutationInput
}

export type MutationPage_Hero_LinksInput = {
  id?: InputMaybe<Scalars['String']['input']>
  link?: InputMaybe<MutationPage_Hero_Links_LinkInput>
}

export type MutationPage_Hero_Links_LinkInput = {
  appearance?: InputMaybe<Page_Hero_Links_Link_Appearance_MutationInput>
  label: Scalars['String']['input']
  newTab?: InputMaybe<Scalars['Boolean']['input']>
  reference?: InputMaybe<Page_Hero_Links_Link_ReferenceRelationshipInput>
  type?: InputMaybe<Scalars['String']['input']>
  url?: InputMaybe<Scalars['String']['input']>
}

export type MutationPage_MetaInput = {
  description?: InputMaybe<Scalars['String']['input']>
  image?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
}

export type MutationPayloadJobInput = {
  completedAt?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  error?: InputMaybe<Scalars['JSON']['input']>
  hasError?: InputMaybe<Scalars['Boolean']['input']>
  input?: InputMaybe<Scalars['JSON']['input']>
  log?: InputMaybe<Array<InputMaybe<MutationPayloadJob_LogInput>>>
  processing?: InputMaybe<Scalars['Boolean']['input']>
  queue?: InputMaybe<Scalars['String']['input']>
  taskSlug?: InputMaybe<PayloadJob_TaskSlug_MutationInput>
  taskStatus?: InputMaybe<Scalars['JSON']['input']>
  totalTried?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  waitUntil?: InputMaybe<Scalars['String']['input']>
}

export type MutationPayloadJobUpdateInput = {
  completedAt?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  error?: InputMaybe<Scalars['JSON']['input']>
  hasError?: InputMaybe<Scalars['Boolean']['input']>
  input?: InputMaybe<Scalars['JSON']['input']>
  log?: InputMaybe<Array<InputMaybe<MutationPayloadJobUpdate_LogInput>>>
  processing?: InputMaybe<Scalars['Boolean']['input']>
  queue?: InputMaybe<Scalars['String']['input']>
  taskSlug?: InputMaybe<PayloadJobUpdate_TaskSlug_MutationInput>
  taskStatus?: InputMaybe<Scalars['JSON']['input']>
  totalTried?: InputMaybe<Scalars['Float']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
  waitUntil?: InputMaybe<Scalars['String']['input']>
}

export type MutationPayloadJobUpdate_LogInput = {
  completedAt: Scalars['String']['input']
  error?: InputMaybe<Scalars['JSON']['input']>
  executedAt: Scalars['String']['input']
  id?: InputMaybe<Scalars['String']['input']>
  input?: InputMaybe<Scalars['JSON']['input']>
  output?: InputMaybe<Scalars['JSON']['input']>
  state: Scalars['String']['input']
  taskID: Scalars['String']['input']
  taskSlug: PayloadJobUpdate_Log_TaskSlug_MutationInput
}

export type MutationPayloadJob_LogInput = {
  completedAt: Scalars['String']['input']
  error?: InputMaybe<Scalars['JSON']['input']>
  executedAt: Scalars['String']['input']
  id?: InputMaybe<Scalars['String']['input']>
  input?: InputMaybe<Scalars['JSON']['input']>
  output?: InputMaybe<Scalars['JSON']['input']>
  state: Scalars['String']['input']
  taskID: Scalars['String']['input']
  taskSlug: PayloadJob_Log_TaskSlug_MutationInput
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
  name?: InputMaybe<Scalars['String']['input']>
  password: Scalars['String']['input']
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  salt?: InputMaybe<Scalars['String']['input']>
  sessions?: InputMaybe<Array<InputMaybe<MutationUser_SessionsInput>>>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  email?: InputMaybe<Scalars['String']['input']>
  hash?: InputMaybe<Scalars['String']['input']>
  lockUntil?: InputMaybe<Scalars['String']['input']>
  loginAttempts?: InputMaybe<Scalars['Float']['input']>
  name?: InputMaybe<Scalars['String']['input']>
  password?: InputMaybe<Scalars['String']['input']>
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>
  salt?: InputMaybe<Scalars['String']['input']>
  sessions?: InputMaybe<Array<InputMaybe<MutationUserUpdate_SessionsInput>>>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationUserUpdate_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  expiresAt: Scalars['String']['input']
  id: Scalars['String']['input']
}

export type MutationUser_SessionsInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>
  expiresAt: Scalars['String']['input']
  id: Scalars['String']['input']
}

export type PagesAccess = {
  __typename?: 'pagesAccess'
  create?: Maybe<PagesCreateAccess>
  delete?: Maybe<PagesDeleteAccess>
  fields?: Maybe<PagesFields>
  read?: Maybe<PagesReadAccess>
  readVersions?: Maybe<PagesReadVersionsAccess>
  update?: Maybe<PagesUpdateAccess>
}

export type PagesDocAccess = {
  __typename?: 'pagesDocAccess'
  create?: Maybe<PagesCreateDocAccess>
  delete?: Maybe<PagesDeleteDocAccess>
  fields?: Maybe<PagesDocAccessFields>
  read?: Maybe<PagesReadDocAccess>
  readVersions?: Maybe<PagesReadVersionsDocAccess>
  update?: Maybe<PagesUpdateDocAccess>
}

export type Payload_JobsAccess = {
  __typename?: 'payload_jobsAccess'
  create?: Maybe<PayloadJobsCreateAccess>
  delete?: Maybe<PayloadJobsDeleteAccess>
  fields?: Maybe<PayloadJobsFields>
  read?: Maybe<PayloadJobsReadAccess>
  update?: Maybe<PayloadJobsUpdateAccess>
}

export type Payload_JobsDocAccess = {
  __typename?: 'payload_jobsDocAccess'
  create?: Maybe<PayloadJobsCreateDocAccess>
  delete?: Maybe<PayloadJobsDeleteDocAccess>
  fields?: Maybe<PayloadJobsDocAccessFields>
  read?: Maybe<PayloadJobsReadDocAccess>
  update?: Maybe<PayloadJobsUpdateDocAccess>
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

export type VersionsAnnouncement_Autosave_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsAnnouncement_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsAnnouncement_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsAnnouncement_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsAnnouncement_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export enum VersionsAnnouncement_PublishedLocale_Input {
  En = 'en',
  Nl = 'nl',
  Tr = 'tr',
}

export type VersionsAnnouncement_PublishedLocale_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_PublishedLocale_Input>>>
  equals?: InputMaybe<VersionsAnnouncement_PublishedLocale_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_PublishedLocale_Input>>>
  not_equals?: InputMaybe<VersionsAnnouncement_PublishedLocale_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_PublishedLocale_Input>>>
}

export type VersionsAnnouncement_Snapshot_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsAnnouncement_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export enum VersionsAnnouncement_Version___Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export type VersionsAnnouncement_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Version___Status_Input>>>
  equals?: InputMaybe<VersionsAnnouncement_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsAnnouncement_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Version___Status_Input>>>
}

export type VersionsAnnouncement_Version__Content_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
}

export type VersionsAnnouncement_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsAnnouncement_Version__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
}

export type VersionsAnnouncement_Version__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type VersionsAnnouncement_Version__PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsAnnouncement_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsAnnouncement_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsAnnouncement_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsAnnouncement_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Where_Or>>>
  autosave?: InputMaybe<VersionsAnnouncement_Autosave_Operator>
  createdAt?: InputMaybe<VersionsAnnouncement_CreatedAt_Operator>
  id?: InputMaybe<VersionsAnnouncement_Id_Operator>
  latest?: InputMaybe<VersionsAnnouncement_Latest_Operator>
  parent?: InputMaybe<VersionsAnnouncement_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsAnnouncement_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsAnnouncement_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsAnnouncement_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsAnnouncement_Version___Status_Operator>
  version__content?: InputMaybe<VersionsAnnouncement_Version__Content_Operator>
  version__createdAt?: InputMaybe<VersionsAnnouncement_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsAnnouncement_Version__Description_Operator>
  version__image?: InputMaybe<VersionsAnnouncement_Version__Image_Operator>
  version__publishedAt?: InputMaybe<VersionsAnnouncement_Version__PublishedAt_Operator>
  version__slug?: InputMaybe<VersionsAnnouncement_Version__Slug_Operator>
  version__title?: InputMaybe<VersionsAnnouncement_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsAnnouncement_Version__UpdatedAt_Operator>
}

export type VersionsAnnouncement_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Where_Or>>>
  autosave?: InputMaybe<VersionsAnnouncement_Autosave_Operator>
  createdAt?: InputMaybe<VersionsAnnouncement_CreatedAt_Operator>
  id?: InputMaybe<VersionsAnnouncement_Id_Operator>
  latest?: InputMaybe<VersionsAnnouncement_Latest_Operator>
  parent?: InputMaybe<VersionsAnnouncement_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsAnnouncement_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsAnnouncement_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsAnnouncement_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsAnnouncement_Version___Status_Operator>
  version__content?: InputMaybe<VersionsAnnouncement_Version__Content_Operator>
  version__createdAt?: InputMaybe<VersionsAnnouncement_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsAnnouncement_Version__Description_Operator>
  version__image?: InputMaybe<VersionsAnnouncement_Version__Image_Operator>
  version__publishedAt?: InputMaybe<VersionsAnnouncement_Version__PublishedAt_Operator>
  version__slug?: InputMaybe<VersionsAnnouncement_Version__Slug_Operator>
  version__title?: InputMaybe<VersionsAnnouncement_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsAnnouncement_Version__UpdatedAt_Operator>
}

export type VersionsAnnouncement_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsAnnouncement_Where_Or>>>
  autosave?: InputMaybe<VersionsAnnouncement_Autosave_Operator>
  createdAt?: InputMaybe<VersionsAnnouncement_CreatedAt_Operator>
  id?: InputMaybe<VersionsAnnouncement_Id_Operator>
  latest?: InputMaybe<VersionsAnnouncement_Latest_Operator>
  parent?: InputMaybe<VersionsAnnouncement_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsAnnouncement_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsAnnouncement_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsAnnouncement_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsAnnouncement_Version___Status_Operator>
  version__content?: InputMaybe<VersionsAnnouncement_Version__Content_Operator>
  version__createdAt?: InputMaybe<VersionsAnnouncement_Version__CreatedAt_Operator>
  version__description?: InputMaybe<VersionsAnnouncement_Version__Description_Operator>
  version__image?: InputMaybe<VersionsAnnouncement_Version__Image_Operator>
  version__publishedAt?: InputMaybe<VersionsAnnouncement_Version__PublishedAt_Operator>
  version__slug?: InputMaybe<VersionsAnnouncement_Version__Slug_Operator>
  version__title?: InputMaybe<VersionsAnnouncement_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsAnnouncement_Version__UpdatedAt_Operator>
}

export type VersionsAnnouncements = {
  __typename?: 'versionsAnnouncements'
  docs: Array<AnnouncementVersion>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
}

export type VersionsPage_Autosave_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsPage_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsPage_Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsPage_Latest_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsPage_Parent_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export enum VersionsPage_PublishedLocale_Input {
  En = 'en',
  Nl = 'nl',
  Tr = 'tr',
}

export type VersionsPage_PublishedLocale_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_PublishedLocale_Input>>>
  equals?: InputMaybe<VersionsPage_PublishedLocale_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<VersionsPage_PublishedLocale_Input>>>
  not_equals?: InputMaybe<VersionsPage_PublishedLocale_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_PublishedLocale_Input>>>
}

export type VersionsPage_Snapshot_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsPage_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export enum VersionsPage_Version___Status_Input {
  Draft = 'draft',
  Published = 'published',
}

export type VersionsPage_Version___Status_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>
  equals?: InputMaybe<VersionsPage_Version___Status_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>
  not_equals?: InputMaybe<VersionsPage_Version___Status_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version___Status_Input>>>
}

export type VersionsPage_Version__CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsPage_Version__Hero__Links__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export enum VersionsPage_Version__Hero__Links__Link__Appearance_Input {
  Default = 'default',
  Outline = 'outline',
}

export type VersionsPage_Version__Hero__Links__Link__Appearance_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Input>>>
  equals?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Input>>>
  not_equals?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Input>>>
}

export type VersionsPage_Version__Hero__Links__Link__Label_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsPage_Version__Hero__Links__Link__NewTab_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsPage_Version__Hero__Links__Link__Reference_Relation = {
  relationTo?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Reference_Relation_RelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum VersionsPage_Version__Hero__Links__Link__Reference_Relation_RelationTo {
  Pages = 'pages',
}

export enum VersionsPage_Version__Hero__Links__Link__Type_Input {
  Custom = 'custom',
  Reference = 'reference',
}

export type VersionsPage_Version__Hero__Links__Link__Type_Operator = {
  contains?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Input>
  equals?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Input>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Input>
  not_equals?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Input>
}

export type VersionsPage_Version__Hero__Links__Link__Url_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsPage_Version__Hero__Media_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type VersionsPage_Version__Hero__RichText_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['JSON']['input']>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
}

export enum VersionsPage_Version__Hero__Type_Input {
  HighImpact = 'highImpact',
  LowImpact = 'lowImpact',
  MediumImpact = 'mediumImpact',
  None = 'none',
}

export type VersionsPage_Version__Hero__Type_Operator = {
  all?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Hero__Type_Input>>>
  equals?: InputMaybe<VersionsPage_Version__Hero__Type_Input>
  in?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Hero__Type_Input>>>
  not_equals?: InputMaybe<VersionsPage_Version__Hero__Type_Input>
  not_in?: InputMaybe<Array<InputMaybe<VersionsPage_Version__Hero__Type_Input>>>
}

export type VersionsPage_Version__Meta__Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
}

export type VersionsPage_Version__Meta__Image_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
}

export type VersionsPage_Version__Meta__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsPage_Version__PublishedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsPage_Version__SlugLock_Operator = {
  equals?: InputMaybe<Scalars['Boolean']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  not_equals?: InputMaybe<Scalars['Boolean']['input']>
}

export type VersionsPage_Version__Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsPage_Version__Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type VersionsPage_Version__UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  greater_than?: InputMaybe<Scalars['DateTime']['input']>
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  less_than?: InputMaybe<Scalars['DateTime']['input']>
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>
  like?: InputMaybe<Scalars['DateTime']['input']>
  not_equals?: InputMaybe<Scalars['DateTime']['input']>
}

export type VersionsPage_Where = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>
  autosave?: InputMaybe<VersionsPage_Autosave_Operator>
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>
  id?: InputMaybe<VersionsPage_Id_Operator>
  latest?: InputMaybe<VersionsPage_Latest_Operator>
  parent?: InputMaybe<VersionsPage_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>
  version__hero__links__id?: InputMaybe<VersionsPage_Version__Hero__Links__Id_Operator>
  version__hero__links__link__appearance?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Operator>
  version__hero__links__link__label?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Label_Operator>
  version__hero__links__link__newTab?: InputMaybe<VersionsPage_Version__Hero__Links__Link__NewTab_Operator>
  version__hero__links__link__reference?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Reference_Relation>
  version__hero__links__link__type?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Operator>
  version__hero__links__link__url?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Url_Operator>
  version__hero__media?: InputMaybe<VersionsPage_Version__Hero__Media_Operator>
  version__hero__richText?: InputMaybe<VersionsPage_Version__Hero__RichText_Operator>
  version__hero__type?: InputMaybe<VersionsPage_Version__Hero__Type_Operator>
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>
  version__publishedAt?: InputMaybe<VersionsPage_Version__PublishedAt_Operator>
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>
  version__slugLock?: InputMaybe<VersionsPage_Version__SlugLock_Operator>
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>
}

export type VersionsPage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>
  autosave?: InputMaybe<VersionsPage_Autosave_Operator>
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>
  id?: InputMaybe<VersionsPage_Id_Operator>
  latest?: InputMaybe<VersionsPage_Latest_Operator>
  parent?: InputMaybe<VersionsPage_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>
  version__hero__links__id?: InputMaybe<VersionsPage_Version__Hero__Links__Id_Operator>
  version__hero__links__link__appearance?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Operator>
  version__hero__links__link__label?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Label_Operator>
  version__hero__links__link__newTab?: InputMaybe<VersionsPage_Version__Hero__Links__Link__NewTab_Operator>
  version__hero__links__link__reference?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Reference_Relation>
  version__hero__links__link__type?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Operator>
  version__hero__links__link__url?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Url_Operator>
  version__hero__media?: InputMaybe<VersionsPage_Version__Hero__Media_Operator>
  version__hero__richText?: InputMaybe<VersionsPage_Version__Hero__RichText_Operator>
  version__hero__type?: InputMaybe<VersionsPage_Version__Hero__Type_Operator>
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>
  version__publishedAt?: InputMaybe<VersionsPage_Version__PublishedAt_Operator>
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>
  version__slugLock?: InputMaybe<VersionsPage_Version__SlugLock_Operator>
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>
}

export type VersionsPage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>
  autosave?: InputMaybe<VersionsPage_Autosave_Operator>
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>
  id?: InputMaybe<VersionsPage_Id_Operator>
  latest?: InputMaybe<VersionsPage_Latest_Operator>
  parent?: InputMaybe<VersionsPage_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>
  version__hero__links__id?: InputMaybe<VersionsPage_Version__Hero__Links__Id_Operator>
  version__hero__links__link__appearance?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Appearance_Operator>
  version__hero__links__link__label?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Label_Operator>
  version__hero__links__link__newTab?: InputMaybe<VersionsPage_Version__Hero__Links__Link__NewTab_Operator>
  version__hero__links__link__reference?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Reference_Relation>
  version__hero__links__link__type?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Type_Operator>
  version__hero__links__link__url?: InputMaybe<VersionsPage_Version__Hero__Links__Link__Url_Operator>
  version__hero__media?: InputMaybe<VersionsPage_Version__Hero__Media_Operator>
  version__hero__richText?: InputMaybe<VersionsPage_Version__Hero__RichText_Operator>
  version__hero__type?: InputMaybe<VersionsPage_Version__Hero__Type_Operator>
  version__meta__description?: InputMaybe<VersionsPage_Version__Meta__Description_Operator>
  version__meta__image?: InputMaybe<VersionsPage_Version__Meta__Image_Operator>
  version__meta__title?: InputMaybe<VersionsPage_Version__Meta__Title_Operator>
  version__publishedAt?: InputMaybe<VersionsPage_Version__PublishedAt_Operator>
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>
  version__slugLock?: InputMaybe<VersionsPage_Version__SlugLock_Operator>
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>
}

export type VersionsPages = {
  __typename?: 'versionsPages'
  docs: Array<PageVersion>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage?: Maybe<Scalars['Int']['output']>
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage?: Maybe<Scalars['Int']['output']>
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
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

export type GetAllMediaQueryVariables = Exact<{ [key: string]: never }>

export type GetAllMediaQuery = {
  __typename?: 'Query'
  allMedia?: { __typename?: 'allMedia'; docs: Array<{ __typename?: 'Media'; id: string }> } | null
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
