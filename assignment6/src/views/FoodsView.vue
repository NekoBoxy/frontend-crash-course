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
                <RouterLink to="/foods/NewTaipei">美食餐廳</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ currentCityTitle }}</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- 主標題 -->
      <div class="row">
        <div class="col-6">
          <h5>美食餐廳</h5>
        </div>
        <div class="col-6">
          <select id="selectedCity" v-on:change="getSelect()" v-model="city">
            <option v-for="city in cityList" :value="city.name" :key="city.name" :selected="city.name === city.value">
              {{ city.title }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row" style="margin-right: 0;">
        <!-- 地圖區 -->
        <div ref="areaMap" class="col-6 area-map"></div>
        <!-- 餐廳卡片區 -->
        <div class="col-6 area-site">
          <div class="row row-cols-2 g-2">
            <div class="col" v-for="(food, index) in tdxSpot" :key="index">
              <div class="card" @click="handleSiteClick(food)">
                <div v-if="food?.Picture?.PictureUrl1">
                  <img :src="food.Picture.PictureUrl1" class="card-img-top" alt="餐廳圖片">
                </div>
                <div v-else>
                  <img src="../assets/images/noimage.png" class="card-img-top" alt="沒有餐廳圖片">
                </div>
                <div class="card-body">
                  <div class="circle-label">
                    {{ (10 + index).toString(36).toUpperCase() }}
                  </div>
                  <h5 class="card-title" :title="food.RestaurantName">{{ food.RestaurantName }}</h5>
                  <p class="card-text">
                    <span class="badge rounded-pill bg-success">
                      {{ food.Class }}
                    </span>
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
import axios from 'axios';
import { ref, onMounted, computed } from 'vue';
import { useRouter, useRoute, RouterLink } from 'vue-router';
import { Loader } from '@googlemaps/js-api-loader';

const router = useRouter();
const route = useRoute();
const tdxSpot = ref();
const areaMap = ref();

const cityList = ref([
  { title: "基隆市", name: "Keelung" },
  { title: "臺北市", name: "Taipei" },
  { title: "新北市", name: "NewTaipei" },
  { title: "桃園市", name: "Taoyuan" },
  { title: "苗栗縣", name: "MiaoliCounty" },
  { title: "新竹縣", name: "HsinchuCounty" },
  { title: "新竹市", name: "Hsinchu" },
  { title: "臺中市", name: "Taichung" },
  { title: "彰化縣", name: "ChanghuaCounty" },
  { title: "南投縣", name: "NantouCounty" },
  { title: "雲林縣", name: "YunlinCounty" },
  { title: "嘉義縣", name: "ChiayiCounty" },
  { title: "嘉義市", name: "Chiayi" },
  { title: "臺南市", name: "Tainan" },
  { title: "高雄市", name: "Kaohsiung" },
  { title: "屏東縣", name: "PingtungCounty" },
  { title: "宜蘭縣", name: "YilanCounty" },
  { title: "花蓮縣", name: "HualienCounty" },
  { title: "臺東縣", name: "TaitungCounty" },
  { title: "金門縣", name: "KinmenCounty" },
  { title: "澎湖縣", name: "PenghuCounty" },
  { title: "連江縣", name: "LienchiangCounty" },
]);

// 取得 select 的城市，存入變數 city 並同步更動路由與 map 的 city
const city = ref("NewTaipei");
const currentCityTitle = computed(() => {
  // 若在陣列 cityList 中找到 name 與 city.value 相同的值，回傳
  const currentCity = cityList.value.find(item => item.name === city.value);
  return currentCity.title;
});

// 用 city 切換 router 並重取相關 api 資料
async function getSelect() {
  // console.log("city.value", city.value);
  router.push({ path: `/foods/${city.value}/` });
  await getRestaurants();
  await getMap();
}

// 取得 tdx 指定縣市餐廳資料
async function getRestaurants() {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/Restaurant/${city.value}`,
      params: {
        "$top": "10",
        "$format": "JSON"
      }
    });
    // console.log(response.data);
    tdxSpot.value = response.data.map((item) => {
      return {
        City: item.City,
        RestaurantID: item.RestaurantID,
        RestaurantName: item.RestaurantName,
        Class: item?.Class || "",
        Picture: {
          PictureUrl1: item?.Picture?.PictureUrl1 || "",
        },
        Position: item.Position,
      }
    });
  } catch (error) {
    alert(error);
  }
}

// 取得 google 地圖圖資
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
      title: tdxSpot.value[i].name,
      label: (10 + i).toString(36).toUpperCase(), // i=0 時為 A、=1 時為B，類推
      // label: label.value[i],
    });
    bounds.extend(marker.position); // 把 marker 的座標放進 bounds
  }
  map.fitBounds(bounds); // 計算 markers 中心並自適應地圖大小

}

// 點擊切換至細節頁
async function handleSiteClick(site) {
  console.log("site.RestaurantID", site.RestaurantID);
  console.log(city.value);
  await router.push({ path: `/food/${city.value}/${site.RestaurantID}` });
  await router.go();
}

// hook
onMounted(async () => {
  const currentCity = cityList.value.find(
    // 從 path: '/foods/:city?' 取得 route.params.city 的值，比對符合後轉成全小寫
    item => item.name.toLowerCase() === route.params.city.toLowerCase()
  );
  city.value = currentCity?.name || city.value;
  router.replace(`/foods/${city.value}/`);
  await getRestaurants();
  await getMap();
});
</script>

<style scoped lang="scss">
/* main */
/* main {
  height: 99%;
  margin-bottom: -300px;
} */

.area-map {
  height: 70vh;
}

.area-site {
  width: 50%;
  height: 70vh;
  overflow-y: scroll;

  .card {
    cursor: pointer;
    height: 100%;

    img {
      height: 200px;
    }

    &:hover {
      /* offset-x | offset-y | blur-radius | spread-radius | color */
      box-shadow: 5px 5px 5px 1px rgba(0, 0, 0, 0.2);
    }
  }

  .circle-label {
    color: #fff;
    font-weight: bold;
    background-color: #392A93;
    width: 30px;
    height: 30px;
    border-radius: 999px;
    text-align: center;
    margin-bottom: 5px;
  }

  h5 {
    font-size: large;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  span {
    margin-right: 5px;
  }
}
</style>
