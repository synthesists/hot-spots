import ITrackID from '../doc/ITrackID';
import IPlaylistID from '../doc/IPlayistID';
import {getTrack, getRecommendedTrack, getPlaylistTracks} from '../services/spotifyServices'

const resolver = {

    playlist: async (playlistID: IPlaylistID) => {
        const response = getPlaylistTracks(playlistID);
        return response
    },

    tracks: async (id: ITrackID) => {
        const selectedTrack = await getTrack(id);
        const recommendedTrack = await getRecommendedTrack(id);        
        return [selectedTrack, recommendedTrack];
    },
    
}

export default resolver;
