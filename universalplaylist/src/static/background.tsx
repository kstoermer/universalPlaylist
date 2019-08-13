import {Video} from "../types/videoTable/videoTableTypes"
import {SEND_VIDEO_RESPONSE_OK, SEND_VIDEO_RESPONSE_FAILED} from "../messages/messages"
import {append} from "ramda"

interface Storage {
  videos: Array<Video>
}

let storage: Storage = {
  videos: []
}

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    const video: Video = {
      id: 1,
      name: "",
      tab: sender.tab.id
    }

    storage.videos = append(video, storage.videos);

    sendResponse({sendVideoSuccessCode: SEND_VIDEO_RESPONSE_OK, id: 1})
  });