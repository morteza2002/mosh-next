import React from 'react'


interface props {
    params: {id: number; photo_id: number;}
}

const photoPage = ({params:{id , photo_id} }: props) => {
  return (
    <div>photoPage {id} {photo_id}</div>
  )
}

export default photoPage