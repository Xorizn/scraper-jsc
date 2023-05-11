interface QualityMap {
  [quality: string]: string;
}

interface VideoDetails {
  dl_link: string;
  thumb: string;
  title: string;
  duration: string;
  filesizeF: string;
  filesize: number;
}

export function yt(
  url: string,
  quality: string,
  type: "mp3" | "mp4",
  bitrate: string,
  server?: string
): Promise<VideoDetails>;

export function yta(url: string, server?: string): Promise<VideoDetails>;

export function ytv(url: string, server?: string): Promise<VideoDetails>;

export const ytr: RegExp;

export const servers: string[];
