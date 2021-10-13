<script lang="ts" setup>
import { app } from '../../app-config.json'
const props = defineProps<{ src: string }>()

let version = document
  .getElementsByName('version-id')[0]
  ?.getAttribute('content');

const urlParams = new URLSearchParams(window.location.search);
if (!version || version === '0') {
  version = urlParams.get('version')
}
console.log(version)

const url = version ? [window.location.pathname, version, props.src].join('/') : props.src;
</script>

<template>
  <img :src="url" v-bind="$attrs" />
</template>