import {SendVideoMessage, MessageResponse} from "../../messages/messages"

export const wrap = (element: HTMLElement, onClick: Function): void => {
  const wrapper: HTMLElement = document.createElement("div");
  wrapper.className = "videoWrapper";
  wrapper.onclick = () => onClick(element);
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
}

export const htmlcollectionToArray = (htmlCollection: HTMLCollectionOf<HTMLVideoElement>) => Array.from(htmlCollection);

export const sendMessage = (message: SendVideoMessage) => {
  chrome.runtime.sendMessage(message, function(response: MessageResponse) {
    message.data.video.className = "DID IT";
  });
}