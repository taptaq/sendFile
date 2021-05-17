<template>
  <div class="group_send">
    <div class="wrap" v-show="!show_num">
      <div @click="showNum">生成聊天室号</div>
      <div @click="showJoin">进入聊天室</div>
    </div>

    <!--生成聊天室号-->
    <div class="wrap_type" v-show="show_num">
      <div class="num_wrap">
        <div class="room_num" ref="number" id="num">{{ randomNum }}</div>
        <div
          class="copy"
          @click="closeNum"
          v-clipboard:copy="randomNum"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError"
        >
          复制并关闭
        </div>
      </div>
    </div>

    <!--复制结果提示信息-->
    <div class="tipMsg" v-show="show_tip">{{ tipMsg }}</div>

    <!--加入聊天室-->
    <div class="wrap_type" v-show="show_join">
      <div class="join_wrap">
        <p>请输入聊天室号</p>
        <input type="text" />
        <router-link to="room" tag="button">确认进入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "groupSend",
  data() {
    return {
      show_num: false,
      randomNum: "",
      tipMsg: "",
      show_tip: false,
      show_join: false,
    };
  },
  methods: {
    showNum() {
      this.show_num = true;
      for (let i = 0; i < 6; i++) {
        this.randomNum += Math.floor(Math.random() * 10);
      }
    },

    closeNum() {
      setTimeout(() => {
        this.show_num = false;
        this.randomNum = "";
        this.show_tip = true;
      }, 100);

      setTimeout(() => {
        this.show_tip = false;
      }, 2000);
    },

    onCopy() {
      this.tipMsg = "复制成功";
    },

    onError() {
      this.tipMsg = "复制失败";
    },

    showJoin() {
      this.show_join = true;
    },
  },
};
</script>

<style scoped>
.group_send {
  width: 100vw;
  height: 100vh;
  background: rgba(87, 114, 235, 0.9);
  position: relative;
}

.wrap {
  width: 25vw;
  height: 36vh;
  background: #fff;
  border-radius: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wrap div {
  text-align: center;
  width: 20vw;
  height: 8vh;
  line-height: 8vh;
  color: #fff;
  background: rgba(41, 7, 121, 0.8);
  margin: 1.25rem 0;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 0.625rem;
}

.wrap_type {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.num_wrap {
  width: 25vw;
  height: 30vh;
  background: #fff;
  border-radius: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
}

.room_num {
  font-size: 5rem;
  font-weight: bold;
}

.copy {
  text-align: center;
  width: 20vw;
  height: 8vh;
  line-height: 8vh;
  color: #fff;
  background: rgba(41, 7, 121, 0.8);
  margin: 1.25rem 0;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 0.625rem;
}

.tipMsg {
  width: 8vw;
  height: 7vh;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  text-align: center;
  line-height: 7vh;
  font-size: 1.5rem;
  border-radius: 0.625rem;
  box-shadow: 0.3125rem 0.3125rem 0.625rem #ccc;
  animation: jump 1s ease;
}

@keyframes jump {
  0% {
    top: 47%;
  }

  25% {
    top: 50%;
  }

  50% {
    top: 47%;
  }

  100% {
    top: 50%;
  }
}

.join_wrap {
  width: 32vw;
  height: 38vh;
  background: #fff;
  border-radius: 0.625rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1.5rem;
}

.join_wrap p {
  font-size: 2rem;
  font-weight: bold;
}

.join_wrap input {
  margin-top: 2.5rem;
  padding: 0.5rem;
  font-size: 1.3rem;
}

.join_wrap button {
  text-align: center;
  width: 10vw;
  height: 7vh;
  line-height: 7vh;
  color: #fff;
  background: rgba(41, 7, 121, 0.8);
  margin-top: 2.5rem;
  cursor: pointer;
  font-size: 1.5rem;
  border-radius: 0.625rem;
}
</style>
