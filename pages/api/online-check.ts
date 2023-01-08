// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Redis } from "@upstash/redis";

interface Data {
  message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    if (req.headers.authorization === process.env.ONLINE_PORTFOLIO_API_KEY) {
      const redis = Redis.fromEnv();
      redis.set("lastOnlineTime", req.body.timestamp).then(() => {
        console.log("Data added to Redis");
      });
      res.status(200).json({ message: "success" });
    } else {
      res.status(401).json({ message: "unauthorized" });
    }
  }
}
