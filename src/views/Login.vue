<template>
<div class="container mt-4">
    <div class="col-sm-4 mx-auto">
      <h2 class="reg-title">Вход</h2>

  <form  @submit.prevent="submitHandler" novalidate>
    
    <div class="col-sm-8 mx-auto">
    
      
     <div class="form-group">
         <label for="$v.email"><b>Введите ваш Email </b> </label>
        <input @blur="$v.email.$touch()"
           
          class="form-control"
            id="email"          
            v-model.trim="email"
             type="text" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
  
        <div class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required"><font color="red">Поле обязательно для заполнения</font></div>
        <div class="helper-text invalid" v-else-if="!$v.email.email"><font color="red">Пожалуйста введите Email адрес</font></div>
      </div>


          <hr>

      <div class="form-group">
         <label for="password"><b>Пароль</b></label>
        <input @blur="$v.password.$touch()"
        class="form-control"
            id="password"
            type="password"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
       
        <div class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required"><font color="red">Введите пароль</font></div>
        <div class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength"><font color="red">Пароль должен быть из {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</font></div>
        

      </div>
    </div>
    <div class="card-action">
      <div>
         <button class="btn btn-primary auth-submit"
                 type="submit"> Войти </button>
        
      </div>

 
      <p class="center">
        Нет аккаунта?
        <router-link to="/registration">Зарегистрироваться</router-link>
      </p>
       <div align="center"> <button type="button" class="btn btn-primary"  @click="$router.push('/')"> <b>Выйти на главную</b></button>  </div>
    </div>
  </form>
  </div>
  </div>
</template>

<script>
import {email, required, minLength} from 'vuelidate/lib/validators'
import messages from '@/utils/messages'
   
export default {
  name: 'login',
  data: () => ({
    email: '',
    password: '',
    agree: false
  }),
  validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)}
  },
  mounted() {
    if (messages[this.$route.query.message]) {
      this.$message(messages[this.$route.query.message])
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        password: this.password
      }   
      try {

        await this.$store.dispatch('login', formData)
        this.$router.push('Home2')
      } catch (e) {
        alert('Неверное сочетание адреса электронной почты и пароля');
      }
    }
  }
}
</script>

