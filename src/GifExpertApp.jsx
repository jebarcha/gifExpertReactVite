import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const initialValue = ['One Punch', 'other'];
  const [categories, setCategories] = useState(initialValue);
  //console.log(categories);
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    //console.log(newCategory);
    //const newCat = [...categories, 'batman'];
    setCategories([ newCategory, ...categories]);
  }
  
    return (
    <>
        {/* title */}
        <h1>GifExpertApp</h1>

        {/* input */}
        <AddCategory 
          onNewCategory={ onAddCategory }
        />

        {/* List */}
        <ol>
            {
                categories.map( (category) => (
                  <GifGrid 
                    key={category} 
                    category={category}
                  />
                ))
            }
        </ol>


    </>
  )
}
