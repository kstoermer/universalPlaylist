import * as React from 'react';
import {Video} from "./types/videoTable/videoTableTypes"
import {VideoTable} from "./popup/components/videoTable/VideoTable"
import {Header} from "./popup/components/header/header";
import {Spacer} from "./popup/components/common/Spacer";

const testData: Array<Video> = [
    {id: 1, name: "Video 1", tab: 1},
    {id: 2, name: "Video 2", tab: 2},
    {id: 3, name: "Video 3", tab: 2},
    {id: 4, name: "Video 4", tab: 3},
    {id: 5, name: "Video 5", tab: 3},
  ]

const App: React.FC = () => {
  return <React.Fragment>
    <Header/>
    <Spacer/>
    <VideoTable videos={testData}/>
  </React.Fragment>
  ;
}

export default App;
