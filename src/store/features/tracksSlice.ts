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
  filteredTracks: TrackType[];
  filterOptions: {
    author: string[];
    genre: string[];
    searchValue: string;
    order: string;
  };
};
export const initialState: PlaylistStateType = {
  currentTrack: null,
  initialPlaylist: [],
  playlist: [],
  isPlaying: false,
  isShuffle: false,
  likedTracks: [],
  filteredTracks: [],
  filterOptions: {
    author: [],
    genre: [],
    searchValue: "",
    order: "По умолчанию",
  },
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
    setInitialPlaylist: (state, action: PayloadAction<TrackType[]>) => {
      state.initialPlaylist = action.payload;
      state.filteredTracks = action.payload;
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

    setFilters: (
      state,
      action: PayloadAction<{
        author?: string[];
        genre?: string[];
        searchValue?: string;
        order?: string;
      }>
    ) => {
      (state.filterOptions = {
        author: action.payload.author || state.filterOptions.author,
        genre: action.payload.genre || state.filterOptions.genre,

        searchValue:
          action.payload.searchValue !== undefined
            ? action.payload.searchValue
            : state.filterOptions.searchValue,
        order: action.payload.order || state.filterOptions.order,
      }),
        (state.filteredTracks = state.initialPlaylist.filter((track) => {
          const hasAuthors = state.filterOptions.author.length !== 0;
          const isAuthors = hasAuthors
            ? state.filterOptions.author.includes(track.author)
            : true;
          const hasGenres = state.filterOptions.genre.length !== 0;

          const isGenres = hasGenres
            ? track.genre.some((genre) =>
                state.filterOptions.genre.includes(genre)
              )
            : true;
          const hasSearchValue = track.name
            .toLowerCase()
            .includes(state.filterOptions.searchValue.toLowerCase());
          return isAuthors && hasSearchValue && isGenres;
        }));
    },

    setSortTraks: (state, action: PayloadAction<string>) => {
      state.filterOptions.order = action.payload;
      if (state.filterOptions.order === "Сначала старые") {
        state.filteredTracks = state.filteredTracks.sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime()
        );
      }
      if (state.filterOptions.order === "Сначала новые") {
        state.filteredTracks = state.filteredTracks.sort(
          (a, b) =>
            new Date(b.release_date).getTime() -
            new Date(a.release_date).getTime()
        );
      }
      if (state.filterOptions.order === "По умолчанию") {
        state.filteredTracks = state.filteredTracks.sort(
          (a, b) => a._id - b._id
        );
      }
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
  setInitialPlaylist,
  setNextTrack,
  setPrevTrack,
  setIsPlaying,
  setIsShuffle,
  setDislike,
  setLike,
  setFilters,
  setSortTraks,
} = playlistSlice.actions;
export const playlistReducer = playlistSlice.reducer;
