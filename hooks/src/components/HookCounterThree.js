import React, { useState } from 'react'

function HookCounterThree() {
  const initialCount =0
  const [count, setCount] = useState(initialCount)

  const incrementFive  =() => {
     for (let i=0; i<3; i++) {
      setCount(centerCount => centerCount + 4 )
     }
  }
    return(
     <div>
      Count: {count}
         <button onClick={() => setCount(initialCount)}>Reset</button>
         <button onClick={() => setCount(count+1)}>Increment</button>
         <button onClick={() => setCount(count-1)}>Decrement</button>
         <button onClick={incrementFive}>Increment 5</button>
     </div>
    )
}

export default HookCounterThree

// l.9にあるsetCountをそのままのsetCount(count+1)にしたままだと例え変数を別定義しても持ってくるものは
// あくまで同じ要素であるため、修正する必要がある。(因みに、propsはpropertyと同意義語である。変数ではありません。)

// →その為、incrementFive内の関数(今回で言うなら、centerCount)に関しては適当な名前で良い。