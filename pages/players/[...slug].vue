<script setup lang="ts">
import type { Player } from '../../modals/types';
import { useRoute } from 'vue-router';
import { watchEffect } from 'vue';
import { ref } from 'vue';

const route = useRoute();

const player = ref<Player | null>(null);
const loading = ref(true);
const error = ref<string | null>(null);
const slug = route.params.slug[0];

import axios from 'axios';

watchEffect(async () => {
    try {
        const response = await axios.get(`https://rdubnxvkndeqqghtwbmp.supabase.co/${slug}`);
        player.value = response.data;
    } catch (e) {
        error.value = 'Erreur lors de la récupération des données du joueur';
    } finally {
        loading.value = false;
    }
});
</script>

<template>
    <div class="flex justify-center">
        <div class="w-1/2">
            <Loader v-if="loading" />
            <PlayerCard v-else-if="player" :player="player" />
        </div>
    </div>

    <Error v-if="error" :error="error" />
</template>
