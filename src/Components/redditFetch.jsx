import axios from 'axios';
 

const redditFetch = (name) => {
   const data = axios.get('https://www.reddit.com/search.json?q=csgo;limit=50');
    return data;
}

export default redditFetch
