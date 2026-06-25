import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Controls/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Unchecked: Story = {
  args: {
    label: 'Checkbox label',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked option',
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate',
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm',
    defaultChecked: true,
  },
};
