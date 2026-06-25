import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Status Indicator/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    option: {
      control: 'select',
      options: [
        'red',
        'orange',
        'yellow',
        'green',
        'teal',
        'lightBlue',
        'indigo',
        'pink',
        'purple',
        'neutral',
      ],
    },
    variant: { control: 'select', options: ['outlined', 'solid'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    fontWeight: { control: 'select', options: [400, 600] },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: 'Badge',
    variant: 'outlined',
    option: 'red',
    size: 'md',
  },
};

export const WithIndicator: Story = {
  args: {
    children: 'Active',
    option: 'green',
    showIndicator: true,
  },
};

export const Solid: Story = {
  args: {
    children: 'Error',
    variant: 'solid',
    option: 'red',
  },
};

export const Semibold: Story = {
  args: {
    children: 'Important',
    fontWeight: 600,
    option: 'indigo',
  },
};

export const AllOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 480 }}>
      {(
        [
          'red',
          'orange',
          'yellow',
          'green',
          'teal',
          'lightBlue',
          'indigo',
          'pink',
          'purple',
          'neutral',
        ] as const
      ).map((option) => (
        <Badge key={option} option={option}>
          {option}
        </Badge>
      ))}
    </div>
  ),
};

export const AllSolidOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, maxWidth: 480 }}>
      {(
        [
          'red',
          'orange',
          'yellow',
          'green',
          'teal',
          'lightBlue',
          'indigo',
          'pink',
          'purple',
          'neutral',
        ] as const
      ).map((option) => (
        <Badge key={option} variant="solid" option={option}>
          {option}
        </Badge>
      ))}
    </div>
  ),
};
