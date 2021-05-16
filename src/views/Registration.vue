<template>

  <form  @submit.prevent="submitHandler">
     <h2 class="reg-title">Регистрация</h2>
    <div class="row g-3 align-items-center">
      
      <div class="col-sm-4 mx-auto">
       <label for="name">Ваше Имя</label>
      
      <div class="form-group">
        
        <input @blur="$v.name.$touch()"
        class="form-control"
            id="name"
            type="text"
            v-model.trim="name"
            :class="{invalid: (($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && $v.name.maxLength))}"  
        >
       
        <div class="helper-text invalid" v-if="$v.name.$dirty && !$v.name.required"><font color="red">Введите ваше имя</font></div>
        <div class="helper-text invalid" v-else-if="($v.name.$dirty && !$v.name.maxLength)"><font color="red">Введите корректное имя</font></div>
        <div class="helper-text invalid" v-else-if="($v.name.$dirty && !$v.name.numeric)"><font color="red">Допустимо вводить только буквы</font></div>
      </div>

      <!-----YEEEEEEEEEEEEEEEEEEEAAAAAAAAAAAAAAAAAAAAAAAAARSSSS--------|| ($v.name.$dirty && $v.name.numeric) )}"-----------     //  <div class="helper-text invalid" v-else-if="($v.name.$dirty && $v.name.numeric)"><font color="red">Допустимо вводить только символы</font></div>------------------->
       <label for="age">Год рождения</label>
      <div class="input-field">
        <input
            id="age"
            type="number"
            v-model.number.trim="age"
            :class="{invalid: ($v.age.$dirty && !$v.name.required) || ($v.age.$dirty && $v.age.minValue)|| ($v.age.$dirty && $v.age.maxValue)}"
        >

         <div class="helper-text invalid" v-if="(($v.age.$dirty && !$v.name.required) || ($v.age.$dirty && !$v.age.minValue)|| ($v.age.$dirty && !$v.age.maxValue))"><font color="red">Введите корректный год рождения (Вам должно быть больше 14 лет)</font></div>
       
        
         

      </div>
      <!------------------------------------------->
      
      <label for="email">Введите ваш Email</label>
       <input @blur="$v.email.$touch()"
      
          class="form-control"
            id="email" 
            name="email"         
            v-model.trim="email"
             type="text" :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}">
        
        <div class="helper-text invalid" v-if="$v.email.$dirty && !$v.email.required"><font color="red">Поле обязательно для заполнения</font></div>
        <div class="helper-text invalid" v-else-if="!$v.email.email"><font color="red">Пожалуйста введите Email адрес</font></div>  



      <label for="password">Придумайте пароль</label>
      <div class="form-group">
         
        <input @blur="$v.password.$touch()"
            id="password"
            type="password"
            class="form-control"
            v-model.trim="password"
            :class="{invalid: ($v.password.$dirty && !$v.password.required) || ($v.password.$dirty && !$v.password.minLength)}">
       
        <div class="helper-text invalid" v-if="$v.password.$dirty && !$v.password.required"><font color="red">Введите пароль</font></div>
        <div class="helper-text invalid" v-else-if="$v.password.$dirty && !$v.password.minLength"><font color="red">Пароль должен быть из {{$v.password.$params.minLength.min}} символов. Сейчас он {{password.length}}</font></div>
        

      </div>
      
       <div class="form-group">
      <label for="passwordConfirm">Подтверждение пароля</label>
                <input @blur="$v.passwordConfirm.$touch()"
                   id="passwordConfirm"
                   class="form-control"
                   v-model.trim="passwordConfirm"
                  type="password"  :class="{invalid: ($v.passwordConfirm.$dirty && !$v.passwordConfirm.required) || ($v.passwordConfirm.$dirty && !$v.passwordConfirm.sameAs)}">
                  <div class="helper-text invalid" v-if="$v.passwordConfirm.$dirty && !$v.passwordConfirm.required"><font color="red">Поле обязательно для заполнения</font></div>
                  <div class="helper-text invalid" v-if="!$v.passwordConfirm.sameAs"><font color="red">Пароли не совпадают</font></div>
       </div>    




      </div>
    </div>
    <div class="col-sm-4 mx-auto">
      
       <div>
         <button class="btn btn-primary auth-submit"
                 type="submit" > Зарегистрироваться </button>
        
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>

      <div align="center"> <button type="button" class="btn btn-primary"  @click="$router.push('/')"> <b>Выйти на главную</b></button>  </div>
    </div>
  </form>
</template>

<script>
import {email, required, minLength, sameAs, minValue, maxValue, maxLength, numeric} from 'vuelidate/lib/validators'

//

export default {
    name: 'register',
    data: () => ({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
    age: '',
    agree: false
  }),
 validations: {
    email: {email, required},
    password: {required, minLength: minLength(6)},
    passwordConfirm: {required, sameAs: sameAs('password')},
    name: {required, maxLength: maxLength(45)},
    age: {required, minValue: minValue(1903), maxValue: maxValue(2007)}
 
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name,
        age: this.age
      }

      try {
        await this.$store.dispatch('register', formData)
        this.$router.push('Home2')
      } catch (e) {
        if(ReferenceError)
        {
         alert('Аккаунт с данным email адресом уже существует')
        }

      }
    }
  }
  
}

</script>
