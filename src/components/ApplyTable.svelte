<div class="top">
    <div class="text-tip">
        <div>填写说明：</div>
        {#each textTip as item}
                <div>{item}</div>
        {/each}
    </div>
    <DataTable style="width: 100%;margin-top: 10px">
        <Head>
            <Row>
                {#each headText as item}
                    <Cell>{item}</Cell>
                {/each}
            </Row>
        </Head>
        <Body>
        {#each tableData as item, index}
            <Row>
                <Cell>{index+1}</Cell>
                <Cell>
                    <Textfield variant="outlined" bind:value={tableData[index].fff} class="text-input-table"/>
                </Cell>
                <Cell>
                    <Textfield variant="outlined" bind:value={tableData[index].aaa} class="text-input-table"/>
                </Cell>
                <Cell>
                    <Textfield variant="outlined" bind:value={tableData[index].bbb} data-type="bbb" on:change="{getTotal}" class="text-input-table"/>
                </Cell>
                <Cell>
                    <Textfield variant="outlined" bind:value={tableData[index].ccc} class="text-input-table"/>
                </Cell>
                <Cell>
                    <Textfield variant="outlined" bind:value={tableData[index].ddd} data-type="ddd" on:change="{getTotal}" class="text-input-table"/>
                </Cell>
                <Cell>
                    <Textfield variant="outlined" bind:value={tableData[index].eee} class="text-input-table"/>
                </Cell>
                <Cell>
                    <img src="/src/assets/images/delete.svg" alt="删除" data-index="{index}" on:click={deleteRow}>
                </Cell>
            </Row>
        {/each}
        </Body>
    </DataTable>
    <div class="add-row" on:click={addRow}>+ 添加行</div>
    <div class="total">
        <span>{total1}{number['bbb']}</span>
        <span style="margin-left: 200px">{total2}{number['ddd']}</span>
    </div>
</div>
<script>
import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
import Textfield from '@smui/textfield';

export let textTip = ['备注：xxxxx'];
export let total1 = '';
export let total2 = '';
export let headText = ['序号'];

let number = {
  bbb: 0,
  ddd: 0,
};
let tableData = [
  {
    aaa: '',
    bbb: '',
    ccc: '',
    ddd: '',
    eee: '',
    fff: '',
  },
];
let addRow = () => {
  // tableData.push({}); // push 和 splice 之类的方法就不会触发自动更新。用扩展符解决
  tableData = [...tableData, {
      aaa: '',
      bbb: '',
      ccc: '',
      ddd: '',
      eee: '',
      fff: '',
  }]
}
let deleteRow = (e) => {
  let deleteRowData = tableData.splice(e.target.dataset.index,1); // 删掉原数组指定下标的一位，返回删除的内容（数组）
  tableData = [...tableData];
  // 重新计算合计
  let numberKeys = Object.keys(number);
  numberKeys.forEach((key) => {
    number[key] = number[key] - Number(deleteRowData[0][key]);
  });
};

let getTotal = (e) => {
  let key = e.currentTarget.dataset.type;
  let total = 0;
  tableData.forEach((item) => {
    total = total + Number(item[key])
  });
  number[key] = total;
}

</script>
<style lang="less">
.top {
  margin-top: 10px;
  .text-tip {
    padding: 9px;
    width: 70%;
    background: #EDF5FF;
    border-right: 4px;
    font-size: 14px;
    color: #333333;
  }
  .add-row {
    margin-top: 10px;
    padding: 12px 0;
    text-align: center;
    font-size: 14px;
    color: #0F6BD9;
    font-weight: 500;
    border: 1px dashed #0F6BD9;
    cursor: pointer;
  }
  .total {
    margin-top: 100px;
  }
}
img {
  cursor: pointer;
}
* :global(.text-input-table) {
  height: 30px;
}
</style>
