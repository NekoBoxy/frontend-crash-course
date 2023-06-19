<template>
  <CNavbar />
  <main>
    <div class="container">
      <!-- 麵包屑 -->
      <div class="row">
        <div class="col">
          <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <RouterLink to="/">首頁</RouterLink>
              </li>
              <li class="breadcrumb-item">
                <RouterLink to="/point">旅遊景點</RouterLink>
              </li>
              <li class="breadcrumb-item">新北市</li>
              <li class="breadcrumb-item active" aria-current="page">新北市</li>

            </ol>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col"></div>
      </div>
    </div>
  </main>
  <CFooter />
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';
import { ref, onMounted } from 'vue';

const id = ref();

onMounted(async () => {
  id.value = this.$route.params.id;
});
</script>

<style scoped lang="scss">
// main
main {
  height: 100%;
  margin-bottom: -300px;
}
</style>
