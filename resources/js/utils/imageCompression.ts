export type ImageCompressionOptions = {
  maxWidth: number;
  quality: number;
  mimeType?: 'image/webp';
};

/**
 * 第一版：前端圖片壓縮工具（輸出 WebP Blob）
 */
export const compressImageToWebp = async (
  file: File,
  options: ImageCompressionOptions
): Promise<Blob> => {
  const imageBitmap = await createImageBitmap(file);
  const scale = Math.min(1, options.maxWidth / imageBitmap.width);
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(imageBitmap.width * scale);
  canvas.height = Math.round(imageBitmap.height * scale);

  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('無法建立 Canvas Context');

  ctx.drawImage(imageBitmap, 0, 0, canvas.width, canvas.height);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (blob) => {
        if (!blob) {
          reject(new Error('圖片壓縮失敗'));
          return;
        }
        resolve(blob);
      },
      options.mimeType ?? 'image/webp',
      options.quality
    );
  });
};
