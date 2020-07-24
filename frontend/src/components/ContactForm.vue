<template>
  <div class="contact-form" :class="{'middle': showForm}">
    <transition enter-active-class="slideInRight" leave-active-class="slideOutRight" 
      mode='out-in'
      :duration="{ enter: 200, leave: 50}"
    >

      <div class="button cursor-pointer" v-if="! showForm" @click="showForm=true" key="1">
        Contact Me 
      </div>

      <div class="form" v-else key="2">
        <header>
          <div class="heading-secondary">Contact Me!!</div>
          <div>Thanks for taking a step to contact me. Fill in below details..</div>
          <font-awesome-icon
            class="cursor-pointer"
            :icon="['far', 'times-circle']"
            @click="showForm=false"
          ></font-awesome-icon>
        </header>
        <main>
          <label>Name</label>
          <input type="text" v-model="formData.userName"/>
          <label>Email</label>
          <input type="text" v-model="formData.emailId"/>
          <label>Tell me what you think</label>
          <textarea class="textarea" v-model="formData.message"></textarea>
          <div class="error" v-if="error">{{ error }}</div>
        </main>
        <footer>
          <div class="action-button send" @click="sendMessage">
            <font-awesome-icon :icon="['far','paper-plane']"/>
            Send
          </div>
          <div class="action-button cancel" @click="showForm=false">
            <font-awesome-icon :icon="['far','times-circle']" />
            Cancel
          </div>
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showForm: false,
      error: false,
      formData: {
        userName: "",
        emailId: "",
        message: "",
      }
    };
  },
  created() {
    this.$eventbus.$on('showcontact', () => {
      this.showForm = true;
    })
  },
  methods: {
    async sendMessage() {
      if (this.validateform()) {
        // eslint-disable-next-line no-unused-vars
        await this.axios.post('sendmsg', this.formData).then(res => {
          // console.log(res)
          this.showForm = false
          this.clearForm()
          })
      } else {
        setTimeout(() => {
          this.error = false
        }, 3000);
      }
    },
    validateform() {

      if ( this.formData.userName === "" || this.formData.emailId === "" || this.formData.message === "") {
        this.error = "All fields are Mandatory !!!"
        return false
      } 
      
      if (!this.validateEmail()) {
        this.error = "Please give a valid email id !!!"
        return false
      }
      return true
    },
    validateEmail () {
      // eslint-disable-next-line no-useless-escape
      if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/.test(this.formData.emailId)) {
        // console.log('Email not working')
        return true
      }
      return false
    },
    clearForm () {
      this.formData = { userName: "", emailId: "", message: "" }
    }
  }
};
</script>

<style lang="scss">
.contact-form {
  position: fixed;
  color: white;
  right: 0;
  bottom: 10%;
  z-index: 10;

  &.middle {
    bottom: 50%;
    transform: translateY(50%);
  }

  .button {
    background-color: var(--primary-color);
    padding: 0.5em 0;
    writing-mode: tb-rl;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 0 0 5px #333;
    }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    box-shadow: 0 0 5px #333;
    // box-shadow: 1px 1px 5px 0px var(--primary-color);

    header {
      background-color: var(--primary-color);
      width: 100%;
      position: relative;
      padding: 20px;

      .fa-times-circle {
        position: absolute;
        top: 10px;
        right: 10px;
      }
    }

    main {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 2rem;
      background-color: var(--app-background);

      .error {
        color: red;
      }

      label {
        text-align: left;
        color:var(--text-color)
      }

      * {
        width: 100%;
        padding: 1rem;
      }

      .textarea {
        resize: none;
        height: 100px;
        padding: 1rem;
        outline: none;
      }

      input[type="text"] {
        width: 100%;
        height: 3rem;
        padding: 0 1rem;
        outline: none;
      }
    }

    footer {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--app-background);
      width: 100%;
      padding: 2rem;

      .action-button {
        padding: .1rem 1.2rem;
        border-radius: 2px;
        margin: 2rem;

        &.send {
          background-color: var(--primary-color);

          &:hover {
            background-color: var(--primary-color-dark);
          }
        }

        &.cancel {
          background-color: var(--text-color);

          &:hover {
            opacity: .75;
          }
        }

        svg {
          margin-right: 5px;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>