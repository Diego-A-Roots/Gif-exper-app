
import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
  
  const [categorias, setCategorias] = useState(['Dragon Ball']);

  /* const handleAdd = () => {
      //setCategorias(['hunterxhunter',...categorias]);
      setCategorias( cats => [...cats, 'hunterxhunter']);
  } */

  return (<>
    <h1>GifExpertApp</h1>
    <AddCategory setCategorias={ setCategorias} />
    

    

    <ol>
      {
        categorias.map( category => (
          <GifGrid 
            key={category}
            category = {category}
          />
        ))
      }
    </ol>

  </>
  )
    
  
}

