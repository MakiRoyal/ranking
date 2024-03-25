<template>
    <ul class="flex flex-wrap items-stretch justify-between gap-y-8">
      <li v-for="player in players" :key="player.id" class="w-5/12" v-show="players.length > 0">
        <NuxtLink :to="`/players/${player.slug}`">
          <PlayerCard :player="player" />
        </NuxtLink>
      </li>
    </ul>
  </template>
  
  <script setup lang="ts">
  import type { Player } from '../modals/types';
  import { defineProps } from 'vue';
  
  const { players } = defineProps<{players: Player[]}>()
  </script>
  