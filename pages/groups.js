import React from 'react'
import GenericCRUD from '../components/GenericCRUD'
import ScreenFrame from '../components/ScreenFrame'
import PageFrame from '../components/PageFrame'
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Logo from '../components/Logo'

const model = {
  name: 'Groups',
  nameSingular: 'Group',
  fields: [
    {name: '_id', hide: true},
    {name: 'name', type: 'string'},
    {name: 'organizationId', type: 'ref'}
  ]
}

const Groups = () => (
  <ScreenFrame>
    <PageFrame>
      <Header />
      <Logo />
      
      <MainNav />

      <GenericCRUD path='/api/groups' model={model} />
    </PageFrame>
  </ScreenFrame>
)

export default Groups
