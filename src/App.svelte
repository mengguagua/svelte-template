<div>
    <TipMessage/>
    <div class="head">
        <div class="title">
            <div class="zh">DEMO服务</div>
            <div class="en">DEMO SERVICE TEMPLATE</div>
        </div>
        <div class="handle">
            <Button class="text-btn" color="secondary" on:click={toLogin}>
                <Label>登录</Label>
            </Button>
            <Button class="text-btn" color="secondary" on:click={toRegister}>
                <Label>注册</Label>
            </Button>
        </div>
    </div>
    <!-- 这个是官方的链接跳转路由 -->
    <Router {routes}/>
    <div class="footer">

    </div>
</div>
<script>
// 路由处理
import Router from "svelte-spa-router";
import routes from "./routes/index.js";
import "/src/store/store";
import TipMessage from "/src/components/TipMessage.svelte";
import Button, { Label } from '@smui/button';
let toLogin = () => {};
let toRegister = () => {};
</script>
<style lang="less">
.head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 40px 20px 40px;
  padding-bottom: 20px;
  border-bottom: 2px solid rgba(0,0,0, 0.1);
  .title {
    .zh {
      font-size: 28px;
      color: #333333;
      font-weight: 500;
    }
    .en {
      font-size: 18px;
      color: #666666;
      text-align: right;
      font-weight: 700;
    }
  }
  .handle {
    display: flex;
    align-items: center;
  }
}
.footer {
  padding: 20px 46px;
  height: 136px;
  background: #323232;
}

// 修改 Svelte Material UI 组件样式写法
* :global(.text-btn) {
  font-size: 16px;
  padding: 16px 24px;
}
</style>
