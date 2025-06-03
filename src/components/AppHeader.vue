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
      <span class="fundory-app-label">Fundory App</span>
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
  position: relative;
  line-height: 1.1;
}
.fundory-app-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 400;
  color: #38bfa7;
  position: absolute;
  left: 55%;
  top: 1.7rem;
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  opacity: 0.85;
}
.header-right {
  min-width: 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>