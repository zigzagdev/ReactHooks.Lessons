import React from 'react'
import  {UserContext,ChannelContext} from "../App";


function ComponentF() {
    return(
        <div>
          <UserContext.Consumer>
           { user => {
               return (
                   <ChannelContext.Consumer>
                       {channel => {
                           return (
                               <div>user context value {user}, channel context value{channel}</div>
                           )
                       }}
                   </ChannelContext.Consumer>
               )
           }}
          </UserContext.Consumer>
        </div>
    )
}

export default ComponentF

//Contextはpropsのバケツリレー地獄を回避するためのものである。(前提として、Reactはpropsを渡す際、必ず親子間でやりとりを行い、間の
// ファイルをすっ飛ばして継承することが出来ない)
//→故に親ファイル(今回でいうApp.js)には継承したい末端のファイルを<xxxContext.Provider>と共にラッピングしてあげる必要がある。渡してあげる要素は通常の
//Reactと同じように渡してあげる。