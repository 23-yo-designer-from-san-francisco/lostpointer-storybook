import { IAlbum } from '../../../types/IAlbum';
import { Component } from 'components/Component/component';

import { Album } from 'components/Album/album';

import SuggestedAlbumsTemplate from './suggestedAlbums.hbs';
import './suggestedAlbums.scss';

interface ISuggestedAlbums<TAlbum> {
    albums: Array<TAlbum>;
}

export class SuggestedAlbums<TAlbum extends IAlbum = IAlbum> extends Component<
    ISuggestedAlbums<TAlbum>
> {
    private albumList: Array<Album>;
    constructor(props) {
        super(props);
        if (this.props.albums) {
            this.albumList = this.props.albums.reduce((acc, item: TAlbum) => {
                acc.push(new Album<TAlbum>(item).render());
                return acc;
            }, []);
        }
    }

    render() {
        return SuggestedAlbumsTemplate({ albums: this.albumList });
    }
}
