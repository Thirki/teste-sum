import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import './BreadCrumb.css'

export function BreadCrumb() {
  const [breadCrumb, setBreadCrumb] = useState([])
  const { id } = useParams();
  useEffect(() => {
    setBreadCrumb(id.split('-'))
  }, [id])

  return (
    <div>
      <ul className='breadcrumb'>
        <li><Link to="/">Home</Link></li>
        {breadCrumb.map(bread => (
          <li key={`bread${breadCrumb.indexOf(bread)}`}>
            <Link to={`/dashboard/${breadCrumb.slice(0, breadCrumb.indexOf(bread)+1).join('-')}`}>{bread}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}