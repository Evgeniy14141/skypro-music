import { fetchFavoriteTracks } from "@/api/getTracksApi";
import { TrackType } from "@/types/tracks";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const getFavoriteTracks = createAsyncThunk(
  "tracks/getFavorite",
  async (token: string) => {
    const response = await fetchFavoriteTracks(token);

    return response;
  }
);

type PlaylistStateType = {
  currentTrack: TrackType | null;
  initialPlaylist: TrackType[];
  playlist: TrackType[];
  isPlaying: boolean;
  isShuffle: boolean;
  likedTracks: TrackType[];
};
const initialState: PlaylistStateType = {
  currentTrack: null,
  initialPlaylist: [],
  playlist: [],
  isPlaying: false,
  isShuffle: false,
  likedTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setCurrentTrack: (
      state,
      action: PayloadAction<{ currentTrack: TrackType; playlist: TrackType[] }>
    ) => {
      state.currentTrack = action.payload.currentTrack;
      state.initialPlaylist = action.payload.playlist;
      state.playlist = action.payload.playlist;
    },
    setNextTrack: (state) => {
      const playlist = state.isShuffle
        ? [...state.initialPlaylist].sort(() => Math.random() - 0.5)
        : state.initialPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      if (playlist.length - 1 === currentIndex) {
        state.isPlaying = false;
        return;
      }
      state.currentTrack = playlist[currentIndex + 1];
    },
    setPrevTrack: (state) => {
      const playlist = state.isShuffle
        ? [...state.initialPlaylist].sort(() => Math.random() - 0.5)
        : state.initialPlaylist;
      const currentIndex = playlist.findIndex(
        (track) => track._id === state.currentTrack?._id
      );
      /* console.log("currentIndex", currentIndex); */
      if (!currentIndex) {
        state.isPlaying = false;
        return;
      }
      state.currentTrack = playlist[currentIndex - 1];
    },
    setIsPlaying: (state, action: PayloadAction<boolean>) => {
      state.isPlaying = action.payload;
    },
    setIsShuffle: (state, action: PayloadAction<boolean>) => {
      state.playlist = [...state.initialPlaylist].sort(
        () => Math.random() - 0.5
      );
      state.isShuffle = action.payload;
    },
    setLike: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks.push(action.payload);
    },
    setDislike: (state, action: PayloadAction<TrackType>) => {
      state.likedTracks = state.likedTracks.filter(
        (track) => track._id !== action.payload._id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavoriteTracks.fulfilled, (state, action) => {
      state.likedTracks = action.payload;
    });
  },
});

export const {
  setCurrentTrack,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  setIsShuffle,
  setDislike,
  setLike,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
