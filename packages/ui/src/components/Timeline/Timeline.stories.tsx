import { EVENT_MOCS } from '@fc/mocks/event'

import { Meta, StoryObj } from '@storybook/react'

import EventTimeline from './Timeline'

export default {
  args: {
    events: EVENT_MOCS,
    themeColor: '#ff4444',
  },
  component: EventTimeline,
  title: 'Shared/EventTimeline',
} as Meta<typeof EventTimeline>

type Story = StoryObj<typeof EventTimeline>

export const Default: Story = {}
