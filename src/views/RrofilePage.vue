<template>
  <ProfileWrapper>
    <ProfileHeader class="profile__header" @update="showPopup" />
    <ProfileSection
      class="profile__profile-info"
      title="О себе"
      description="Просьба заполнять реальные данные"
    >
      <ProfileInfoForm @update="showPopup" />
    </ProfileSection>

    <ProfileSection title="Изменение пароля">
      <ProfilePasswordForm @update="showPopup" />
    </ProfileSection>

    <Records>
      <template v-if="!isLoading">
        <template v-if="records.length">
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
        <p v-else>Нет записей</p>
      </template>
      <p v-else>Загрузка...</p>
    </Records>
  </ProfileWrapper>
  <teleport to="body">
    <transition name="flash-message">
      <FlashMessage v-if="message" :message="message" @close="message = null" />
    </transition>
  </teleport>
</template>

<script>
import RecordService from '@/services/RecordService';
import { getErrorData } from '@/utils/helpers';

import ProfileWrapper from '@/components/RrofilePage/ProfileWrapper.vue';
import ProfileHeader from '@/components/RrofilePage/ProfileHeader.vue';
import ProfileSection from '@/components/RrofilePage/ProfileSection.vue';
import ProfileInfoForm from '@/components/RrofilePage/ProfileInfoForm.vue';
import ProfilePasswordForm from '@/components/RrofilePage/ProfilePasswordForm.vue';

import Records from '@/components/RrofilePage/records/Records.vue';
import RecordsList from '@/components/RrofilePage/records/RecordsList.vue';
import RecordsListItem from '@/components/RrofilePage/records/RecordsListItem.vue';
import RecordsPagination from '@/components/RrofilePage/records/RecordsPagination.vue';
import RecordsPaginationItem from '@/components/RrofilePage/records/RecordsPaginationItem.vue';

import FlashMessage from '@/components/FlashMessage.vue';

export default {
  name: 'RrofilePage',

  components: {
    ProfileWrapper,
    ProfileHeader,
    ProfileSection,
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

  beforeRouteUpdate(to) {
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
      this.message = 'Данные обновлены';
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
