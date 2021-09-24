import React, {useContext} from 'react'
import ComponentF from './ComponentF'
import {UserContext, ChannelContext} from "../App";

function ComponentE() {

    const user=useContext(UserContext)
    const channel= useContext(ChannelContext)
    return(
        <div>
            user context value {user} - {channel}
        </div>
    )
}

export default ComponentE

//必ずしも関数化してpropsの受け渡しを末端までする必要はない。
// useContextの定義化を行い、引数に持ってきたいContext内容を持ってくれば関数化しなくても全く同じ内容(今回でいうComponentE・F)をもってくることが可能になる。
// 勿論,末端の関数化してあるComponentFを使いたい場合は間になるComponentEをC.Oしたらコケる。