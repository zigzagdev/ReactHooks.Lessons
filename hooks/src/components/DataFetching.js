import React, {useState,useEffect}from 'react'
import axios from "axios";

function DataFetching() {
    const [post,setPost] = useState({})
    //{}は形として覚えておけば良い。 ないとエラーを吐く為。
    const [id, setId] =useState()
    //このuseStateに引数を入れないと画面上にはデフォルトとして何も表記されない。
    const [idFromButtonClick,setIdFromButtonClick] = useState()
    //このuseStateに引数を入れないと画面上にはデフォルトとして何も表記されない。

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[idFromButtonClick])

    return(
        <div>
            <input type="text" value={id} onChange={e =>setId(e.target.value)}/>
            <button type="button" onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/*<ul>*/}
            {/* {*/}
            {/*   posts.map(post => <li key={post.id}>{post.title}</li>)*/}
            {/* }*/}
            {/*</ul>*/}
        </div>
    )
}

export default DataFetching;