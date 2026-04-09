// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";

interface Data {
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (req.headers.authorization !== process.env.ONLINE_PORTFOLIO_API_KEY) {
    return res.status(401).json({ message: "unauthorized" });
  }

  try {
    const redis = Redis.fromEnv();
    await redis.set("lastOnlineTime", req.body.timestamp);

    return res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Online check Redis write failed", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
