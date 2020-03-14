<template>
  <div class="contact-form" :class="{'middle': showForm}">
    <transition enter-active-class="slideInLeft" leave-active-class="slideOutLeft">
      <div class="button cursor-pointer" v-if="! showForm" @click="showForm=true" key="1">Contact Me</div>

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
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>Tell me what you think</label>
          <textarea class="textarea"></textarea>
        </main>
        <footer>
          <div class="action-button send">
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
      showForm: false
    };
  },
  created() {
    this.$eventbus.$on('showcontact', () => {
      this.showForm = true;
    })
  }
};
</script>

<style lang="scss">
.contact-form {
  position: fixed;
  color: white;
  left: 0;
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
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 400px;
    box-shadow: 1px 1px 5px 0px var(--primary-color);

    header {
      background-color: var(--primary-color);
      width: 100%;
      position: relative;

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
@media (max-width: 768px) {
  .contact-form {
    width: 100vmin;
  }
} 
</style>