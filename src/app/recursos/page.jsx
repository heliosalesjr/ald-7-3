'use client'

import { Divider } from '@nextui-org/react'
import RecHero from '../components/Recursos/RecHero'
import RecCriando from '../components/Recursos/RecCriando'
import RecLembre from '../components/Recursos/RecLembre'
import RecCards from '../components/Recursos/RecCards'
import RecMapaMental from '../components/Recursos/RecMapaMental'
import RecSugestao from '../components/Recursos/RecSugestao'




function Recursos() {
  return (
    <>
        
        <RecHero />
        <RecCriando />
        <RecLembre />
        <RecCards />
        <RecMapaMental />
        <RecSugestao />
    </>
    
  )
}

export default Recursos