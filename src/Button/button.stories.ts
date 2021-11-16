import { Story, Meta } from '@storybook/html';
import {ButtonComponent, IButtonComponentProps} from './button';

export default {
    title: 'Button',
    argTypes: {
        label: { control: 'text' },
        mode: {
            control: 'select',
            options: [
                'primary',
                'secondary',
            ],
        },
        size: {
            control: 'select',
            options: [
                'regular',
                'big'
            ]
        },
        color: {
            control: {type: 'radio'},
            options: [
                'gray'
            ],
            defaultValue: 'gray'
        }
    },
} as Meta;

const Template: Story<IButtonComponentProps> = (args) => {
    return new ButtonComponent(args).render();
};

export const Primary = Template.bind({});

Primary.args = {
    label: 'Button',
    mode: 'regular',
    size: 'regular',
};
