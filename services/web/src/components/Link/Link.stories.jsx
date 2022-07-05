import Link from './Link';
import { IconUserCircle } from '@tabler/icons';
import { MantineProvider } from '@mantine/core';
import { addDecorator } from '@storybook/react';
import shipTheme from 'theme/ship-theme';

export default {
  title: 'Components/Link',
  component: Link,
  argTypes: {
    children: { name: 'Text', control: 'text', defaultValue: 'Text' },
    href: { name: 'Href', control: 'text', defaultValue: 'https://www.paralect.com' },
    disabled: {
      name: 'Disabled',
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
    underline: {
      name: 'Underline',
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
    inherit: {
      name: 'Inherit',
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
    icon: {
      table: {
        disable: true,
      },
    },
    inNewTab: {
      name: 'In new tab',
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: true,
    },
    size: {
      name: 'Size',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'inline-radio',
        labels: {
          xs: 'Extra small',
          sm: 'Small',
          md: 'Medium',
          lg: 'Large',
          xl: 'Extra large',
        },
      },
      defaultValue: 'md',
    },
  },
};

const Template = ({ ...args }) => <Link {...args}>{args.children}</Link>;

export const Icon = Template.bind({});
Icon.args = {
  icon: <IconUserCircle />,
};
