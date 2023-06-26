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
              <li class="breadcrumb-item active" aria-current="page">旅遊景點</li>
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
          <select id="selectedCity" v-on:change="getSelect()">
            <option value="Keelung">基隆市</option>
            <option value="Taipei" selected="selected">台北市</option>
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
      <div class="row" style="margin-right: 0;">
        <!-- 地圖區 -->
        <div ref="areaMap" class="col-6 area-map"></div>
        <!-- 景點卡片區 -->
        <div class="col-6 area-site">
          <div class="row row-cols-2 g-2">
            <div class="col" v-for="(site, index) in  tdxSpot" :key="1453 + index">
              <div class="card" @click="handleSiteClick(site)" style="cursor: pointer;">
                <img :src="site.Picture.PictureUrl1" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title" style="font-size: medium;">{{ site.ScenicSpotName }}</h5>
                  <p class="card-text">
                    <span class="badge rounded-pill bg-success text-white">{{ site.City }}</span>
                    <span class="badge rounded-pill bg-success text-white" style="margin-left: 5px; margin-right: 5px;">
                      {{ site.Class1 }}
                    </span>
                    <span class="badge rounded-pill bg-success text-white">{{ site.Level }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

import { useRouter } from 'vue-router';
const router = useRouter();

const tdxSpot = ref();
const areaMap = ref();

// 取得 select 的城市，存入變數 city 並同步更動路由與 map 的 city
const location = ref();

function getSelect() {
  location.value = document.querySelector("#selectedCity").value;
  console.log(location.value);
}

// 取得 tdx 指定縣市景點資料
async function getScenicSpot() {
  try {
    const city = "Taipei";
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city}`,
      params: {
        "$top": "10",
        "$format": "JSON"
      }
    });
    // console.log("response.data", response.data);
    tdxSpot.value = response.data;
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
    zoom: 11
  };

  const google = await loader.load();
  const map = new google.maps.Map(areaMap.value, mapOptions); // 地圖實體化
  const bounds = new google.maps.LatLngBounds(); // 自適應地圖可視範圍
  // 加入標記
  for (let i = 0; i < tdxSpot.value.length; i++) {
    const marker = new google.maps.Marker({
      position: {
        lat: tdxSpot.value[i].Position.PositionLat,
        lng: tdxSpot.value[i].Position.PositionLon
      },
      map,
      title: tdxSpot.value[i].ScenicSpotName,
      label: (10 + i).toString(36).toUpperCase(), // i=0 時為 A、=1 時為B，類推
    });
    bounds.extend(marker.position); // 把 marker 的座標放進 bounds
  }
  map.fitBounds(bounds); // 計算 markers 中心並自適應地圖大小
}


onMounted(async () => {
  await getScenicSpot();
  await getMap();
});

// 點擊切換至細節頁
async function handleSiteClick(site) {
  // console.log("site.ScenicSpotID", site.ScenicSpotID);
  await router.push({ path: `/point/${site.ScenicSpotID}` });
  await router.go();
}

</script>

<style scoped lang="scss">
// main
// main {
//   height: 100%;
//   margin-bottom: -300px;
// }

.area-map {
  // width: 50%;
  height: 70vh;
}

.area-site {
  width: 50%;
  height: 70vh;
  overflow-y: scroll;
}
</style>
