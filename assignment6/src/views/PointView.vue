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
              <li class="breadcrumb-item active" aria-current="page">{{ targetSpot.City }}</li>
            </ol>
          </nav>
        </div>
      </div>
      <!-- 景點細節 -->
      <div class="row">
        <div class="col-6" style="text-align: center;">
          <img :src="targetSpot.Picture.PictureUrl1" alt="景點介紹用圖片" srcset=""
            style="width: 100%; object-fit: cover; border-radius: 20px;">
          <!-- 圖片描述 -->
          <span>{{ targetSpot.Picture?.PictureDescription1 }}</span>
        </div>
        <div class="col-6">
          <div>
            <!-- 所屬城市標籤 -->
            <span class="badge rounded-pill bg-success text-white" style="margin-right: 5px;">
              {{ targetSpot.City }}</span>
            <!-- 景點屬性標籤 -->
            <span class="badge rounded-pill bg-success text-white" style="margin-right: 5px;" v-show="targetSpot.Class1">
              {{ targetSpot.Class1 }}
            </span>
            <span class="badge rounded-pill bg-success text-white" style="margin-right: 5px;" v-show="targetSpot.Class2">
              {{ targetSpot.Class2 }}
            </span>
            <span class="badge rounded-pill bg-success text-white" style="margin-right: 5px;" v-show="targetSpot.Class3">
              {{ targetSpot.Class3 }}
            </span>
            <span class="badge rounded-pill bg-success text-white" v-show="targetSpot.Level">
              {{ targetSpot.Level }}
            </span>
          </div>
          <!-- 景點營業時間 -->
          <div class="point-detail">
            <h5 class="point-item">{{ targetSpot.ScenicSpotName }}</h5>
            <div class="point-item" v-show="targetSpot.OpenTime">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2ZM0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM10 5C10.5523 5 11 5.44772 11 6V10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H10C9.44771 12 9 11.5523 9 11V6C9 5.44772 9.44771 5 10 5Z"
                  fill="#392A93" />
              </svg>{{ targetSpot.OpenTime }}
            </div>
            <!-- 連絡電話 -->
            <div class="point-item" v-show="targetSpot.Phone">
              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M5.43052 2.589C5.35991 2.27418 5.07177 2.05675 4.74965 2.07524L1.91943 2.2377C1.57249 2.25762 1.30995 2.54711 1.31835 2.87712C1.51756 10.7027 4.25943 15.0881 7.61046 17.4395C10.9933 19.8133 15.1168 20.1994 18.2014 19.7777C18.4689 19.7411 18.6916 19.494 18.6816 19.1618L18.6099 16.7974C18.6017 16.5268 18.4287 16.2887 18.1739 16.1971L14.1908 14.7666C13.8987 14.6617 13.5731 14.7747 13.4088 15.038L12.2772 16.852C11.8324 17.5651 10.946 17.9608 10.0864 17.6728C5.30737 16.0715 3.97391 12.1287 3.89099 9.80876C3.87083 9.24461 4.13187 8.75055 4.49738 8.41308L6.07341 6.95796C6.24619 6.79844 6.32088 6.55895 6.26942 6.32949L5.43052 2.589ZM4.67411 0.759267C5.64045 0.703798 6.50489 1.35607 6.71671 2.30054L7.55561 6.04103C7.70999 6.7294 7.48591 7.44787 6.96759 7.92643L5.39156 9.38156C5.25726 9.50555 5.20416 9.64601 5.20829 9.76168C5.27746 11.697 6.38732 15.0432 10.5052 16.423C10.7248 16.4966 11.0013 16.407 11.1588 16.1544L12.2904 14.3404C12.7832 13.5505 13.7602 13.2113 14.6363 13.526L18.6194 14.9566C19.384 15.2312 19.9028 15.9455 19.9274 16.7575L19.9991 19.1218C20.0277 20.0647 19.3764 20.9475 18.3799 21.0837C15.0761 21.5354 10.5873 21.1387 6.85332 18.5185C3.08752 15.876 0.207994 11.0562 0.000638074 2.91066C-0.0263132 1.85193 0.80393 0.981421 1.84389 0.921726L4.67411 0.759267Z"
                  fill="#392A93" />
              </svg>{{ targetSpot.Phone }}
            </div>
            <!-- 地址 -->
            <div class="point-item" v-show="targetSpot.Address">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M9.6 2.46154C5.65062 2.46154 2.56 5.37438 2.56 8.83916C2.56 9.58165 2.95546 10.7555 3.72531 12.2389C4.46998 13.6737 5.47566 15.2337 6.50029 16.6905C7.5218 18.1428 8.54574 19.4695 9.31559 20.4344C9.41488 20.5589 9.50987 20.6772 9.6 20.7889C9.69013 20.6772 9.78512 20.5589 9.88441 20.4344C10.6543 19.4695 11.6782 18.1428 12.6997 16.6905C13.7243 15.2337 14.73 13.6737 15.4747 12.2389C16.2445 10.7555 16.64 9.58165 16.64 8.83916C16.64 5.37438 13.5494 2.46154 9.6 2.46154ZM9.6 22.7692C8.61136 23.551 8.61125 23.5508 8.6111 23.5507L8.61064 23.5501L8.60917 23.5484L8.60397 23.5423L8.58473 23.5197L8.51226 23.434C8.44933 23.3594 8.35785 23.2503 8.24189 23.1106C8.01001 22.8311 7.67996 22.4285 7.28441 21.9327C6.49426 20.9423 5.4382 19.5744 4.37971 18.0694C3.32434 16.5689 2.25002 14.909 1.43469 13.338C0.644535 11.8155 0 10.1977 0 8.83916C0 3.89995 4.35936 0 9.6 0C14.8406 0 19.2 3.89995 19.2 8.83916C19.2 10.1977 18.5555 11.8155 17.7653 13.338C16.95 14.909 15.8757 16.5689 14.8203 18.0694C13.7618 19.5744 12.7057 20.9423 11.9156 21.9327C11.52 22.4285 11.19 22.8311 10.9581 23.1106C10.8421 23.2503 10.7507 23.3594 10.6877 23.434L10.6153 23.5197L10.596 23.5423L10.5908 23.5484L10.5894 23.5501L10.5889 23.5507C10.5888 23.5508 10.5886 23.551 9.6 22.7692ZM9.6 22.7692L10.5886 23.551C10.3455 23.8353 9.98279 24 9.6 24C9.21721 24 8.8545 23.8353 8.61136 23.551L9.6 22.7692ZM9.6 7.38462C8.53961 7.38462 7.68 8.21117 7.68 9.23077C7.68 10.2504 8.53961 11.0769 9.6 11.0769C10.6604 11.0769 11.52 10.2504 11.52 9.23077C11.52 8.21117 10.6604 7.38462 9.6 7.38462ZM5.12 9.23077C5.12 6.8517 7.12576 4.92308 9.6 4.92308C12.0742 4.92308 14.08 6.8517 14.08 9.23077C14.08 11.6098 12.0742 13.5385 9.6 13.5385C7.12576 13.5385 5.12 11.6098 5.12 9.23077Z"
                  fill="#392A93" />
              </svg>{{ targetSpot.Address }}
            </div>
            <!-- 購票資訊 -->
            <div class="point-item" v-show="targetSpot.TicketInfo">
              購票資訊：
              <span>{{ targetSpot.TicketInfo }}</span>
            </div>
            <!-- 關鍵字 -->
            <div class="point-item" v-show="targetSpot.Keyword">
              關鍵字：
              <span>{{ targetSpot.Keyword }}</span>
            </div>
            <!-- 官網 -->
            <div class="point-item" v-show="targetSpot.WebsiteUrl">
              官網：
              <a :href="targetSpot.WebsiteUrl" target="_blank">{{ targetSpot.WebsiteUrl }}</a>
            </div>
            <!-- 旅遊資訊 -->
            <div class="point-item" v-show="targetSpot.TravelInfo">
              旅遊資訊：
              <span>{{ targetSpot.TravelInfo }}</span>
            </div>
            <!-- 備註 -->
            <div class="point-item" v-show="targetSpot.Remarks">
              備註：
              <span>{{ targetSpot.Remarks }}</span>
            </div>
            <!-- mapurl -->
            <div class="point-item" v-show="targetSpot.MapUrl">
              mapurl：
              <span>{{ targetSpot.MapUrl }}</span>
            </div>
          </div>
        </div>
        <div class="col-12 mt-4">
          {{ targetSpot.DescriptionDetail }}
        </div>
        <div class="col-12 mt-4 map" ref="pointMap"></div>
        <div class="col-12 mt-4 nearby-spot">
          <h5>{{ `看看${targetSpot.City}的其他景點` }}</h5>
          <!-- 附近景點卡片 -->
          <div class="row row-cols-md-4 row-cols-1 g-4">
            <div class="col" v-for="(spot, index) in spots" :key="index">
              <RouterLink :to="`/point/${city}/${spot.ScenicSpotID}`" @click="handleSiteClick(spot)">
                <div class="card">
                  <div v-if="spot.Picture?.PictureUrl1">
                    <img :src="spot.Picture.PictureUrl1" class="card-img-top" alt="景點圖片">
                  </div>
                  <div v-else>
                    <img src="../assets/images/noimage.png" class="card-img-top" alt="資料庫無景點圖片">
                  </div>
                  <div class="card-body">
                    <span class="card-title">{{ spot.ScenicSpotName }}</span>
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
const targetSpot = ref({
  City: "",
  ScenicSpotID: "",
  Class1: "",
  Class2: "",
  Class3: "",
  Level: "",
  ScenicSpotName: "",
  DescriptionDetail: "",
  Picture: {},
  Phone: "",
  OpenTime: "",
  TravelInfo: "",
  // SrcUpdateTime: "",
  // UpdateTime: "",
  Position: {
    GeoHash: "",
    PositionLat: 0,
    PositionLon: 0,
  },
  Address: "",
  TicketInfo: "",
  Remarks: "",
  WebsiteUrl: "",
  MapUrl: "",
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

// 從 tdx 拿景點資料
// 取得指定景點資料並存入 targetSpot
// route.params.id = C1_379000000A_000001
// %24 = $
async function getSite() {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city.value}`,
      params: {
        "$filter": `contains(ScenicSpotID, '${id.value}')`,
        "$format": "JSON"
      }
    });
    targetSpot.value = response.data[0];
  } catch (error) {
    alert(error);
  }
}

// 取得指定縣市景點資料 4 筆
async function getOtherSpots() {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city.value}`,
      params: {
        "$filter": `ScenicSpotID ne '${id.value}'`, // 排除指定 id 的資料
        "$format": "JSON",
        "$Top": 4
      }
    });
    spots.value = response.data;
  } catch (error) {
    alert(error);
  }
}

// const specfic = ref([]);
// 取得指定景點附近景點資料
// async function getSpecficSpots() {
//   try {
//     const response = await axios({
//       method: "get",
//       url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city.value}`,
//       params: {
//         // "$filter": `ScenicSpotID ne '${id.value}'`, // 排除指定 id 的資料
//         // 尋找 社子島環島與二重疏洪道自行車道 
//         // 緯度 lat ,經度 lon,範圍x公尺內
//         // 拿的到資料但是是空的
//         "$spatialFilter": `nearby(ScenicSpotID, 25.10984992980957, 121.46605682373047, 3000)`,
//         "$format": "JSON",
//         "$Top": 4,
//       }
//     });
//     specfic.value = response.data;
//     console.log("specfic.value", specfic.value);
//   } catch (error) {
//     alert(error);
//   }
// }

// 將 tdx 圖資顯示在 google map 上
async function getMap() {
  const loader = await new Loader({
    apiKey: "AIzaSyC42jlw7i6yloHhAXQp_M7Lxh7_KxzY9bI",
    version: "weekly",
    libraries: ["places"]
  });

  const mapOptions = {
    center: {
      lat: targetSpot.value.Position.PositionLat,
      lng: targetSpot.value.Position.PositionLon
    },
    zoom: 15
  };

  const google = await loader.load();
  const map = await new google.maps.Map(pointMap.value, mapOptions); // 地圖實體化
  const bounds = await new google.maps.LatLngBounds(); // 自適應地圖可視範圍
  // 在地圖上加入標記
  const marker = await new google.maps.Marker({
    position: {
      lat: targetSpot.value.Position.PositionLat,
      lng: targetSpot.value.Position.PositionLon
    },
    map,
    // title: targetSpot.value.ScenicSpotName,
  });
  bounds.extend(marker.position); // 把 marker 的座標放進 bounds

}

// 點擊切換至細節頁
async function handleSiteClick(spot) {
  await router.push({ path: `/point/${city.value}/${spot.ScenicSpotID}` });
  await router.go();
}

// 為了取得 city 的英文值，在 onmounted 時要得到變數
onMounted(async () => {
  const currentCity = cityList.value.find(
    // 從 path: '/points/:city?' 取得 route.params.city 的值，比對符合後轉成全小寫
    item => item.name.toLowerCase() === route.params.city.toLowerCase()
  );
  city.value = currentCity?.name || city.value;
  id.value = route.params.id;
  router.replace(`/point/${city.value}/${id.value}/`);
  await getSite();
  await getMap();
  await getOtherSpots();
  // await getSpecficSpots();
});
</script>

<style scoped lang="scss">
/* main */
main {
  height: 100%;
  margin-bottom: -300px;
}

.point-detail {
  .point-item {
    margin: 20px 20px 20px 0px;

    svg {
      margin-right: 10px;
    }
  }
}

.map {
  width: 100%;
  height: 100vh;
  border-radius: 20px;
  padding-left: 0rem;
  padding-right: 0rem;
}

.nearby-spot {
  h5 {
    margin: 20px;
    text-align: center;
  }

  .card {
    /* 幫助整張 card 同高 */
    height: 100%;
  }

  img {
    width: 100%;
    height: 213px;
    object-fit: cover;
  }

  .card-body {
    display: flex;
    justify-content: center;
    align-items: center;

    .card-title {
      color: #392A93;
      width: 100%;
      font-weight: bold;
      /* 文字左右對齊 */
      text-align: center;
      line-height: 30px;
      margin-bottom: 0px;
    }
  }
}
</style>