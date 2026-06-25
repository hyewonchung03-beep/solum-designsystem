import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Controls/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: 'select',
      options: ['solid', 'outlined', 'danger', 'text', 'link'],
    },
    typeVariant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'white'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'label',
    styleVariant: 'solid',
    typeVariant: 'primary',
    size: 'md',
    showLeftIcon: true,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Save',
    showLeftIcon: true,
    showRightIcon: true,
  },
};

export const SecondaryOutlined: Story = {
  args: {
    label: 'Cancel',
    styleVariant: 'outlined',
    typeVariant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'More',
    styleVariant: 'solid',
    typeVariant: 'tertiary',
  },
};

export const Danger: Story = {
  args: {
    label: 'Delete',
    styleVariant: 'danger',
    typeVariant: 'primary',
  },
};

export const TextButton: Story = {
  args: {
    label: 'Learn more',
    styleVariant: 'text',
    typeVariant: 'primary',
    showLeftIcon: false,
  },
};

export const Link: Story = {
  args: {
    label: 'View details',
    styleVariant: 'link',
    typeVariant: 'primary',
    showLeftIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    showLeftIcon: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
      <Button label="Small" size="sm" showLeftIcon />
      <Button label="Medium" size="md" showLeftIcon />
      <Button label="Large" size="lg" showLeftIcon />
    </div>
  ),
};
