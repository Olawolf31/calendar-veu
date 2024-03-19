<template>
      <div class="calendar-day">
        <div class="card">
          <div class="card-content">
            <button class="button is-info is-small" :style="getEventBackgroundColor">{{ days.abbvTitle }}</button>
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
        },
        computed: {
          getEventBackgroundColor() {
            const colors = ["#ff00bf", '#85D6FF', '#99FF99', '#6b6969']
            let randomColor = colors[Math.floor(Math.random() * colors.length)]
            return `background-color: ${randomColor}`;
          }
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