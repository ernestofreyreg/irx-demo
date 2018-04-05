import React from 'react'
import ScreenFrame from '../components/ScreenFrame'
import PageFrame from '../components/PageFrame'
import Header from '../components/Header'
import MainNav from '../components/MainNav'
import Logo from '../components/Logo'

const Index = () => (
  <ScreenFrame>
    <Header />
    <PageFrame>
      <Logo />
      
      <MainNav />


    </PageFrame>
    <style jsx>{`
      .Index {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </ScreenFrame>
)

export default Index
