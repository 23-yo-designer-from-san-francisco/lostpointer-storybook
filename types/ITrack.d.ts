import { IArtist } from './IArtist';
import { IAlbum } from './IAlbum';

export interface ITrack {
    id: number;
    title: string;
    artist: IArtist;
    album: IAlbum;
    file: string;
    duration: number;
    is_in_favorites: boolean;
}
