import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers : {
      Authorization: 'Client-ID g6BKM5uhzYoJVosSOuULKDCyKvVT4H1R0pcDeE07f4M',
      'Accept-Version' : 'v1'
  }
});