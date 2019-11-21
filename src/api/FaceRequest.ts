import {Request} from '@/api/config';

/**
 * @description 样例请求对象，继承于父类请求Request
 * @author Weybn
 */
class FaceRequest extends Request {
  // 人像对比
  public faceCert(data: {
    "signatureMachine": number;
    "idCard": string;
  }) {
    return this.post('/signature', data);
  }
}

// 单例模式导出唯一请求对象供其他模块使用
export const faceRequest = new FaceRequest();
