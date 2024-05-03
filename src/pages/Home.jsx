/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from './Banner'
import Category from './home/Category'
import Product from './Product'
import Collection from './Collection'
import BestSellers from './BestSellers'
import Newsletters from './Newsletters'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Category/>
      <Product/>
      <Collection/>
      <BestSellers/>
      <Newsletters/>
    </div>
  )
}

export default Home