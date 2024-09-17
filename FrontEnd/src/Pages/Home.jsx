import React, { useState } from 'react';
import Banner from '../components/Banner/Banner';
import Items from '../components/Items/Items';
import Popular from '../components/Popular/Popular';
import Download from '../components/downloadbanner/Download';

const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <>
      <Banner />
      <Items category={category} setCategory={setCategory} />
      <Popular category={category}/>
      <Download/>
    </>
  );
};

export default Home;
