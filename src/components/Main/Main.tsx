import { FC } from "react";

import { TrackType } from "@/types/tracks";

type MainProps = {
  tracks: TrackType[];
};

export const Main: FC<MainProps> = ({ tracks }) => {
  return <Main tracks={tracks} />;
};
