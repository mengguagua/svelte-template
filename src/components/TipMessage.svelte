<!--自定义弹框组件-->
{#if showTip}
    <div
        transition:slide="{{duration: 250, easing: quintOut}}"
        class="top"
        class:defaultColor={type === 'primary' }
        class:warningColor={type === 'warning' }
        class:errorColor={type === 'error' }
        class:successColor={type === 'success' }
    >
        {text}
    </div>
{/if }
<script>
import { slide } from 'svelte/transition';
import { quintOut } from 'svelte/easing';

let showTip = false;
export let type = 'primary';
export let text = '';
export let time = 3000;
export let message = (defaultText='', defaultType='success', defaultTime=3000) => {
  type = defaultType;
  text = defaultText;
  time = defaultTime
  showTip = true;
  setTimeout(() => {
    showTip = false;
  }, time)
};
window.tipMessage = message;

</script>
<style lang="less">
.top {
  position: absolute;
  left:50%;
  top:5vh;
  transform: translate(-50%, -50%);
  padding: 6px 16px;
  display: inline-block;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
}
.defaultColor {
  background: rgba(51, 51, 51, 0.8);
  color: #e4e4e4;
}
.warningColor {
  background: #f09b38;
}
.errorColor {
  background: #e05241;
}
.successColor {
  background: #67ab5b;
}
</style>
