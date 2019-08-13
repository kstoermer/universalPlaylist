import {SendVideoMessage, SendVideoResponse, SEND_VIDEO_MESSAGE, Message, Response} from "./messages"

export const isSendVideoMessage = (message: Message): message is SendVideoMessage => (message as SendVideoMessage).type === SEND_VIDEO_MESSAGE;
export const isSendVideoResponse = (response: Response): response is SendVideoResponse => {console.log((response as SendVideoResponse).sendVideoSuccessCode !== undefined); return (response as SendVideoResponse).sendVideoSuccessCode !== undefined};