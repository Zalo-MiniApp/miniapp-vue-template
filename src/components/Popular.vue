<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { watchEffect } from "@vue/runtime-core";
import { MiniAppProps } from "../models";
import { getAppsByKeyword } from "../services/miniapp";

const apps = ref<MiniAppProps[]>(JSON.parse(`[
  {"coverUrl":"https://logo-mapps.zdn.vn/e7237454d011394f6000.jpg","lastUpdated":1629340494347,"entrypoint":"https://zalo.me/app/link/zapps/3425757619895831860/","appId":"3425757619895831860","name":"Friend Discovery","description":"Friend Discovery app","avatar":"https://logo-mapps.zdn.vn/9a8727fb83be6ae033af.jpg","category":"SOCIAL","status":"ENABLE"},
  {"coverUrl":"https://logo-mapps.zdn.vn/ec9d7dead9af30f169be.jpg","lastUpdated":1629340496612,"entrypoint":"https://zalo.me/app/link/zapps/2434723753542399319/","appId":"2434723753542399319","name":"Lịch Việt","description":"Bộ lịch âm cho người dùng ","avatar":"https://logo.zp.zdn.vn/app/93452d701135f86ba124_2_1.jpg","category":"OTHERS","status":"ENABLE"},
  {"coverUrl":"https://logo-mapps.zdn.vn/062c805b241ecd40940f.jpg","lastUpdated":1629972028487,"entrypoint":"https://zalo.me/app/link/zapps/220259427665569271/","appId":"220259427665569271","name":"My OA","description":"Manage OA","avatar":"https://logo-mapps.zdn.vn/856f0719a35c4a02134d.jpg","category":"OTHERS","status":"ENABLE"}
]`))

const keyword = ref('')

watchEffect(() => {
  getAppsByKeyword(keyword.value).then(result => {
    if (result && result.length) {
      apps.value = result
    }
  })
})

</script>

<template>
  <div class="m-4 mb-0">
    <input
      class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      type="text"
      v-model="keyword"
      placeholder="Tìm kiếm"
    />
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
    <div v-for="app in apps">
      <div class="m-4">
        <img class="w-full rounded-lg my-2" :src="app.coverUrl" :alt="app.description" />
        <div class="flex">
          <img class="w-12 h-12 rounded-lg mr-2" :src="app.avatar" :alt="app.name" />
          <div>
            <b>{{ app.name }}</b>
            <br />
            <small>{{ app.description }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
  <router-link class="mx-4 text-bold text-blue-500 float-right" to="/list">View more ></router-link>
</template>