export interface SongType {
    _id: number;
    title: string;
    album: string;
    artist: string;
    genere: string;
}

export interface AlbumType {
    _id: number;
    albumName: string;
    artistName: string;
    noOfSongs: number;
}

export interface ArtistType {
    _id: number;
    artistName: string;
    noOfSongs: number;
    noOfAlbums: number;
}

export interface GenereType {
    _id: number;
    genereName: string;
    noOfAlbums: number;
    noOfSongs: number;
}

export interface StatsType {
    songsCount: number;
    albumsCount: number;
    artistsCount: number;
    genersCount: number;
}