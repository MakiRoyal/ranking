<template>
    <div class="flex flex-col justify-between min-h-screen">
        <div class="flex flex-col gap-12 mb-12">
            <AppHeader />
            <slot />
        </div>
      <AppFooter />
    </div>
  </template>