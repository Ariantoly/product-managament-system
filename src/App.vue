<template>
  <div id="app">
    <h3>Product Management System</h3>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
@import '@blibli/blue-design-tokens/dist/tokens-default.scss';

#app {
  font-family: $blu-font-family-body-text;
  padding-inline: 10px;
} 
</style>