import { Album } from 'components/Album/album';
import 'tokens/common.scss';

export default {
    title: 'Components/Album',
    component: Album,
};

export const Default = (args) => {
    return new Album(args).render();
};

Default.args = {
    props: {
        id: 1,
        artwork: 'aabd5b3a-cf9d-4b2a-889e-fa56b29b6247',
    },
};
