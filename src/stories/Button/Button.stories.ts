import type { Meta, StoryObj } from '@storybook/svelte'

import Button from './Button.svelte'
import { buttonVariant, htmlAttributeAnchorTarget } from './button'

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: buttonVariant,
    },
    href: {
      description: 'native 속성입니다. a 요소로 렌더링됩니다.',
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
    target: {
      description: 'native 속성입니다. href와 함께 동작합니다.',
      table: {
        type: { summary: htmlAttributeAnchorTarget.join(' | ') },
      },
      control: 'text',
    },
    rel: {
      description:
        "native 속성입니다. target: _blank인 경우에는 'noreferrer noopener'로 동작합니다.",
      table: {
        type: { summary: 'string' },
      },
      control: 'text',
    },
  },
} satisfies Meta<Button>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Text',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Text',
  },
}

export const Link: Story = {
  args: {
    label: '든든 바로가기',
    href: 'https://dndn.io/',
    target: '_blank',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Text',
  },
}

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    label: 'Text',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    label: 'Text',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    label: 'Text',
  },
}

export const Text: Story = {
  args: {
    variant: 'text',
    label: 'Text',
  },
}