async function location(input) {
  // const response = await fetch(
  //   `${BASE_API}/json?input=${input}&key=${API_KEY}`
  // );
  const response = await fetch(`/api/places?input=${input}`);
  if (!response.ok) {
    console.log(response);
    throw new Error("fetch fallido de la funcion location");
  }
  const data = response.json();
  return data;
}

export default location;
