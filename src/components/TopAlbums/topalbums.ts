import { Component } from 'components/Component/component';

import { IAlbum } from 'types/IAlbum';

import TopAlbumsTemplate from './topalbums.hbs';
import { Album } from 'components/Album/album';
import { TopAlbum } from 'components/TopAlbum/topalbum';

interface ITopAlbumsProps<TAlbum> {
    albums: Array<TAlbum>;
    compact?: boolean;
}

export class TopAlbums<TAlbum extends IAlbum = IAlbum> extends Component<
    ITopAlbumsProps<TAlbum>
> {
    private albums: Array<TopAlbum>;
    private compact: boolean;

    constructor(props) {
        super(props);
        this.compact = this.props.compact || false;
        this.albums = this.props.albums.reduce(
            (acc: Array<TopAlbum>, album) => {
                acc.push(new TopAlbum<TAlbum>(album).render());
                return acc;
            },
            []
        );
    }

    render() {
        return TopAlbumsTemplate({
            albums: this.albums,
            compact: this.compact,
        });
    }
}
