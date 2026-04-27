import { imageUploadPreset } from '../constants/imageUpload';
import { compressImageToWebp } from '../utils/imageCompression';

export type UploadKind = keyof typeof imageUploadPreset | 'pdf';

/**
 * 第一版預留：壓縮 + 上傳流程介面。
 * 目前先回傳 local object URL，後續可替換為 Firebase Storage upload。
 */
export const useImageUpload = () => {
  const upload = async (file: File, kind: UploadKind): Promise<string> => {
    if (kind === 'pdf') {
      return URL.createObjectURL(file);
    }

    const compressed = await compressImageToWebp(file, {
      ...imageUploadPreset[kind],
      mimeType: 'image/webp'
    });

    return URL.createObjectURL(compressed);
  };

  return { upload };
};
