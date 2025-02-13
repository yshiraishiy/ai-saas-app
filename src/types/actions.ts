export type GenerateImageState = {
  imageUrl?: string;
  error?: string;
  status: "idle" | "error" | "success";
  keyword?: string;
};

export type RemoveBackgroundState = {
  error?: string;
  status: "idle" | "error" | "success";
  originalImage?: string;
  processedImage?: string;
};
