<template>
  <div class="calendar">
    <h1>Calendar</h1>
    <section class="d-flex fw-bold">
      <p>{{ getCurrentMonthName }}</p>
      <p class="ms-auto">{{ currentYear }}</p>
    </section>

    <section class="row">
      <p class="col border" v-for="day in days" :key="day">
        {{ day }}
      </p>
    </section>
    <section class="row">
      <p
        class="col-2"
        style="width: 14.28%"
        v-for="num in startDays()"
        :key="num"
      ></p>
      <p
        class="col-2 border"
        style="width: 14.28%"
        v-for="num in amountDays()"
        :key="num"
        :class="currentMonthClass(num)"
      >
        {{ num }}
      </p>

      <div class="d-flex">
        <button @click="monthPrevious" class="btn btn-outline-primary">
          Previous
        </button>
        <button @click="monthNext" class="ms-auto btn btn-outline-primary">
          Next
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentDay: new Date().getUTCMonth(),
      currentMonth: new Date().getMonth(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      currentYear: new Date().getFullYear(),
    };
  },
  methods: {
    amountDays() {
      return new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    },
    startDays() {
      return new Date(this.currentYear, this.currentMonth, 1).getDay();
    },

    monthPrevious() {
      if (this.currentMonth == 0) {
        this.currentMonth = 11;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    monthNext() {
      if (this.currentMonth == 11) {
        this.currentMonth = 0;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    currentMonthClass(num) {
      const calendarMonth = new Date(
        this.currentYear,
        this.currentMonth,
        num
      ).toDateString();
      const currentOne = new Date().toDateString();
      return calendarMonth == currentOne ? "bg-primary" : "";
    },
  },
  computed: {
    getCurrentMonthName() {
      return new Date(this.currentYear, this.currentMonth)
        .toLocaleString("default", { month: "long" })
        .toUpperCase();
    },
  },
};
</script>

<style>
.calendar {
  max-width: 480px;
  margin: 0 auto;
  text-align: center;
  margin-top: 20px;
}
</style>