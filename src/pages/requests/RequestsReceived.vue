<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
        <ul v-if="hasRequests">
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
  computed: {
    receivedRequests() {
      return this.$store.getters['requests/requests'];
    },
    hasRequests() {
      return this.$store.getters['requests/hasRequests'];
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