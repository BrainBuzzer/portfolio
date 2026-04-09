// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  track: unknown | null;
};

type ErrorResponse = {
  message: string;
};

type SpotifyTokenResponse = {
  access_token?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data | ErrorResponse>) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const clientId = process.env.SPOTIFY_CLIENT_ID ?? "";
    const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? "";
    const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN ?? "";
    const authorization = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

    const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: `Basic ${authorization}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=refresh_token&refresh_token=${refreshToken}`,
    });

    if (!tokenResponse.ok) {
      console.error("Spotify token refresh failed", { status: tokenResponse.status });
      return res.status(200).json({ track: null });
    }

    const tokenData: SpotifyTokenResponse = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    if (!accessToken) {
      console.error("Spotify token refresh returned no access token");
      return res.status(200).json({ track: null });
    }

    const currentlyPlayingResponse = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (currentlyPlayingResponse.status === 204) {
      return res.status(200).json({ track: null });
    }

    if (!currentlyPlayingResponse.ok) {
      console.error("Spotify currently playing request failed", {
        status: currentlyPlayingResponse.status,
      });
      return res.status(200).json({ track: null });
    }

    const trackData: unknown = await currentlyPlayingResponse.json();

    return res.status(200).json({
      track: trackData,
    });
  } catch (error) {
    console.error("Unexpected Spotify API route error", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}
