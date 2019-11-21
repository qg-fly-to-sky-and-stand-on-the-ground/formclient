import {Request} from "@/api/config";

class CheckMachineRequest extends Request {
  // 验证身份证硬件是否正常
  checkIdCard(data: {
    "idCardMachine": number;
  }) {
    return this.post('/checkIdCard', data);
  }
}

export const checkMachineRequest = new CheckMachineRequest();
