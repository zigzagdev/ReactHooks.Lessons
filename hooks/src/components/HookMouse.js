import React, {useState,useEffect} from 'react'

function HookMouse() {
  const [x,setX] = useState(0)
  const [y,setY] = useState(0)

  const  logMousePosition = e => {
    console.log('Mouse event')
     setX(e.clientX)
     setY(e.clientY)
  }

  useEffect(() => {
    console.log('useEffect called')
    window.addEventListener('mousemove',logMousePosition)

      return () => {
       console.log('Component unmounting code')
       window.removeEventListener('mousemove',logMousePosition)
      }
  }, [])

    return(
     <div>
       Hooks X - {x} Y - {y}
     </div>
    )
}

export default HookMouse

// useStateを変数にて利用したい場合、必ずベースとなる変数をその変数にsetをつけた二つの変数を必ず用いること。(ex x setX)
// また、useEffect内ではイベントの着火に伴い、そのイベントのケツを持たせないと永遠にイベントがはっせいしてしまう可能性があるから、
// return内でそのイベントの終了を表している。