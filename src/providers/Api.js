import axios from 'axios'

const baseURL = 'https://api.github.com';

/**
 * axios instance for the Github API
 */
export default axios.create({baseURL});