export const API_KEY = "AIzaSyCQFsOQK4fIMu-etxJF1dU3ajbJxpT--c4";
export const BASE_API =
  "https://maps.googleapis.com/maps/api/place/autocomplete";

async function location(input) {
  const response = await fetch(
    `${BASE_API}/json?input=${input}&key=${API_KEY}`
  );
  if (!response.ok) {
    console.log(response);
    throw new Error("fetch fallido de la funcion location");
  }
  const data = response.json();
  return data;
}

export default location;
