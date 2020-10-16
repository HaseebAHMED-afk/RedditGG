import React from 'react'
import { useParams } from 'react-router-dom'
import redditFetch from './redditFetch';


const PostPage = () => {
    const {id} = useParams();

    const data = redditFetch(id);

    console.log(data);

    return (
        <div>
            hello {id}
        </div>
    )
}

export default PostPage
