import {Request} from '@/api/config';

/**
 * @description 样例请求对象，继承于父类请求Request
 * @author Weybn
 */
class IDCardRequest extends Request {
  // 读取身份证信息
  public readIDCardInfo(data: {
    "idCardMachine": number;
  }) {
    return this.post('/loadIdCard', data);
  }

  public readIDCardToLogin(data: {
    idCardMachine: string;
  }) {
    return this.post('/login', data);
  }
}

// 单例模式导出唯一请求对象供其他模块使用
export const idCardRequest = new IDCardRequest();
