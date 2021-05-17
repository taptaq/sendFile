<template>
  <div class="person_send">
    <h2>个人传输</h2>
    <div class="person_content">
      <div class="select_file content_item">
        <p>已选择的文件</p>
        <ul class="file_container">
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
        <input type="file" />
      </div>

      <div class="send_user content_item">
        <div class="avator">
          <img src="" alt="" />
        </div>
        <div class="username">
          <input type="text" placeholder="请输入要发送的用户名" />
        </div>
        <button class="sendBtn">确认发送</button>
      </div>

      <div class="send_history content_item">
        <p>历史文件传输记录</p>
        <ul class="file_container">
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
          <li>1111111</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personSend",
};
</script>

<style scoped>
.person_send {
  width: 100vw;
  height: 100vh;
  background: rgba(87, 114, 235, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

h2 {
  font-size: 2.25rem;
  margin-bottom: 1.5rem;
}

.person_content {
  width: 60vw;
  height: 60vh;
  background: #fff;
  border-radius: 0.625rem;
  display: flex;
}

.person_content .content_item {
  flex: 1;
  border-right: 1px solid #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.625rem;
  position: relative;
}
.person_content .content_item p {
  font-size: 1.5rem;
  font-weight: bold;
}

.person_content .content_item:last-child {
  border-right: none;
}

.person_content .select_file input {
  position: absolute;
  left: 2.5rem;
  bottom: 1rem;
}

.person_content .content_item .file_container {
  margin-top: 1rem;
  height: 78%;
  width: 90%;
  overflow: auto;
  border: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  border-bottom: none;
}

.person_content .content_item .file_container li {
  flex: 1;
  line-height: 4.5rem;
  border-bottom: 1px solid #ddd;
  padding-left: 0.5rem;
  font-size: 1rem;
}

.person_content .send_user .avator {
  margin-top: 6.25rem;
  width: 40%;
  height: 28%;
  border: 1px solid #000;
  border-radius: 50%;
}

.person_content .send_user .username {
  margin-top: 1.625rem;
}

.person_content .send_user .username input {
  font-size: 1rem;
  padding: 0.5rem;
}

.person_content .send_user .sendBtn {
  margin-top: 1rem;
  outline: none;
  border: none;
  background: rgba(87, 114, 235, 0.9);
  width: 55%;
  height: 8%;
  cursor: pointer;
  border-radius: 0.625rem;
  font-size: 1rem;
  color: #fff;
  box-shadow: 0.0625rem 0.0625rem 1rem rgb(150, 119, 119);
}
</style>
