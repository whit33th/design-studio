import "@vidstack/react/player/styles/default/theme.css";
import "@vidstack/react/player/styles/default/layouts/video.css";
import { MediaPlayer, MediaProvider, Poster } from "@vidstack/react";
import {
  defaultLayoutIcons,
  DefaultVideoLayout,
} from "@vidstack/react/player/layouts/default";

function Video() {
  return (
    <MediaPlayer
      title="Demo Visual"
      src="https://www.youtube.com/watch?v=itIpz_Vn3hU"
      volume={0.2}
    >
      <MediaProvider />
      <DefaultVideoLayout icons={defaultLayoutIcons} />
      <Poster className="vds-poster" />
    </MediaPlayer>
  );
}

export default Video;
