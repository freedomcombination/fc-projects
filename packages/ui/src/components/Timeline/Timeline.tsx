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
    'bg-primary-500 border-primary-500 text-white': status === -1, // completed
    'bg-background border-primary-500 text-primary-500': status === 0, // current
    'bg-background border-muted text-muted-foreground': status === 1, // upcoming or default
  })

  return <div className={style}>{icon}</div>
}

const TimelineConnector: FC<EventTimelineConnectorProps> = ({ date }) => {
  const status = compareDesc(new Date(), new Date(date))

  return (
    <div className="relative text-center after:inline-block after:absolute after:top-0 after:bottom-0 after:w-0.5 after:bg-gray-200 after:content-[''] after:z-0">
      <TimelineIndicator status={status} />
    </div>
  )
}

const TimelineContent: FC<EventTimelineContentProps> = ({ date, description, title }) => {
  return (
    <div className="rounded shadow flex-1 p-4 mb-4 relative overflow-hidden ">
      <h4 className="font-bold text-sm">{title}</h4>
      <h5 className="text-sm text-primary">{format(new Date(date), 'MMMM dd, yyyy')}</h5>
      <p className="text-sm">{description}</p>
      <div
        className={clsx(
          'absolute top-0 right-0 w-36 h-36 rounded-full bg-primary/5 transform translate-x-1/2 translate-y-[-50%] -z-1',
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
          className={clsx('flex justify-content-center gap-10', { 'flex-row lg:flex-row-reverse': index % 2 === 0 })}
          key={event.id}
        >
          <div className="flex-1 p-4 hidden lg:block"></div>
          <TimelineConnector date={event.date} />
          <TimelineContent {...event} />
        </div>
      ))}
    </div>
  )
}

export default EventTimeline
