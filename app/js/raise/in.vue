<template>
  <Panel :class="$style.panel" title="In货推荐">
    <section :class="$style.content">
      <section :class="$style.item">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200" alt="">
        <section :class="$style.list">
            <div :class="$style.product">
              <img src="https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg" alt="">
              <p :class="$style.title">双响炮蓝牙音箱</p>
              <p :class="$style.price">
                <em>29.00</em>
                起
              </p>
              <article>
                <div :class="$style.wrapper">
                  <div :class="$style.inner"></div>
                </div>
                <p>172%</p>
              </article>
              <label>精选</label>
            </div>
            <div :class="$style.product">
              <img src="https://img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg" alt="">
              <p :class="$style.title">双响炮蓝牙音箱</p>
              <p :class="$style.price">
                <em>29.00</em>
                起
              </p>
              <article>
                <div :class="$style.wrapper">
                  <div :class="$style.inner"></div>
                </div>
                <p>172%</p>
              </article>
              <label>精选</label>
            </div>
        
        </section>
        
      </section>
    </section>
  </Panel>
</template>

<script>
import Panel from "../core/panel";
export default {
  components: {
    Panel
  }
};
</script>

<style lang="scss" module>
@import "../../css/element.scss";
.panel {
  @include panel;
  .content {
    .item {
      @include flex;
      img {
        width: 100%;
        height: 170px;
      }
      .list {
        @include flex(row);

        .product {
          width: 50%;
          text-align: center;
          position: relative;
          height: 396px;
          box-sizing: border-box;
          background: rgba(0,0,0,0.02);
          img {
            width: 180px;
            height: 180px;
            margin: 44px auto 20px;
          }
          .title {
            font-size: 28px;
            color: #444;
          }
          .price {
            font-size: 20px;
            color: #999;
            height: 48px;
            line-height: 48px;
            >em{
              &:before{
                content: '￥';
                font-size: 28px;
              }
              font-size: 36px;
              color:#ff3232;
              margin-right: 4px;
            }
          }
          article {
            @include flex(row);
            align-items: center;
            justify-content: center;
            padding: 0 20px;
            height: 30px;
            line-height:30px;
            margin-top: 16px;;

            .wrapper {
              width: 144px;
              height: 10px;
              background: #f6e6e6;
              border-radius: 22px;
              .inner {
                width:40%;
                max-width:100%;
                height: 10px;
                background-image: linear-gradient(270deg, #f55 1%, #ff9c31 100%);
                border-radius: 22px;
              }
            }
            p {
              font-size: 24px;
              color: #999;
            }
          }
          label{
            position: absolute;
            top: 0;
            left: 0;
            font-size: 20px;
            color: #ff0000;
            text-align: center;
            padding: 4px 8px;
            background-image: linear-gradient(-35deg, #c1c1c1 0, #acacac 100%);
          }
        }
      }
    }
  }
}
</style>
