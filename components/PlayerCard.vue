<script setup lang="ts">
import type { Player } from '../modals/types';
import GetImageUrl from '../utils/getImageUrl';
import { defineProps } from 'vue';


const { player } = defineProps<{player: Player}>()
const url = GetImageUrl(player)
</script>

<template>
        <div class="outline outline-primary outline-offset-2 outline-1 bg-primary p-4 rounded-lg text-zinc-950 cursor-pointer hover:scale-105 transition">
            <div v-if="url" v-bind:style="{ 'background-image': 'url(' + url + ')' }" class="w-full h-32 bg-no-repeat bg-center bg-cover rounded-lg"></div>
            <div class="mt-2 flex flex-row justify-between">
                <h3 class="font-bold">{{ player?.name ? player?.name[0].toUpperCase() + player.name.slice(1) : '' }}</h3>
                <div class="flex flex-row gap-2 items-center"> 
                    <UIcon name="i-mdi-crown" dynamic v-if="player?.ranking === 1"/>
                    <h3 class="bg-zinc-950 text-primary rounded-lg px-4">{{ player?.ranking }}</h3>
                </div>
            </div>
        </div>
</template>