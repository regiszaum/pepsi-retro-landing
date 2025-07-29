<template>
<div class="w-full flex flex-col relative">
    <LayoutNavbar
        @select="onSelect"
    />
    <NuxtPage class="min-h-[calc(100vh-210px)]" />
    <LayoutFooter />
</div>
</template>

<script setup lang="ts">

const onSelect = (item: string) => {
    console.log(item)
}
</script>

<style scoped>

</style>