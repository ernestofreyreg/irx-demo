import React from 'react'
import Button from '../components/Button'
import { openPageEvent } from './helpers'

const MainNav = () => (
  <div className='create'>
    <Button label='Orgs' onClick={openPageEvent('orgs')} />
    <Button label='Groups' onClick={openPageEvent('groups')} />
    <Button label='Users' onClick={openPageEvent('users')} />
    <Button label='Documents' onClick={openPageEvent('documents')} />

    <style jsx>{`
      .create {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
      }
    `}</style>
  </div>  
)

export default MainNav
