<template>
  <div class="side" ref="side">
    <!-- 用户头像和用户名 -->
    <div class="avatar">
      <img src="/public/imgs/1.jpg" alt="" />
      <p>用户名</p>
    </div>
    <!-- 信息功能管理 -->
    <div class="msg">
      <ul>
        <li>个人中心</li>
        <li>好友列表</li>
        <li>333333</li>
        <li>444444</li>
        <li>555555</li>
        <li>666666</li>
      </ul>
    </div>
    <div class="logout">退出登录</div>

    <div
      class="left-side toleft"
      :class="showRight === 1 ? '' : 'hidden'"
      @click="hideRight"
    >
      |||
    </div>
    <div
      class="left-side toright"
      :class="showRight === 0 ? '' : 'hidden'"
      @click="toRight"
    >
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "slideTab",
  data() {
    return {
      showRight: 0,
    };
  },
  methods: {
    toRight() {
      this.$refs.side.style.transform = "translate(-1vw)";
      this.$refs.side.style.transition = "1s ease";
      this.showRight = 1;
    },

    hideRight() {
      this.$refs.side.style.transform = "translate(-20vw)";
      this.$refs.side.style.transition = "1s ease";
      this.showRight = 0;
    },
  },
};
</script>

<style scoped>
.side {
  position: relative;
  top: 0;
  left: 0;
  width: 20vw;
  height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateX(-20vw);
  padding-top: 1rem;
  z-index: 1;
}

.side .avatar {
  width: 10vw;
  height: 5vh;
  position: relative;
  top: 0.825rem;
  text-align: center;
}

.side .avatar img {
  width: 8vw;
  height: 15vh;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #000;
}

.side .avatar p {
  margin-top: 1.125rem;
  font-weight: bold;
  width: 10vw;
  height: 5vh;
  border: 1px solid rgb(23, 23, 24);
  line-height: 4.3vh;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0.1875rem;
  border-radius: 0.625rem;
  font-size: 1rem;
}

.side .msg {
  width: 15vw;
  height: calc(100vh - 50vh);
  margin: 13.25rem 0 3rem;
  overflow: auto;
}

.side .msg ul {
  width: 100%;
  height: 100%;
  text-align: center;
  cursor: pointer;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.side .msg ul li:first-child {
  border-top: 2px solid rgb(47, 95, 199);
}

.side .msg ul li {
  border-bottom: 2px solid rgb(47, 95, 199);
  padding: 1.25rem 0;
  font-size: 1.125rem;
  font-weight: bold;
  flex: 1;
}

.side .msg ul li:hover {
  background: rgb(47, 95, 199);
  color: #fff;
}

.side .logout {
  width: 10vw;
  height: 5vh;
  border-radius: 0.625rem;
  background: rgb(47, 95, 199);
  text-align: center;
  line-height: 5vh;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
}

.side .left-side {
  position: absolute;
  right: -1.55rem;
  top: 0;
  width: 1.55rem;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 5px;
  cursor: pointer;
  color: #fff;
}

.hidden {
  visibility: hidden;
}
</style>
