/* eslint-disable */
import axios from 'axios';
import { BASE_URL, MESSSAGE_STATUS_CODE, TIMEOUT_REQUEST_API } from '../../variables/index';

const token = localStorage.getItem('logedIn');
axios.defaults.timeout = TIMEOUT_REQUEST_API;

axios.defaults.headers = {
  'Content-Type': 'application/json;charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
};

// Create an instance of axios
const axiosInstance = axios.create();

// Add a response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response && error.response.data && error.response.data.error_code === MESSSAGE_STATUS_CODE.UNAUTHORISED.code) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

class ApiFactory {
  constructor({ url }) {
    this.url = url || BASE_URL;
    this.endpoints = {};
  }

  /**
   * Create and store a single entity's endpoints
   * @param {Object} entity
   */
  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
  }

  /**
   * Create and store multiple entities' endpoints
   * @param {Array<Object>} arrayOfEntity
   */
  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this));
  }

  /**
   * Check if token is expired or not present
   */
  checkToken() {
    try {
      const token = localStorage.getItem('logedIn');
      if (!token) {
        throw new Error('Token is null or undefined.');
      }
  
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expiryTime = decodedToken.exp * 1000; // Convert to milliseconds
  
      // const date = new Date(expiryTime);
      // const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' };
      // const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
      const timeUntilExpiry = expiryTime - Date.now();
      // console.log('Token Expiry Time: ', formattedDate, 'Time Until Expiry (ms):', timeUntilExpiry);
  
      if (timeUntilExpiry <= 0) {
        console.error('Token has expired.');
        localStorage.clear(); // Clear all items from localStorage
        this.logout();
        throw new Error('Token has expired.');
      }
    } catch (error) {
      console.error('Error checking token:', error.message);
      localStorage.clear(); // Clear all items from localStorage in case of an error
      this.logout();
      throw error; // Rethrow the error after logging out
    }
  }
  

  /**
   * Logout function
   */
  logout() {
    localStorage.removeItem('logedIn');
    // Redirect to login page or perform other logout actions
    window.location.href = '/login';
  }

  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {Object} entity
   */
  createBasicCRUDEndpoints({ name }) {
    const resourceURL = `${this.url}/${name}`;
    const authorizationHeader = token ? { authorization: `Bearer ${token}` } : {};

    const endpoints = {};

    /**
     * GET WITH NO TOKEN
     */
    endpoints.getWithNoToken = (query, config = {}) =>
      axiosInstance.get(resourceURL, { params: { ...query }, ...config });

    /**
     * GET
     */
    endpoints.get = (query, config = {}) => {
      this.checkToken();
      return axiosInstance.get(resourceURL, { params: { ...query }, ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * GET WITH HEADER
     */
    endpoints.getWithHeader = (query, config = {}) => {
      this.checkToken();
      return axiosInstance.get(resourceURL, { params: { ...query }, ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * SUBMIT GET
     */
    endpoints.submitGet = (toSubmit, config = {}) => {
      this.checkToken();
      const { id, ...query } = toSubmit;
      return axiosInstance.get(resourceURL.replace('id', id), { params: { ...query }, ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * GET/{:ID}
     */
    endpoints.getOne = (id, config = {}) => {
      this.checkToken();
      return axiosInstance.get(`${resourceURL}/${id}`, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * GET WITH LINK
     */
    endpoints.getByLink = ({ link }, config = {}) => {
      this.checkToken();
      return axiosInstance.get(`${resourceURL}/${link}`, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * POST WITH NO TOKEN
     */
    endpoints.postWithNoToken = (data, config = {}) => {
      console.log('---- post with no token -----', data);
      return axiosInstance.post(resourceURL, data, { ...config }); 
    }

    /**
     * SUBMIT POST
     */
    endpoints.submitPost = (toSubmit, config = {}) => {
      this.checkToken();
      const { id, ...query } = toSubmit;
      return axiosInstance.post(resourceURL.replace('id', id), query, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * POST
     */
    endpoints.post = (data, config = {}) => {
      this.checkToken();
      return axiosInstance.post(resourceURL, data, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * PUT
     */
    endpoints.put = (data, config = {}) => {
      this.checkToken();
      return axiosInstance.put(resourceURL, data, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * SUBMIT PUT
     */
    endpoints.submitPut = (toSubmit, config = {}) => {
      this.checkToken();
      return axiosInstance.put(resourceURL.replace('id', toSubmit.id), toSubmit, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * SUBMIT DELETE
     */
    endpoints.submitDelete = (toSubmit, config = {}) => {
      this.checkToken();
      return axiosInstance.delete(resourceURL.replace('id', toSubmit), { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * UPDATE
     */
    endpoints.update = (toUpdate, config = {}) => {
      this.checkToken();
      const id = toUpdate && (toUpdate.id || toUpdate.get('id'));
      return axiosInstance.put(`${resourceURL}/${id}`, toUpdate, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * PATCH
     */
    endpoints.patch = (toPatch, config = {}) => {
      this.checkToken();
      const id = toPatch && (toPatch.id || toPatch.get('id'));
      return axiosInstance.patch(`${resourceURL}/${id}`, toPatch, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * PATCH MULTIPLE
     */
    endpoints.patchMultiple = (toPatch, config = {}) => {
      this.checkToken();
      return axiosInstance.patch(resourceURL, toPatch, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    /**
     * DELETE
     */
    endpoints.delete = ({ id }, config = {}) => {
      this.checkToken();
      return axiosInstance.delete(`${resourceURL}/${id}`, { ...config, headers: { ...authorizationHeader, ...config.headers } });
    };

    return endpoints;
  }
}

export default ApiFactory;
