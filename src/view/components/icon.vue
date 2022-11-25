<script>

export default {
  data() {
    return {
      demoIcon: "chat-o",
      demoImage: "https://fastly.jsdelivr.net/npm/@vant/assets/icon-demo.png",
      tab: 0,
      icons: {
        name: 'vant-icon',
        basic: [
          'arrow',
          'arrow-left',
          'arrow-up',
          'arrow-down',
          'success',
          'cross',
          'plus',
          'minus',
          'fail',
          'circle',
        ],
        outline: [
          // has corresponding filled icon
          'location-o',
          'like-o',
          'star-o',
          'phone-o',
          'setting-o',
          'fire-o',
          'coupon-o',
          'cart-o',
          'shopping-cart-o',
          'cart-circle-o',
          'friends-o',
          'comment-o',
          'gem-o',
          'gift-o',
          'point-gift-o',
          'send-gift-o',
          'service-o',
          'bag-o',
          'todo-list-o',
          'balance-list-o',
          'close',
          'clock-o',
          'question-o',
          'passed',
          'add-o',
          'gold-coin-o',
          'info-o',
          'play-circle-o',
          'pause-circle-o',
          'stop-circle-o',
          'warning-o',
          'phone-circle-o',
          'music-o',
          'smile-o',
          'thumb-circle-o',
          'comment-circle-o',
          'browsing-history-o',
          'underway-o',
          'more-o',
          'video-o',
          'shop-o',
          'shop-collect-o',
          'share-o',
          'chat-o',
          'smile-comment-o',
          'vip-card-o',
          'award-o',
          'diamond-o',
          'volume-o',
          'cluster-o',
          'wap-home-o',
          'photo-o',
          'gift-card-o',
          'expand-o',
          'medal-o',
          'good-job-o',
          'manager-o',
          'label-o',
          'bookmark-o',
          'bill-o',
          'hot-o',
          'hot-sale-o',
          'new-o',
          'new-arrival-o',
          'goods-collect-o',
          'eye-o',
          'delete-o',
          'font-o',
          // without corresponding filled icon
          'balance-o',
          'refund-o',
          'birthday-cake-o',
          'user-o',
          'orders-o',
          'tv-o',
          'envelop-o',
          'flag-o',
          'flower-o',
          'filter-o',
          'bar-chart-o',
          'chart-trending-o',
          'brush-o',
          'bullhorn-o',
          'hotel-o',
          'cashier-o',
          'newspaper-o',
          'warn-o',
          'notes-o',
          'calendar-o',
          'bulb-o',
          'user-circle-o',
          'desktop-o',
          'apps-o',
          'home-o',
          'back-top',
          'search',
          'points',
          'edit',
          'qr',
          'qr-invalid',
          'closed-eye',
          'down',
          'scan',
          'revoke',
          'free-postage',
          'certificate',
          'logistics',
          'contact',
          'cash-back-record',
          'after-sale',
          'exchange',
          'upgrade',
          'ellipsis',
          'description',
          'records',
          'sign',
          'completed',
          'failure',
          'ecard-pay',
          'peer-pay',
          'balance-pay',
          'credit-pay',
          'debit-pay',
          'cash-on-deliver',
          'other-pay',
          'tosend',
          'pending-payment',
          'paid',
          'aim',
          'discount',
          'idcard',
          'replay',
          'shrink',
          'shield-o',
          'guide-o',
          'cash-o',
          'link-o',
          'miniprogram-o',
        ],
        filled: [
          // has corresponding outline icon
          'location',
          'like',
          'star',
          'phone',
          'setting',
          'fire',
          'coupon',
          'cart',
          'shopping-cart',
          'cart-circle',
          'friends',
          'comment',
          'gem',
          'gift',
          'point-gift',
          'send-gift',
          'service',
          'bag',
          'todo-list',
          'balance-list',
          'clear',
          'clock',
          'question',
          'checked',
          'add',
          'gold-coin',
          'info',
          'play-circle',
          'pause-circle',
          'stop-circle',
          'warning',
          'phone-circle',
          'music',
          'smile',
          'thumb-circle',
          'comment-circle',
          'browsing-history',
          'underway',
          'more',
          'video',
          'shop',
          'shop-collect',
          'share',
          'chat',
          'smile-comment',
          'vip-card',
          'award',
          'diamond',
          'volume',
          'cluster',
          'wap-home',
          'photo',
          'gift-card',
          'expand',
          'medal',
          'good-job',
          'manager',
          'label',
          'bookmark',
          'bill',
          'hot',
          'hot-sale',
          'new',
          'new-arrival',
          'goods-collect',
          'eye',
          'delete',
          'font',
          // without corresponding outline icon
          'wechat',
          'wechat-pay',
          'wechat-moments',
          'qq',
          'alipay',
          'weibo',
          'photograph',
          'youzan-shield',
          'umbrella-circle',
          'bell',
          'printer',
          'map-marked',
          'card',
          'add-square',
          'live',
          'lock',
          'audio',
          'graphic',
          'column',
          'invitation',
          'play',
          'pause',
          'stop',
          'weapp-nav',
          'ascending',
          'descending',
          'bars',
          'wap-nav',
          'enlarge',
          'photo-fail',
          'sort',
        ],
      }
    }
  }
}


</script>
<template>
  <div class="demo-icon ">

<!--  <van-tabs v-model:active="tab" sticky>-->
<!--    <van-tab class="demo-icon-tab-panel" :title="'demo'">-->
      <demo-block :title="'basicUsage'">
        <van-row>
          <van-col span="6">
            <van-icon :name="demoIcon"/>
          </van-col>
          <van-col span="6">
            <van-icon :name="demoImage"/>
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="'badge'">
        <van-row>
          <van-col span="6">
            <van-icon :name="demoIcon" dot/>
          </van-col>
          <van-col span="6">
            <van-icon :name="demoIcon" badge="9"/>
          </van-col>
          <van-col span="6">
            <van-icon :name="demoIcon" badge="99+"/>
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="'color'">
        <van-row>
          <van-col span="6">
            <van-icon name="cart-o" color="#1989fa"/>
          </van-col>
          <van-col span="6">
            <van-icon name="fire-o" color="#ee0a24"/>
          </van-col>
        </van-row>
      </demo-block>

      <demo-block :title="'size'">
        <van-row>
          <van-col span="6">
            <van-icon :name="demoIcon" size="40"/>
          </van-col>
          <van-col span="6">
            <van-icon :name="demoIcon" size="3rem"/>
          </van-col>
        </van-row>
      </demo-block>
<!--    </van-tab>-->

<!--    <van-tab class="demo-icon-tab-panel" :title="'basic'">-->
      <van-row>
        <van-col
            v-for="icon in icons.basic"
            :key="icon"
            span="6"
        >
          <van-icon :name="icon"/>
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
<!--    </van-tab>-->

<!--    <van-tab class="demo-icon-tab-panel" :title="'outline'">-->
      <van-row>
        <van-col
            v-for="icon in icons.outline"
            :key="icon"
            span="6"
        >
          <van-icon :name="icon"/>
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
<!--    </van-tab>-->

<!--    <van-tab class="demo-icon-tab-panel" :title="'filled'">-->
      <van-row>
        <van-col
            v-for="icon in icons.filled"
            :key="icon"
            span="6"
        >
          <van-icon :name="icon"/>
          <span>{{ icon }}</span>
        </van-col>
      </van-row>
<!--    </van-tab>-->
<!--  </van-tabs>-->
        </div>

</template>

<style lang="less">
.demo-icon {
  font-size: 0;

  &-notify {
    font-size: 13px;
  }

  &-tab-panel {
    width: auto;
    margin: 20px;
    background-color: var(--van-background-color-light);
    border-radius: 12px;
  }

  .van-col {
    display: inline-block;
    float: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    //span {
    //  display: block;
    //  height: 36px;
    //  margin: -4px 0 4px;
    //  padding: 0 5px;
    //  color: var(--van-text-color);
    //  font-size: 12px;
    //  line-height: 18px;
    //}

    &:active {
      background-color: var(--van-active-color);
    }
  }

  .van-icon {
    margin: 16px 0 16px;
    color: var(--van-text-color);
    font-size: 32px;
  }
}
</style>
