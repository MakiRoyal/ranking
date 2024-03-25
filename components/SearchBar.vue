<script setup lang="ts">

    import { ref } from 'vue';

    const isSearch = ref<boolean>(false)


    const OpenSeachBar = () => {
        isSearch.value = !isSearch.value
    }
</script>


<template>
    <div class="flex flex-row gap-2 items-center">
        <div v-if="isSearch">
            <UInput color="primary" variant="outline" placeholder="Search..." />
        </div>
        <div @click="OpenSeachBar">
            <UIcon name="i-pepicons-pencil-loop-circle" dynamic  color="primary"/>
        </div>
    </div>
</template>