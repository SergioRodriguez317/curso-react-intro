import React from 'react';

function useLocalStorage(itenName, initialValue) {
  
    const [item, setItem] = React.useState(initialValue);

    const [loading, setLoading] = React.useState(true);

    const [error, setError] = React.useState(false);

    

    React.useEffect(() => {
      setTimeout(() => {
        try{
          const localStorageItem = localStorage.getItem(itenName);
    
          let parsedItem;
    
          if(!localStorageItem){
          localStorage.setItem(itenName,JSON.stringify(initialValue));
          parsedItem = initialValue;
        }else{
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      }catch(error){
        setLoading(false);
        setError(true);
      }
      },2000);
  },[]);
  
    
  
    const saveItem = (newItem) => {
      localStorage.setItem(itenName, JSON.stringify(newItem));
  
      setItem(newItem);
    };
  
    return {item,saveItem, loading, error};
}

export {useLocalStorage};


// localStorage.removeItem('TODOS_V1');
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));