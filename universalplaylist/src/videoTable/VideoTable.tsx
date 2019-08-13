import * as React from "react";
import {Video} from "../types/videoTable/videoTableTypes";
import {VideoEntry} from "./VideoEntry"
import {remove, findIndex} from "ramda";

interface VideoTableProps {
  videos: Array<Video>
}

interface VideoTableState {
  videos: Array<Video>,
  playing: Boolean
}

export class VideoTable extends React.Component <VideoTableProps, VideoTableState>{
  constructor(props:VideoTableProps){
    super(props);

    this.state = {
      videos: props.videos,
      playing: false
    }
  }

  deleteVideo(id: Number){
    const videos = this.state.videos;
    this.setState({
      videos: remove(findIndex((video: Video) => video.id === id, videos), 1, videos)
    })
  }

  render(){
    const videos: Array<Video> = this.state.videos;
    console.log(videos)

    return videos.map((video: Video) => <VideoEntry video={video} 
                                                    deleteFunc={(id: Number) => this.deleteVideo(id)}/>);
  }
}