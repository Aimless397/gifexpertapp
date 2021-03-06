import React, { useState, useEffect, Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ categoria }) => {

  /* const [images, setImages] = useState([]); */

  const { data:images, loading } = useFetchGifs(categoria);
  /* 
    useEffect(() => {
      getGifs(categoria)
        .then(setImages); //.then(imgs => setImages(imgs));
    }, [categoria]);
  */


  /* console.log("IMÁGENES: ", images); */
  return (
    <Fragment>
      <h3 className="animate__animated animate__bounce">{categoria}</h3>

      {loading && <p className="animate__animated animate__flash">Loading...</p>}
      
      <div className="card-grid">

        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }

      </div>
    </Fragment>
  )
}
