<template>
  <main>
    <CNavbar />
    <!-- Swiper Infinite loop-->
    <div class="container">
      <div ref="mySwiper" class="swiper mySwiper" style="padding-bottom: 50px;">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(city, index) in frontCarousel" v-bind:key="index">
            <img :src="city.img" alt="">
            <h5>{{ city.title }}</h5>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <!-- tabs -->
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
            role="tab" aria-controls="home" aria-selected="true">熱鬧繁華</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
            role="tab" aria-controls="profile" aria-selected="false">與自然共舞</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
            role="tab" aria-controls="contact" aria-selected="false">純樸人情味</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
            role="tab" aria-controls="contact" aria-selected="false">南島奔放</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <!-- (網格)卡片內容 -->
        <!-- 熱鬧 -->
        <div class="tab-pane fade show active" id="area-lively" role="tabpanel" aria-labelledby="home-tab">
          <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card">
                <img src="..." class="card-img-top" alt="...">
                <div class="card-body">
                  <h5 class="card-title">熱鬧繁華</h5>
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
        <!-- 與自然共舞 -->
        <div class="tab-pane fade" id="area-nature" role="tabpanel" aria-labelledby="profile-tab">
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
        <div class="tab-pane fade" id="area-human" role="tabpanel" aria-labelledby="profile-tab">
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
        <div class="tab-pane fade" id="area-passion" role="tabpanel" aria-labelledby="profile-tab">
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
      <!-- Slides per view auto -->
      <!-- Infinite loop -->

      <!-- autoplay -->
      <div ref="mySwiper2" class="swiper mySwiper2">
        <div class="swiper-wrapper">
          <div class="swiper-slide">Slide 1</div>
          <div class="swiper-slide">Slide 2</div>
          <div class="swiper-slide">Slide 3</div>
          <div class="swiper-slide">Slide 4</div>
          <div class="swiper-slide">Slide 5</div>
          <div class="swiper-slide">Slide 6</div>
          <div class="swiper-slide">Slide 7</div>
          <div class="swiper-slide">Slide 8</div>
          <div class="swiper-slide">Slide 9</div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
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

onMounted(() => {
  new Swiper(mySwiper.value, {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  new Swiper(mySwiper2.value, {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});


</script>

<style scoped lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.mySwiper {
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    margin: 0 15px !important;
  }

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
    width: 80%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  .swiper {
    margin-left: auto;
    margin-right: auto;
  }
}

.mySwiper2 {

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
}

.subscribe {
  background-color: #FA7E5F;
}
</style>