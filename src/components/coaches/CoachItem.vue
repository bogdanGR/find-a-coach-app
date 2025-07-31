<template>
  <li>
    <h3>{{ fullName }}</h3>
    <h4>${{ rate }}/hour</h4>
    <div>
      <base-badge v-for="area in areas" :key="area" :type="area" :title="area"></base-badge>
    </div>
    <div class="actions">
      <base-button mode="outline" link :to="coachesContactLink">Contact</base-button>
      <base-button link :to="contactDetailsLink">View details</base-button>
    </div>
  </li>
</template>

<script>
import BaseButton from '@/components/ui/baseButton.vue';

export default {
  components: { BaseButton },
  props: ['id', 'firstName', 'lastName', 'rate', 'areas'],
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName;
    },
    coachesContactLink() {
      return `${this.$route.path}/${this.id}/contact`;
    },
    contactDetailsLink() {
      return `${this.$route.path}/${this.id}`;
    }
  }
}
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>