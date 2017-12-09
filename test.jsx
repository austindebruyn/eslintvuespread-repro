<template>
  <div/>
</template>

<script>
function oneOf(array) {
  return {
    validator: value => array.includes(value)
  };
}

export default {
  name: 'TheComponent',
  props: {
    size: {
      type: String,
      ...oneOf(['sm', 'md', 'lg']),
      default: 'sm'
    }
  }
};
</script>
