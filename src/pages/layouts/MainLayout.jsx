import React from 'react'
import Container from '../../components/layout/Container'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='py-6'>
        <Container>
            <Outlet />
        </Container>

    
    </div>
  )
}

export default MainLayout

