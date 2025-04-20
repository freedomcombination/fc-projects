export type Media = {
  id: string
  url: string
  filename: string
  alt?: string
  mimeType: string
  filesize: number
  width?: number
  height?: number
  createdAt: string
  updatedAt: string
  sizes?: {
    [key: string]: {
      url: string
      width: number
      height: number
      mimeType: string
      filesize: number
      filename: string
    }
  }
}

export type Announcement = {
  content: {
    root: {
      type: 'root'
      version: number
      children: [
        {
          children: [
            {
              detail: 0
              format: 9
              mode: 'normal'
              style: ''
              text: 'this is one'
              type: 'text'
              version: 1
            },
          ]
          direction: 'ltr'
          format: ''
          indent: 0
          tag: 'h1'
          type: 'heading'
          version: 1
        },
      ]
      direction?: string
      format?: string
      indent?: number
    }
  }
  image?: {
    url: string
    relationTo?: 'media'
    value?: Media
  }
  slug: string
  title: string
  publishedAt: string
  updatedAt: string
  createdAt: string
  draft: boolean
  locale: string
  id: string
  description: string
  _status: string
}
