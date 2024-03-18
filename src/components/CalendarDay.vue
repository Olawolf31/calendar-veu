<template>
    <div id="calendar-day">
      <div class="calendar-grid">
        <div class="calendar-day" v-for="day in days" :key="day.id">
          <div class="card mr-3">
            <div class="card-content">
              <button class="button is-info is-small">{{ days.abbvTitle }}</button>
              <div><button class="button is-text">{{ days.id }}</button></div>
              <p class="title">
                <CalendarEvent v-for="event in days.events" :key="event.id" :event="event"/>
              </p>
              <button class="button is-info is-small">{{ days.fullTitle }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import CalendarEvent from './CalendarEvent.vue';
    export default {
        name: 'CalendarDay',
        props: ['days'],
        components: {
            CalendarEvent
        }
    }
</script>

<style scoped>
.calendar-grid {
  display: flex;
  flex-wrap: wrap;
}

.calendar-day {
  width: 25%; 
  box-sizing: border-box; 
  padding: 10px;
}
</style>