import { Event } from '@fc/types/event'

export type EventTimelineProps = {
  events: Event[]
}

export type EventTimelineConnectorProps = {
  date: string
}

export type EventTimelineIndicatorProps = {
  status: number
}

export type EventTimelineContentProps = {
  title: string
  description: string
  date: string
}
