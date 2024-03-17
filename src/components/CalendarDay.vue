<template>
    <div id="calendar-id">

        <div class="card">
  <div class="card-content">
    <button class="button is-info is-small"> {{ day.abbvTitle }}</button>
    <div><button class="button is-text">{{ day.id }}</button></div>
    <p class="title">
       <CalendarEvent v-for="event in day.events" :key="day.events.indexOf(event)" :event="event"/>
    </p>
    <p class="subtitle">
        {{ day.fullTitle }}
    </p>
  </div>
  <footer class="card-footer">
    <p class="card-footer-item">
      <span>
        Edit
      </span>
    </p>
    <p class="card-footer-item">
      <span>
       Facebook
      </span>
    </p>
  </footer>
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