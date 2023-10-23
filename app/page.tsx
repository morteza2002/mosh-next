'use client'
import { useState } from "react";



export default  function Home() {
 const [isVisible, setVisible]= useState(false);
  return (
    <main>
   <h1>hello world</h1>
   <button onClick={async () => {
   const _ = (await import('lodash')).default;

const users = [
  {name: 'c'},
  {name: 'b'},
  {name: 'a'},
];


const sorted = _.orderBy(users, ['name']);
console.log(sorted);


   }

   }>show</button>
     
    </main>
  );
}
