<template>
  <div class='post ' >
        <div class='post-header'>
          <div class='post-user'>
            <img alt='user' src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745' />
            <span>{{ post.title }}</span>
          </div>
          <div class='post-date'>
            {{ post.date }}
          </div>
          <div class='delete-post'>
              <button @click='toggleButtons()' class='post-more'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots"
              viewBox="0 0 16 16">
              <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
            </svg>
          </button>
          <div class='more-btns' :class='{"show-btns": isOpening === true}' >
            
            <button class='delete' @click='$emit("remove", post)'>
            Удалить
          </button>
          </div>

          
          </div>
        
        </div>
        <div class='post-body'>
          
          {{ post.body }}
        </div>
        <div class='post-footer'>
          <button class='post-btn'>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
              class="bi bi-chat-left-dots" viewBox="0 0 16 16">
              <path
                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
              <path
                d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
            </svg>
            <span>24</span>
          </button>
          <button class='post-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye"
              viewBox="0 0 16 16">
              <path
                d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
              <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
            </svg>
            <span>323</span>
          </button>
          <button class='post-btn'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-share-fill"
              viewBox="0 0 16 16">
              <path
                d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5" />
            </svg>
          </button>
        </div>
      </div>
</template>

<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    },
    data(){
return{
  isOpening: false
}
    },
    methods: {
      toggleButtons() {
        this.isOpening = !this.isOpening;
        console.log('ghbdtn');
      }
    }
}
</script>

<style>
.post-header {
  display: flex;
  align-items: center;
}

.post-user {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #b9bdc7;
  margin-right: 8px;
}

.post-user img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.post-date {
  color: #8f939d;
  font-size: 13px;
}
.delete-post{
     margin-left: auto;
     position: relative;
     
}
.post-more {
  transition: background 0.3s ease;
  width: 30px;
  border-radius: 4px;
  height: 30px;
}

.post-more:hover {
  background: #384e29;
}
.more-btns{
box-shadow: 0 1px 8px #14171a; 
   right: 10px;  
    top: 35px;
    position: absolute;
    border-radius: 4px;
    flex-direction: column;
    z-index: 99;
    background: #22272B;
    display:none;
}
.show-btns{
display: flex;
}
.delete{
    
    padding: 10px 20px;
 
    transition: background 0.3s ease;
}
.delete:hover{
    background: #2f363d;
}
.post-body {
  color: #e0e3ea;
  line-height: 1.4;
  margin-top: 24px;
}

.post-footer {
  display: flex;
  margin-top: 24px;
  align-items: center;
  gap: 14px;
  border-top: 1px solid #21262a;
  padding-top: 13px;
}

.post-btn {
  display: flex;
  gap: 4px;
  color: #8f939d;
  font-size: 13px;
  align-items: center;
  transition: color 0.3s ease;
}

.post-btn:hover {
  color: #b6bac5;
}
</style>