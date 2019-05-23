
import Api from '@/providers/Api';

export default {
  /**
   * Wrapper around axios.get for Github repositories api
   *
   * @param {*} options:  Axios.get options object
   * @returns {object}: response data object on success / object with the error on error
   */
  async get(options) {
    let result = {};
    try {
      let response = await Api.get('/search/repositories', { params: options });
      result = response.data.items;
    } catch (error) {
      result.error = error;
    }

    return result;
  },
}