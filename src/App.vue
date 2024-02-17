<script >
import HeaderBlock from '@/components/HeaderBlock.vue'

export default {
  components: {
    HeaderBlock
  }
}
</script>

<template>
  <div>
  <header-block />

  <main>
    <router-view></router-view>
  </main>
  </div>
</template>

<style >


main {
  max-width: 1020px;
  margin: 0 auto;
  background: #22272B;
  padding: 20px 0 50px 0;
}
@media(max-width: 1050px){
  main {
    padding: 0 15px;
  }
}

</style>
