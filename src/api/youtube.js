import axios from 'axios';

const KEY = 'AIzaSyB_7-5hCWX3lgeqaNk_7eg9vaXcMKl2kjQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
