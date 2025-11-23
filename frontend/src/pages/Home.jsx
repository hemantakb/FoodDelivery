import React, { useState } from 'react'
import Header from '../componet/Header'
import Explore from '../componet/Explore'
import Appdownload from '../componet/Appdownload'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <div className=' my-10 '>
<Header/>
<Explore category={category} setCategory={setCategory}/>
<Appdownload/>
    </div>
  )
}

export default Home