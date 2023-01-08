// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";

interface Data {
  lastOnlineTime: unknown;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const redis = Redis.fromEnv();
  const lastOnlineTime = await redis.get("lastOnlineTime");
  return res.status(200).json({ lastOnlineTime: lastOnlineTime });
}
