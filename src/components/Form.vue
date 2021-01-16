<template>
  <b-container fluid>
    <b-row class="form-cont">
      <b-col class="title-col" xs="12" sm="12" md="6" lg="6">
        <h3>Connect with us</h3>
      </b-col>
      <b-col class="form" @submit.prevent="showData()" xs="12" sm="12" md="6" lg="6">
        <form class="form-col">
          <input
            :style="[
              submitted && (!$v.user.name.required || !$v.user.name.alpha)
                ? { color: '#DF5656', borderBottomColor: '#DF5656' }
                : { color: '#707070', borderBottomColor: '#000000' },
            ]"
            type="text"
            placeholder="Name"
            name="name"
            v-model="user.name"
          />
          <div :style="{ color: '#DF5656' }" v-if="submitted && !$v.user.name.required">
            The name is required
          </div>
          <div :style="{ color: '#DF5656' }" v-if="submitted && !$v.user.name.alpha">
            The name must contain only alphabetic characters
          </div>
          <input
            :style="[
              submitted && (!$v.user.email.required || !$v.user.email.email)
                ? { color: '#DF5656', borderBottomColor: '#DF5656' }
                : { color: '#707070', borderBottomColor: '#000000' },
            ]"
            type="text"
            placeholder="Email"
            name="email"
            v-model="user.email"
          />
          <div :style="{ color: '#DF5656' }" v-if="submitted && !$v.user.email.required">
            The email is required
          </div>
          <div :style="{ color: '#DF5656' }" v-if="submitted && !$v.user.email.email">
            The email address is invalid
          </div>
          <textarea
            :style="[
              submitted && (!$v.user.message.required || !$v.user.message.minLength)
                ? { color: '#DF5656', borderBottomColor: '#DF5656' }
                : { color: '#707070', borderBottomColor: '#000000' },
            ]"
            name="message"
            placeholder="Your Message ..."
            id=""
            cols="30"
            rows="10"
            v-model="user.message"
          ></textarea>
          <div
            :style="{ color: '#DF5656' }"
            v-if="submitted && !$v.user.message.required"
          >
            The message is required
          </div>
          <div
            :style="{ color: '#DF5656' }"
            v-if="submitted && !$v.user.message.minLength"
          >
            The message must contain at least 5 characters
          </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { required, email, minLength, alpha } from "vuelidate/lib/validators";

export default {
  name: "Form",
  validations: {
    user: {
      name: {
        required,
        alpha,
      },
      email: {
        required,
        email,
      },
      message: {
        required,
        minLength: minLength(5),
      },
    },
  },
  methods: {
    showData() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return false;
      }
    },
  },
  data() {
    return {
      submitted: false,
      user: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
};
</script>

<style scoped>
.form-cont {
  padding: 5% 7% 5% 10%;
}

.form-cont .title-col {
  width: 100%;
}

@media screen and (min-width: 800px) {
  .form-cont .title-col {
    width: 50%;
  }
}

.form-cont .title-col h3 {
  font-size: 56px;
  font-weight: 300;
  letter-spacing: -0.2rem;
  padding-bottom: 10px;
  padding-right: 50%;
}

.form-cont .form-col {
  width: 100%;
  padding-top: 3%;
}

@media screen and (min-width: 1081px) {
  .form-cont .form-col {
    padding: 2% 5%;
  }
}

.form-cont .form-col input {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #000000;
  height: 50px;
  margin-bottom: 15px;
}

.form-cont .form-col textarea {
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #000000;
  margin-bottom: 35px;
}

.form-cont .form-col small {
  width: 100% !important;
  margin-right: 50%;
}

.form-cont .submit-btn {
  margin-top: 3%;
  margin-bottom: 10%;
  background-color: #000000;
  color: white;
  border: 1px solid #000000;
  border-radius: 0;
  height: 50px;
  width: 200px;
}

.form-cont .submit-btn:hover {
  cursor: pointer;
  background-color: #707070;
  color: white;
  border: 1px solid #707070;
}
</style>
