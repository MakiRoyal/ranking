
import SearchBar from './SearchBar.vue';
<template>
    <header class="bg-zinc-950 mt-4 px-8 py-4 rounded-lg flex flex-row justify-between">
       <div class="flex flex-row gap-4">
        <ULink
            to="/"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
            Home
        </ULink>
        <ULink
            to="/about"
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
        >
            About
        </ULink>
       </div>
      <div>
        <!-- <SearchBar /> -->
      </div>
    </header>
</template>