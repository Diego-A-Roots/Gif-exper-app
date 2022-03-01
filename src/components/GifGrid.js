import React,{useState, useEffect} from 'react'
import { useFetchGifs } from '../hooks/useFechGifs';
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem'; 

export const GifGrid = ({category}) => {

/*     const [images, setImages] = useState([]);

    


    useEffect( () => {
        getGifs(category)
            .then(setImages);
    }, [ category ]) */
    

    const {data,loading }= useFetchGifs(category);
    

    
    
    
    
  return (
    
    <>
        <h3 className='card animate__animated animate__fadeIn'>{category}</h3>
        
        { loading && <p>loading</p>}
 
        <div className='card-grid '> 
            
            <ol>
                {
                    data.map( img=>(
                        <GifGridItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </ol>
        </div>
    </>
    
  )
}
