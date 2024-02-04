import React from 'react'
import Header from '../Component/Header'
import Content from '../Component/Content'

function Home() {
  return (
    <div>
        <Header 
        image={"https://altimusoutdoor.com/images/logo/altimus-outdoor-logo.png"}
        number={" 9578 675 765"}/>
        <Content/>
    </div>
  )
}

export default Home