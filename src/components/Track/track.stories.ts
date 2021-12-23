import { Track } from 'components/Track/track';

export default {
    title: 'Components/Track',
    component: Track,
};

export const Default = (args) => {
    return new Track(args).render();
};

Default.args = {
    album: {
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
    },
    artist: {
        props: {
            avatar: '/static/artists/52e5e88d-5d3d-4f14-89a6-6e9a127c3774.webp',
            id: 343,
            name: 'twenty one pilots',
        },
    },
    title: 'Heavydirtysoul',
    id: 0,
    file: '',
    pos: 1,
};
