import axios from "axios";

const instance = axios.create({
    baseURL: 'https://myhappyclient.com/react/wp-json/wp/v2/',
    headers: { 
        'Authorization': 'Basic YWRtaW46ajIzUyA4aWNWIGI3WW8gZlRJYSBzbTR6IGpiakY=', 
      },

  });

  export default instance;