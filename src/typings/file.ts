export type TValidImageType =
  | '.jpeg'
  | '.jpg'
  | '.png'
  | '.gif'
  | '.bmp'
  | '.tiff'
  | '.webp'
  | '.svg'
  | '.heif'
  | '.avif';

export type TValidVideoType = '.mp4';

export type TValidAudioType = '.mp3' | '.wav' | '.ogg';

export type TValidGISType = '.glb';

export type TVali3DImageType = '.gltf';

export type TValidMediaType = TValidImageType | TValidVideoType | TValidAudioType | TValidGISType | TVali3DImageType;
