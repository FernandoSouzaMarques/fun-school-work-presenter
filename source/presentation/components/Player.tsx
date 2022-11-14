import { FC } from "react";
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

export const Player: FC = (): JSX.Element => {
  return (
    <div>
      <Plyr
        source={{
          sources: [{
            src: "/assets/videos/video-1.mp4",
            type: "video/mp4",
            size: 1920,
          },
          // {
          //   src: "EwyucgqKDuE", // id of youtube video
          //   // type: "video/mp4",
          //   provider: "youtube",
          //   size: 720,
          // }
        ],
          type: "video"
        }}
  
      />
    </div>
  );
};
