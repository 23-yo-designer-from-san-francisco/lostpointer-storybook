import { IAlbum } from './IAlbum';
import { ITrack } from './ITrack';

export interface IArtist {
    id: number;
    name: string;
    avatar?: string;
    video?: string;
    albums?: Array<IAlbum>;
    tracks?: Array<ITrack>;
}
