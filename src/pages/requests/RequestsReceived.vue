<template>
  <base-dialog :show="!!error" title="An error occurred!!" @close="handleError">
    <p>{{ error }}</p>
  </base-dialog>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="hasRequests && !isLoading">
          <request-item v-for="request in receivedRequests"
                        :email="request.userEmail"
                        :message="request.message"
                        :key="request.id"></request-item>
        </ul>
        <h3 v-else>You haven't received any requests yet!</h3>
      </header>
    </base-card>
  </section>
</template>
<script>
import requestItem from '../../components/requests/RequestItem.vue';

export default {
  components: {
    requestItem
  },
  data() {
    return {
      isLoading: false,
      error: null,
    }
  },
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
    }
  },
  created() {
    this.loadRequests();
  },
  methods: {
    async loadRequests() {
      this.isLoading = true;
      try {
        await this.$store.dispatch('requests/getRequests');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }

      this.isLoading = false;
    },
    handleError() {
      this.error = null;
    }
  }

};
</script>
<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>