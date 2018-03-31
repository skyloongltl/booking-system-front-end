import { fetch } from "./fetch";
import api from './url';

const root = 'http://localhost:83/api';
export function test(phone) {
  return fetch({
    url: root + api.Hello,
    method: 'post',
    data: {
      phone: phone
    }
  })
}
