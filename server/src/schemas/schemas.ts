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

type Query {
    tracks(id: String): [Track]
    artists: Artist
    album: Album
    recommendedTrack: Track
}

schema {
    query: Query
}
`)

        
export default schema