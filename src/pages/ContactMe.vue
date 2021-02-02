<template>
  <div class="wrapper">
    <h2 class="title">CONTACT ME</h2>
    <form action="#">
      <div class="form-field">
        <label for="email-input">Email:</label>
        <input
          id="email-input"
          v-model="form.email"
          type="text"
          class="form-field__input"
        />
      </div>
      <div class="form-field">
        <label for="message-input">Message:</label>
        <textarea
          id="message-input"
          v-model="form.message"
          rows="10"
          class="form-field__input"
        ></textarea>
      </div>

      <button
        class="submit-button"
        type="button"
        :disabled="submitting"
        @click="postContactData"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email: '',
        message: ''
      },
      submitting: false
    }
  },
  methods: {
    async postContactData() {
      try {
        this.submitting = true
        await this.$axios.post('API/contact', this.form)
        this.$swal({
          icon: 'success',
          title: 'Message sent!',
          text: "Thank you for contacting me. I'll get in touch with you soon."
        })
        this.submitting = false
      } catch (error) {
        this.$swal({
          icon: 'error',
          title: 'Error! :(',
          text: "Message wasn't sent. Please try again later."
        })
        this.submitting = false
      }
    }
  }
}
</script>
<style scoped>
.wrapper {
  max-width: 360px;
  margin: auto;
  padding: 0 15px;
}

.title {
  font-family: Helvetica, sans-serif;
  text-align: center;
  margin-bottom: 30px;
  margin-top: 40px;
  letter-spacing: 2px;
}

.form-field {
  margin-bottom: 16px;
}

.form-field__input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.submit-button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  letter-spacing: 1.5px;
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: default;
}
</style>
