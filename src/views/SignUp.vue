<template>
  <div class="home">
    <Signup/>
  </div>
</template>

<script>
// @ is an alias to /src
import Signup from '@/components/Signup.vue'

export default {
  name: 'SignUp',
  components: {
    Signup
  }
}
</script>
