import axios from 'axios';

export default {};
export const api = axios.create({ baseURL: process.env.VUE_APP_API });
