import React, { useState } from   'react'

function HookCounterFour() {
  const [name,setName]= useState({firstName: '', lastName: ''})

  return (
    <section>
      <input
          type="text"
          value={name.firstName}
          onChange={e => setName({...name,firstName: e.target.value})}/>
      <input type="text"
          value={name.lastName}
          onChange={e => setName({...name,lastName: e.target.value})}/>
      <h2>Your first name is - {name.firstName}</h2>
      <h2>Your last  name is - {name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </section>
  )

}

export default HookCounterFour

// input内のvalueにて入れる名前を入力し、onchangeメソッドにて入力内容イベントが発火され、
// 実際の{name.firstname}の中にプロパティとして代入される。