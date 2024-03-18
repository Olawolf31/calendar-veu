<template>
    <div>
        <p class="title is-size-5">
    {{ event.details }}</p>
    <footer class="card-footer">
        <p class="card-footer-item">
          <span class="is-size-7"> 
            Edit
          </span>
        </p>
        <p class="card-footer-item">
          <span class="is-size-7">
           Delete
          </span>
        </p>
      </footer>
      
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