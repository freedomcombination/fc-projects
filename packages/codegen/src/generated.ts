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
  form_submissions?: Maybe<Form_SubmissionsAccess>
  forms?: Maybe<FormsAccess>
  media?: Maybe<MediaAccess>
  pages?: Maybe<PagesAccess>
  payload_locked_documents?: Maybe<Payload_Locked_DocumentsAccess>
  payload_preferences?: Maybe<Payload_PreferencesAccess>
  users?: Maybe<UsersAccess>
}

export type Blog = {
  __typename?: 'Blog'
  author?: Maybe<User>
  createdAt?: Maybe<Scalars['DateTime']['output']>
  id: Scalars['String']['output']
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type BlogAuthorArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  locale?: InputMaybe<LocaleInputType>
}

export type Blog_Author_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  equals?: InputMaybe<Scalars['JSON']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
  not_equals?: InputMaybe<Scalars['JSON']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>
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
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  contains?: InputMaybe<Scalars['String']['input']>
  equals?: InputMaybe<Scalars['String']['input']>
  exists?: InputMaybe<Scalars['Boolean']['input']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
  like?: InputMaybe<Scalars['String']['input']>
  not_equals?: InputMaybe<Scalars['String']['input']>
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>
}

export type Blog_Title_Operator = {
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
  author?: InputMaybe<Blog_Author_Operator>
  createdAt?: InputMaybe<Blog_CreatedAt_Operator>
  id?: InputMaybe<Blog_Id_Operator>
  title?: InputMaybe<Blog_Title_Operator>
  updatedAt?: InputMaybe<Blog_UpdatedAt_Operator>
}

export type Blog_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Blog_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Blog_Where_Or>>>
  author?: InputMaybe<Blog_Author_Operator>
  createdAt?: InputMaybe<Blog_CreatedAt_Operator>
  id?: InputMaybe<Blog_Id_Operator>
  title?: InputMaybe<Blog_Title_Operator>
  updatedAt?: InputMaybe<Blog_UpdatedAt_Operator>
}

export type Blog_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Blog_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Blog_Where_Or>>>
  author?: InputMaybe<Blog_Author_Operator>
  createdAt?: InputMaybe<Blog_CreatedAt_Operator>
  id?: InputMaybe<Blog_Id_Operator>
  title?: InputMaybe<Blog_Title_Operator>
  updatedAt?: InputMaybe<Blog_UpdatedAt_Operator>
}

export type Blogs = {
  __typename?: 'Blogs'
  docs: Array<Blog>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
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
  author?: Maybe<BlogsDocAccessFields_Author>
  createdAt?: Maybe<BlogsDocAccessFields_CreatedAt>
  title?: Maybe<BlogsDocAccessFields_Title>
  updatedAt?: Maybe<BlogsDocAccessFields_UpdatedAt>
}

export type BlogsDocAccessFields_Author = {
  __typename?: 'BlogsDocAccessFields_author'
  create?: Maybe<BlogsDocAccessFields_Author_Create>
  delete?: Maybe<BlogsDocAccessFields_Author_Delete>
  read?: Maybe<BlogsDocAccessFields_Author_Read>
  update?: Maybe<BlogsDocAccessFields_Author_Update>
}

export type BlogsDocAccessFields_Author_Create = {
  __typename?: 'BlogsDocAccessFields_author_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Author_Delete = {
  __typename?: 'BlogsDocAccessFields_author_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Author_Read = {
  __typename?: 'BlogsDocAccessFields_author_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Author_Update = {
  __typename?: 'BlogsDocAccessFields_author_Update'
  permission: Scalars['Boolean']['output']
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

export type BlogsDocAccessFields_Title = {
  __typename?: 'BlogsDocAccessFields_title'
  create?: Maybe<BlogsDocAccessFields_Title_Create>
  delete?: Maybe<BlogsDocAccessFields_Title_Delete>
  read?: Maybe<BlogsDocAccessFields_Title_Read>
  update?: Maybe<BlogsDocAccessFields_Title_Update>
}

export type BlogsDocAccessFields_Title_Create = {
  __typename?: 'BlogsDocAccessFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Delete = {
  __typename?: 'BlogsDocAccessFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Read = {
  __typename?: 'BlogsDocAccessFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsDocAccessFields_Title_Update = {
  __typename?: 'BlogsDocAccessFields_title_Update'
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
  author?: Maybe<BlogsFields_Author>
  createdAt?: Maybe<BlogsFields_CreatedAt>
  title?: Maybe<BlogsFields_Title>
  updatedAt?: Maybe<BlogsFields_UpdatedAt>
}

export type BlogsFields_Author = {
  __typename?: 'BlogsFields_author'
  create?: Maybe<BlogsFields_Author_Create>
  delete?: Maybe<BlogsFields_Author_Delete>
  read?: Maybe<BlogsFields_Author_Read>
  update?: Maybe<BlogsFields_Author_Update>
}

export type BlogsFields_Author_Create = {
  __typename?: 'BlogsFields_author_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Author_Delete = {
  __typename?: 'BlogsFields_author_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Author_Read = {
  __typename?: 'BlogsFields_author_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Author_Update = {
  __typename?: 'BlogsFields_author_Update'
  permission: Scalars['Boolean']['output']
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

export type BlogsFields_Title = {
  __typename?: 'BlogsFields_title'
  create?: Maybe<BlogsFields_Title_Create>
  delete?: Maybe<BlogsFields_Title_Delete>
  read?: Maybe<BlogsFields_Title_Read>
  update?: Maybe<BlogsFields_Title_Update>
}

export type BlogsFields_Title_Create = {
  __typename?: 'BlogsFields_title_Create'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Delete = {
  __typename?: 'BlogsFields_title_Delete'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Read = {
  __typename?: 'BlogsFields_title_Read'
  permission: Scalars['Boolean']['output']
}

export type BlogsFields_Title_Update = {
  __typename?: 'BlogsFields_title_Update'
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
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
  createBlog?: Maybe<Blog>
  createForm?: Maybe<Form>
  createFormSubmission?: Maybe<FormSubmission>
  createMedia?: Maybe<Media>
  createPage?: Maybe<Page>
  createPayloadLockedDocument?: Maybe<PayloadLockedDocument>
  createPayloadPreference?: Maybe<PayloadPreference>
  createUser?: Maybe<User>
  deleteBlog?: Maybe<Blog>
  deleteForm?: Maybe<Form>
  deleteFormSubmission?: Maybe<FormSubmission>
  deleteMedia?: Maybe<Media>
  deletePage?: Maybe<Page>
  deletePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  deletePayloadPreference?: Maybe<PayloadPreference>
  deleteUser?: Maybe<User>
  duplicateBlog?: Maybe<Blog>
  duplicateForm?: Maybe<Form>
  duplicateFormSubmission?: Maybe<FormSubmission>
  duplicateMedia?: Maybe<Media>
  duplicatePage?: Maybe<Page>
  duplicatePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  duplicatePayloadPreference?: Maybe<PayloadPreference>
  forgotPasswordUser: Scalars['Boolean']['output']
  loginUser?: Maybe<UsersLoginResult>
  logoutUser?: Maybe<Scalars['String']['output']>
  refreshTokenUser?: Maybe<UsersRefreshedUser>
  resetPasswordUser?: Maybe<UsersResetPassword>
  restoreVersionPage?: Maybe<Page>
  unlockUser: Scalars['Boolean']['output']
  updateBlog?: Maybe<Blog>
  updateForm?: Maybe<Form>
  updateFormSubmission?: Maybe<FormSubmission>
  updateMedia?: Maybe<Media>
  updatePage?: Maybe<Page>
  updatePayloadLockedDocument?: Maybe<PayloadLockedDocument>
  updatePayloadPreference?: Maybe<PayloadPreference>
  updateUser?: Maybe<User>
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>
}

export type MutationCreateBlogArgs = {
  data: MutationBlogInput
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

export type MutationDeleteBlogArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteFormArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteFormSubmissionArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteMediaArgs = {
  id: Scalars['String']['input']
}

export type MutationDeletePageArgs = {
  id: Scalars['String']['input']
}

export type MutationDeletePayloadLockedDocumentArgs = {
  id: Scalars['String']['input']
}

export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['String']['input']
}

export type MutationDeleteUserArgs = {
  id: Scalars['String']['input']
}

export type MutationDuplicateBlogArgs = {
  data: MutationBlogInput
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

export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>
  token?: InputMaybe<Scalars['String']['input']>
}

export type MutationRestoreVersionPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id?: InputMaybe<Scalars['String']['input']>
}

export type MutationUnlockUserArgs = {
  email: Scalars['String']['input']
}

export type MutationUpdateBlogArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationBlogUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdateFormArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationFormUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdateFormSubmissionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationFormSubmissionUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdateMediaArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationMediaUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdatePageArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPageUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdatePayloadLockedDocumentArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadLockedDocumentUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationPayloadPreferenceUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>
  data: MutationUserUpdateInput
  draft?: InputMaybe<Scalars['Boolean']['input']>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
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
  id: Scalars['String']['output']
  layout: Array<Page_Layout>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export enum PageUpdate__Status_MutationInput {
  Draft = 'draft',
  Published = 'published',
}

export type PageVersion = {
  __typename?: 'PageVersion'
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
  layout: Array<PageVersion_Version_Layout>
  slug?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
  updatedAt?: Maybe<Scalars['DateTime']['output']>
}

export type PageVersion_Version_Layout = Container | FormBlock | MediaBlock | Section

export enum PageVersion_Version__Status {
  Draft = 'draft',
  Published = 'published',
}

export enum PageVersion_PublishedLocale {
  En = 'en',
  Nl = 'nl',
  Tr = 'tr',
}

export type Page_Layout = Container | FormBlock | MediaBlock | Section

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
  id?: InputMaybe<Page_Id_Operator>
  slug?: InputMaybe<Page_Slug_Operator>
  title?: InputMaybe<Page_Title_Operator>
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>
}

export type Page_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>
  _status?: InputMaybe<Page__Status_Operator>
  createdAt?: InputMaybe<Page_CreatedAt_Operator>
  id?: InputMaybe<Page_Id_Operator>
  slug?: InputMaybe<Page_Slug_Operator>
  title?: InputMaybe<Page_Title_Operator>
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>
}

export type Page_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Page_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<Page_Where_Or>>>
  _status?: InputMaybe<Page__Status_Operator>
  createdAt?: InputMaybe<Page_CreatedAt_Operator>
  id?: InputMaybe<Page_Id_Operator>
  slug?: InputMaybe<Page_Slug_Operator>
  title?: InputMaybe<Page_Title_Operator>
  updatedAt?: InputMaybe<Page_UpdatedAt_Operator>
}

export type Pages = {
  __typename?: 'Pages'
  docs: Array<Page>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
  layout?: Maybe<PagesDocAccessFields_Layout>
  slug?: Maybe<PagesDocAccessFields_Slug>
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

export type PagesDocAccessFields_Slug = {
  __typename?: 'PagesDocAccessFields_slug'
  create?: Maybe<PagesDocAccessFields_Slug_Create>
  delete?: Maybe<PagesDocAccessFields_Slug_Delete>
  read?: Maybe<PagesDocAccessFields_Slug_Read>
  update?: Maybe<PagesDocAccessFields_Slug_Update>
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
  layout?: Maybe<PagesFields_Layout>
  slug?: Maybe<PagesFields_Slug>
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

export type PagesFields_Slug = {
  __typename?: 'PagesFields_slug'
  create?: Maybe<PagesFields_Slug_Create>
  delete?: Maybe<PagesFields_Slug_Delete>
  read?: Maybe<PagesFields_Slug_Read>
  update?: Maybe<PagesFields_Slug_Update>
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
  Blogs = 'blogs',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
  Users = 'users',
}

export type PayloadLockedDocumentUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocumentUpdate_UserRelationshipInputRelationTo {
  Users = 'users',
}

export type PayloadLockedDocument_Document = Blog | Form | FormSubmission | Media | Page | User

export type PayloadLockedDocument_DocumentRelationshipInput = {
  relationTo?: InputMaybe<PayloadLockedDocument_DocumentRelationshipInputRelationTo>
  value?: InputMaybe<Scalars['JSON']['input']>
}

export enum PayloadLockedDocument_DocumentRelationshipInputRelationTo {
  Blogs = 'blogs',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
  Users = 'users',
}

export enum PayloadLockedDocument_Document_RelationTo {
  Blogs = 'blogs',
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
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
  FormSubmissions = 'form_submissions',
  Forms = 'forms',
  Media = 'media',
  Pages = 'pages',
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
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
  Blog?: Maybe<Blog>
  Blogs?: Maybe<Blogs>
  Form?: Maybe<Form>
  FormSubmission?: Maybe<FormSubmission>
  FormSubmissions?: Maybe<FormSubmissions>
  Forms?: Maybe<Forms>
  Media?: Maybe<Media>
  Page?: Maybe<Page>
  Pages?: Maybe<Pages>
  PayloadLockedDocument?: Maybe<PayloadLockedDocument>
  PayloadLockedDocuments?: Maybe<PayloadLockedDocuments>
  PayloadPreference?: Maybe<PayloadPreference>
  PayloadPreferences?: Maybe<PayloadPreferences>
  User?: Maybe<User>
  Users?: Maybe<Users>
  allMedia?: Maybe<AllMedia>
  countBlogs?: Maybe<CountBlogs>
  countFormSubmissions?: Maybe<CountFormSubmissions>
  countForms?: Maybe<CountForms>
  countPages?: Maybe<CountPages>
  countPayloadLockedDocuments?: Maybe<CountPayloadLockedDocuments>
  countPayloadPreferences?: Maybe<CountPayloadPreferences>
  countUsers?: Maybe<CountUsers>
  countallMedia?: Maybe<CountallMedia>
  docAccessBlog?: Maybe<BlogsDocAccess>
  docAccessForm?: Maybe<FormsDocAccess>
  docAccessFormSubmission?: Maybe<Form_SubmissionsDocAccess>
  docAccessMedia?: Maybe<MediaDocAccess>
  docAccessPage?: Maybe<PagesDocAccess>
  docAccessPayloadLockedDocument?: Maybe<Payload_Locked_DocumentsDocAccess>
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>
  docAccessUser?: Maybe<UsersDocAccess>
  initializedUser?: Maybe<Scalars['Boolean']['output']>
  meUser?: Maybe<UsersMe>
  versionPage?: Maybe<PageVersion>
  versionsPages?: Maybe<VersionsPages>
}

export type QueryBlogArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryBlogsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<Blog_Where>
}

export type QueryFormArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryFormSubmissionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
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
  where?: InputMaybe<Form_Where>
}

export type QueryMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryPageArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<Page_Where>
}

export type QueryPayloadLockedDocumentArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<PayloadLockedDocument_Where>
}

export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
  where?: InputMaybe<PayloadPreference_Where>
}

export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id: Scalars['String']['input']
  locale?: InputMaybe<LocaleInputType>
}

export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
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
  where?: InputMaybe<Media_Where>
}

export type QueryCountBlogsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<Blog_Where>
}

export type QueryCountFormSubmissionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<FormSubmission_Where>
}

export type QueryCountFormsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<Form_Where>
}

export type QueryCountPagesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<Page_Where>
}

export type QueryCountPayloadLockedDocumentsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<PayloadLockedDocument_Where>
}

export type QueryCountPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<PayloadPreference_Where>
}

export type QueryCountUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<User_Where>
}

export type QueryCountallMediaArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>
  locale?: InputMaybe<LocaleInputType>
  where?: InputMaybe<Media_Where>
}

export type QueryDocAccessBlogArgs = {
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

export type QueryDocAccessPayloadLockedDocumentArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['String']['input']
}

export type QueryDocAccessUserArgs = {
  id: Scalars['String']['input']
}

export type QueryVersionPageArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  id?: InputMaybe<Scalars['String']['input']>
  locale?: InputMaybe<LocaleInputType>
}

export type QueryVersionsPagesArgs = {
  fallbackLocale?: InputMaybe<FallbackLocaleInputType>
  limit?: InputMaybe<Scalars['Int']['input']>
  locale?: InputMaybe<LocaleInputType>
  page?: InputMaybe<Scalars['Int']['input']>
  pagination?: InputMaybe<Scalars['Boolean']['input']>
  sort?: InputMaybe<Scalars['String']['input']>
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
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  name?: InputMaybe<User_Name_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>
  createdAt?: InputMaybe<User_CreatedAt_Operator>
  email?: InputMaybe<User_Email_Operator>
  id?: InputMaybe<User_Id_Operator>
  name?: InputMaybe<User_Name_Operator>
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>
}

export type Users = {
  __typename?: 'Users'
  docs: Array<User>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
  totalDocs: Scalars['Int']['output']
  totalPages: Scalars['Int']['output']
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

export type MutationBlogInput = {
  author?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationBlogUpdateInput = {
  author?: InputMaybe<Scalars['String']['input']>
  createdAt?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
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
  layout?: InputMaybe<Scalars['JSON']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title: Scalars['String']['input']
  updatedAt?: InputMaybe<Scalars['String']['input']>
}

export type MutationPageUpdateInput = {
  _status?: InputMaybe<PageUpdate__Status_MutationInput>
  createdAt?: InputMaybe<Scalars['String']['input']>
  layout?: InputMaybe<Scalars['JSON']['input']>
  slug?: InputMaybe<Scalars['String']['input']>
  title?: InputMaybe<Scalars['String']['input']>
  updatedAt?: InputMaybe<Scalars['String']['input']>
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
  updatedAt?: InputMaybe<Scalars['String']['input']>
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
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>
  id?: InputMaybe<VersionsPage_Id_Operator>
  latest?: InputMaybe<VersionsPage_Latest_Operator>
  parent?: InputMaybe<VersionsPage_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>
}

export type VersionsPage_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>
  id?: InputMaybe<VersionsPage_Id_Operator>
  latest?: InputMaybe<VersionsPage_Latest_Operator>
  parent?: InputMaybe<VersionsPage_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>
}

export type VersionsPage_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<VersionsPage_Where_And>>>
  OR?: InputMaybe<Array<InputMaybe<VersionsPage_Where_Or>>>
  createdAt?: InputMaybe<VersionsPage_CreatedAt_Operator>
  id?: InputMaybe<VersionsPage_Id_Operator>
  latest?: InputMaybe<VersionsPage_Latest_Operator>
  parent?: InputMaybe<VersionsPage_Parent_Operator>
  publishedLocale?: InputMaybe<VersionsPage_PublishedLocale_Operator>
  snapshot?: InputMaybe<VersionsPage_Snapshot_Operator>
  updatedAt?: InputMaybe<VersionsPage_UpdatedAt_Operator>
  version___status?: InputMaybe<VersionsPage_Version___Status_Operator>
  version__createdAt?: InputMaybe<VersionsPage_Version__CreatedAt_Operator>
  version__slug?: InputMaybe<VersionsPage_Version__Slug_Operator>
  version__title?: InputMaybe<VersionsPage_Version__Title_Operator>
  version__updatedAt?: InputMaybe<VersionsPage_Version__UpdatedAt_Operator>
}

export type VersionsPages = {
  __typename?: 'versionsPages'
  docs: Array<PageVersion>
  hasNextPage: Scalars['Boolean']['output']
  hasPrevPage: Scalars['Boolean']['output']
  limit: Scalars['Int']['output']
  nextPage: Scalars['Int']['output']
  offset?: Maybe<Scalars['Int']['output']>
  page: Scalars['Int']['output']
  pagingCounter: Scalars['Int']['output']
  prevPage: Scalars['Int']['output']
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
    hasNextPage: boolean
    hasPrevPage: boolean
    limit: number
    offset?: number | null
    page: number
    pagingCounter: number
    prevPage: number
    totalDocs: number
    totalPages: number
    docs: Array<{
      __typename?: 'Blog'
      id: string
      title?: string | null
      author?: { __typename?: 'User'; id: string; name?: string | null } | null
    }>
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

export const GetBlogsDocument = `
    query GetBlogs($draft: Boolean, $where: Blog_where, $limit: Int, $page: Int, $sort: String) {
  Blogs(draft: $draft, where: $where, limit: $limit, page: $page, sort: $sort) {
    docs {
      id
      title
      author {
        id
        name
      }
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
