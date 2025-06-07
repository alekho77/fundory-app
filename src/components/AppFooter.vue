<template>
  <footer>
    <div class="footer-top">
      &copy; 2025 Fundory. All rights reserved.
    </div>
    <div class="footer-bottom">
      <a href="/privacy-policy">Privacy Policy</a>
      <span>|</span>
      <a href="/terms-of-service">Terms of Service</a>
      <span>|</span>
      <a href="/disclaimer">Disclaimer</a>
    </div>
  </footer>
</template>

<script setup>
// AppFooter logic (empty for now)
</script>

<style scoped>
footer {
  width: 100%;
  min-height: 40px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-top {
  margin-bottom: 5px;
}
.footer-bottom {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>