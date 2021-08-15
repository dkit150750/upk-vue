<template>
  <h1 class="main__title">Список участников</h1>
  <div class="lecture-users" v-if="users.length">
    <article class="lecture-user" v-for="user in users" :key="user.id">
      <p class="lecture-user__name">
        {{ user.lastname }} {{ user.name }} {{ user.patronymic }}
      </p>
      <a class="lecture-user__emil" :href="`mailto:${user.email}`">
        {{ user.email }}
      </a>
      <a
        class="lecture-user__phone"
        v-if="user.telephone"
        :href="`tel:${user.telephone}`"
      >
        {{ user.telephone }}
      </a>
      <span v-else>Телефон не указан</span>
      <button
        class="lecture-users__button lecture-users__button--admin"
        v-if="user.isAdmin"
        @click="changeAdmin(parseInt(user.id))"
      >
        Админ
      </button>
      <button
        class="lecture-users__button"
        v-else
        @click="changeAdmin(parseInt(user.id))"
      >
        User
      </button>
    </article>
  </div>
  <p class="lecture-users-null" v-else>участников нет</p>
</template>

<script>
import UserService from '@/services/UserService';
import LectureService from '@/services/LectureService';
import { getErrorData } from '@/utils/helpers';

export default {
  name: 'LectureUsers',

  beforeRouteUpdate(to) {
    this.getUsers(parseInt(to.params.lectureId));
  },

  created() {
    console.log(this.$route.params);
    this.getUsers(parseInt(this.$route.params.lectureId));
  },

  data() {
    return {
      users: [],
    };
  },

  methods: {
    async getUsers(id) {
      try {
        const response = await LectureService.getUsers(id);
        this.users = response.data.data;
      } catch (error) {
        this.$router.go(-1);
        console.log(getErrorData(error));
      }
    },

    async changeAdmin(id) {
      this.users.map((user) => {
        if (user.id === id) {
          user.isAdmin = !user.isAdmin;
        }
      });

      try {
        await UserService.changeAdmin(id);
      } catch (error) {
        console.log(getErrorData(error));
      }
    },
  },
};
</script>

<style>
.lecture-users {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 750px) {
  .lecture-users {
    grid-template-columns: minmax(100px, 400px) minmax(100px, 400px);
  }
}

.lecture-user {
  display: grid;
  justify-items: flex-start;
  gap: 10px;
  padding: 1rem;
  background-color: var(--color-gray-180);
  border-radius: 12px;
}

.lecture-user__name {
  margin: 0;
  font-weight: 600;
}

.lecture-user__phone {
  display: block;
}

.lecture-user__email {
  display: block;
}

.lecture-users__button {
  display: block;
  padding: 5px 10px;
  font-weight: 500;
  font-family: inherit;
  color: var(--color-green-600);
  cursor: pointer;
}

.lecture-users__button--admin {
  color: var(--color-red-600);
}

.lecture-users-null {
  font-size: 20px;
}
</style>
