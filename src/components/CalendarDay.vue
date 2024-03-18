<template>
      <div class="calendar-day">
        <div class="card">
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

.calendar-day {
  width: calc(25% - 20px); 
  margin: 10px;
}

.card {
  border: 1px solid #ccc; 
  border-radius: 5px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
}

.card-content {
  padding: 10px; 
}

.button {
  margin-right: 5px; 
}

.title {
  margin-top: 10px; 
}
</style>