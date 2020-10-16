import axios from 'axios';
 

const redditFetch = (id) => {
   const data = axios.get(`https://www.reddit.com/search.json?q=${id};limit=50`);
    return data;
}

export default redditFetch
