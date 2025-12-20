import type { Meta, StoryObj } from '@storybook/react'
import {
  GPopover,
  GPopoverTrigger,
  GPopoverContent,
  usePopoverContext
} from './index'
import { AnimatePresence, motion } from 'motion/react'

const meta: Meta = {
  title: 'Components/GPopover',
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj



/* ===============================
 * Default
 * =============================== */
export const Default: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="px-3 py-1.5 text-white text-sm rounded-md border border-(--g-brand-500) bg-(--g-brand-500) hover:bg-(--g-brand-600) hover:border-(--g-brand-600) transition-colors duration-300 ease-in-out cursor-pointer">
          Open Popover
        </button>
      </GPopoverTrigger>

      <GPopoverContent
        className="rounded-md w-64 bg-white shadow-md p-2"
      >
        <div className="flex flex-col gap-1 min-w-30 text-sm text-neutral-700">
          <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
            Edit
          </button>
          <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
            Delete
          </button>
        </div>
      </GPopoverContent>
    </GPopover>
  ),
}

/* ===============================
 * With Anchor
 * =============================== */
export const WithAnchor: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="px-3 py-1.5 text-white text-sm rounded-md border border-(--g-brand-500) bg-(--g-brand-500) hover:bg-(--g-brand-600) hover:border-(--g-brand-600) transition-colors duration-300 ease-in-out cursor-pointer">
          Open Popover
        </button>
      </GPopoverTrigger>

      <GPopoverContent
        className="rounded-md w-64 bg-white shadow-md p-2"
        anchor='bottom-center'
      >
        <div className="flex flex-col gap-1 min-w-30 text-sm text-neutral-700">
          <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
            Edit
          </button>
          <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
            Delete
          </button>
        </div>
      </GPopoverContent>
    </GPopover>
  ),
}

/* ===============================
 * With React Motion
 * =============================== */
const PopoverMotionContent = () => {
  const { open } = usePopoverContext()

  return (
    <AnimatePresence>
      {open && (
        <GPopoverContent
          anchor="bottom-center"
          asChild
        >
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="rounded-md w-64 bg-white shadow-md p-2"
          >
            <div className="flex flex-col gap-1 text-sm text-neutral-700">
              <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
                Edit
              </button>
              <button className="text-left px-2 py-1 rounded hover:bg-neutral-100">
                Delete
              </button>
            </div>
          </motion.div>
        </GPopoverContent>
      )}
    </AnimatePresence>
  )
}

export const WithReactMotion: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="px-3 py-1.5 text-white text-sm rounded-md border border-(--g-brand-500) bg-(--g-brand-500) hover:bg-(--g-brand-600) hover:border-(--g-brand-600) transition-colors duration-300 ease-in-out cursor-pointer">
          Open Popover
        </button>
      </GPopoverTrigger>
      <PopoverMotionContent />
    </GPopover>
  ),
  parameters: {
    docs: {
      source: {
        code: `
const PopoverMotionContent = () => {
  const { open } = usePopoverContext()

  return (
    <AnimatePresence>
      {open && (
        <GPopoverContent asChild anchor="bottom-center">
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            ...
          </motion.div>
        </GPopoverContent>
      )}
    </AnimatePresence>
  )
}

<GPopover>
  <GPopoverTrigger asChild>
    <button>Open</button>
  </GPopoverTrigger>
  <PopoverMotionContent />
</GPopover>
        `,
      },
    },
  },
}


/* ===============================
 * With Offset
 * =============================== */
export const WithOffset: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="px-3 py-1.5 rounded border bg-white">
          Offset 16px
        </button>
      </GPopoverTrigger>

      <GPopoverContent
        offset={16}
        className="rounded-md border bg-white shadow-md p-2"
      >
        <div className="p-2">Custom offset popover</div>
      </GPopoverContent>
    </GPopover>
  ),
}

/* ===============================
 * Custom Content
 * =============================== */
export const CustomContent: Story = {
  render: () => (
    <GPopover>
      <GPopoverTrigger asChild>
        <button className="px-3 py-1.5 rounded bg-black text-white">
          Profile
        </button>
      </GPopoverTrigger>

      <GPopoverContent className="rounded-md border bg-white shadow-md p-3">
        <div className="flex flex-col gap-2 min-w-40">
          <div className="text-sm font-medium">Signed in as</div>
          <div className="text-xs text-neutral-500">
            bagus@example.com
          </div>

          <div className="h-px bg-neutral-200 my-1" />

          <button className="text-left px-2 py-1 hover:bg-neutral-100">
            Settings
          </button>
          <button className="text-left px-2 py-1 hover:bg-neutral-100">
            Logout
          </button>
        </div>
      </GPopoverContent>
    </GPopover>
  ),
}
