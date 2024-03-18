<template>
    <div id="calendar-id ">
      

        <div class="card mr-3">
  <div class="card-content">
    <button class="button is-info is-small"> {{ day.abbvTitle }}</button>
    <div><button class="button is-text">{{ day.id }}</button></div>
    <p class="title">
       <CalendarEvent v-for="event in day.events" :key="day.events.indexOf(event)" :event="event"/>
    </p>
    <button class="button is-info is-small">
        {{ day.fullTitle }}
    </button>
  </div>
</div>
        </div>

</template>

<script>
import CalendarEvent from './CalendarEvent.vue';
    export default {
        name: 'CalendarDay',
        props: ['day'],
        components: {
            CalendarEvent
        }
    }
</script>

<style lang="scss" scoped>

</style>