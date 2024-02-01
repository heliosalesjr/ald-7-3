'use client'


import { Divider } from '@nextui-org/react'
import MatButton from '../components/Matematica/MatButton'

import MatHero from '../components/Matematica/MatHero'
import MatAlgebricas from '../components/Matematica/MatAlgebricas'
import MatVideo1 from '../components/Matematica/MatVideo1'
import BentoTest from '../components/Matematica/BentoTest'
import MatPolinomios from '../components/Matematica/MatPolinomios'
import MatVideo2 from '../components/Matematica/MatVideo2'




function Matematica() {
  return (
    <>
        
        <MatHero />
        
        <MatAlgebricas />
        <Divider className='max-w-5xl mx-auto'/>
        <MatVideo1 />
        <MatPolinomios />
        <MatVideo2 />
        <Divider className='max-w-5xl mx-auto'/>
        <MatButton />
        
    
    </>
    
  )
}

export default Matematica