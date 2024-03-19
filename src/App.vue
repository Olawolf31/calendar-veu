<template>
  <div>
    <Header />
    <CalendarWeek />
    <CalendarEntry />
  </div>

</template>

<script>
import Header from "./components/Header.vue"
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarEntry from "./components/CalendarEntry.vue";

export default {
  name: 'App',
  components: {
    Header,
    CalendarWeek,
    CalendarEntry,
  }
}

</script>

<style scoped>

</style>
