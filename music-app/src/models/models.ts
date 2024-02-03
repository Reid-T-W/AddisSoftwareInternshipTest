export interface SongType {
    _id: number;
    title: string;
    album: string;
    artist: string;
    genere: string;
}

export interface AlbumType {
    _id: string;
    songCount: number;
}

export interface ArtistType {
    _id: string;
    songCount: number;
}

export interface GenereType {
    _id: string;
    songCount: number;
}

export interface StatsType {
    songsCount: number;
    albumsCount: number;
    artistsCount: number;
    genersCount: number;
}