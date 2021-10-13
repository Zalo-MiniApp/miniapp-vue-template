<script setup lang="ts">
import { onMounted } from '@vue/runtime-core';
import { getAccessToken } from './services/zalo';
import { saveToken } from './services/miniapp';

onMounted(() => {
  getAccessToken().then(token => saveToken(token as string));
})

</script>

<template>
  <router-view></router-view>
</template>
