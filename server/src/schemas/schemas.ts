import { buildSchema } from "graphql";

const schema = buildSchema(`

type Track {
    id: String
    name: String
    popularity: Int
    album(full: Int): Album
    artists(full: Int, throttle: Int): [Artist]
    preview_url: String
    album_type: String
}

type Artist {
    name: String
}

type Album {
    name: String
    images: [Image]
}

type Image {
    height: Int
    url: String
    width: Int
}

type TrackObj {
    track: Track
}

type PlaylistTracks {
    items: [TrackObj]
}

type Playlist {
    description: String
    id: String
    name: String
    tracks: PlaylistTracks
}

type Query {
    tracks(id: String): [Track]
    artists: Artist
    album: Album
    playlist(playlistID: String): Playlist
}

schema {
    query: Query
}
`)

        
export default schema