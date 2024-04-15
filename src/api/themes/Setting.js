import axios from '../base.js';
import Util from "@/utils/common.js"
export default class Setting {
  //获取银行卡列表数据
  static async getbankPageData(params) {
    if (window.globalConfig.isLocalData) { //是否使用本地数据
      let res = await axios.get(`/data/common/test.json`);
      return res.data.data.rows;
    } else { //使用接口数据
      let res = await axios.get(`/apiUrl/api/Api_Bank/Page` + Util.getParams(params));
      return res.data.data;
    }
  }
  //添加银行卡
  static async addBankData(params) {
    if (window.globalConfig.isLocalData) { //是否使用本地数据
      let res = await axios.get(`/data/common/test.json`);
      return res.data.data.rows;
    } else { //使用接口数据
      let res = await axios.post(`/apiUrl/api/Api_Bank/Add`, params);
      return res.data.data;
    }
  }
  //修改银行卡
  static async eidtBankData(params) {
    if (window.globalConfig.isLocalData) { //是否使用本地数据
      let res = await axios.get(`/data/common/test.json`);
      return res.data.data.rows;
    } else { //使用接口数据
      let res = await axios.post(`/apiUrl/api/Api_Bank/Edit`, params);
      return res.data.data;
    }
  }
  //删除银行卡
  static async delBankData(params) {
    if (window.globalConfig.isLocalData) { //是否使用本地数据
      let res = await axios.get(`/data/common/test.json`);
      return res.data.data.rows;
    } else { //使用接口数据
      let res = await axios.get(`/apiUrl/api/Api_Bank/Delete`+ Util.getParams(params));
      return res.data.data;
    }
  }
}