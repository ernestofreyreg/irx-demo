import React from 'react'
import GenericCRUD from '../components/GenericCRUD'
import ScreenFrame from '../components/ScreenFrame'
import PageFrame from '../components/PageFrame'
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Logo from '../components/Logo'

const model = {
  name: 'Documents',
  nameSingular: 'Document',
  fields: [
    {name: '_id', hide: true},
    {name: 'name', type: 'string'},
    {name: 'size', type: 'string'},
    {name: 'version', type: 'string'},
    {name: 'description', type: 'string'}
  ]
}

const Documents = () => (
  <ScreenFrame>
    <PageFrame>
      <Header />
      <Logo />
      
      <MainNav />

      <GenericCRUD path='/api/documents' model={model} />
    </PageFrame>
  </ScreenFrame>
)

export default Documents
