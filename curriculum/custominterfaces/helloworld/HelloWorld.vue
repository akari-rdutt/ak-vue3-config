<template>
    <div>
      <h1>{{ greeting }}</h1>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        greeting: 'Hello, World! From Vue 3'
      };
    }
  };
  </script>