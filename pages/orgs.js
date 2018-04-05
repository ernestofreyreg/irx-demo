import React from 'react'
import GenericCRUD from '../components/GenericCRUD'
import ScreenFrame from '../components/ScreenFrame'
import PageFrame from '../components/PageFrame'
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Logo from '../components/Logo'

const orgModel = {
  name: 'Organizations',
  nameSingular: 'Organization',
  fields: [
    {name: '_id', hide: true},
    {name: 'name', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'admins', type: 'ref-array'}
  ]
}

const Orgs = () => (
  <ScreenFrame>
    <PageFrame>
      <Header />
      <Logo />
      
      <MainNav />

      <GenericCRUD path='/api/orgs' model={orgModel} />
    </PageFrame>
  </ScreenFrame>
)

export default Orgs
