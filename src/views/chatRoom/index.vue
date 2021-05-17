<template>
  <div class="chat_room">
    <h2>xxx聊天室</h2>
    <div class="room_wrap">
      <!--文件传输区域-->
      <div class="select_file" ref="select_file">
        <p>文件传输区域</p>
        <input type="file" />
        <ul class="file_container">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <!--聊天区域-->
      <div class="chat" ref="chat">
        <!-- 显示面板 -->
        <div class="chat-board">
          <!-- 对方聊天语句 -->
          <div class="chat_other clearfix">
            <div class="chat_time">下午15:20</div>
            <div class="other_img">
              <img src="" alt="" />
            </div>
            <div class="other_sentence">
              <div class="trangle"></div>
            </div>
          </div>
          <!-- 自己聊天语句 -->
          <div class="chat_mine clearfix">
            <div class="chat_time">下午15:20</div>
            <div class="mine_img">
              <img src="" alt="" />
            </div>
            <div class="mine_sentence">
              <div class="trangle"></div>
            </div>
          </div>
        </div>
        <!-- 文字输入 -->
        <div class="chat-input">
          <div class="menu">
            <i class="icon-yuyin iconfont"></i>
            <i class="icon-shipin iconfont" @click="showVideo"></i>
          </div>

          <textarea cols="30" rows="10"></textarea>

          <button class="btn">发送</button>
        </div>
      </div>

      <!-- 视频区域 -->
      <div class="video" ref="video">
        <button @click="closeVideo">关闭视频</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatRoom",
  methods: {
    showVideo() {
      this.$refs.chat.style.width = "60%";
      this.$refs.chat.style.transition = "1.5s";
      this.$refs.select_file.style.width = "20%";
      this.$refs.select_file.style.transition = "1.5s";
      this.$refs.video.style.transform = "rotateY(0)";
      this.$refs.video.style.transition = "1s";
      this.$refs.video.style.width = "20%";
    },

    closeVideo() {
      this.$refs.chat.style.width = "70%";
      this.$refs.chat.style.transition = "1.5s";
      this.$refs.select_file.style.width = "30%";
      this.$refs.select_file.style.transition = "1.5s";
      this.$refs.video.style.transform = "rotateY(90deg)";
      this.$refs.video.style.transition = "1s";
      this.$refs.video.style.width = "0";
    },
  },
};
</script>

<style scoped>
.chat_room {
  width: 100vw;
  height: 100vh;
  background: rgba(87, 114, 235, 0.9);
  position: relative;
}

.chat_room h2 {
  position: absolute;
  top: 1.5rem;
  left: 44%;
  font-size: 2.5rem;
  font-weight: bold;
}

.room_wrap {
  width: 70vw;
  height: 80vh;
  background: #fff;
  border-radius: 0.625rem;
  position: absolute;
  left: 50%;
  top: 54%;
  transform: translate(-50%, -50%);
  display: flex;
  margin-bottom: 1.25rem;
}

.room_wrap .select_file {
  border-top-left-radius: 0.625rem;
  border-bottom-left-radius: 0.625rem;
  width: 30%;
  height: 100%;
  position: relative;
  border-right: 1px solid rgba(87, 114, 235, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.9375rem;
  float: left;
}

.room_wrap .select_file p {
  font-size: 1.3rem;
  font-weight: bold;
}

.room_wrap .select_file input {
  position: absolute;
  bottom: 0.8rem;
  left: 0.8rem;
}

.select_file .file_container {
  margin-top: 1.5rem;
  height: 78%;
  width: 90%;
  overflow: auto;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  border-bottom: none;
}

.select_file .file_container li {
  flex: 1;
  line-height: 4.5rem;
  border-bottom: 1px solid #ccc;
  padding-left: 0.5rem;
  font-size: 1rem;
}

.room_wrap .chat {
  width: 70%;
  height: 100%;
  float: left;
}

.room_wrap .chat .chat-board {
  width: 100%;
  height: 65%;
  border-bottom: 1px solid rgba(87, 114, 235, 0.9);
  position: relative;
}

.room_wrap .chat .chat-board .chat_other {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 2rem;
}

.room_wrap .chat .chat-board .chat_other .other_img {
  width: 5%;
  height: 80%;
  border: 1px solid #000;
  float: left;
  margin-top: 0.3rem;
  margin-left: 0.5rem;
}

.room_wrap .chat .chat-board .chat_other .other_sentence {
  width: 50%;
  height: 100%;
  border: 1px solid #ccc;
  float: left;
  margin-left: 0.7rem;
  position: relative;
}

.room_wrap .chat .chat-board .chat_other .other_sentence .trangle {
  border: 0.625rem solid #ccc;
  position: absolute;
  left: -1.25rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  border-bottom: 0.625rem solid transparent;
  border-top: 0.625rem solid transparent;
  border-left: 0.625rem solid transparent;
}

.room_wrap .chat .chat-board .chat_mine {
  width: 100%;
  height: 10%;
  position: absolute;
  top: 7rem;
}

.room_wrap .chat .chat-board .chat_mine .mine_img {
  width: 5%;
  height: 80%;
  border: 1px solid #000;
  float: right;
  margin-top: 0.3rem;
  margin-right: 0.5rem;
}

.room_wrap .chat .chat-board .chat_mine .mine_sentence {
  width: 50%;
  height: 100%;
  border: 1px solid #ccc;
  float: right;
  margin-right: 0.7rem;
  position: relative;
}

.room_wrap .chat .chat-board .chat_mine .mine_sentence .trangle {
  border: 0.625rem solid #ccc;
  position: absolute;
  right: -1.25rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: -1;
  border-bottom: 0.625rem solid transparent;
  border-top: 0.625rem solid transparent;
  border-right: 0.625rem solid transparent;
}

.chat_time {
  width: 100%;
  text-align: center;
  margin-bottom: 0.5rem;
}

.room_wrap .chat .chat-input {
  width: 100%;
  height: 35%;
  position: relative;
}

.room_wrap .chat .chat-input .menu {
  width: 100%;
  height: 18%;
  border-bottom: 1px solid rgba(87, 114, 235, 0.2);
}

.room_wrap .chat .chat-input .menu i {
  float: right;
  color: rgba(87, 114, 235, 0.9);
  font-size: 2rem;
  margin-right: 0.7rem;
  cursor: pointer;
}

.room_wrap .chat .chat-input .menu i:hover {
  color: #ccc;
}

.room_wrap .chat .chat-input textarea {
  width: 87%;
  height: 78%;
  resize: none;
  padding: 1rem;
  font-size: 1.25rem;
  border: 1px solid rgba(87, 114, 235, 0.5);
  border-top: none;
  border-left: none;
}

.room_wrap .chat .chat-input .btn {
  width: 10%;
  height: 15%;
  position: absolute;
  bottom: 0.5rem;
  right: 0.5rem;
  background: rgba(87, 114, 235, 0.9);
  outline: none;
  border: none;
  color: #fff;
  font-size: 1.25rem;
  padding: 0.3rem;
  cursor: pointer;
  border-radius: 0.625rem;
}

.room_wrap .video {
  border-top-right-radius: 0.625rem;
  border-bottom-right-radius: 0.625rem;
  width: 0;
  height: 100%;
  border-left: 1px solid rgba(87, 114, 235, 0.9);
  background: #ccc;
  transform: rotateY(90deg);
}
</style>
