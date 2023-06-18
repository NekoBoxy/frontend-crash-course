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
              <li class="breadcrumb-item active" aria-current="page">新北市</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- 主標題 -->
      <div class="row">
        <div class="col-6">
          <h5>旅遊景點</h5>
        </div>
        <div class="col-6">
          <select name="city" id="selectedCity">
            <option value="Keelung">基隆市</option>
            <option value="Taipei">台北市</option>
            <option value="NewTaipei">新北市</option>
            <option value="Taoyuan">桃園市</option>
            <option value="MiaoliCounty">苗栗縣</option>
            <option value="HsinchuCounty">新竹縣</option>
            <option value="Hsinchu">新竹市</option>
            <option value="Taichung">台中市</option>
            <option value="ChanghuaCounty">彰化縣</option>
            <option value="NantouCounty">南投縣</option>
            <option value="YunlinCounty">雲林縣</option>
            <option value="ChiayiCounty">嘉義縣</option>
            <option value="Chiayi">嘉義市</option>
            <option value="Tainan">台南市</option>
            <option value="Kaohsiung">高雄市</option>
            <option value="PingtungCounty">屏東縣</option>
            <option value="YilanCounty">宜蘭縣</option>
            <option value="HualienCounty">花蓮縣</option>
            <option value="TaitungCounty">台東縣</option>
            <option value="KinmenCounty">金門縣</option>
            <option value="PenghuCounty">澎湖縣</option>
            <option value="LienchiangCounty">連江縣</option>
          </select>
        </div>
      </div>
    </div>
    <div class="contsiner-fluid">
      <div class="row"></div>
      <!-- 地圖區 -->
      <div ref="sectionMap" class="col-6 section-map"></div>
      <!-- 景點卡片區 -->
      <div class="col-6"></div>
    </div>
    <!-- <CFooter /> -->
  </main>
</template>

<script setup>
import CNavbar from '../components/CNavbar.vue';
// import CFooter from '../components/CFooter.vue';
import { ref, onMounted } from 'vue';

import axios from 'axios';
import { Loader } from '@googlemaps/js-api-loader';

const scenicSpot = ref();
const sectionMap = ref();

// 取得 tdx 指定縣市景點資料
async function getScenicSpot() {
  try {
    const response = await axios({
      method: "get",
      // url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city.value}`,
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/Taipei?%24top=5&%24format=JSON`,
    });
    // console.log("response", response);
    scenicSpot.value = response.data;
    // console.log(ScenicSpot);
  } catch (error) {
    alert(error);
  }
}

// 取得 google 地圖圖資
// google 地圖 api key：
// AIzaSyC42jlw7i6yloHhAXQp_M7Lxh7_KxzY9bI
async function getMap() {
  const loader = new Loader({
    apiKey: "AIzaSyC42jlw7i6yloHhAXQp_M7Lxh7_KxzY9bI",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: 0,
      lng: 0
    },
    zoom: 4
  };

  loader
    .load()
    .then((google) => {
      new google.maps.Map(sectionMap.value, mapOptions);
    })
    .catch(e => {
      // do something
    });

}

onMounted(async () => {
  await getScenicSpot();
  await getMap();
});

</script>

<style scoped lang="scss">
// main
// main {
//   height: 100%;
//   margin-bottom: -300px;
// }

.section-map {
  // width: 50%;
  height: 400px;
}
</style>
