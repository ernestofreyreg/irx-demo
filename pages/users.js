import React from 'react'
import GenericCRUD from '../components/GenericCRUD'
import ScreenFrame from '../components/ScreenFrame'
import PageFrame from '../components/PageFrame'
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Logo from '../components/Logo'

const model = {
  name: 'Users',
  nameSingular: 'User',
  fields: [
    {name: '_id', hide: true},
    {name: 'firstName', type: 'string'},
    {name: 'lastName', type: 'string'},
    {name: 'email', type: 'string'},
    {name: 'phone', type: 'string'},
    {name: 'organizationId', type: 'ref'}
  ]
}

const Users = () => (
  <ScreenFrame>
    <PageFrame>
      <Header />
      <Logo />
      
      <MainNav />

      <GenericCRUD path='/api/users' model={model} />
    </PageFrame>
  </ScreenFrame>
)

export default Users
