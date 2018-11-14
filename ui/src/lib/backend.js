import axios from 'axios';

/**
 * Backend interface
 */
export default class Backend {

  static get(endpoint) {
    return axios.get(this.getUrl(endpoint));
  }

  static post(endpoint, payload, options) {
    return axios.post(this.getUrl(endpoint), payload, options);
  }

  static put(endpoint, payload, options) {
    return axios.put(this.getUrl(endpoint), payload, options);
  }

  static delete(endpoint) {
    return axios.delete(this.getUrl(endpoint));
  }


  /**
   * Builds the backend URL
   * @param {string} endpoint - with leading slash
   * @return {string} URL
   */
  static getUrl(endpoint = '') {
    const host = process.env.REACT_APP_HOST || 'localhost';
    const port = process.env.REACT_APP_BACKEND_PORT || '3000';
    const protocol = process.env.REACT_APP_PROTOCOL || 'http';
    const path = process.env.REACT_APP_PATH || 'dev';
    return `${protocol}://${host}:${port}/${path}${endpoint}`;
  }

}
