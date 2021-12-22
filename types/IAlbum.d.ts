import { ITrack } from './ITrack';

export interface IAlbum {
    album: boolean;
    id: number;
    title: string;
    year: number;
    artist: string;
    artwork: string;
    artwork_color: string;
    tracks_count: number;
    tracks_duration: number;
    tracks: Array<ITrack>;
}
