<template>
  <div id="app">
    <!-- Монтирую компоненты в приложение -->
    <CalendarWeek></CalendarWeek>
    <CalendarEntry></CalendarEntry>
  </div>
</template>

<script>
/* Импортирую созданные компоненты */
import CalendarWeek from './components/CalendarWeek.vue';
import CalendarEntry from './components/CalendarEntry.vue';

export default {
  name: 'App',
  /* Регистрирую созданные компоненты */
  components: {
    CalendarWeek,
    CalendarEntry
  }
}
</script>

<style lang="scss">
html, body {
  height: 100%;
}

#app {
  height: inherit;
  background: #6e6e6e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: center;
  -webkit-justify-content: center;
}
</style>

