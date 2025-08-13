import React from 'react'
import MainLayout from '../components/modules/MainLayout'
import Container from '../components/modules/Container'
import AuthContainer from '../components/templates/Auth/AuthContainer'

function Auth() {
  return (
    <MainLayout>
      <Container>
       <AuthContainer/>
      </Container>
    </MainLayout>
  )
}

export default Auth