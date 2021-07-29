// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export const API_KEY = "AIzaSyCQFsOQK4fIMu-etxJF1dU3ajbJxpT--c4";
export const BASE_API =
  "https://maps.googleapis.com/maps/api/place/autocomplete";

export default async function handler(req, res) {
  console.log(req.query);
  const response = await fetch(
    `${BASE_API}/json?input=${req.query.input}&key=${API_KEY}`
  );
  if (!response.ok) {
    res.status(400).json({ error: true });
  }
  const data = await response.json();
  res.status(200).json(data);
}
