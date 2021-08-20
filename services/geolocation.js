async function location(input) {
  const response = await fetch(`/api/places?input=${input}`);
  if (!response.ok) {
    console.log(response);
    throw new Error("fetch fallido de la funcion location");
  }
  const data = await response.json();
  return data;
}

export default location;
