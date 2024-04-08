import axios from "App/libs/axios";

/**
 * Create data from api
 * @param {string} endpoint Url to create data
 * @param {object} data Data to create
 * @returns {Promise<object>} Data created
 */
export async function createApi(endpoint, newData) {
  const { data } = await axios.post(endpoint, newData);
  return data;
}
