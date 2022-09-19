# 构成
    - 使用svelte框架 // https://www.sveltejs.cn/docs
    - js
    - vite
    - Svelte Material UI // https://sveltematerialui.com/
    - 路由：svelte-spa-router // https://www.npmjs.com/package/svelte-spa-router
  
## 参考
    - 页面跳转：参考home
    - 父子组件：参考baseCompany
    - 路由定义：/routes/index
    - 全局样式：app.css
    - UI组件：参考baseCompany，注：每个不同的组件单独npm install
    - 修改UI组件样式：参考App.svelte，注意在顶层App.svelte修改的样式是全局的
    - 主题修改：/src/assets/smui.css 这个是原件，要覆盖的修改在/theme/smui.css 内修改
    - 响应性：采用 triggered by assignment 方式，即 = 触发。push 和 splice 之类的方法就不会触发自动更新。用扩展符解决这个问题。
    - store使用：简单解释就是，在store.js定义可写或可读的全局属性，export导出全局属性对象，
    在A页面import全局属性对象，然后对应属性执行subscribe()，在B页面对全局属性执行update()，
    update回调的return值即新的修改值，A页面取到的值对应变化。参考：baseCompany和BaseForm

