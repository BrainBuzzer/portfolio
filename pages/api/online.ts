// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";

interface Data {
  lastOnlineTime: unknown;
}

interface ErrorResponse {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const redis = Redis.fromEnv();
    const lastOnlineTime = await redis.get("lastOnlineTime");

    return res.status(200).json({ lastOnlineTime });
  } catch (error) {
    console.error("Online status Redis read failed", error);
    return res.status(200).json({ lastOnlineTime: null });
  }
}
