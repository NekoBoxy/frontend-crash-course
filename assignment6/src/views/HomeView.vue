<template>
  <main>
    <CNavbar />
    <!-- Swiper Infinite loop-->
    <div class="container">
      <div class="row">
        <div class="landing-swiper">
          <div ref="mySwiper" class="swiper my-Swiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(site, index) in landingData" v-bind:key="index">
                <RouterLink :to="`/point/${site.cityEn}/${site.id}`" @click="handleSiteClick(site)">
                  <div class="swiper-background" :style="{ 'background-image': 'url(' + site.img + ')' }">
                    <div class="swiper-text">
                      <span>{{ site.cityZhTW }}</span>
                      <span>{{ site.name }}</span>
                      <button type="button">GO</button>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- tabs -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="recreation-tab" data-bs-toggle="tab" data-bs-target="#view-point-card"
            type="button" role="tab" aria-controls="recreation" aria-selected="true">
            <span>出門走走吧</span>
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="nature-tab" data-bs-toggle="tab" data-bs-target="#food-card" type="button"
            role="tab" aria-controls="nature" aria-selected="false">
            <span>享受美食吧</span>
          </button>
        </li>
      </ul>
      <!-- (網格)卡片內容 -->
      <div class="tab-content" id="myTabContent">
        <!-- 出門走走吧 -->
        <div class="tab-pane fade show active" id="view-point-card" role="tabpanel" aria-labelledby="各縣市遊玩景點">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col-3 view-cards" v-for="site in viewPointCards" :key="site.cityEn">
              <RouterLink :to="`/points/${site.cityEn}`" @click="handleCityClick(site)">
                <div class="card">
                  <img :src="site.img" class="card-img" alt="縣市圖片">
                  <div class="card-img-overlay">
                    <span class="card-title" :title="site.cityZhTW">{{ site.cityZhTW }}</span>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <!-- 享用美食吧 -->
        <div class="tab-pane fade" id="food-card" role="tabpanel" aria-labelledby="各縣市美食餐廳">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col-3 view-cards" v-for="site in foodCards" :key="site.cityEn">
              <RouterLink :to="`/points/${site.cityEn}`" @click="handleFoodClick(site)">
                <div class="card">
                  <img :src="site.img" class="card-img" alt="縣市圖片">
                  <div class="card-img-overlay">
                    <span class="card-title" :title="site.cityZhTW">{{ site.cityZhTW }}</span>
                  </div>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
      <h5 class="text-center mt-5 mb-3" style="font-weight: bold;">熱門景點</h5>
      <div class="row">
        <div class="col-3 hot-spot" v-for="site in hotSpots" :key="site.name">
          <RouterLink :to="`/point/${site.location}/${site.id}`" @click="handleSiteClick(site)">
            <div class="card">
              <img :src="site.img" class="card-img-top" alt="景點圖片">
              <div class="card-body hot-spot-text">
                <span class="card-title" :title="site.name">{{ site.name }}</span>
                <p class="card-text">{{ site.cityZhTW }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <h5 class="text-center mt-5 mb-3" style="font-weight: bold;">人氣美食</h5>
      <div class="row">
        <div class="col-3 hot-spot" v-for="food in hotFoods" :key="food.name">
          <RouterLink :to="`/food/${food.location}/${food.id}`" @click="handleShopClick(food)">
            <div class="card">
              <img :src="food.img" class="card-img-top" alt="美食圖片">
              <div class="card-body hot-spot-text">
                <span class="card-title" :title="food.name">{{ food.restaurantName }}</span>
                <p class="card-text">{{ `${food.cityZhtw} ${food.title}` }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <!-- 訂閱 email -->
      <div class="subscribe mt-5">
        <h5 class="text-center">訂閱我們，獲得最在地的旅遊資訊！</h5>
        <span class="d-block text-center">每週六一封，不隨意打擾，且隨時可以取消</span>
        <div style="text-align: center; margin-top: 10px;">
          <input type="text" placeholder="請輸入你的 email" style="outline: none; padding: 15px;">
          <button type="button">訂閱</button>
        </div>
      </div>
    </div>
    <CFooter />
  </main>
</template>

<script setup>
import CNavbar from "../components/CNavbar.vue";
import CFooter from "../components/CFooter.vue";
import { ref, onMounted } from "vue";
// import axios from 'axios';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
// import axios from "axios";
import { RouterLink, useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// init Swiper:
const mySwiper = ref(null);

const landingData = ref([
  {
    id: "C1_382000000A_109990",
    name: "九份老街",
    cityZhTW: "新北市",
    cityEn: "NewTaipei",
    img: new URL("../assets/images/landing01.png", import.meta.url).href
  },
  {
    id: "C1_382000000A_109990",
    name: "台北 101",
    cityZhTW: "台北市",
    cityEn: "Taipei",
    img: new URL("../assets/images/landing02.png", import.meta.url).href
  },
  {
    id: "C1_315081100H_000036",
    name: "紙教堂",
    cityZhTW: "南投縣",
    cityEn: "NantouCounty",
    img: new URL("../assets/images/landing04.jpg", import.meta.url).href
  },
  {
    id: "C1_315081800H_000055",
    name: "龍洞灣海洋公園",
    cityZhTW: "新北市",
    cityEn: "NewTaipei",
    img: new URL("../assets/images/landing03.jpg", import.meta.url).href,
  },
]);

// tabs 出門走走吧 資料
const viewPointCards = ref([
  {
    img: new URL("../assets/images/cardTY.jpg", import.meta.url).href,
    cityZhTW: "桃園市",
    cityEn: "Taoyuan",
  },
  {
    img: new URL("../assets/images/cardPH.jpg", import.meta.url).href,
    cityZhTW: "澎湖縣",
    cityEn: "PenghuCounty",
  },
  {
    img: new URL("../assets/images/cardNT.jpg", import.meta.url).href,
    cityZhTW: "南投縣",
    cityEn: "NantouCounty",
  },
  {
    img: new URL("../assets/images/cardCY.jpg", import.meta.url).href,
    cityZhTW: "嘉義縣",
    cityEn: "ChiayiCounty",
  },
  {
    img: new URL("../assets/images/cardTT.jpg", import.meta.url).href,
    cityZhTW: "台東縣",
    cityEn: "TaitungCounty",
  },
  {
    img: new URL("../assets/images/cardLC.jpg", import.meta.url).href,
    cityZhTW: "連江縣",
    cityEn: "LienchiangCounty",
  },
]);

// tabs 享受美食吧 資料
const foodCards = ref([
  {
    img: new URL("../assets/images/cardFHL.jpg", import.meta.url).href,
    cityZhTW: "花蓮縣",
    cityEn: "HualienCounty",
  },
  {
    img: new URL("../assets/images/cardFTC.jpg", import.meta.url).href,
    cityZhTW: "台中市",
    cityEn: "Taichung",
  },
  {
    img: new URL("../assets/images/cardFCH.jpg", import.meta.url).href,
    cityZhTW: "彰化縣",
    cityEn: "ChanghuaCounty",
  },
  {
    img: new URL("../assets/images/cardFTN.jpg", import.meta.url).href,
    cityZhTW: "台南市",
    cityEn: "Tainan",
  },
  {
    img: new URL("../assets/images/cardFYL.jpg", import.meta.url).href,
    cityZhTW: "雲林縣",
    cityEn: "YunlinCounty",
  },
  {
    img: new URL("../assets/images/cardFNP.jpg", import.meta.url).href,
    cityZhTW: "新北市",
    cityEn: "NewTaipei",
  },
]);

// 熱門景點
const hotSpots = ref([
  {
    name: "陽明山國家公園冷水坑",
    img: new URL("../assets/images/hotSite01.jpg", import.meta.url).href,
    cityZhTW: "台北",
    cityEn: "Taipei",
    id: "C1_379000000A_000009",
  },
  {
    name: "石梯坪",
    img: new URL("../assets/images/hotSite02.png", import.meta.url).href,
    cityZhTW: "花蓮",
    cityEn: "HualienCounty",
    id: "C1_315080500H_000012",
  },
  {
    name: "鹿耳門天后宮",
    img: new URL("../assets/images/hotSite03.png", import.meta.url).href,
    cityZhTW: "台南",
    cityEn: "Tainan",
    id: "C1_315081600H_000066",
  },
  {
    name: "忠義山親山步道",
    img: new URL("../assets/images/hotSite04.png", import.meta.url).href,
    cityZhTW: "台北",
    cityEn: "Taipei",
    id: "C1_379000000A_000013",
  },
]);

// 人氣美食
const hotFoods = ref([
  {
    id: "C3_376480000A_000315",
    title: "中式美食",
    cityEn: "NantouCounty",
    cityZhtw: "南投縣",
    restaurantName: "和雅谷餐廳",
    img: new URL("../assets/images/pork.jpg", import.meta.url).href,
  },
  {
    id: "C3_376490000A_001108",
    title: "特色小吃",
    cityEn: "YunlinCounty",
    cityZhtw: "雲林縣",
    restaurantName: "華山小吃部",
    img: new URL("../assets/images/chicken.jpg", import.meta.url).href,
  },
  {
    id: "C3_376600000A_000005",
    title: "異國料理",
    cityEn: "Chiayi",
    cityZhtw: "嘉義市",
    restaurantName: "京宴港式創意料理",
    img: new URL("../assets/images/sugar.jpg", import.meta.url).href,
  },
  {
    id: "C3_376490000A_000796",
    title: "甜點冰品",
    cityEn: "YunlinCounty",
    cityZhtw: "雲林縣",
    restaurantName: "奶油巴士烘焙屋",
    img: new URL("../assets/images/sweet.jpg", import.meta.url).href,
  },
]);

// 跳轉指定景點城市頁
async function handleCityClick(site) {
  await router.push({ path: `/points/${site.cityEn}` });
  await router.go();
}

// 跳轉指定美食城市頁
async function handleFoodClick(site) {
  await router.push({ path: `/foods/${site.cityEn}` });
  await router.go();
}

// 跳轉熱門景點指定細節頁
async function handleSiteClick(site) {
  await router.push({ path: `/point/${site.cityEn}/${site.id}` });
  await router.go();
}

// 跳轉熱門餐廳指定細節頁
async function handleShopClick(food) {
  await router.push({ path: `/food/${food.cityEn}/${food.id}` });
  await router.go();
}

onMounted(async () => {
  new Swiper(mySwiper.value, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});


</script>

<style scoped lang="scss">
/* main */
main {
  height: 100%;
  margin-bottom: -300px;
}


/* landing swiper */
.landing-swiper {
  width: 100%;
  margin-bottom: 20px;
}

.my-Swiper {
  width: 100%;
  height: 100%;
  padding-bottom: 50px;

  .swiper-slide {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
  }

  .swiper-background {
    border-radius: 25px;
    width: 1000px;
    height: 500px;
    background-position: center center;
    background-size: cover;
    position: relative;
  }
}

.swiper-text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #02020225;
  backdrop-filter: blur(1px);
  position: absolute;
  right: 0%;
  bottom: 15%;

  span,
  button {
    color: #fff;
    font-weight: 700;
  }

  span {
    display: inline;
    line-height: 40px;
    font-size: 36px;
    margin-right: 20px;
  }

  button {
    border-radius: 15px;
    font-size: 30px;
    padding: 10px;
    border: none;
    background-color: #4633B4;

    &:hover {
      background-color: #fff;
      color: #4633B4;
    }
  }
}

/* tabs */
.nav-tabs {
  display: flex;
  justify-content: center;
  border-bottom: none;
  margin-bottom: 30px;

  span {
    font-size: 24px;
  }
}

.nav-link {
  color: #907df7;

}

.nav-item .active {
  font-weight: 700;
  box-shadow: 0px 5px 0px 0px #392A93;
}

.tab-pane {
  margin-bottom: 30px;

  .card-img-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span {
    font-size: 26px;
    font-weight: 700;
    color: #FEFEFE;
  }
}

/* 熱門景點、人氣美食 */
.hot-spot,
.view-cards {

  .card {
    position: relative;

    img {
      height: 213px;
      object-fit: cover;
      filter: brightness(0.75);
      /* 替圖片加上亮度0.75的濾鏡 */
    }
  }
}

.hot-spot-text {
  text-align: center;

  span {
    color: #392A93;
    line-height: 26px;
    font-weight: bold;
  }

  p {
    color: #392a93bd;
    font-size: 18px;
    font-weight: lighter;
  }
}

/* 訂閱 */
.subscribe {
  background-color: #FA7E5F;
  width: 100%;
  height: 220px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h5 {
    font-size: 26px;
    font-weight: 700;
  }

  span {
    font-size: 18px;
    font-weight: 400;
  }

  span,
  button {
    color: #FEFEFE;
  }

  input,
  button {
    border-radius: 12px;
    border: none;
    height: 50px;
  }

  input {
    margin-right: 10px;
    padding: 16px;
  }

  button {
    width: 60px;
    background-color: #392A93;
  }
}


/* 桌機 1250px~
 @media only screen and (min-width: 1250px) {
   .my-Swiper {
     width: 100%;
   }
 }

 平板 501~1249px
 @media only screen and (max-width: 1249px) {
   .my-Swiper {
     columns: 1;
   }
 }

 手機 ~500px
 @media only screen and (max-width: 500px) {}
 */
</style>