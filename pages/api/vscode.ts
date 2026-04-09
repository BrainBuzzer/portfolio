// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  total_time: string | null;
};

type ErrorResponse = {
  message: string;
};

type WakaTimeResponse = {
  data?: {
    text?: string;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const apiKey = process.env.WAKATIME_API_KEY ?? "";
    const authorization = Buffer.from(apiKey).toString("base64");

    const response = await fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
      method: "GET",
      headers: {
        Authorization: `Basic ${authorization}`,
      },
    });

    if (!response.ok) {
      console.error("WakaTime request failed", { status: response.status });
      return res.status(200).json({ total_time: null });
    }

    const data: WakaTimeResponse = await response.json();
    const totalTime = data.data?.text;

    if (typeof totalTime !== "string") {
      return res.status(200).json({ total_time: null });
    }

    return res.status(200).json({ total_time: totalTime });
  } catch (error) {
    console.error("Unexpected VSCode API route error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
