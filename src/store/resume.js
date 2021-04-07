import firebase from 'firebase/app'


export default {
  actions: {
    async createResume({commit, dispatch}, worker) {
      try {
        const uid = await dispatch('getUid')
        return await firebase.database().ref(`/resume/workers`).push(worker)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchResume({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const workers = (await firebase.database().ref(`/resume/workers`).once('value')).val() || {}
        return Object.keys(workers).map(key => ({...workers[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchResumeById({dispatch, commit}, id) {
      try {
        const uid = await dispatch('getUid')
        const worker = (await firebase.database().ref(`/resume/workers`).child(id).once('value')).val() || {}
        return {...worker, id:id}
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
