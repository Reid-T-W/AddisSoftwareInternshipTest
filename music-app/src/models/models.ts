export interface SongType {
    id: number;
    songName: string;
    album: string;
    artist: string;
    genere: string;
}

export interface AlbumType {
    id: number;
    albumName: string;
    artistName: string;
    noOfSongs: number;
}

export interface ArtistType {
    id: number;
    artistName: string;
    noOfSongs: number;
    noOfAlbums: number;
}

export interface GenereType {
    id: number;
    genereName: string;
    noOfAlbums: number;
    noOfSongs: number;
}