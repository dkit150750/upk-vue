<template>
  <div class="profile">
    <div class="profile__container">
      <ProfileHeader class="profile__header" />
      <ProfileInfo
        class="profile__profile-info"
        title="О себе"
        description="Просьба заполнять реальные данные.s"
      >
        <ProfileInfoForm>
          <template #default>
            <ProfileInfoFormInputGroup
              label="Фамилия"
              name="surname"
              v-model="user.surname"
              placeholder="Степанов"
            />
            <ProfileInfoFormInputGroup
              label="Имя"
              name="name"
              v-model="user.name"
              placeholder="Валентин"
            />
            <ProfileInfoFormInputGroup
              label="Отчество"
              name="patronymic"
              v-model="user.patronymic"
              placeholder="Иванович"
            />
            <ProfileInfoFormInputGroup
              label="Email"
              name="email"
              type="email"
              v-model="user.email"
              placeholder="dkit10750@gmail.com"
            />
            <ProfileInfoFormInputGroup
              label="Телефон"
              name="phone"
              v-model="user.phone"
              placeholder="8 (999) 750 15 03"
            />
          </template>
          <template #footer>
            <button class="profile-info-form__button" type="button">
              Выйти
            </button>
          </template>
        </ProfileInfoForm>
      </ProfileInfo>
      <ProfileInfo title="Изменение пароля">
        <ProfileInfoForm>
          <template #default>
            <ProfileInfoFormInputGroup
              label="Пароль"
              name="password"
              type="password"
              v-model="password.password"
              autocomplete="new-password"
              placeholder="password"
            />
            <ProfileInfoFormInputGroup
              label="Подтвердить пароль"
              name="password.confirm"
              type="password"
              v-model="password['password.confirm']"
              autocomplete="new-password"
              placeholder="password"
            />
          </template>
        </ProfileInfoForm>
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
    </div>
  </div>
</template>

<script>
import ProfileHeader from '@/components/profile/ProfileHeader.vue';
import ProfileInfo from '@/components/profile/ProfileInfo.vue';
import ProfileInfoForm from '@/components/profile/ProfileInfoForm.vue';
import ProfileInfoFormInputGroup from '@/components/profile/ProfileInfoFormInputGroup.vue';
import ProfileMainCourses from '@/components/profile/ProfileMainCourses.vue';
import ProfileMainCoursesList from '@/components/profile/ProfileMainCoursesList.vue';
import ProfileMainCoursesListItem from '@/components/profile/ProfileMainCoursesListItem.vue';
import ProfileMainCoursesPagination from '@/components/profile/ProfileMainCoursesPagination.vue';
import ProfileMainCoursesPaginationItem from '@/components/profile/ProfileMainCoursesPaginationItem.vue';

export default {
  name: 'TheLogin',

  components: {
    ProfileHeader,
    ProfileInfo,
    ProfileInfoForm,
    ProfileInfoFormInputGroup,
    ProfileMainCourses,
    ProfileMainCoursesList,
    ProfileMainCoursesListItem,
    ProfileMainCoursesPagination,
    ProfileMainCoursesPaginationItem,
  },

  data() {
    return {
      user: {
        surname: 'Степанов',
        name: 'Валентин',
        patronymic: 'Иванович',
        phone: '',
        email: 'dkit10750@gmail.com',
      },
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
.profile__container {
  padding: 30px 16px;
  margin: 0 auto;
}

@media (min-width: 550px) {
  .profile__container {
    padding: 30px 40px;
  }
}

@media (min-width: 768px) {
  .profile__container {
    max-width: 776px;
  }
}

@media (min-width: 1024px) {
  .profile__container {
    max-width: 1008px;
  }
}

@media (min-width: 1280px) {
  .profile__container {
    max-width: 1248px;
  }
}

.profile__header {
  margin-bottom: 40px;
}

.profile__profile-info {
  margin-bottom: 40px;
}
</style>
