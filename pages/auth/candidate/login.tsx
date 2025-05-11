import React from 'react'
import AuthLayout from '../layout'
import LoginForm from 'src/components/forms/login'

const AdminLogin = () => {
  return (
    <AuthLayout imgSrc=''>
      <LoginForm userRole='candidate'/>
    </AuthLayout>
  )
}

export default AdminLogin