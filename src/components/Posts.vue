<template>
    <div>
    
      <div class='posts' v-if='posts.length'>
        <transition-group name='list'>
        <post v-for='post in posts' :post='post' :key='post.id' @remove="$emit('remove', post)" />
            </transition-group>
        </div>
        <div v-else class='empty'>
        Пока ничего не добавлено :(
        </div>

</div>
</template>

<script>
import Post from '@/components/Post.vue'
export default {
    components: {Post},
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style>
.posts {
  gap: 20px;
  display: flex;
  flex-direction: column;
}
.empty{
    font-size: 24px;
}

.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>