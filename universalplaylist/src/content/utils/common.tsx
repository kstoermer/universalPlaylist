import {SendVideoMessage, SendVideoResponse,SEND_VIDEO_RESPONSE_OK} from "../../messages/messages"
import {isSendVideoResponse} from "../../messages/typeGuards"

export const wrap = (element: HTMLElement, onClick: Function): void => {
  const wrapper: HTMLElement = document.createElement("div");
  wrapper.className = "videoWrapper";
  wrapper.onclick = () => onClick(element);
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}

export const htmlcollectionToArray = (htmlCollection: HTMLCollectionOf<HTMLVideoElement>) => Array.from(htmlCollection);

export const sendMessage = (videoElement: HTMLVideoElement) => (message: SendVideoMessage) => {
  chrome.runtime.sendMessage(message, function(response: SendVideoResponse) {
    if (isSendVideoResponse(response)){
      response.sendVideoSuccessCode === SEND_VIDEO_RESPONSE_OK 
        ? videoElement.parentElement.classList.add("VideoPlaylistEntry_" + response.id)
        : null
    } else {
      console.error("TYP PASST NICHT")
    }
  });
}