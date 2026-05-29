<template>
  <v-app>
    <VTHeader />
    <v-main>
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </v-main>
    <VTFooter />
  </v-app>
</template>
<script setup>
import VTHeader from '@/components/VTHeader.vue'
import VTFooter from '@/components/VTFooter.vue'
</script>
