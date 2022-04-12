import { createStore } from 'vuex'
const store = createStore({
    state () {
      return {
        status:false,
        pseudo:"",
        email:"",
        articles : []
      }
    },
    mutations: {
      setUserConnected (state, playload) {
        this.pseudo = playload.user.pseudo
        this.status = true
        this.email = playload.user.email
        console.log('connected !');
      },
      setUserDeconnected(state){
        this.pseudo = ""
        this.status = false
        this.email = ""
        console.log('deconnected !');
      }
    }
})

export default store;