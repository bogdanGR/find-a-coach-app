export default {
  registerCoach(context, data) {
    console.log(data);
    const coachData = {
      id: context.rootGetters.userId,
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    //commit mutation
    context.commit('registerCoach', coachData);
  }
};