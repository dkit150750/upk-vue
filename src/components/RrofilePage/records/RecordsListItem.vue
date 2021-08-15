<template>
  <article class="record-card">
    <p class="record-card__date">
      {{ fullDate }}<br />
      {{ time }}
    </p>
    <router-link
      class="record-card__title"
      :to="{ name: 'course', params: { courseId: courseId } }"
    >
      {{ title }}
    </router-link>
    <div class="record-card__pic-wrapper">
      <img
        class="record-card__pic"
        v-if="picture"
        :src="picture"
        :alt="title"
      />
      <img
        class="record-card__pic"
        v-else
        :src="require('@/assets/images/picture.webp')"
        :alt="title"
      />
    </div>
  </article>
</template>

<script>
export default {
  name: 'RecordsListItem',

  props: {
    courseId: {
      type: Number,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
  },

  months: [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
  ],

  computed: {
    fullDate() {
      const dateArray = this.date.split('-');
      const month = this.$options.months[parseInt(dateArray[1])];
      return `${dateArray[2]} ${month} ${dateArray[0]}`;
    },
  },
};
</script>

<style>
.light .record-card {
  --record-background: var(--color-gray-150);
}

.dark .record-card {
  --record-background: var(--color-gray-1000);
}

.record-card {
  position: relative;
  display: grid;
  grid-template-rows: min-content 1fr;
  grid-template-columns: minmax(10px, 1fr) 72px;
  gap: 10px 40px;
  width: 100%;
  max-width: 600px;
  min-height: 130px;
  padding: 20px 16px;
  background-color: var(--record-background);
  border-radius: 10px;
}

@media (min-width: 500px) {
  .record-card {
    grid-template-columns: 1fr 120px;
    min-height: 174px;
    padding: 24px;
  }
}

.record-card__date {
  margin: 0;
  font-size: 14px;
  line-height: 1.3;
}

.record-card__title {
  font-size: 16px;
  font-weight: 500;
  line-height: 1.05;
  color: inherit;
  text-decoration: none;
  word-wrap: break-word;
  outline: none;
}

@media (min-width: 500px) {
  .record-card__title {
    font-size: 18px;
  }
}

@media (min-width: 1000px) {
  .record-card__title {
    font-size: 20px;
  }
}

.record-card__title::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: '';
}

.record-card__pic-wrapper {
  grid-row: 1 / 3;
  grid-column: 2 / 3;
}

.record-card__pic {
  display: block;
  max-width: 100%;
}
</style>
