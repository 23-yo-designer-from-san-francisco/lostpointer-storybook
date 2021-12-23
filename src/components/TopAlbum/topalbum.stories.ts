import { TopAlbum } from 'components/TopAlbum/topalbum';

export default {
    title: 'Components/TopAlbum',
    component: TopAlbum,
};

export const Default = (args) => {
    return new TopAlbum(args).render();
};

Default.args = {
    props: {
        artist: 'twenty one pilots',
        artwork: '68fa7ac3-3a08-4505-8545-7cfaa9905edc',
        artwork_color: '#A0A88D',
        id: 676,
        title: 'twenty one pilots',
        tracks_count: 14,
        tracks_duration: 3717,
        year: 2009,
    },
};
