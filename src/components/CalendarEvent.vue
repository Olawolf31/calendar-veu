<template>
    <div>
        <p class="title">
    {{ event.details }}</p>
    </div>
</template>

<script>
    export default {
        name: 'CalenderEvent',
        props: ['event']
    }
</script>

<style lang="scss" scoped>

</style>