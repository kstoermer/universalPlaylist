import * as React from "react";
import {Video} from "../../../types/videoTable/videoTableTypes";

interface DeleteFunc {
  (id: Number): void
}

interface VideoEntryProps {
  video: Video, 
  deleteFunc: DeleteFunc,
}

export const VideoEntry = ({video, deleteFunc}: VideoEntryProps) =>
  <div className="videoEntry box columns">
    <div className="column is-4">{video.name}</div>
    <div className="column is-4"></div>
    <div className="column is-4">
      <a className="delete is-danger" onClick={() => deleteFunc(video.id)}></a>
    </div>
  </div>