import { Avatar } from 'components/Avatar/avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
};

export const Default = (args) => {
    return new Avatar(args).render();
};

Default.args = {
    avatar:
        'https://lostpointer.site/static/users/d832c632-c7b4-4eb3-a027-2c14beceda5c_150px.webp',
};
