import React, {useState} from 'react'

function HookCounter() {

   const [count, setCount]=  useState(0)
      // #カウントで0にセットをし、setCounteにてカウントを開始する


    return(
  <div>
   <button onClick={() =>setCount(count+2)}>Count {count}</button>
  </div>
 )
}

export default HookCounter