import axios from 'axios';

export function fetch(options) {
  return new Promise((resolve, reject) => {
      const instance = axios.create({
        timeout: 30 * 1000
      });

      instance(options)
        .then(response => {

          resolve(response);
        })
        .catch(error => {

          reject(error);
        })
    });
}
