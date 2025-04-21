import { EVENT_MOCKS } from '@fc/mocks'

import { Meta, StoryObj } from '@storybook/react'

import EventTimeline from './Timeline'

export default {
  args: {
    events: EVENT_MOCKS,
  },
  component: EventTimeline,
  title: 'Shared/EventTimeline',
} as Meta<typeof EventTimeline>

type Story = StoryObj<typeof EventTimeline>

export const Default: Story = {}
