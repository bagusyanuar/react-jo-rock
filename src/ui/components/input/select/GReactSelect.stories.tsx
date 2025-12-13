import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import GReactSelect from './GReactSelect'

interface Option {
  label: string
  value: string
}

const options: Option[] = [
  { label: 'Apple', value: 'apple' },
  { label: 'Banana', value: 'banana' },
  { label: 'Orange', value: 'orange' }
]

const meta: Meta<typeof GReactSelect<Option>> = {
  title: 'Example/Input/ReactSelect',
  component: GReactSelect,
  args: {
    options,
    placeholder: 'Choose fruit',
    isClearable: true
  },
  argTypes: {
    isError: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
