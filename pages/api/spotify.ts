// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  track: any;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  let client_id = process.env.SPOTIFY_CLIENT_ID;
  let client_secret = process.env.SPOTIFY_CLIENT_SECRET;
  let refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;
  var access_token: string = "";

  let authorization = Buffer.from(client_id + ":" + client_secret).toString("base64");

  let authOptions = {
    url: "https://accounts.spotify.com/api/token",
    headers: { Authorization: "Basic " + authorization },
    form: {
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    },
    json: true,
  };

  fetch(authOptions.url, {
    method: "POST",
    headers: {
      Authorization: "Basic " + authorization,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `grant_type=refresh_token&refresh_token=${refresh_token}`,
  })
    .then((response) => response.json())
    .then((data) => {
      access_token = data.access_token;
      fetch("https://api.spotify.com/v1/me/player/currently-playing", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + access_token,
        },
      }).then((response) => {
        if (response.status === 204) {
          res.status(200).json({
            track: null,
          });
        } else {
          response.json().then((data) => {
            return res.status(200).json({
              track: data,
            });
          });
        }
      });
    });
}
