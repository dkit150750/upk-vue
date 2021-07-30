<template>
  <div class="course-info-picture">
    <div class="course-info-picture__img-wrapper">
      <img class="course-info-picture__img" :src="picture" :alt="title" />
    </div>
    <div class="course-info-picture__avatar-icon-wrapper">
      <CourseInfoPictureIcon />
    </div>
    <label
      class="course-info-picture__label"
      for="picture"
      aria-label="изменить картинку"
    ></label>
    <input
      class="course-info-picture__input"
      id="picture"
      name="picture"
      type="file"
      accept="image/*"
      tabindex="-1"
      @change="uploadAvatar"
    />
  </div>
  <FlashMessage :message="message" @close="message = null" />
</template>

<script>
import FileService from '@/services/FileService';
import { getErrorData } from '@/utils/helpers';

import CourseInfoPictureIcon from '@/components/admin/course/CourseInfoPictureIcon.vue';
import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'ProfileHeaderAvatar',

  components: {
    CourseInfoPictureIcon,
    FlashMessage,
  },

  props: {
    id: {
      type: Number,
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

  emits: {
    updatePicture: null,
  },

  data() {
    return {
      message: null,
    };
  },

  computed: {
    endpoint() {
      return `/courses/${this.id}/picture`;
    },
  },

  methods: {
    async uploadAvatar(event) {
      const file = event.target.files[0];
      const payload = {};
      const formData = new FormData();
      formData.append('picture', file);
      payload.file = formData;
      payload.endpoint = this.endpoint;

      try {
        this.file = null;
        const response = await FileService.uploadFile(payload);
        this.message = 'Данные обновлены';
        this.$emit('updatePicture', response.data.data);
      } catch (error) {
        this.error = getErrorData(error);
      }
    },
  },
};
</script>

<style>
.course-info-picture {
  position: relative;
  overflow: hidden;
  user-select: none;
  max-width: 300px;
}

.course-info-picture * {
  user-select: none;
}

.course-info-picture__img-wrapper {
  position: relative;
  padding-bottom: 100%;
}

.course-info-picture__img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.course-info-picture__avatar-icon-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background-color: hsla(0, 0%, 0%, 0.5);
  opacity: 0;
  transition: opacity 0.3s;
}

.course-info-picture:hover .course-info-picture__avatar-icon-wrapper {
  opacity: 1;
}

.course-info-picture__label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  cursor: pointer;
  opacity: 0;
}
.course-info-picture__input {
  display: none;
}
</style>
