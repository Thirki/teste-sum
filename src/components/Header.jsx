import React, { useEffect, useState } from 'react'

import './Header.css'

export function Header() {
  const [greetings, setGreetings] = useState('')

  useEffect(() => {
   const greetingMessage = () => {
    let h = new Date().getHours();
    if (h <= 5) return 'Boa madrugada';
    if (h < 12) return 'Bom dia';
    if (h < 18) return 'Boa tarde';
    return 'Boa noite';
  }
  setGreetings(greetingMessage());
  }, [])

  return (
    <header>
      <h1> Olá, <span>{greetings}</span> 👋</h1>
    </header>
  )
}
