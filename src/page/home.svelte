<div>
    <div class="home">
        <h1>大标题</h1>
        <h2>副标题</h2>
        <div class="card-line">
            <div class="card distance" on:click={goBaseCompany}>
                <img src="/src/assets/images/home1.svg" alt="">
                <div class="text">DEMO1</div>
            </div>
            <div class="card distance">
                <img src="/src/assets/images/home2.svg" alt="">
                <div class="text">DEMO2</div>
            </div>
            <div class="card distance">
                <img src="/src/assets/images/home3.svg" alt="">
                <div class="text">DEMO3</div>
            </div>
            <div class="card">
                <img src="/src/assets/images/home4.svg" alt="">
                <div class="text">DEMO4</div>
            </div>
        </div>
        <div class="card-line margin-distance">
            <div class="card distance">
                <img src="/src/assets/images/home5.svg" alt="">
                <div class="text">DEMO5</div>
            </div>
            <div class="card distance">
                <img src="/src/assets/images/home6.svg" alt="">
                <div class="text">DEMO6</div>
            </div>
            <div class="card">
                <img src="/src/assets/images/home7.svg" alt="">
                <div class="text">DEMO7</div>
            </div>
        </div>
        <h2 style="margin-top: 20px;">副标题</h2>
        <div class="card-line">
            <div class="card">
                <img src="/src/assets/images/home8.svg" alt="">
                <div class="text">DEMO8</div>
            </div>
        </div>
    </div>
</div>
<script>
import { push } from 'svelte-spa-router';

let goBaseCompany = () => {
  push('/baseCompany')
};

</script>
<style lang="less">
.home {
  margin: 0 160px 20px 160px;
  padding-bottom: 40px;
  .card-line {
    display: flex;
    .card {
      text-align: center;
      width: 220px;
      height: 180px;
      background: #0F6BD9;
      box-shadow: 2px 3px 5px 2px #BCDBFF;
      color: #fff;
      font-size: 16px;
      font-weight: 500;
      cursor: pointer;
      img {
        margin-top: 30px;
        width: 72px;
        height: 72px;
      }
      .text {
        margin-top: 16px;
        font-size: 16px;
        font-weight: 500;
      }
    }
    .distance {
      margin-right: 30px;
    }
  }
  .margin-distance {
    margin-top: 45px;
    padding-bottom: 40px;
    border-bottom: 2px solid rgba(0,0,0, 0.1);
  }
}
</style>
