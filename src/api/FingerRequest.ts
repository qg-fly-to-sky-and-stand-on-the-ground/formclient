import {Request} from '@/api/config';

/**
 * @description 样例请求对象，继承于父类请求Request
 * @author Weybn
 */
class FingerRequest extends Request {
  // 录取指纹信息
  public scanFinger(data: {
    "fingerMachine": number;
    "idCard": string;
  }) {
    return this.post('/loadFinger', data);
  }
}

// 单例模式导出唯一请求对象供其他模块使用
export const fingerRequest = new FingerRequest();
