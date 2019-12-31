<template>
  <div>
    <div class="form-group">
      <label for="inputFirstName">First name</label>
      <input
        class="form-control"
        id="inputFirstName"
        placeholder="Enter first name"
        :value = "firstName"
        @input="fullNameChanged(true, $event)"
      />
    </div>
    <div class="form-group">
      <label for="inputLasttName">Last name</label>
      <input
        class="form-control"
        id="inputLastName"
        placeholder="Enter Last name"
        :value = "lastName"
        @input="fullNameChanged(false, $event)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    fullNameChanged(isFirst, evt) {
        let name = '';
      if(isFirst){
          name = event.target.value + ' ' + this.lastName;
      } else {
          name = this.firstName + ' ' + event.target.value;
      }
      this.value = name;
      this.$emit('input', this.value)
    }
  },
  computed:{
      firstName() {
          return this.value.split(' ')[0]; 
      },
      lastName() {
          return this.value.split(' ')[1]; 

      }
  }
};
</script>