<template>
  <ProfileWrapper>
    <ProfileHeader class="profile__header" @update="showPopup" />
    <ProfileInfo
      class="profile__profile-info"
      title="О себе"
      description="Просьба заполнять реальные данные"
    >
      <ProfileInfoForm @update="showPopup" />
    </ProfileInfo>

    <ProfileInfo title="Изменение пароля">
      <ProfilePasswordForm @update="showPopup" />
    </ProfileInfo>

    <Records>
      <template v-if="!isLoading">
        <template v-if="records">
          <RecordsList>
            <RecordsListItem
              v-for="record in records"
              :key="record.id"
              :date="record.date"
              :time="record.time"
              :title="record.course.title"
              :picture="record.course.picture"
              :courseId="record.course.id"
            />
          </RecordsList>
          <RecordsPagination>
            <RecordsPaginationItem v-if="page >= 2" page="1">
              1
            </RecordsPaginationItem>
            <RecordsPaginationItem v-if="page >= 7" :page="page - 5">
              ...
            </RecordsPaginationItem>
            <RecordsPaginationItem v-if="page >= 4" :page="page - 2">
              {{ page - 2 }}
            </RecordsPaginationItem>
            <RecordsPaginationItem v-if="page >= 3" :page="page - 1">
              {{ page - 1 }}
            </RecordsPaginationItem>
            <RecordsPaginationItem
              class="records-pagination-item--active"
              :page="page"
            >
              {{ page }}
            </RecordsPaginationItem>
            <RecordsPaginationItem v-if="page <= pages - 2" :page="page + 1">
              {{ page + 1 }}
            </RecordsPaginationItem>
            <RecordsPaginationItem v-if="page <= pages - 3" :page="page + 2">
              {{ page + 2 }}
            </RecordsPaginationItem>
            <RecordsPaginationItem v-if="page <= pages - 6" :page="page + 5">
              ...
            </RecordsPaginationItem>
            <RecordsPaginationItem
              v-if="page <= pages - 1 && page !== pages"
              :page="pages"
            >
              {{ pages }}
            </RecordsPaginationItem>
          </RecordsPagination>
        </template>
        <h2 v-else>Нет записей</h2>
      </template>
      <h2 v-else>Загрузка...</h2>
    </Records>
  </ProfileWrapper>
  <teleport to="#app">
    <transition name="flash-message">
      <FlashMessage v-if="message" :message="message" @close="message = null" />
    </transition>
  </teleport>
</template>

<script>
import RecordService from '@/services/RecordService';
import { getErrorData } from '@/utils/helpers';

import ProfileWrapper from '@/components/profile/ProfileWrapper.vue';
import ProfileHeader from '@/components/profile/ProfileHeader.vue';
import ProfileInfo from '@/components/profile/ProfileInfo.vue';
import ProfileInfoForm from '@/components/profile/ProfileInfoForm.vue';
import ProfilePasswordForm from '@/components/profile/ProfilePasswordForm.vue';

import Records from '@/components/profile/records/Records.vue';
import RecordsList from '@/components/profile/records/RecordsList.vue';
import RecordsListItem from '@/components/profile/records/RecordsListItem.vue';
import RecordsPagination from '@/components/profile/records/RecordsPagination.vue';
import RecordsPaginationItem from '@/components/profile/records/RecordsPaginationItem.vue';

import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'TheProfile',

  components: {
    ProfileWrapper,
    ProfileHeader,
    ProfileInfo,
    ProfileInfoForm,
    ProfilePasswordForm,
    Records,
    RecordsList,
    RecordsListItem,
    RecordsPagination,
    RecordsPaginationItem,
    FlashMessage,
  },

  created() {
    const page = this.$route.query.page;
    const pageNumber = page ? page : 1;
    this.getRecords(pageNumber);
  },

  async beforeRouteUpdate(to) {
    const page = to.query.page;
    const pageNumber = page ? page : 1;
    this.getRecords(pageNumber);
  },

  data() {
    return {
      password: {
        password: null,
        'password.confirm': null,
      },
      records: [],
      page: 1,
      pages: 1,
      message: null,
      isLoading: true,
    };
  },

  methods: {
    async getRecords(page) {
      try {
        const response = await RecordService.getRecords(page);
        this.page = response.data.data.from;
        this.pages = response.data.data.last_page;
        this.records = response.data.data.data;
        this.isLoading = false;
      } catch (error) {
        console.log(getErrorData(error));
      }
    },

    async showPopup() {
      this.message = null;
      await this.$nextTick();
      this.message = 'Данные обоновлены';
    },
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
