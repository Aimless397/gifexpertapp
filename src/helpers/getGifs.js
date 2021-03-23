
export const getGifs = async (categoria) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(categoria)}&limit=10&api_key=Bhept4yWBZdFOd30z3lLWj2049VpDhHI`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url // si vienen las imágenes, utilizar
    };
  });

  return gifs; // regresar promesa que resuelve la colección de imágenes
}