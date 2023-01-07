// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  total_time: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let api_key = process.env.WAKATIME_API_KEY;

  let authorization = Buffer.from(api_key).toString("base64");

  fetch("https://wakatime.com/api/v1/users/current/all_time_since_today", {
    method: "GET",
    headers: {
      Authorization: `Basic ${authorization}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      res.status(200).json({ total_time: data.data.text });
    });
}
