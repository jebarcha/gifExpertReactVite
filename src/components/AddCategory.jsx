import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('One Punch');

  const onInputChange = (event) => {
    //console.log(event.target.value);
    setInputValue(event.target.value);
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    //console.log(inputValue);
    //setCategories(categories => [inputValue, ...categories]);
    setInputValue('');
    onNewCategory(inputValue.trim());
  }

  return (
    <form onSubmit={ onSubmit }>
        <input 
            type="text" 
            placeholder="Search gifs"
            value={inputValue}
            onChange={ () => onInputChange(event) }
        />
    </form>
  )
}

AddCategory.propType = {
   onNewCategory: PropTypes.func.isRequired
}