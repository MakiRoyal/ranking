<script setup lang="ts">

    import { defineProps } from 'vue';

    const { error } = defineProps<{error: string}>()
</script>

<template>
    <p>{{ error  ?? 'Error'}}</p>
</template>