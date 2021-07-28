function geolocation() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(async (position) => {
      console.log(position);
    });
  } else {
    alert("el usuario no dio acceso a su ubicación");
  }
}

export default geolocation;
