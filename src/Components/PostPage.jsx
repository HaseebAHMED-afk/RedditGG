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

  if(Data){
    console.log(Data);
  }


  return <div>hello {id}</div>;
};

export default PostPage;
