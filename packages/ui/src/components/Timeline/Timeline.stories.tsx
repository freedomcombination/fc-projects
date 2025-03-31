import { Meta, StoryObj } from '@storybook/react'
import { EVENT_MOCS } from '@fc/mocks/event'

import EventTimeline from './Timeline'

export default {
  component: EventTimeline,
  title: 'Shared/EventTimeline',
  args: {
    events: EVENT_MOCS,
    themeColor: '#ff4444',
  },
} as Meta<typeof EventTimeline>

type Story = StoryObj<typeof EventTimeline>

export const Default: Story = {}
