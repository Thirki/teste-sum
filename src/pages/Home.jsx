import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { getValue } from '../services/getValue';
import { filterByTag } from '../services/filterByTag';

export function Home() {
  const { data } = useContext(AppContext);
  const [key, setKey] = useState([])

  data.forEach(element => {
    if (!key.includes(Object.keys(element)[0])){
      setKey([...key, Object.keys(element)[0]])
    }
  });

  return (
    <table className='table-container'>
      <thead>
      <h4>Dados recentes!</h4>
        <tr>
          <th>Rotulos de linha</th>
          <th>Sum of value total</th>
        </tr>
      </thead>
      <tbody>
        {key.map(current => (
            <tr key={current}>
              <th>
                <NavLink to={`/dashboard/${current}`}>{current}</NavLink>
              </th>
              <th>{filterByTag(current, data).map(element => getValue(element)).reduce((accum, curr) => {
                return accum + curr[0].value;
              }, 0)}
              </th>
            </tr>
        ))}
      </tbody>
    </table>
  )
}
