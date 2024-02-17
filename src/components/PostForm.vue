<template>
   <form class='form' @submit.prevent>
      <input class='form-field' type='text' placeholder='Введите имя' v-model='post.title' />
      <input class='form-field' type='text' placeholder='Введите текст' v-model='post.body' />
      <button class='green-btn' @click='createPost' >Опубликовать пост</button>
    </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        name: '',
        text: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
    this.post = {
          title: '',
          body: ''
    }
    }
  }
  
}
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 20px;
}

.form-field {
  padding: 8px 14px;
  border-radius: 4px;
}

.form-field:focus {
  background: #23272c;
}

.green-btn {
  background: #439005;
  padding: 8px 20px;
  border-radius: 8px;
  align-self: flex-end;
  transition: background 0.3s ease;
}

.green-btn:hover {
  background: #295603;
}
@media(max-width: 768px){
  .green-btn {
   width: 100%;
  }
}
</style>