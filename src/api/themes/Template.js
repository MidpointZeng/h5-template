import axios from '../base.js';
export default class Template {
  static async gettestData() {
    if (window.globalConfig.isLocalData) { //是否使用本地数据
      let res = await axios.get(`/data/common/test.json`);
      return res.data.data.rows;
    } else { //使用接口数据
      let res = await axios.post(`xxxxxx`);
      return res.data.data;
    }
  }
}