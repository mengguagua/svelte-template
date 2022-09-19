<!--表单基础信息-->
<div class="top">
    <Textfield variant="outlined" required bind:value={formData.companyName} label="字段" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.shxydm} label="字段" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.artificialPersonName} label="字段" class="text-input"/>
    <div class="select-row">
        <Textfield variant="outlined" disabled="true" value="" label="注册地：浙江省" class="select-text-input"/>
        <Select variant="outlined" bind:value={formData.city} label="市" class="select-input">
            {#each cityOptions as item}
                <Option value={item.value}>{item.label}</Option>
            {/each}
        </Select>
        <Select variant="outlined" bind:value={formData.area} label="区" class="select-input">
            {#each areaOptions as item}
                <Option value={item.value}>{item.label}</Option>
            {/each}
        </Select>
    </div>
    <div class="select-row">
        <Select variant="outlined" bind:value={formData.companyNature} label="字段" style="width: 70%">
            {#each cityOptions as item}
                <Option value={item.value}>{item.label}</Option>
            {/each}
        </Select>
    </div>
    <Textfield variant="outlined" required bind:value={formData.commAddress} label="通讯地址" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.fax} label="联系传真" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.postCode} label="邮政编码" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.contact} label="企业联系人" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.mobile} label="联系电话" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.telephone} label="移动电话" class="text-input"/>
    <Textfield variant="outlined" required bind:value={formData.email} label="电子邮件" class="text-input"/>
</div>
<script>
import Textfield from '@smui/textfield';
import Select, { Option } from '@smui/select';
import exportData from '/src/store/store';

let cityOptions = [
  {
    label: '杭州市',
    value: '1',
  }
];
let areaOptions = [
  {
    label: '上城区',
    value: '1',
  }
];
let formData = {
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
};

// 订阅,表单暂存反显时会修改state
exportData.formDataStore.subscribe((value) => {
  formData = value;
});

let dispatchData = () => {
  // 更新state
  exportData.formDataStore.update((value) => {
    return { ...formData };
  });
};
window.dispatchData = dispatchData;



</script>

<style lang="less">
.top {
  .select-row {
    margin-top: 12px;
  }
}

// 修改 Svelte Material UI 组件样式写法
* :global(.text-input) {
  margin-top: 12px;
  height: 36px;
  width: 70%;
  line-height: 3rem;
}
* :global(.select-text-input) {
  height: 36px;
  width: 15%;
  line-height: 1rem;
}
* :global(.select-input) {
  width: 25%;
  height: 40px;
}

* :global(.mdc-floating-label--required) {
  line-height: 3rem;
}
* :global(.mdc-select__anchor) {
  height: 40px;
}
* :global(.mdc-floating-label) {
  line-height: 3rem;
}
</style>
