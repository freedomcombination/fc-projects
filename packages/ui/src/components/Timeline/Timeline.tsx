import { FC, ReactElement } from 'react'
import {
  EventTimelineContentProps,
  EventTimelineIndicatorProps,
  EventTimelineConnectorProps,
  EventTimelineProps,
} from './types'
import { compareDesc, format } from 'date-fns'
import { Check, ChevronRight } from 'lucide-react'
import clsx from 'clsx'
import { useMedia } from 'react-use'

const TimelineIndicator: FC<EventTimelineIndicatorProps> = ({ compareResult, themeColor }): ReactElement | string => {
  let icon: ReactElement | undefined
  if (compareResult === -1) {
    icon = <Check size={10} />
  } else if (compareResult === 0) {
    icon = <ChevronRight size={10} />
  }

  let bgColor = 'white'
  let borderColor = '#cccccc'

  if (compareResult === -1) {
    bgColor = themeColor
    borderColor = themeColor
  } else if (compareResult === 0) {
    borderColor = themeColor
  }

  return (
    <div
      className={clsx('flex items-center justify-center  w-4 h-4 rounded-full relative z-10 border')}
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor,
      }}
    >
      {icon}
    </div>
  )
}

const TimelineConnector: FC<EventTimelineConnectorProps> = ({ date, themeColor = '#8b5cf6' }) => {
  const today = format(new Date(), 'yyyy-MM-dd')
  const eventDate = format(new Date(date), 'yyyy-MM-dd')
  const compareResult = compareDesc(today, eventDate)

  return (
    <div className="relative text-center after:inline-block after:absolute after:top-0 after:bottom-0 after:w-0.5 after:bg-gray-200 after:content-[''] after:z-0">
      <TimelineIndicator compareResult={compareResult} themeColor={themeColor} />
    </div>
  )
}

const TimelineContent: FC<EventTimelineContentProps> = ({ title, description, date, themeColor }) => {
  return (
    <div className="rounded shadow flex-1 p-4 mb-4 relative overflow-hidden ">
      <h4 className="font-bold text-sm">{title}</h4>
      <h5 className={clsx('text-sm')} style={{ color: themeColor }}>
        {format(date, 'MMMM dd, yyyy')}
      </h5>
      <p className="text-sm">{description}</p>
      <div
        className={clsx(
          'absolute top-0 right-0 w-36 h-36 rounded-full transform translate-x-1/2 translate-y-[-50%] -z-1',
        )}
        style={{ backgroundColor: themeColor, opacity: 0.1 }}
      ></div>
    </div>
  )
}

const EventTimeline: FC<EventTimelineProps> = ({ events, themeColor = 'purple' }) => {
  const isMobile = useMedia('(max-width: 768px)')

  const sortedEventsAsc = [...events].sort((a, b) => {
    const dateA = new Date(a.date)
    const dateB = new Date(b.date)
    return dateA.getTime() - dateB.getTime()
  })

  return (
    <div className={clsx(isMobile ? 'max-w-md' : 'max-w-lg')}>
      {sortedEventsAsc.map((event, index) => (
        <div key={event.id} className="flex justify-content-center gap-10">
          {index % 2 === 0 || isMobile ? (
            <>
              {!isMobile && <div className="flex-1  p-4"></div>}
              <TimelineConnector date={event.date} themeColor={themeColor} />
              <TimelineContent {...event} themeColor={themeColor} />
            </>
          ) : (
            <>
              <TimelineContent {...event} themeColor={themeColor} />
              <TimelineConnector date={event.date} themeColor={themeColor} />
              <div className="flex-1  p-4"></div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

export default EventTimeline
