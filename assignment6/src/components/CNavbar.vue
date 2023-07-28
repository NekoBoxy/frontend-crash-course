<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container">
      <RouterLink to="/" class="navbar-brand nav-logo">
        <svg width="26" height="50" viewBox="0 0 26 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.6363 0.0718377C19.4018 -0.0457234 19.1366 -0.0114587 18.8628 0.119881C17.1046 0.963288 15.8673 2.70266 14.0577 3.42855C12.4813 4.06089 11.369 5.66105 10.7206 7.00628C10.2695 7.94232 10.4127 9.20263 9.64947 9.90619C9.49319 10.0502 9.29251 10.142 9.03694 10.142C7.92123 10.142 2.34264 19.6527 1.22692 23.0094C0.111204 26.3661 0.669073 24.6877 0.111215 29.1633C0.00155004 30.0432 -0.0205352 30.8059 0.0168167 31.4614C0.150292 33.8041 1.66897 35.94 2.49052 38.1371L2.90051 39.2335C3.08646 39.6064 4.01623 40.688 6.24766 42.0307C7.23547 42.6251 8.11396 43.3876 8.83474 44.1338C10.2121 45.5596 10.2454 48.9565 12.0224 49.8312C13.3501 50.4848 13.9002 49.1294 13.6316 47.6707C13.597 47.4827 13.5536 47.2813 13.4998 47.0658C13.1358 45.6053 13.4894 43.5492 13.834 42.2337C13.9682 41.7216 14.1756 41.2311 14.4174 40.7605C17.5645 34.6369 19.6565 33.0389 20.1941 31.9606C20.4145 31.5186 20.4764 29.1356 20.5705 28.6505C20.6804 28.084 20.752 27.3381 20.752 26.3661C20.752 24.7263 21.0576 23.015 21.429 21.5692C21.9253 19.6366 21.3277 16.8435 22.9834 15.7365C23.7252 15.2406 24.3871 14.0349 24.8931 12.8044C25.5552 11.1944 24.8757 9.4618 24.0991 7.90417C23.6529 7.00905 25.0289 4.92043 25.7727 3.98801C26.1446 3.61504 26.3306 2.75721 24.0991 2.30964C21.3099 1.75019 20.752 0.631289 19.6363 0.0718377Z"
            fill="#392A93" />
        </svg>
        <div>
          <span class="nav-logo-en">Taiwan</span>
          <span class="nav-logo-zhtw">島遊</span>
        </div>
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 ms-auto">
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/points/Taipei">旅遊景點</RouterLink>
            </div>
          </li>
          <li class="nav-item">
            <div class="nav-link">
              <RouterLink to="/foods/NewTaipei">美食餐廳</RouterLink>
            </div>
          </li>
          <div class="d-flex">
            <VueMultiselect v-model="selectStr" :options="compareData" @search-change="callApi" placeholder="想去哪玩呢？"
              label="value" :loading="isLoading" :show-labels="false">
              <template #noResult>
                查無結果，請更換關鍵字。
              </template>
            </VueMultiselect>
            <button class="btn btn-outline-success" type="submit" @click="handleSearchClick(el)">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M10.6798 4C7.01399 4 4.0423 6.91015 4.0423 10.5C4.0423 14.0899 7.01399 17 10.6798 17C14.3455 17 17.3172 14.0899 17.3172 10.5C17.3172 6.91015 14.3455 4 10.6798 4ZM2 10.5C2 5.80558 5.88606 2 10.6798 2C15.4735 2 19.3595 5.80558 19.3595 10.5C19.3595 12.5926 18.5873 14.5087 17.3067 15.9897L21.7009 20.2929C22.0997 20.6834 22.0997 21.3166 21.7009 21.7071C21.3021 22.0976 20.6556 22.0976 20.2568 21.7071L15.8127 17.3551C14.3751 18.3892 12.6003 19 10.6798 19C5.88606 19 2 15.1944 2 10.5Z"
                  fill="#392A93" />
              </svg>
            </button>
          </div>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import "~multiselect/dist/vue-multiselect.css";
import { ref, watch } from 'vue';
import { RouterLink, useRouter, } from 'vue-router';
import axios from 'axios';
import VueMultiselect from 'vue-multiselect';

const router = useRouter();

// autocomoplete
const selectStr = ref("");
const compareData = ref([]);
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
const isLoading = ref(false);

watch(selectStr, (newValue) => {
  console.log("Selected:", newValue);
});

function callApi(query) {
  isLoading.value = true;
  console.log(query);
  // let result = [];
  // result = cityList.value.map();

  // // Call API
  // // query
  // result = [...result, apiRes];

  // compareData.value = result;
}

// call api
async function getTdxData(str) {
  try {
    const response = await axios({
      method: "get",
      url: `${import.meta.env.VITE_BASE_URL}/v2/Tourism/ScenicSpot`,
      params: {
        "$top": "5",
        "$filter": `City eq '${str}' or Keyword eq '${str}' or ScenicSpotName eq '${str}'`,
        "$format": "JSON"
      }
    });
    console.log("response.data", response.data);

  } catch (error) {
    alert(error);
  }
}

// 路由跳轉
async function changeRoute(data) {
  await router.push({ path: `/points/${data.cityEn}` });
  await router.go();
}
</script>

<style scoped lang="scss">
nav {
  border-bottom: 1px solid #0000001A;
  margin-bottom: 20px;
}

.nav-logo {
  display: flex;
  flex-wrap: wrap;
  margin-right: 30px;

  div {
    margin-left: 10px;

    .nav-logo-en {
      display: block;
      font-size: 9px;
      color: #9086CC;
    }

    .nav-logo-zhtw {
      font-weight: 500;
      font-size: 20px;
      color: #392A93;
    }
  }
}

.navbar-collapse {
  li {
    margin-left: 30px;
    margin-right: 30px;
  }
}

.nav-link a {
  color: #907df7;

  &:hover {
    box-shadow: 0px 3px 0px 0px #907df7;
    font-weight: 700;
  }
}

.router-link-exact-active {
  color: #392A93 !important;
  font-weight: 700;
}

form {
  margin-left: 15px;
}
</style>
