import React, { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import GDatepicker from './GDatepicker'
// import { LuCalendar, LuAlertCircle, LuCheck } from 'react-icons/lu'

const meta: Meta<typeof GDatepicker> = {
  title: 'Components/GDatepicker',
  component: GDatepicker,
  tags: ['autodocs'],
  argTypes: {
    value: { control: false },
    onChange: { control: false },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
    isError: { control: 'boolean' },
    className: { control: 'text' },
  },
  args: {
    placeholder: 'Pilih tanggal',
    disabled: false,
    isError: false,
  },
}

export default meta
type Story = StoryObj<typeof GDatepicker>

const ControlledTemplate = (args: any) => {
  const [date, setDate] = useState<Date | null>(null)

  return (
    <div className="w-64">
      <GDatepicker
        {...args}
        value={date}
        onChange={setDate}
      />
    </div>
  )
}

export const Default: Story = {
  render: ControlledTemplate,
}

export const WithValue: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: 'Tanggal terpilih',
  },
}

export const ErrorState: Story = {
  render: ControlledTemplate,
  args: {
    isError: true,
    placeholder: 'Tanggal tidak valid',
  },
}

export const DisabledState: Story = {
  render: ControlledTemplate,
  args: {
    disabled: true,
    placeholder: 'Date picker disabled',
  },
}

export const YearPicker: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: 'Tanggal terpilih',
    mode: 'year'
  },
}

export const MonthPicker: Story = {
  render: ControlledTemplate,
  args: {
    placeholder: 'Tanggal terpilih',
    mode: 'month',
  },
}
