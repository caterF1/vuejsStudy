<template>
  <div class="container">
    <form>
      <div class="row" v-if="!submitted">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <h2>Signup</h2>
          <hr />
          <form>
            <app-full-name v-model="user.fullName"></app-full-name>
           
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                v-model="user.email"
              />
              <small
                id="emailHelp"
                class="form-text text-muted"
              >We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                v-model="user.password"
              />
            </div>
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
                v-model="user.storeData"
              />
              <label class="form-check-label" for="exampleCheck1">Store data</label>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="isSubmitted">Submit</button>
          </form>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="submitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{user.fullName}} </p>
            <p>Mail: {{user.email}}</p>
            <p>Password: {{user.password}}</p>
            <p>Store in Database?: {{user.storeData}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FullName from './FullName.vue';
export default {
  data() {
    return {
      user: {
        fullName: 'firstName lastName',
        email: '',
        password: '',
        storeData: false
      },
      submitted: false,
      dataFullName: ''
    };
  },
  methods: {
    isSubmitted() {
      this.submitted = true;
    }
  },
  components: {
    appFullName: FullName
  }
};
</script>

<style>
</style>
