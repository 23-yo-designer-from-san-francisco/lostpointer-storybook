import { TopAlbums } from 'components/TopAlbums/topalbums';

export default {
    title: 'Components/TopAlbums',
    component: TopAlbums,
};

export const Default = (args) => {
    return new TopAlbums(args).render();
};

Default.args = {
    albums: [
        {
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
        {
            props: {
                artist: 'Lana Del Rey',
                artwork: 'e277ce48-b1e1-4ad9-abfc-30f1e6ff427b',
                artwork_color: '#C5B9AF',
                id: 567,
                title: 'Dark Paradise - Single',
                tracks_count: 2,
                tracks_duration: 475,
                year: 2013,
            },
        },
        {
            props: {
                artist: 'Toby Fox',
                artwork: '2f110302-e4fd-45f4-8b19-a737ae85852d',
                artwork_color: '#4b4b4b',
                id: 639,
                title: 'Undertale',
                tracks_count: 101,
                tracks_duration: 7794,
                year: 2015,
            },
        },
        {
            props: {
                artist: 'Toby Fox',
                artwork: '2f110302-e4fd-45f4-8b19-a737ae85852d',
                artwork_color: '#4b4b4b',
                id: 639,
                title: 'Undertale',
                tracks_count: 101,
                tracks_duration: 7794,
                year: 2015,
            },
        },
    ],
};
