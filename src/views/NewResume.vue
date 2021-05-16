<template>

  <form  @submit.prevent="submitHandler">
  <div align="right"> <button type="button" class="btn btn-secondary"  @click="$router.push('/')"> <b><i class="material-icons">Выйти из аккаунта</i></b></button>  </div>
     <h2 class="reg-title">Создать резюме</h2>
    <div class="row g-3 align-items-center">
      
      <!------------------------------------------------>

      <div class="col-sm-4 mx-auto">

      <label for="Name"><b> Имя </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Name.$touch()"
        class="form-control"
            id="Name"
            type="text"
            v-model.trim="Name"
            :class="{invalid: (($v.Name.$dirty && !$v.Name.required) || ($v.Name.$dirty && !$v.Name.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Name.$dirty && !$v.Name.required"><font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-if="($v.Name.$dirty && !$v.Name.maxLength)"><font color="red">Введите корректное имя</font></div>
 </div>  


       <label for="Age"><b>Возраст  </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Age.$touch()"
        class="form-control"
            id="Age"
            type="text"
            v-model.trim="Age"
            :class="{invalid: (($v.Age.$dirty && !$v.Age.required)|| ($v.Age.$dirty && $v.Age.minValue)|| ($v.Age.$dirty && $v.Age.maxValue))}"
        >
        <div class="helper-text invalid" v-if="$v.Age.$dirty && !$v.Age.required">
  <font color="red">Поле обязательно для заполнения</font>
  </div>   
  <div class="helper-text invalid" v-if="(($v.Age.$dirty && !$v.Age.minValue)|| ($v.Age.$dirty && !$v.Age.maxValue))">
  <font color="red">Введите корректный возраст</font>
    </div>   
</div>

  <!------------------------------------------------>

      <label for="Description"><b> Описание </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Description.$touch()"
        class="form-control"
            id="Description"
            type="text"
            v-model.trim="Description"
            :class="{invalid: (($v.Description.$dirty && !$v.Description.required) || ($v.Name.$dirty && !$v.Name.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Description.$dirty && !$v.Description.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-if="($v.Description.$dirty && !$v.Description.maxLength)"><font color="red">Введите корректное имя</font></div>
 </div>
  <!------------------------------------------------>

 

 <label for="Abilities"><b> Род деятельности </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Abilities.$touch()"
        class="form-control"
            id="Abilities"
            type="text"
            v-model.trim="Abilities"
            :class="{invalid: (($v.Abilities.$dirty && !$v.Abilities.required) || ($v.Name.$dirty && !$v.Name.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Abilities.$dirty && !$v.Abilities.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-if="($v.Abilities.$dirty && !$v.Abilities.maxLength)"><font color="red">Введите корректное имя</font></div>
 </div>
 
 <label for="Telephone"><b> Номер / email </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Telephone.$touch()"
        class="form-control"
            id="Telephone"
            type="text"
            v-model.number.trim="Telephone"
            :class="{invalid: (($v.Telephone.$dirty && !$v.Telephone.required) || ($v.Name.$dirty && !$v.Name.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Telephone.$dirty && !$v.Telephone.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-if="($v.Telephone.$dirty && !$v.Telephone.maxLength)"><font color="red">Введите корректное имя</font></div>
 </div>
  
   <hr>
    
  <!------------------------------------------------>
      

      </div>
      </div>
<div class="col-sm-4 mx-auto">

       <div>
         <button class="btn btn-primary auth-submit"
                 type="submit"><h4> Добавить резюме</h4> </button>

      </div>
      <hr>
 <div><button type="button" class="btn btn-danger"  @click="$router.push('/Home2')"> <b>Выйти на главную</b></button> </div>
    </div>
  </form>
</template>

<script>
import {email, required, minValue, maxValue, maxLength, numeric} from 'vuelidate/lib/validators'

export default {
  name: 'worker',
  data: () => ({
   
    Age: '',
   Abilities: '',
    Description: '',
    Name: '',
    Telephone: '',
    agree: false
  }),
 validations: {
    Abilities: {required, maxLength: maxLength(45)},
    Age: {required, minValue: minValue(14), maxValue: maxValue(100)},
    Description: {required, maxLength: maxLength(180)},
    Name: {required, maxLength: maxLength(45)},
    Telephone: {required, maxLength: maxLength(45)}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const PostData = {
     Abilities: this.Abilities,
        Age: this.Age,
        Description: this.Description,
        Name: this.Name,
        Telephone: this.Telephone
      }

      try {
        await this.$store.dispatch('createResume', PostData)
       // await this.$store.dispatch('createRecord', formData)
        this.$router.push('/resume')
      } catch (e) {}
    }
  }
}
</script>