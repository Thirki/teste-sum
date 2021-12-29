import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { BreadCrumb } from '../components/BreadCrumb';
import { Table } from '../components/Table';
import AppContext from '../context/AppContext';
import { filterByTag } from '../services/filterByTag';

export function CurrentDashboard() {
  const { data } = useContext(AppContext);
  const [filterData, setFilterData] = useState([])

  const { id } = useParams();

  useEffect(() => {
    if(id.includes('-')){
      let filteredArray = [];
      const keysArray = id.split('-')
      for (let i = 0; i < keysArray.length; i++) {
        const currentKey = keysArray[i];
        filteredArray = filteredArray.length === 0 ? data : filteredArray;
        filteredArray = filterByTag(currentKey, filteredArray).map(current => current[currentKey])
      }
      setFilterData(filteredArray)
    } else {
      setFilterData(filterByTag(id, data))
    }
  }, [id, data])

  return (
    <div>
      <BreadCrumb />
      {filterData.length > 0 && <Table filterData={filterData}/>}
    </div>
  )
}
