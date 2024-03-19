<template>
  <div id="calendar-entry">
    <div class="card card-form">
      <div class="card-content">
        <div class="content">
          <input type="text" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarEntry",
};
</script>
<style scoped>
.card-form{
  width: 40%;
  position: sticky;
  top: 50%;
  right: 0;
  left: 100%
}


</style>
