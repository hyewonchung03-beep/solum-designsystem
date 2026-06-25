import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Input/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md'] },
    state: {
      control: 'select',
      options: ['placeholder', 'done', 'focused', 'disabled', 'readonly', 'error'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Placeholder: Story = {
  args: {
    label: 'Label',
    placeholder: 'placeholder',
    helperText: 'Helper text',
    state: 'placeholder',
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: 'Entered text',
    state: 'done',
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Optional: Story = {
  args: {
    optional: true,
  },
};

export const Error: Story = {
  args: {
    state: 'error',
    helperText: 'This field is required',
    defaultValue: '',
  },
};

export const Disabled: Story = {
  args: {
    state: 'disabled',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};
