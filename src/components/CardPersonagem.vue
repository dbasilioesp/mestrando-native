<template>
  <div class="container" @click="onClick">
    <img :src="$imageUrl(image)" />
    <div class="label">{{ name }}</div>
  </div>
</template>

<script>
export default {
  props: {
    image: String,
    name: String
  },
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  height: calc(300px + 4vh);
  width: 100%;
  display: grid;
  grid-template-rows: 4fr 1fr;
  border-top-left-radius: 40px;
  border-top-right-radius: 10px;

  img {
    width: 100%;
    height: 100%;
    object-position: top;
    object-fit: cover;
    border-top-left-radius: 40px;
    border-top-right-radius: 10px;
  }

  .label {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--moon-color);
    color: var(--paper-color);
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 10px;
    text-transform: uppercase;
    font-size: 1.125rem;
  }
}
</style>
