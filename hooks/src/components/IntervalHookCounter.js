import React,{useState,useEffect} from 'react'

 function IntervalHookCounter() {
    const [count,setCount] =useState(0)

    const tick = () => {
        setCount(count + 1)
    }


    useEffect(() => {
        function doSomething() {

        }
        doSomething()
        const  interval = setInterval(tick,1000)
        return() => {
         clearInterval(interval)
        }
    },)

   return(
    <div>
        {count}
    </div>
   )

 }

 export default IntervalHookCounter

//カウンターの道理はまだ理解出来ていない(9/23現在)為、使うことがあったら再度戻っての復習を行う。