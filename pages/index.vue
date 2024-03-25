<script setup lang="ts">
    import { RankingEnums } from '../modals/Enums';
    import { ref } from 'vue';
    import type { Players } from '../modals/types';

    let filter = ref<number>()
    let page = ref<number>(1)
    const search = ref<string>('')

    const rankings: {name:string, value: RankingEnums }[] = [
        {
            value: RankingEnums.FirstToThrird,
            name: 'Top 3'
        }, 
        {
            value: RankingEnums.ThirdToTenth,
            name: 'Top 10',
        }, 
        {
            value: RankingEnums.All,
            name: 'Tout le monde'
        }
    ]


        const {data: players} = useAsyncData('players', () => find<Players>('players', {
            populate: '*',
            filters: {
                ranking: {
                    $lt: filter.value
                },
                slug: {
                    $contains: search.value
                }
            },
            pagination: {
                page: page.value,
                pageSize: 2
            }
        }), {watch: [filter, page, search]})
        console.log({players})
</script>

<template>
    <div class="flex flex-col gap-4">
        <div class="flex flex-row justify-between">
            <div class="bg-primary rounded-lg outline outline-primary outline-offset-2 outline-1">
                <h3 class="text-zinc-950 px-8 py-2 font-bold">Search</h3>
            </div>
            <UInput color="primary" variant="outline" placeholder="Search for player"  v-model="search" class="w-5/12"/>
        </div>
        <div class="flex flex-row justify-between">
            <div class="bg-primary rounded-lg outline outline-primary outline-offset-2 outline-1">
                <h3 class="text-zinc-950 px-8 py-2 font-bold">Filter</h3>
            </div>
            <USelect v-model="filter" :options="rankings" option-attribute="name" class="w-5/12" color="primary" placeholder="Choose your top" />
        </div>
        <PlayersList :players="players?.data" />
        <div class="flex justify-center mt-4">
            <UPagination v-model="page" :total="100" show-last show-first />
        </div>
    </div>
</template>