import {forEach} from "ramda";
import {SendVideoMessage, SEND_VIDEO_MESSAGE} from "../messages/messages";
import {wrap, htmlcollectionToArray, sendMessage} from "../content/utils/common"

const onClick = (videoElement: HTMLVideoElement) => {
  sendMessage({type: SEND_VIDEO_MESSAGE, data: {video: videoElement}})
}

function main () {
  const videoElements: Array<HTMLVideoElement> = htmlcollectionToArray(document.getElementsByTagName("video"));
  
  forEach((videoElement: HTMLVideoElement) => wrap(videoElement, onClick), videoElements)
}

main();