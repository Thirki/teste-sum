import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/dashboard')
    .then(response => response.json())
    .then(data => setData(data))
  }, [setData])

  const contextValue = {
    data,
    setData,
  }

return (
  <AppContext.Provider value={ contextValue }>
    {children}
  </AppContext.Provider>
);
}

export default Provider;