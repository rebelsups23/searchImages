import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID Q3RjyuhoHzifQv9rj3tSPb0VxH8cvI_0CmsO4E-_wIQ',
  },
});
