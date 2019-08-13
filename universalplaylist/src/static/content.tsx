import {forEach} from "ramda";
import {SEND_VIDEO_MESSAGE} from "../messages/messages";
import {wrap, htmlcollectionToArray, sendMessage} from "../content/utils/common"

const onClick = (videoElement: HTMLVideoElement) => {
  sendMessage(videoElement)({type: SEND_VIDEO_MESSAGE})
}

function main () {
  const videoElements: Array<HTMLVideoElement> = htmlcollectionToArray(document.getElementsByTagName("video"));
  
  forEach((videoElement: HTMLVideoElement) => wrap(videoElement, onClick), videoElements)
}

main();