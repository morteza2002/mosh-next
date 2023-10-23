import React from 'react'


interface props {
    params: {slug: string[]};
    searchParams:{ sortOrder: string};
}

const ProductPage = ({params: {slug},searchParams : {sortOrder}}: props) => {
  return (
    <div>ProductPage {slug} {sortOrder}</div>
  )
}

export default ProductPage