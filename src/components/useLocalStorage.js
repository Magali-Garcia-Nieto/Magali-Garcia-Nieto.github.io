import React, {useState, useEffect} from 'react';

const useLocalStorage = (language, defaultLanguage) => {
    const [value, setValue] = React.useState(
        JSON.parse(localStorage.getItem(language)) ?? defaultLanguage 
    );
  
    React.useEffect(() => {
      localStorage.setItem(language, JSON.stringify(value));
    }, [value, language]);
  
    return [value, setValue];
  };



export default useLocalStorage;

