import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios'


const PostPage = () => {
  const { id } = useParams();
  const [Data, setData] = useState([]);

  useEffect(() => {
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
  }, [id]);


  return <div className="posts">

  {
    Data.map((data,i) => <div className="card postCard" key={i}>
  <div className="card-body">
    <h5 className="card-title">{data.data.author_flair_richtext.map(title => title.t)}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{data.data.subreddit_name_prefixed}</h6>
    <p className="card-text">{data.data.title}</p>
    <img className="card-img-bottom content-img" src={data.data.thumbnail} alt="post_img"/>
  </div>
</div> )
  }
  </div>;
};

export default PostPage;