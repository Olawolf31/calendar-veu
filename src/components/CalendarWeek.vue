<template>
    <div id="calendar-entry">
          <CalendarDay v-for="day in sharedState.seedData" :key="day.id" :days="day" class="tile is-child"/>
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
<style lang="">
    
</style>