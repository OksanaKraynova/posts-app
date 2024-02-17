<template>
    <div>
     <div class="search-wrapper">
      <input class='search' v-model='search' type='search' placeholder='Поиск' />
    </div>
    <post-form @create='createPost'/>
    <posts :posts='searchPosts' @remove='removePost' v-if='!isLoading' />
    <div v-else >Загрузка...</div>
    <div class='pages'>
<div class='page' v-for='p in totalPages' :class='{"current": page === p}'  :key='p' @click='changePage(p)' >{{p}}</div>
    </div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue'
import Posts from '@/components/Posts.vue'
import axios from 'axios'
export default {
  
  components: {
    Posts, PostForm
  },
  data() {
    return {
      posts: [],
      isLoading: false,
      search: '',
      page: 1,
      limit: 10,
      totalPages: 0
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
    removePost(post){
      this.posts = this.posts.filter(item => item.id !== post.id)
    },
    changePage(num) {
this.page = num
this.getPosts()
    },
    async getPosts(){
      try{
        this.isLoading = true
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
              _page: this.page,
              _limit: this.limit
            }
          })
          this.totalPages = Math.ceil(res.headers['x-total-count'] / this.limit)
          this.posts = res.data
        } catch(e){
          alert('Ошибка')
        } finally{
        this.isLoading = false
        }
     
    }
  },
  mounted(){
    this.getPosts()
  },
  computed: {
    searchPosts(){
      return this.posts.filter(post => post.body.toLowerCase().includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style>
.search-wrapper{
  margin-bottom: 20px;
}
.search{
  background-color: #30382b;
  border-radius: 12px;
  width: 100%;
  padding: 10px 20px;
}
.pages{
  display: flex;
  gap: 10px;
  margin-top: 30px;
}
.page{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  gap: 6px;
  color: #a7a9b0;
  background: #30382b;
  transition: background 0.3s ease;
  cursor: pointer;
}

.page:hover{
  background: #526049;
}
.current{
  background: #526049;
}

@media(max-width: 768px){
  .page {
    width: 25px;
  height: 25px;
  }
}
</style>