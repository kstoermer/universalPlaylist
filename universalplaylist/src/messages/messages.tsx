export const SEND_VIDEO_MESSAGE = "SENDVIDEOMESSAGE";

interface SendVideoMessageData {
  video: HTMLVideoElement
}

export interface SendVideoMessage {
  type: typeof SEND_VIDEO_MESSAGE,
  data: SendVideoMessageData
}

export interface MessageResponse {
  code: 200 | 500, 
  message?: String
}