import axios from 'axios';

let baseUrl: string;

if (process.env.NODE_ENV === 'production') {
  // 生产环境下使用真实路径
  baseUrl = 'http://192.168.1.100:12306/auth';
} else {
  // 非生产环境下，都使用代理服务器
  baseUrl = '/api/auth';
}

// @ts-ignore
const _Request = axios.create({
  baseURL: baseUrl,
  timeout: 500000,
  headers: {
    'Content-Type': 'application/json'
  }
});

/**
 * 统一对请求进行处理
 */
_Request.interceptors.request.use((config: any): any => {
  // 当存在token的时候，将token加到请求头上面
  return config;
}, error => {})

/**
 * 统一对返回的数据进行过滤
 */
_Request.interceptors.response.use((result: any): any => {

  // 当没有前面的问题的时候，返回请求对象的数据
  return result.data;

}, (error: any) => {
  // 请求发生错误的时候
  let status = error.response.status;

  switch (status) {
    case 500: {
      // 服务器错误
      break;
    }

    case 401: {
      // token没有权限，此时应当进行页面重定向
      // router.push('/login');
      break;
    }

    case 404: {
      // 发生404错误，这时候应当有所反应
      break;
    }

    default: {
      // 请求发不出的问题
    }
  }

  return error;
});

export class Request {
  protected commonUrl: string = ''

  public get(url: string): Promise<any> {
    return _Request.get(this.commonUrl + url);
  }

  public post(url: string, data: any): Promise<any> {
    return _Request.post(this.commonUrl + url, data);
  }

  public upload(url: string, data: any): Promise<any> {
    return _Request.post(this.commonUrl + url, data, {
      headers:{'Content-Type':'multipart/form-data'}
    });
  }

  public put(url: string, data: any) {
    return _Request.put(this.commonUrl + url, data);
  }

  public delete(url: string, data: any) {
    return _Request.delete(this.commonUrl + url);
  }
}
