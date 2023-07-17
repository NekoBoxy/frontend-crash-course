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
                <RouterLink to="/foods">美食餐廳</RouterLink>
              </li>
              <li class="breadcrumb-item active" aria-current="page">{{ foodData.City }}</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- 餐廳細節 -->
      <div class="row">
        <div class="col-6 food-img">
          <!-- foodData.Picture 為物件 -->
          <!-- <div v-if="foodData.Picture?.PictureUrl1">
            <img :src="foodData.Picture.PictureUrl1" alt="" srcset=""
              style="width: 100%; object-fit: cover; border-radius: 20px;">
          </div> -->
          <!-- foodData.Picture 為陣列 -->
          <div v-if="foodData.Picture.length > 0">
            <img :src="foodData.Picture[0]" alt="餐廳圖片" srcset="">
          </div>
          <div v-else>
            <img src="../assets/images/noimage.png" alt="沒有提供餐廳圖片" srcset="">
          </div>
        </div>
        <div class="col-6">
          <!-- 標籤 -->
          <div>
            <!-- 所屬城市 -->
            <span class="badge rounded-pill bg-success text-white" style="margin-right: 5px;">
              {{ foodData.City }}</span>
            <!-- 餐廳屬性 -->
            <span class="badge rounded-pill bg-success text-white" v-show="foodData.Class">
              {{ foodData.Class }}
            </span>
          </div>
          <!-- 餐廳細節 -->
          <div class="point-detail">
            <h3 class="point-item">{{ foodData.RestaurantName }}</h3>
            <!-- 營業時間 -->
            <div class="point-item" v-show="foodData.OpenTime">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H10C9.44771 12 9 11.5523 9 11V6C9 5.44772 9.44771 5 10 5Z"
                  fill="#392A93" />
              </svg>{{ foodData.OpenTime }}
            </div>
            <!-- 連絡電話 -->
            <div class="point-item" v-show="foodData.Phone">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.43052 2.589C5.35991 2.27418 5.07177 2.05675 4.74965 2.07524L1.91943 2.2377C1.57249 2.25762 1.30995 2.54711 1.31835 2.87712C1.51756 10.7027 4.25943 15.0881 7.61046 17.4395C10.9933 19.8133 15.1168 20.1994 18.2014 19.7777C18.4689 19.7411 18.6916 19.494 18.6816 19.1618L18.6099 16.7974C18.6017 16.5268 18.4287 16.2887 18.1739 16.1971L14.1908 14.7666C13.8987 14.6617 13.5731 14.7747 13.4088 15.038L12.2772 16.852C11.8324 17.5651 10.946 17.9608 10.0864 17.6728C5.30737 16.0715 3.97391 12.1287 3.89099 9.80876C3.87083 9.24461 4.13187 8.75055 4.49738 8.41308L6.07341 6.95796C6.24619 6.79844 6.32088 6.55895 6.26942 6.32949L5.43052 2.589ZM4.67411 0.759267C5.64045 0.703798 6.50489 1.35607 6.71671 2.30054L7.55561 6.04103C7.70999 6.7294 7.48591 7.44787 6.96759 7.92643L5.39156 9.38156C5.25726 9.50555 5.20416 9.64601 5.20829 9.76168C5.27746 11.697 6.38732 15.0432 10.5052 16.423C10.7248 16.4966 11.0013 16.407 11.1588 16.1544L12.2904 14.3404C12.7832 13.5505 13.7602 13.2113 14.6363 13.526L18.6194 14.9566C19.384 15.2312 19.9028 15.9455 19.9274 16.7575L19.9991 19.1218C20.0277 20.0647 19.3764 20.9475 18.3799 21.0837C15.0761 21.5354 10.5873 21.1387 6.85332 18.5185C3.08752 15.876 0.207994 11.0562 0.000638074 2.91066C-0.0263132 1.85193 0.80393 0.981421 1.84389 0.921726L4.67411 0.759267Z"
                  fill="#392A93" />
              </svg>{{ foodData.Phone }}
            </div>
            <!-- 地址 -->
            <div class="point-item" v-show="foodData.Address">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.6 2.46154C5.65062 2.46154 2.56 5.37438 2.56 8.83916C2.56 9.58165 2.95546 10.7555 3.72531 12.2389C4.46998 13.6737 5.47566 15.2337 6.50029 16.6905C7.5218 18.1428 8.54574 19.4695 9.31559 20.4344C9.41488 20.5589 9.50987 20.6772 9.6 20.7889C9.69013 20.6772 9.78512 20.5589 9.88441 20.4344C10.6543 19.4695 11.6782 18.1428 12.6997 16.6905C13.7243 15.2337 14.73 13.6737 15.4747 12.2389C16.2445 10.7555 16.64 9.58165 16.64 8.83916C16.64 5.37438 13.5494 2.46154 9.6 2.46154ZM9.6 22.7692C8.61136 23.551 8.61125 23.5508 8.6111 23.5507L8.61064 23.5501L8.60917 23.5484L8.60397 23.5423L8.58473 23.5197L8.51226 23.434C8.44933 23.3594 8.35785 23.2503 8.24189 23.1106C8.01001 22.8311 7.67996 22.4285 7.28441 21.9327C6.49426 20.9423 5.4382 19.5744 4.37971 18.0694C3.32434 16.5689 2.25002 14.909 1.43469 13.338C0.644535 11.8155 0 10.1977 0 8.83916C0 3.89995 4.35936 0 9.6 0C14.8406 0 19.2 3.89995 19.2 8.83916C19.2 10.1977 18.5555 11.8155 17.7653 13.338C16.95 14.909 15.8757 16.5689 14.8203 18.0694C13.7618 19.5744 12.7057 20.9423 11.9156 21.9327C11.52 22.4285 11.19 22.8311 10.9581 23.1106C10.8421 23.2503 10.7507 23.3594 10.6877 23.434L10.6153 23.5197L10.596 23.5423L10.5908 23.5484L10.5894 23.5501L10.5889 23.5507C10.5888 23.5508 10.5886 23.551 9.6 22.7692ZM9.6 22.7692L10.5886 23.551C10.3455 23.8353 9.98279 24 9.6 24C9.21721 24 8.8545 23.8353 8.61136 23.551L9.6 22.7692ZM9.6 7.38462C8.53961 7.38462 7.68 8.21117 7.68 9.23077C7.68 10.2504 8.53961 11.0769 9.6 11.0769C10.6604 11.0769 11.52 10.2504 11.52 9.23077C11.52 8.21117 10.6604 7.38462 9.6 7.38462ZM5.12 9.23077C5.12 6.8517 7.12576 4.92308 9.6 4.92308C12.0742 4.92308 14.08 6.8517 14.08 9.23077C14.08 11.6098 12.0742 13.5385 9.6 13.5385C7.12576 13.5385 5.12 11.6098 5.12 9.23077Z"
                  fill="#392A93" />
              </svg>{{ foodData.Address }}
            </div>
            <!-- 官網 -->
            <div class="point-item" v-show="foodData.WebsiteUrl">
              官網：
              <a :href="foodData.WebsiteUrl" target="_blank">{{ foodData.WebsiteUrl }}</a>
            </div>
            <!-- 停車資訊 -->
            <div class="point-item" v-show="foodData?.ParkingInfo">
              {{ foodData.ParkingInfo }}
            </div>
            <!-- MapUrl -->
            <div class="point-item" v-show="foodData?.MapUrl">
              <a :href="foodData.MapUrl" target="_blank">
                {{ foodData.MapUrl }}
              </a>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          {{ foodData.Description }}
        </div>
        <!-- 地圖區 -->
        <div class="col-12 mt-4 map" ref="pointMap"></div>
        <div class="col-12 mt-4 mb-1 nearby-food">
          <h5>{{ `看看${foodData.City}的其他餐廳` }}</h5>
          <!-- 附近餐廳卡片 -->
          <div class="row row-cols-md-4 row-cols-1 g-4">
            <div class="col" v-for="(spot, index) in spots" :key="index">
              <RouterLink :to="`/food/${city}/${spot.RestaurantID}`" @click="handleSiteClick(spot)">
                <div class="card">
                  <div v-if="spot.Picture?.PictureUrl1">
                    <img :src="spot.Picture.PictureUrl1" class="card-img-top" alt="餐廳圖片">
                  </div>
                  <div v-else>
                    <img src="../assets/images/noimage.png" class="card-img-top" alt="資料庫無餐廳圖片">
                  </div>
                  <div class="card-body">
                    <span class="card-title">{{ spot.RestaurantName }}</span>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
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
import { RouterLink, useRouter, useRoute } from 'vue-router';
import { Loader } from '@googlemaps/js-api-loader';

const router = useRouter();
const route = useRoute();
const pointMap = ref(null);
const city = ref("");
const id = ref("");
const spots = ref([]);
const foodData = ref({
  Picture: [],
});
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

// 從 tdx 拿餐廳資料
// 取得指定餐廳資料並存入 foodData
// route.params.id = C1_379000000A_000001
// %24 = $
async function getTargetFood() {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/Restaurant/${city.value}`,
      params: {
        "$filter": `contains(RestaurantID, '${id.value}')`,
        "$format": "JSON"
      }
    });
    console.log("response.data", response.data);
    const foods = await transformResult(response.data);
    // console.log("foods", foods);
    foodData.value = foods[0];
    // console.log("foodData.value", foodData.value);
    console.log("foodData.value.Picture", foodData.value.Picture);
  } catch (error) {
    alert(error);
  }
}

// 取得指定縣市餐廳資料 4 筆
async function getOtherFoods() {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/Restaurant/${city.value}`,
      params: {
        "$filter": `RestaurantID ne '${id.value}'`, // 排除指定 id 的資料
        "$format": "JSON",
        "$Top": 4
      }
    });
    console.log("getOtherFoods.data", response.data);
    spots.value = response.data;
  } catch (error) {
    alert(error);
  }
}

// 將 tdx 圖資顯示在 google map 上
async function getMap() {
  const loader = await new Loader({
    apiKey: "AIzaSyC42jlw7i6yloHhAXQp_M7Lxh7_KxzY9bI",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: foodData.value.Position.PositionLat,
      lng: foodData.value.Position.PositionLon
    },
    zoom: 15
  };

  const google = await loader.load();
  const map = await new google.maps.Map(pointMap.value, mapOptions); // 地圖實體化
  const bounds = await new google.maps.LatLngBounds(); // 自適應地圖可視範圍
  // 在地圖上加入標記
  const marker = await new google.maps.Marker({
    position: {
      lat: foodData.value.Position.PositionLat,
      lng: foodData.value.Position.PositionLon
    },
    map,
    // title: foodData.value.ScenicSpotName,
  });
  bounds.extend(marker.position); // 把 marker 的座標放進 bounds
}

// 將來自 api 的資料整理後回傳
async function transformResult(list) {
  return list.map((item) => {
    return {
      City: item.City,
      RestaurantID: item.RestaurantID,
      RestaurantName: item.RestaurantName,
      Description: item.Description,
      Address: item.Address,
      Phone: item.Phone,
      OpenTime: item.OpenTime,
      WebsiteUrl: item?.WebsiteUrl || "",
      Class: item?.Class || "",
      MapUrl: item?.MapUrl || "",
      ParkingInfo: item?.ParkingInfo || "",
      // Picture 為物件
      // Picture: {
      //   PictureUrl1: item.Picture?.PictureUrl1 || '',
      //   PictureUrl2: item.Picture?.PictureUrl2 || '',
      //   PictureUrl3: item.Picture?.PictureUrl3 || '',
      // },
      // picture 為陣列
      Picture: [
        ...(item.Picture?.PictureUrl1 ? [item.Picture?.PictureUrl1] : []),
        ...(item.Picture?.PictureUrl2 ? [item.Picture?.PictureUrl2] : []),
        ...(item.Picture?.PictureUrl3 ? [item.Picture?.PictureUrl3] : []),
      ],
      Position: {
        PositionLon: item?.Position?.PositionLon,
        PositionLat: item?.Position?.PositionLat,
      },
    }
  });
}

// 點擊切換至指定餐廳細節頁
async function handleSiteClick(spot) {
  console.log("spot.RestaurantID", spot.RestaurantID);
  console.log("city.value", city.value);
  await router.push({ path: `/food/${city.value}/${spot.RestaurantID}` });
  await router.go();
}

// 為了取得 city 的英文值，在 onmounted 時要得到變數
onMounted(async () => {
  // console.log("route.params", route.params);
  const currentCity = cityList.value.find(
    // 從 path: '/points/:city?' 取得 route.params.city 的值，比對符合後轉成全小寫
    item => item.name.toLowerCase() === route.params.city.toLowerCase()
  );
  city.value = currentCity?.name || city.value;
  id.value = route.params.id;
  // console.log("city.value", city.value);
  // console.log("id.value", id.value);
  router.replace(`/food/${city.value}/${id.value}/`);
  await getTargetFood();
  await getMap();
  await getOtherFoods();
});
</script>

<style scoped lang="scss">
/* main */
main {
  height: 100%;
  margin-bottom: -300px;
}

.food-img {
  img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 20px;
  }
}

.point-detail {
  .point-item {
    margin: 20px 20px 20px 0px;

    svg {
      margin-right: 10px;
    }
  }

  h3 {
    font-weight: bold;
  }
}

.map {
  width: 100%;
  height: 100vh;
  border-radius: 20px;
  padding-left: 0rem;
  padding-right: 0rem;
}

.card {
  height: 100%;
}

.nearby-food {
  h5 {
    margin: 20px;
    text-align: center;
  }

  img {
    width: 100%;
    height: 213px;
  }

  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;

    .card-title {
      color: #392A93;
      width: 100%;
      font-weight: bold;
      text-align: center;
      margin-bottom: 0px;
    }
  }
}
</style>
