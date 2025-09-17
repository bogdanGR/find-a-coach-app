export default {
  async registerCoach(context, data) {
    const userId = context.rootGetters.userId;

    const coachData = {
      firstName: data.first,
      lastName: data.last,
      description: data.desc,
      hourlyRate: data.rate,
      areas: data.areas
    };

    const response = await fetch(`https://coachapp-418b6-default-rtdb.europe-west1.firebasedatabase.app/coaches/${userId}.json`, {
      method: 'PUT',
      body: JSON.stringify(coachData),
    });

    //const reponseData = await response.json();

    if (!response.ok) {
      console.error(response);
    }
    //commit mutation
    context.commit('registerCoach', {
      ...coachData,
      id: userId
    });
  }
};