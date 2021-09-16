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

// Countの後ろの{count}の役割としては、簡単に言うと変数(今回で言うならば:count)の表記になる。
// onClickのイベント発火によりsetCountがカウントを開始してcountの変数にカウントされた回数が代入される。