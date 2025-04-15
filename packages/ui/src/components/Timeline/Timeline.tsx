import { FC, ReactElement } from 'react'

import clsx from 'clsx'
import { compareDesc, format } from 'date-fns'
import { Check, ChevronRight } from 'lucide-react'

import {
  EventTimelineConnectorProps,
  EventTimelineContentProps,
  EventTimelineIndicatorProps,
  EventTimelineProps,
} from './types'

const getIcon = (status: number): ReactElement | undefined => {
  if (status === -1) return <Check size={10} />
  if (status === 0) return <ChevronRight size={10} />
  return undefined
}

const TimelineIndicator: FC<EventTimelineIndicatorProps> = ({ status }): ReactElement | string => {
  const icon = getIcon(status)

  const style = clsx('flex items-center justify-center w-4 h-4 rounded-full relative z-10 border', {
    'bg-background border-muted text-muted-foreground': status === 1, // upcoming or default
    'bg-background border-primary-500 text-primary-500': status === 0, // current
    'bg-primary-500 border-primary-500 text-white': status === -1, // completed
  })

  return <div className={style}>{icon}</div>
}

const TimelineConnector: FC<EventTimelineConnectorProps> = ({ date }) => {
  const status = compareDesc(new Date(), new Date(date))

  return (
    <div className="relative text-center after:absolute after:bottom-0 after:top-0 after:z-0 after:inline-block after:w-0.5 after:bg-gray-200 after:content-['']">
      <TimelineIndicator status={status} />
    </div>
  )
}

const TimelineContent: FC<EventTimelineContentProps> = ({ date, description, title }) => {
  return (
    <div className="relative mb-4 flex-1 overflow-hidden rounded p-4 shadow">
      <h4 className="text-sm font-bold">{title}</h4>
      <h5 className="text-primary text-sm">{format(new Date(date), 'MMMM dd, yyyy')}</h5>
      <p className="text-sm">{description}</p>
      <div
        className={clsx(
          'bg-primary/5 -z-1 absolute right-0 top-0 h-36 w-36 translate-x-1/2 translate-y-[-50%] transform rounded-full',
        )}
      ></div>
    </div>
  )
}

const EventTimeline: FC<EventTimelineProps> = ({ events }) => {
  return (
    <div className="max-w-md lg:max-w-lg">
      {events.map((event, index) => (
        <div
          className={clsx('justify-content-center flex gap-10', { 'flex-row lg:flex-row-reverse': index % 2 === 0 })}
          key={event.id}
        >
          <div className="hidden flex-1 p-4 lg:block"></div>
          <TimelineConnector date={event.date} />
          <TimelineContent {...event} />
        </div>
      ))}
    </div>
  )
}

export default EventTimeline
