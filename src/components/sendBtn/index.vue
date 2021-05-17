<template>
  <div>
    <div class="btn" @click="showType">传 输</div>
    <div class="circle"></div>
    <div class="circle-delay"></div>
    <div class="wrap-type" v-show="show">
      <div class="type-select">
        <p class="close" @click="close">X</p>
        <router-link to="person" tag="div">个人传输</router-link>
        <router-link to="group" tag="div">多人传输</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sendBtn",
  data() {
    return {
      show: false,
    };
  },

  methods: {
    showType() {
      this.show = true;
    },
    close() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.btn {
  width: 12.5rem;
  height: 12.5rem;
  background: rgba(41, 7, 121, 0.5);
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 5px 5px 2.8rem rgb(238, 225, 225);
  text-align: center;
  line-height: 12.5rem;
  color: #fff;
  font-size: 2.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1;
}

.btn:hover {
  box-shadow: 0 0 2.1rem rgb(167, 150, 150);
}

.circle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
  animation: signal 1.5s infinite;
}

.circle-delay {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  width: 100px;
  height: 100px;
  border: 1px solid #fff;
  border-radius: 50%;
  animation: signal 1.5s 1s infinite;
}

@keyframes signal {
  0% {
    transform: translate(-50%, -50%) scale(0.5);
  }
  5% {
    transform: translate(-50%, -50%) scale(1.5);
  }
  10% {
    transform: translate(-50%, -50%) scale(2);
  }
  15% {
    transform: translate(-50%, -50%) scale(2.5);
  }
  20% {
    transform: translate(-50%, -50%) scale(3);
  }
  25% {
    transform: translate(-50%, -50%) scale(3.5);
  }
  30% {
    transform: translate(-50%, -50%) scale(4.5);
  }
  35% {
    transform: translate(-50%, -50%) scale(5);
  }
  40% {
    transform: translate(-50%, -50%) scale(5.5);
  }
  45% {
    transform: translate(-50%, -50%) scale(6);
  }
  50% {
    transform: translate(-50%, -50%) scale(6.5);
  }
  60% {
    transform: translate(-50%, -50%) scale(7);
  }
  65% {
    transform: translate(-50%, -50%) scale(8);
  }
  70% {
    transform: translate(-50%, -50%) scale(9);
  }
  75% {
    transform: translate(-50%, -50%) scale(9.5);
  }
  80% {
    transform: translate(-50%, -50%) scale(10);
  }
  85% {
    transform: translate(-50%, -50%) scale(10.5);
  }
  90% {
    transform: translate(-50%, -50%) scale(11);
  }
  95% {
    transform: translate(-50%, -50%) scale(11.5);
  }
  100% {
    transform: translate(-50%, -50%) scale(12);
  }
}

.wrap-type {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  z-index: 999;
}
.type-select {
  width: 30vw;
  height: 35vh;
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

.type-select div {
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

.type-select .close {
  position: absolute;
  right: 0.125rem;
  top: 0.125rem;
  width: 1.5vw;
  height: 3vh;
  text-align: center;
  cursor: pointer;
  font-size: 1.525rem;
}
</style>
