import { Event } from '@fc/types/event'

export type EventTimelineProps = {
  events: Event[]
  themeColor: string
}

export type EventTimelineConnectorProps = {
  date: string
  themeColor: string
}

export type EventTimelineIndicatorProps = {
  compareResult: number
  themeColor: string
}

export type EventTimelineContentProps = {
  title: string
  description: string
  date: string
  themeColor: string
}
