import { Component } from 'components/Component/component';

import { IAlbum } from 'types/IAlbum';

import AlbumTemplate from './album.hbs';
import './album.scss';

export class Album<TAlbum extends IAlbum = IAlbum> extends Component<TAlbum> {
    constructor(props) {
        super(props);
    }

    render() {
        return AlbumTemplate(this.props);
    }
}
