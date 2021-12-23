import { SuggestedAlbums } from 'components/SuggestedAlbums/suggestedAlbums';

export default {
    title: 'Components/SuggestedAlbums',
    component: SuggestedAlbums,
};

export const Default = (args) => {
    return new SuggestedAlbums(args).render();
};

Default.args = {};
