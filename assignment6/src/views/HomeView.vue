<template>
  <main>
    <CNavbar />
    <!-- Swiper Infinite loop-->
    <div class="container">
      <div class="row">
        <div class="landing-swiper">
          <div ref="mySwiper" class="swiper my-Swiper" style="padding-bottom: 50px;">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(city, index) in frontCarousel" v-bind:key="index">
                <div class="swiper-background" :style="{ 'background-image': 'url(' + city.img + ')' }">
                  <div class="swiper-text">
                    <h5>{{ city.title }}</h5>
                    <button type="button">新北</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!-- tabs -->
      <ul class="nav nav-tabs d-flex justify-content-center" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="lively-tab" data-bs-toggle="tab" data-bs-target="#lively-card" type="button"
            role="tab" aria-controls="lively" aria-selected="true">熱鬧繁華</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="nature-tab" data-bs-toggle="tab" data-bs-target="#nature-card" type="button"
            role="tab" aria-controls="nature" aria-selected="false">與自然共舞</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="human-tab" data-bs-toggle="tab" data-bs-target="#human-card" type="button"
            role="tab" aria-controls="human" aria-selected="false">純樸人情味</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="warm-tab" data-bs-toggle="tab" data-bs-target="#warm-card" type="button" role="tab"
            aria-controls="warm" aria-selected="false">南島奔放</button>
        </li>
      </ul>
      <!-- (網格)卡片內容 -->
      <div class="tab-content" id="myTabContent">
        <!-- 熱鬧 -->
        <div class="tab-pane fade show active" id="lively-card" role="tabpanel" aria-labelledby="lively">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div v-for="(site, index) in livelyCard" :key="site + index">
              <div class="col" :style="{ 'background-image': 'url(' + site.img + ')' }">
                <h5 class="text-center"> {{ site.title }}</h5>
              </div>
            </div>
          </div>
        </div>
        <!-- 與自然共舞 -->
        <div class="tab-pane fade" id="nature-card" role="tabpanel" aria-labelledby="nature">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div v-for="(site, index) in natureCard" :key="site + index">
                <div class="col" :style="{ 'background-image': 'url(' + site.img + ')' }">
                  <h5 class="text-center"> {{ site.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 純樸人情味 -->
        <div class="tab-pane fade" id="human-card" role="tabpanel" aria-labelledby="human">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div v-for="(site, index) in humanCard" :key="site + index">
                <div class="col" :style="{ 'background-image': 'url(' + site.img + ')' }">
                  <h5 class="text-center"> {{ site.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 南島奔放 -->
        <div class="tab-pane fade" id="warm-card" role="tabpanel" aria-labelledby="warm">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div v-for="(site, index) in warmCard" :key="site + index">
                <div class="col" :style="{ 'background-image': 'url(' + site.img + ')' }">
                  <h5 class="text-center"> {{ site.title }}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5 class="text-center mt-5 mb-2">熱門景點</h5>
      <!-- swiper Slides per view auto -->
      <!-- <div ref="mySwiper2" class="swiper my-Swiper-2">
        <div class="swiper-wrapper">
          <div v-for="(site, index) in hotSpots" :key="40676 + index">
            <div class="swiper-slide">
              <div class="card">
                <img :src="site.img" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">{{ site.name }}</h5>
                  <p class="card-text">{{ site.location }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div> -->
      <div class="row">
        <div class="col-3 hot-spot" v-for="site in hotSpots" :key="site.name">
          <RouterLink :to="`/point/${site.location}/${site.id}`" @click="handleSiteClick(site)">
            <div class="card">
              <img :src="site.img" class="card-img-top" style="width: 100%; height: 213px;" alt="景點圖片">
              <div class="card-body">
                <h5 class="card-title" :title="site.name">{{ site.name }}</h5>
                <p class="card-text">{{ site.cityZhTW }}</p>
              </div>
            </div>
          </RouterLink>
        </div>
      </div>
      <h5 class="text-center mt-5 mb-2">人氣美食</h5>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div v-for="(catalogy, index) in foods" :key="8576 + index">
          <div class="col">
            <div class="card">
              <img :src="catalogy.img" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">{{ catalogy.title }}</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 訂閱 email -->
      <div class="subscribe mt-5">
        <h5 class="text-center">訂閱我們，獲得最在地的旅遊資訊！</h5>
        <span class="d-block text-center">每週六一封，不隨意打擾，且隨時可以取消</span>
        <div style="text-align: center; margin-top: 10px;">
          <input type="text" placeholder="請輸入你的 email">
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
import axios from "axios";
import { RouterLink, useRouter, useRoute } from 'vue-router';

const router = useRouter();
// const route = useRoute();
// init Swiper:
const mySwiper = ref(null);
// const mySwiper2 = ref(null);

const frontCarousel = ref([
  {
    title: "九份老街",
    img: new URL("../assets/images/hry.png", import.meta.url).href
  },
  {
    title: "台北 101",
    img: new URL("../assets/images/kdg.png", import.meta.url).href
  },
]);

// tabs 資料
const livelyCard = ref([
  {
    title: "台北",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
  {
    title: "新北",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
  {
    title: "桃園",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台中",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台南",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
  {
    title: "高雄",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
]);
const natureCard = ref([
  {
    title: "桃園",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台中",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台北",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
  {
    title: "新北",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
  {
    title: "台南",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
  {
    title: "高雄",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
]);
const humanCard = ref([
  {
    title: "台南",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
  {
    title: "高雄",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
  {
    title: "桃園",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台中",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台北",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
  {
    title: "新北",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
]);
const warmCard = ref([
  {
    title: "台中",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台南",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
  {
    title: "高雄",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
  {
    title: "桃園",
    img: new URL("../assets/images/3.png", import.meta.url).href
  },
  {
    title: "台北",
    img: new URL("../assets/images/1.png", import.meta.url).href
  },
  {
    title: "新北",
    img: new URL("../assets/images/2.png", import.meta.url).href
  },
]);

// 熱門景點
const hotSpots = ref([
  {
    name: "陽明山國家公園冷水坑",
    img: new URL("../assets/images/site01.jpg", import.meta.url).href,
    cityZhTW: "台北",
    cityEn: "Taipei",
    id: "C1_379000000A_000009",
  },
  {
    name: "石梯坪",
    img: new URL("../assets/images/site02.png", import.meta.url).href,
    cityZhTW: "花蓮",
    cityEn: "HualienCounty",
    id: "C1_315080500H_000012",
  },
  {
    name: "鹿耳門天后宮",
    img: new URL("../assets/images/site03.png", import.meta.url).href,
    cityZhTW: "台南",
    cityEn: "Tainan",
    id: "C1_315081600H_000066",
  },
  {
    name: "忠義山親山步道",
    img: new URL("../assets/images/site04.png", import.meta.url).href,
    cityZhTW: "台北",
    cityEn: "Taipei",
    id: "C1_379000000A_000013",
  },
]);

// 人氣美食
const foods = ref([
  {
    title: "中式美食",
    img: new URL("../assets/images/fs.png", import.meta.url).href,
  },
  {
    title: "夜市小吃",
    img: new URL("../assets/images/fste.png", import.meta.url).href,
  },
  {
    title: "異國料理",
    img: new URL("../assets/images/fs.png", import.meta.url).href,
  },
  {
    title: "甜點冰品",
    img: new URL("../assets/images/fste.png", import.meta.url).href,
  },
  {
    title: "伴手禮",
    img: new URL("../assets/images/fs.png", import.meta.url).href,
  },
  {
    title: "全部類別",
    img: new URL("../assets/images/fste.png", import.meta.url).href,
  },
]);

// 取得熱門景點資料
// async function getHotSpots() {
//   try {
//     const response = await axios({
//       method: "get",
//       url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot/${city.value}`,
//       params: {
//         "$filter": `contains(ScenicSpotID, '${id.value}')`,
//         "$format": "JSON"
//       }
//     });
//     targetSpot.value = response.data[0];
//     console.log(targetSpot.value);
//   } catch (error) {
//     alert(error);
//   }
// }

// 跳轉熱門景點指定頁
async function handleSiteClick(site) {
  await router.push({ path: `/point/${site.cityEn}/${site.id}` });
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

  // new Swiper(mySwiper2.value, {
  //   slidesPerView: "auto",
  //   spaceBetween: 30,
  //   // autoplay: {
  //   //   delay: 5000,
  //   // },
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  // });
  // await getHotSpots();
});


</script>

<style scoped lang="scss">
// main
main {
  height: 100%;
  margin-bottom: -300px;
}

// swiper 預設
.swiper {
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
}

// landing swiper
.my-Swiper {
  .swiper-slide {
    display: flex;
    justify-content: center;
    text-align: center;
    background: #fff;
    align-items: center;
  }

  .swiper-slide .swiper-background {
    border-radius: 25px;
    width: 1000px;
    height: 500px;
  }

  .swiper-slide .swiper-text {
    background-color: #02020225;
    position: relative;
    bottom: -350px;
  }

  .swiper-slide h5 {
    display: inline;
    font-size: 36px;
    font-weight: 700;
    color: #fff;
  }

  .swiper-slide button {
    border-radius: 15px;
    margin-left: 60px;
  }
}

.my-Swiper-2 {
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 270px;
    height: 210px;
    object-fit: cover;
  }

  .swiper-slide {
    width: 100%;
  }

  .swiper-slide:nth-child(2n) {
    width: 30%;
  }

  .swiper-slide:nth-child(3n) {
    width: 30%;
  }

  .swiper-slide:nth-child(4n) {
    width: 30%;
  }
}

// tabs
.tab-pane {
  .col {
    width: 100%;
    height: 180px;
    border-radius: 25px;
    background-position: center;
    background-repeat: no-repeat;
  }

  h5 {
    font-size: 26px;
    font-weight: 700;
    color: #FEFEFE;
  }
}

// 人氣美食

// 熱門景點
.hot-spot {
  h5 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

// 訂閱
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

.landing-swiper {
  width: 100%;
}

// 桌機 1250px~
// @media only screen and (min-width: 1250px) {
//   .my-Swiper {
//     width: 100%;
//   }
// }

// 平板 501~1249px
// @media only screen and (max-width: 1249px) {
//   .my-Swiper {
//     columns: 1;
//   }
// }

// 手機 ~500px
// @media only screen and (max-width: 500px) {}
</style>