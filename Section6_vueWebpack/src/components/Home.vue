<template>
  <div>
    <p>Server Status: {{status}}</p>
    <hr />
    <button @click="changeStatus">Change</button>
  </div>
</template>

<script>
let testData = {
  status: 'Critical'
}
export default {
  name: 'Home',
   data () {
    return {
      testData
    }
  },
  methods: {
    changeStatus () {
      this.status = 'Normal'
    }
  }
 
}
</script>
