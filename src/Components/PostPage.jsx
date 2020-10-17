import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


const PostPage = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);

  useEffect((id) => {
    async function redditFetch(id) {
      try {
        const {
          data: { data },
        } = await axios.get(
          `https://www.reddit.com/search.json?q=${id}&limit=50`
        );
        const { children } = data;
        setData(children)
      } catch (error) {
        console.log(error);
      }
    }

    redditFetch(id)
  }, []);
    console.log(Data)


  return <div className="posts">
    <div className="postCard">
      <div className="profile">
      
      </div>
      <div className="caption">

      </div>
      <div className="media">

      </div>
    </div>

  </div>;
};

export default PostPage;
