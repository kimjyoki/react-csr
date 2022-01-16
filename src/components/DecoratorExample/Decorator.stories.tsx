import React from 'react';

import { Story, Meta } from '@storybook/react';
import Decorator, { DecoratorProps } from './Decorator';

export default {
  title: 'Component/Decorator',
  component: Decorator,
  decorators: [
    (Story: Story) => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
} as Meta;

// eslint-disable-next-line react/jsx-props-no-spreading
const Template: React.VFC<DecoratorProps> = args => <Decorator {...args} />;

export const Example = Template.bind({});
