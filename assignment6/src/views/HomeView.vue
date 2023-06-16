<template>
  <main>
    <CNavbar />
    <!-- Swiper Infinite loop-->
    <div class="container">
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
      <div class="tab-content" id="myTabContent">
        <!-- (網格)卡片內容 -->
        <!-- 熱鬧 -->
        <div class="tab-pane fade show active" id="lively-card" role="tabpanel" aria-labelledby="lively">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="../assets/images/1.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">熱鬧繁華</h5>
                </div>
              </div>
            </div>
            <!-- <div class="col">
              <div class="card">
                <img src="../assets/images/1.png" class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">熱鬧繁華</h5>
                </div>
              </div>
            </div> -->
          </div>
        </div>
        <!-- 與自然共舞 -->
        <div class="tab-pane fade" id="nature-card" role="tabpanel" aria-labelledby="nature">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">與自然共舞</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 純樸人情味 -->
        <div class="tab-pane fade" id="human-card" role="tabpanel" aria-labelledby="human">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">純樸人情味</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 南島奔放 -->
        <div class="tab-pane fade" id="warm-card" role="tabpanel" aria-labelledby="warm">
          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row row-cols-1 row-cols-md-3 g-4">
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">南島奔放</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="card">
                  <img src="..." class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h5>熱門景點</h5>
      <!-- swiper Slides per view auto -->
      <div ref="mySwiper2" class="swiper my-Swiper-2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <!-- <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div> -->
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
      <h5>人氣美食</h5>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
            </div>
          </div>
        </div>
      </div>
      <!-- 訂閱 email -->
      <div class="subscribe">
        <h5>訂閱我們，獲得最在地的旅遊資訊！</h5>
        <span>每週六一封，不隨意打擾，且隨時可以取消</span>
        <input type="text">
        <button type="button">訂閱</button>
      </div>
    </div>
  </main>
  <CFooter />
</template>

<script setup>
import { ref, onMounted } from "vue";
import CNavbar from "../components/CNavbar.vue";
import CFooter from "../components/CFooter.vue";

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';
// init Swiper:
const mySwiper = ref(null);
const mySwiper2 = ref(null);

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

onMounted(() => {
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

  new Swiper(mySwiper2.value, {
    slidesPerView: "auto",
    spaceBetween: 30,
    // autoplay: {
    //   delay: 5000,
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

  });
});


</script>

<style scoped lang="scss">
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
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    width: 80%;
  }

  .swiper-slide:nth-child(2n) {
    width: 60%;
  }

  .swiper-slide:nth-child(3n) {
    width: 40%;
  }
}

.subscribe {
  background-color: #FA7E5F;
}
</style>