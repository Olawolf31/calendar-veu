<template>
    <div class="calendar-week">
        <CalendarDay v-for="day in sharedState.seedData" :key="day.id" :days="day" />
        </div>
  </template>
<script>
import {store} from '../store.js'
import CalendarDay from './CalendarDay.vue'




export default {
    name: 'CalendarWeek',
    data() {
        return {
            sharedState: store.state
        }
    },
    components: {
        CalendarDay
    }
}
</script>
<style scoped>
    .calendar-week {
  display: flex;
  flex-wrap: wrap;
}
</style>