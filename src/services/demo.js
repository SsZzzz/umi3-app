import request from './request';

function postApi(data) {
  return request.post('/api/post', { data });
}

export default postApi;
