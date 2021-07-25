<template>
  <ProfileWrapper>
    <ProfileHeader class="profile__header" />
    <ProfileInfo
      class="profile__profile-info"
      title="О себе"
      description="Просьба заполнять реальные данные"
    >
      <ProfileInfoForm />
    </ProfileInfo>

    <ProfileInfo title="Изменение пароля">
      <ProfilePasswordForm />
    </ProfileInfo>

    <ProfileMainCourses>
      <ProfileMainCoursesList>
        <ProfileMainCoursesListItem
          v-for="course in courses"
          :key="course.id"
          :courseId="course.id"
          :date="course.date"
          :time="course.time"
          :title="course.title"
          :imgSrc="course.imgSrc"
        />
      </ProfileMainCoursesList>
      <ProfileMainCoursesPagination>
        <ProfileMainCoursesPaginationItem v-for="page in pages" :key="page">
          {{ page }}
        </ProfileMainCoursesPaginationItem>
      </ProfileMainCoursesPagination>
    </ProfileMainCourses>
  </ProfileWrapper>
</template>

<script>
import ProfileWrapper from '@/components/profile/ProfileWrapper.vue';
import ProfileHeader from '@/components/profile/ProfileHeader.vue';
import ProfileInfo from '@/components/profile/ProfileInfo.vue';
import ProfileInfoForm from '@/components/profile/ProfileInfoForm.vue';
import ProfilePasswordForm from '@/components/profile/ProfilePasswordForm.vue';
import ProfileMainCourses from '@/components/profile/ProfileMainCourses.vue';
import ProfileMainCoursesList from '@/components/profile/ProfileMainCoursesList.vue';
import ProfileMainCoursesListItem from '@/components/profile/ProfileMainCoursesListItem.vue';
import ProfileMainCoursesPagination from '@/components/profile/ProfileMainCoursesPagination.vue';
import ProfileMainCoursesPaginationItem from '@/components/profile/ProfileMainCoursesPaginationItem.vue';

export default {
  name: 'TheProfile',

  components: {
    ProfileWrapper,
    ProfileHeader,
    ProfileInfo,
    ProfileInfoForm,
    ProfilePasswordForm,
    ProfileMainCourses,
    ProfileMainCoursesList,
    ProfileMainCoursesListItem,
    ProfileMainCoursesPagination,
    ProfileMainCoursesPaginationItem,
  },

  data() {
    return {
      password: {
        password: null,
        'password.confirm': null,
      },
      courses: [
        {
          id: 1,
          date: '23 мая 2021',
          time: '12:30',
          title: 'Сетевое и сестемное администрирование',
          imgSrc: 'images/devops.webp',
        },
        {
          id: 2,
          date: '23 мая 2021',
          time: '12:30',
          title: 'Сетевое и сестемное администрирование',
          imgSrc: 'images/devops.webp',
        },
      ],
      pages: [1, 2],
    };
  },
};
</script>

<style>
.profile__header {
  margin-bottom: 40px;
}

.profile__profile-info {
  margin-bottom: 40px;
}
</style>
