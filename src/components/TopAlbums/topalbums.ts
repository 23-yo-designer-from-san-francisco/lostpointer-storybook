import { Component } from 'components/Component/component';
import { IAlbum } from 'types/IAlbum';
import { TopAlbum } from 'components/TopAlbum/topalbum';

import TopAlbumsTemplate from './topalbums.hbs';
import './topalbums.scss';

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
        console.log('this props albums', this.props);
        this.compact = this.props.compact || false;
        this.albums = this.props.albums.reduce(
            (acc: Array<TopAlbum>, album) => {
                acc.push(new TopAlbum<TAlbum>(album).render());
                return acc;
            },
            []
        );
        console.log('rendered albums', this.albums);
    }

    render() {
        return TopAlbumsTemplate({
            albums: this.albums,
            compact: this.compact,
        });
    }
}
