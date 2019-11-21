/**
 * @description 处理请求返回值的数据，这里是请求成功的时候的返回值
 * @param res
 */
function getSuccessResData(res: any): any {
  return {
    isSuccess: true,
    data: res.data ? res.data : {},
    msg: res.msg ? res.msg : ''
  }
}

function getFailResData(res: any): any {
  return {
    isSuccess: false,
    data: res.data ? res.data : {},
    msg: res.msg ? res.msg : ''
  }
}

export function getResultResData(res: {
  code: number;
  msg: string;
  data?: string;
}) {
  if (res.code == 0) {
    return getSuccessResData(res);
  }

  return getFailResData(res);
}

export function formateData(res: any) {
  return {

  }
}
