<div class="top">
    <div class="home" on:click={goHome}>首页</div>
    {#if menu1}
    <div class="symbol"> > </div>
    <div class="child-menu">{menu1}</div>
    {/if}
    {#if menu2}
    <div class="symbol"> > </div>
    <div class="child-menu">{menu2}</div>
    {/if}
</div>
<script>
import { push } from 'svelte-spa-router';
export let menu1 = ''
export let menu2 = ''
let goHome = () => {
  push('/home');
}
</script>
<style lang="less">
.top {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  .home {
    cursor: pointer;
    color: #333;
  }
  .child-menu {
    color: #999;
  }
  .symbol {
    margin: 0 6px;
    color: #999;
  }
}
</style>
