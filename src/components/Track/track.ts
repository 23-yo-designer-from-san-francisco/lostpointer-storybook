import { Component } from 'components/Component/component';

import { ITrack } from 'types/ITrack';

import TrackTemplate from './track.hbs';
import './track.scss';

export class Track<TTrack extends ITrack = ITrack> extends Component<TTrack> {
    constructor(props) {
        super(props);
    }

    render() {
        return TrackTemplate(this.props);
    }
}
