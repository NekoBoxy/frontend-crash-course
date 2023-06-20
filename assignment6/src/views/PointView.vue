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
                <RouterLink to="/points">旅遊景點</RouterLink>
              </li>
              <li class="breadcrumb-item">新北市</li>
              <!-- <li class="breadcrumb-item active" aria-current="page">{{ targetSpot.ScenicSpotName }}</li> -->
            </ol>
          </nav>
        </div>
      </div>
      <!-- 景點細節 -->
      <div class="row">
        <div class="col-6">
          <!-- <img src="" alt="" srcset=""> -->
          圖片區
        </div>
        <div class="col-6">
          說明區
        </div>
        <div class="col-12 mt-5">
          {{ targetSpot }}
        </div>
      </div>
    </div>
    <CFooter />
  </main>
</template>

<script setup>
import axios from 'axios';
import CNavbar from '../components/CNavbar.vue';
import CFooter from '../components/CFooter.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();

// const spots = ref();
const targetSpot = ref();

// 從 tdx 拿景點資料
// 取得單一景點資料
// res.data[0] = 
// route.params.id = C1_379000000A_000001
async function getSite() {
  try {
    const { id } = route.params;
    const city = "Taipei";
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city}`,
      params: {
        "$filter": `contains(ScenicSpotID, '${id}')`,
        "$format": "JSON"
      }
    });
    // console.log(response.data[0]);
    targetSpot.value = response.data[0];
    console.log(targetSpot.value);

    // console.log(id);
    // console.log("route.params.id", route.params.id)
    // 假如 route的id 和 tdx 的 id 相符，儲存資料，並渲染
    // console.log("response.data", response.data[0]);
  } catch (error) {
    alert(error);
  }
}

onMounted(async () => {
  await getSite();
});
</script>

<style scoped lang="scss">
// main
main {
  height: 100%;
  margin-bottom: -300px;
}
</style>
