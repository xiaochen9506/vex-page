<template>
  <div v-if="!col.scope">{{ row[col.prop] }}</div>

  <div v-if="col.scope === 'render' && col.render">{{ col.render(row) }}</div>

  <el-input v-if="col.scope === 'input'" :placeholder="col.placeholder" />
</template>

<script setup>
import { defineProps, ref, watch, onMounted } from 'vue'

const props = defineProps({
  row: {
    type: Object,
    default: () => ({})
  },
  col: {
    type: Object,
    default: () => ({})
  },
})
</script>
