import type { Meta, StoryObj } from '@storybook/react'
import GPopover from './GPopover'

const meta: Meta<typeof GPopover> = {
  title: 'Components/GPopover',
  component: GPopover,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      control: 'text',
    },
    offset: {
      control: { type: 'number', min: 0, max: 24, step: 1 },
    },
  },
}

export default meta

type Story = StoryObj<typeof GPopover>

/* ===============================
 * Default
 * =============================== */
export const Default: Story = {
  args: {
    trigger: (
      <button className="px-3 py-1.5 rounded border bg-white hover:bg-neutral-100">
        Open Popover
      </button>
    ),
    children: (
      <div className="flex flex-col gap-1 min-w-30">
        <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
          Edit
        </button>
        <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
          Delete
        </button>
      </div>
    ),
  },
}

/* ===============================
 * With Offset
 * =============================== */
export const WithOffset: Story = {
  args: {
    offset: 16,
    trigger: (
      <button className="px-3 py-1.5 rounded border bg-white">
        Offset 16px
      </button>
    ),
    children: <div className="p-2">Custom offset popover</div>,
  },
}

/* ===============================
 * Custom Content
 * =============================== */
export const CustomContent: Story = {
  args: {
    trigger: (
      <button className="px-3 py-1.5 rounded bg-black text-white">
        Profile
      </button>
    ),
    children: (
      <div className="flex flex-col gap-2 min-w-40">
        <div className="text-sm font-medium">Signed in as</div>
        <div className="text-xs text-neutral-500">bagus@example.com</div>
        <div className="h-px bg-neutral-200 my-1" />
        <button className="text-left px-2 py-1 hover:bg-neutral-100">
          Settings
        </button>
        <button className="text-left px-2 py-1 hover:bg-neutral-100">
          Logout
        </button>
      </div>
    ),
  },
}
