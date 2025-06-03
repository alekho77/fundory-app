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
  min-height: 60px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
}
.header-left {
  display: flex;
  align-items: center;
}
.logo {
  height: 44px;
  width: auto;
  margin-right: 8px;
  display: block;
}
.header-center {
  flex: 1;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: #222;
  letter-spacing: 0.5px;
}
.header-right {
  min-width: 60px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
</style>