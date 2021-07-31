<template>
  <div class="admin-course-lecture">
    <span class="admin-course-lecture__date">{{ date }}</span>
    <button
      class="admin-course-lecture__remove"
      aria-label="удалить запись"
      @click="deleteLecture"
    ></button>
    <span class="admin-course-lecture__time">{{ time }} {{ cabinet }}</span>
    <span class="admin-course-lecture__users"
      >Мест: {{ places }}/{{ total_places }}</span
    >
    <a class="admin-course-lecture__users-list" href="./users.html"
      >Участники</a
    >
  </div>
</template>

<script>
import LectureService from '@/services/LectureService';
import { getErrorData } from '@/utils/helpers';

export default {
  name: 'LecturesListItem',

  props: {
    id: {
      taype: Number,
      required: true,
    },
    date: {
      taype: String,
      required: true,
    },
    time: {
      taype: String,
      required: true,
    },
    cabinet: {
      taype: String,
      default: '',
    },
    places: {
      taype: String,
      required: true,
    },
    total_places: {
      taype: String,
      required: true,
    },
  },

  emits: {
    deleteLecture: null,
  },

  methods: {
    async deleteLecture() {
      try {
        const response = await LectureService.deleteLecture(this.id);
        this.$emit('deleteLecture', response.data.data.id);
      } catch (error) {
        console.log(getErrorData(error));
      }
    },
  },
};
</script>

<style>
.admin-course-lecture {
  display: grid;
  grid-template-columns: max-content max-content;
  gap: 10px 40px;
  padding: 20px;
  background-color: var(--color-gray-70);
  border-radius: 10px;
}

.admin-course-lecture__date {
  font-size: 18px;
  font-weight: 600;
}

.admin-course-lecture__remove {
  grid-column: 2 /3;
  grid-row: 1 / 3;
  align-items: flex-start;
  justify-self: flex-end;
  position: relative;
  display: block;
  width: 30px;
  height: 30px;
  border: 0;
  background-color: var(--color-primary-800);
  cursor: pointer;
  border-radius: 5px;
}

.admin-course-lecture__remove::before,
.admin-course-lecture__remove::after {
  position: absolute;
  top: 50%;
  left: 50%;
  display: block;
  width: 60%;
  height: 3px;
  background-color: var(--color-gray-50);
  border-radius: 5px;
  content: '';
}

.admin-course-lecture__remove::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.admin-course-lecture__remove::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

.admin-course-lecture__time {
  font-weight: 500;
}

.admin-course-lecture__users-list {
  font-weight: 500;
  color: var(--color-primary-800);
  text-decoration: none;
}
</style>
