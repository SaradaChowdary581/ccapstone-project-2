import React from 'react'
import MainCart from './MainCart';

export default function ImpSec({items}) {
  return (
    <div>
    <section className="main">
        {items.map((item,index) => <MainCart key={index} subItems={item["subItemsData"]} subName={item["name"]} imageURL={item["imageURL"]} />)}
      </section>
    </div>
  )
}