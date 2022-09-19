<!--基地企业-->
<div class="content">
    <Crumbs menu1="DEMO1" menu2="{active.label}"/>
    <div class="title">
        <span>副标题</span>
        <span class="sub-title">——表单说明</span>
    </div>
    <div class="form">
        <div style="display: flex; align-items: center">
            <TabBar tabs={tabs} let:tab={tab} bind:active={active} class="tabBar">
                <Tab {tab}>
                    <Label class="tab-text">{tab.label}</Label>
                </Tab>
            </TabBar>
            <Button class="text-btn" on:click={savaTempData} variant="raised">
                <Label>暂存</Label>
            </Button>
        </div>
        <!-- 这里不使用 <#if></if>, 原因是#if会销毁节点，重置数据。使用class动态加载，如activeBaseForm是类名，{}内为true则触发 -->
        <div class:activeBaseForm={active !== tabs[0]}>
            <BaseForm/>
        </div>
        <div class:activeApplyTable={active !== tabs[1]}>
            <ApplyTable textTip="{textTip}" headText="{headText}" total1="{total1}" total2="{total2}"/>
        </div>
        {#if active == tabs[0]}
            <Button class="submit-btn" on:click={submitData} variant="raised">
                <Label>提交</Label>
            </Button>
        {/if}
    </div>
</div>
<script>
import Crumbs from '/src/components/Crumbs.svelte';
import BaseForm from '/src/components/BaseForm.svelte';
import ApplyTable from '/src/components/ApplyTable.svelte';
import Tab, { Label } from '@smui/tab';
import TabBar from '@smui/tab-bar';
import Button from '@smui/button';
import exportData from '/src/store/store';
import { temporaryStorage, queryTemporaryStorage } from '/src/api/api';
import { onMount } from 'svelte';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

let tabs = [
  {
    label: '基本信息',
    value: 'tab1',
  }, {
    label: '申请明细表',
    value: 'tab2',
  },
];
let active= tabs[0];
let textTip= ['备注：xxxx'];
let headText= ['序号','字段','字段','字段','字段','字段','备注','操作',];
let total1 = '合计1：';
let total2 = '合计2：';

// tab1表单数据
let formData = {
};
// 订阅
exportData.formDataStore.subscribe((value) => {
  formData = value;
});

let savaTempData = () => {
  // 触发tab1的逻辑更新订阅数据，即将表单数据给全局变量。 todo 这里触发子组件事件借用了window，svelte怎么父组件调用子组件方法待研究
  window.dispatchData();
  console.log('formData',formData);
  let reqData = {
    applyItemCode: '1001',
    attachFiles: [],
    basicInfoDto: formData,
    baseCompanyDto: [],
  };
  temporaryStorage(reqData).then((resp) => {
    console.log('resp:',resp);
    tipMessage('暂存成功');
  });
}
let submitData = () => {
}
// 获取暂存数据，更新state
let queryTempData = () => {
  queryTemporaryStorage({itemCode: '1001'}).then((resp) => {
    if (resp.data && resp.data.value) {
      // 更新state
      exportData.formDataStore.update(() => {
        return { ...resp.data.value.basicInfoDto };
      });
    }
  });
};

// 生命周期函数
onMount(() => {
  console.log('the component has mounted');
  queryTempData();
});

</script>


<style lang="less">
.content {
  margin: 0 60px 60px 60px;
  padding-bottom: 40px;
  .title {
    margin-top: 20px;
    font-size: 32px;
    color: #333333;
    font-weight: 600;
    .sub-title {
      margin-left: 40px;
      font-size: 26px;
      font-weight: 500;
    }
  }
  .form {
    margin-top: 20px;
    position: relative;
  }
}
// 修改 Svelte Material UI 组件样式写法
* :global(.activeBaseForm) {
  display: none;
}
* :global(.activeApplyTable) {
  display: none;
}
* :global(.tab-text) {
  font-size: 16px;
  font-weight: 500;
}
* :global(.tabBar) {
  width: 60%;
}
* :global(.text-btn) {
  margin-left: 20px;
}
* :global(.submit-btn) {
  margin-top: 30px;
  padding: 12px 36px;
  position: absolute;
  left: 32%;
  font-size: 16px;
  font-weight: 600;
}
</style>
