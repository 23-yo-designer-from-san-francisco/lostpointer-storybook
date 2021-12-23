import { Component } from 'components/Component/component';

import { Track } from 'components/Track/track';
import { ITrack } from '../../../types/ITrack';

import TracklistTemplate from './tracklist.hbs';
import './tracklist.scss';

interface ITrackListProps<TTrackModel> {
    title: string;
    tracks: Array<TTrackModel>;
}

export class TrackList<TTrackModel extends ITrack = ITrack> extends Component<
    ITrackListProps<TTrackModel>
> {
    private title: string;
    private trackComponents: Array<Track>;

    constructor(props?) {
        super(props);
        this.title = this.props.title;
        if (this.props.tracks) {
            this.trackComponents = this.props.tracks.reduce(
                (acc, item: TTrackModel) => {
                    acc.push(new Track<TTrackModel>(item).render());
                    return acc;
                },
                []
            );
        }
    }

    render() {
        return TracklistTemplate({
            title: this.title,
            tracks: this.trackComponents,
        });
    }
}
