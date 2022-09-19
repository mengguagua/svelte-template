import { writable } from 'svelte/store';
// state更新入口：1查询暂存反显数据，2填写表单后，点击暂存触发state写入
const formDataStore = writable({
  companyName: '',
  shxydm: '',
  artificialPersonName: '',
  city: '',
  area: '',
  commAddress: '',
  fax: '',
  postCode: '',
  contact: '',
  mobile: '',
  telephone: '',
  email: '',
  companyNature: '',
});
console.log('init store');
let exportData = {
  formDataStore: formDataStore,
}
export default exportData;
