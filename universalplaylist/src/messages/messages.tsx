

export const SEND_VIDEO_MESSAGE = "SENDVIDEOMESSAGE";

export const SEND_VIDEO_RESPONSE_OK = "OK";
export const SEND_VIDEO_RESPONSE_FAILED = "FAILED";

export interface SendVideoMessage {
  type: typeof SEND_VIDEO_MESSAGE
}

export interface SendVideoResponse {
  sendVideoSuccessCode: typeof SEND_VIDEO_RESPONSE_OK | typeof SEND_VIDEO_RESPONSE_FAILED, 
  id?: string
}

export type Message = SendVideoMessage

export type Response = SendVideoResponse