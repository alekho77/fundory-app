<template>
  <header>
    <div class="header-left">
      <img
        src="@/assets/fundory-logo.svg"
        alt="Fundory Logo"
        class="logo"
      />
    </div>
    <div class="header-center">
      Invest Calculator
    </div>
    <div class="header-right">
      <!-- System menu -->
    </div>
  </header>
</template>

<script setup>
// AppHeader logic (empty for now)
</script>

<style scoped>
header {
  width: 100%;
  min-height: 0;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-sizing: border-box;
}
.header-left {
  display: flex;
  align-items: center;
}
.logo {
  height: 3rem;
  width: auto;
  margin: 0.5rem;
  display: block;
  filter: drop-shadow(0 0 0.5rem #43e97b) drop-shadow(0 0 1rem #38f9d7);
}
.header-center {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  letter-spacing: 0.05rem;
}
.header-right {
  min-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>