import {Request} from '@/api/config';

interface data {
  name: string
}

/**
 * @description 样例请求对象，继承于父类请求Request
 * @author Weybn
 */
class ExampleRequest extends Request {
  example(data: data) {
    return this.post('abc', data);
  }
}

// 单例模式导出唯一请求对象供其他模块使用
export const exampleRequest = new ExampleRequest();
