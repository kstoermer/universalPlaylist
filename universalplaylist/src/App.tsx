import * as React from 'react';
import {Video} from "./types/videoTable/videoTableTypes"
import {VideoTable} from "./videoTable/VideoTable"

const testData: Array<Video> = [
    {id: 1, name: "Video 1", tabName: "tab1"},
    {id: 2, name: "Video 2", tabName: "tab1"},
    {id: 3, name: "Video 3", tabName: "tab1"},
    {id: 4, name: "Video 4", tabName: "tab1"},
    {id: 5, name: "Video 5", tabName: "tab1"},
  ]

const App: React.FC = () => {
  return (
    <VideoTable videos={testData}/>
  );
}

export default App;
