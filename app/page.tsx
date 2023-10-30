'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Login from './components/login/Login'

export default function Home() {

  return (
    <main className=' min-h-screen'>
      <Login />
    </main>
  )
}
