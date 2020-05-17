<template>
  <div class="form-theme">
    <slot />
  </div>
</template>

<style lang="scss">
.form-theme {
  form {
    margin: 0 auto;
    text-align: left;
  }

  label {
    display: block;
    text-align: left;
    margin-bottom: 5px;
    color: var(--moon-color);
    font-weight: bold;
  }

  input {
    margin-bottom: 8px;
  }

  textarea {
    border: 1px solid var(--moon-color);
    border-radius: 4px;
    width: 100%;
    padding: 15px;
    font-size: 18px;
    font-family: var(--font-primary);

    &:focus {
      border-color: var(--sky-color);
    }
  }

  input[type="file"] {
    width: 100%;
  }

  input[type=email],
  input[type="text"],
  input[type="password"] {
    height: 40px;
    font-size: 18px;
    border: 1px solid var(--moon-color);
    border-radius: 4px;
    padding: 0 15px;

    &:focus {
      border-color: var(--sky-color);
    }
  }

  .warning {
    color: var(--happy-color);
    font-weight: bold;
    margin-bottom: 16px;
  }

  .submit-container {
    margin-top: 20px;
    width: 100%;

    .submit-button {
      width: 100%;
    }

    a {
      display: block;
      text-align: center;
      margin-top: 10px;
      color: var(--moon-color);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
