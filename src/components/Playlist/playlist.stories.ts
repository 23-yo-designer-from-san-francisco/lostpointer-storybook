import { Playlist } from 'components/Playlist/playlist';

export default {
    title: 'Components/Playlist',
    component: Playlist,
};

export const Default = (args) => {
    return new Playlist(args).render();
};

Default.args = {
    props: {
        id: 1,
        artwork:
            'https://lostpointer.site/static/playlists/default_playlist_artwork_100px.webp',
        title: 'Playlist 1',
        is_public: true,
    },
};
