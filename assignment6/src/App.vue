<script setup>
import { onMounted } from "vue";
import { RouterView } from 'vue-router';
import axios from 'axios';

// 取得 tdx 授權
// 放在根目錄下全頁面才吃的到 token
async function getAuth() {
  const AUTH_URL = 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token';
  if (import.meta.env.VITE_CLIENT_ID && import.meta.env.VITE_CLIENT_SECRET) {
    // 使用密鑰取得 token (一般來說應該要由後端處理)
    const resAuth = await axios({
      method: 'post',
      url: AUTH_URL,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: `grant_type=client_credentials&client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
    });
    // token 字串
    const token = resAuth.data.access_token;
    // 使用 Bearer 授權方式
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
}

onMounted(async () => {
  await getAuth();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
