import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/store/store";
import { getFavoriteTracks } from "@/store/features/tracksSlice";

export function useInitLikedTracks() {
  const dispatch = useAppDispatch();
  const tokens = useAppSelector((state) => state.user.tokens);

  useEffect(() => {
    if (tokens?.access) {
      dispatch(getFavoriteTracks(tokens.access));
    }
  }, [tokens, dispatch]);
}
