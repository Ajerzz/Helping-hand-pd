import firebase from 'firebase/app'


export default {
  actions: {
    async createRecord({commit, dispatch}, record) {
      try {
        const uid = await dispatch('getUid')
        return await firebase.database().ref(`/adds/records`).push(record)
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchRecords({dispatch, commit}) {
      try {
        const uid = await dispatch('getUid')
        const records = (await firebase.database().ref(`/adds/records`).once('value')).val() || {}
        return Object.keys(records).map(key => ({...records[key], id: key}))
      } catch (e) {
        commit('setError', e)
        throw e
      }
    },
    async fetchRecordById({dispatch, commit}, id) {
      try {
        const uid = await dispatch('getUid')
        const record = (await firebase.database().ref(`/adds/records`).child(id).once('value')).val() || {}
        return {...record, id:id}
      } catch (e) {
        commit('setError', e)
        throw e
      }
    }
  }
}
