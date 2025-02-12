import { NextResponse } from "next/server";

import axios from "axios";
import FormData from "form-data";

export async function POST(req: Request) {
  const { keyword } = await req.json();
  console.log(keyword);

  try {
    const payload = {
      prompt: `Create Image with ${keyword}`,
      output_format: "png",
    };

    const formData = new FormData();
    formData.append("prompt", payload.prompt);
    formData.append("output_format", payload.output_format);

    const response = await axios.postForm(
      `https://api.stability.ai/v2beta/stable-image/generate/core`,
      formData,
      {
        validateStatus: undefined,
        responseType: "arraybuffer",
        headers: {
          Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
          Accept: "image/*",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error(`API error: ${response.status}`);
    }

    // Base64エンコーディング
    const base64Image = Buffer.from(response.data).toString("base64");
    const imageUrl = `data:image/png;base64,${base64Image}`;

    console.log(response.data);

    return NextResponse.json({ imageUrl });
  } catch (error) {
    console.log("Error generate image:", error);
    return NextResponse.json(
      {
        error: "Failed to generate image",
      },
      { status: 500 }
    );
  }
}
