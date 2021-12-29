import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { filterByTag } from '../services/filterByTag';
import { getValue } from '../services/getValue';
import './Table.css'

export function Table({filterData}) {
  const [keysArray, setKeysArray] = useState([])
  const [currentArray, setCurrentArray] = useState([])

  const { id } = useParams();

  useEffect(() => {
    if(id.includes('-')){
      const arrayKeys = filterData.map(element => [...Object.keys(element)]).reduce((acc, curr) => {
        return acc.concat(curr)
      }, [])
      let arrUnique = arrayKeys.filter((unique, i) => arrayKeys.indexOf(unique) === i);
      setKeysArray(arrUnique.filter(current => current !== 'ticker')
        .filter(current => current !== 'value'))
      setCurrentArray(filterData)

    } else {
      const newArray = filterData.map(element => element[id]);
      const arrayKeys = newArray.map(element => [...Object.keys(element)]).reduce((acc, curr) => {
        return acc.concat(curr)
      }, [])
      let arrUnique = arrayKeys.filter((unique, i) => arrayKeys.indexOf(unique) === i);
      setKeysArray(arrUnique)
      setCurrentArray(newArray)
    }
  }, [filterData, id])

  return (
    <div className='table-container'>
        <table>
          <thead>
          <h4>Dados recentes!</h4>
            <tr>
              <th>Rotulos de linha</th>
              <th>Sum of value total</th>
            </tr>
          </thead>
          <tbody>
            {keysArray.map(element =>
              <tr key={`element${keysArray.indexOf(element)}`}>
                <th>
                  <Link to={`/dashboard/${id}-${element}`}>
                    {element}
                  </Link>
                </th>
                <th>{filterByTag(element, currentArray).map(current => getValue(current)).reduce((accum, curr) => {
                    return accum + curr[0].value;
                  }, 0)}
                </th>
              </tr>)
              }
          </tbody>
        </table>
        <ul className='resume'>
          {currentArray.filter(element => Object.keys(element).length > 1).map(current => (
            <div key={current.ticker}>
              <li>{current.ticker}: <span>{current.value}</span></li>
            </div>
          ))}
        </ul>
    </div>
  )
}
