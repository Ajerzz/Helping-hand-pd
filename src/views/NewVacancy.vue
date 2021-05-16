<template>

  <form  @submit.prevent="submitHandler">
    <div align="right"> <button type="button" class="btn btn-secondary"  @click="$router.push('/')"> <b><i class="material-icons">Выйти из аккаунта</i></b></button>  </div>
     <h2 class="reg-title">Добавление вакансии</h2>
    <div class="row g-3 align-items-center">
      
      <!------------------------------------------------>

      <div class="col-sm-4 mx-auto">
       <label for="Title"><b> Введите название </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Title.$touch()"
        class="form-control"
            id="Title"
            type="text"
            v-model.trim="Title"
            :class="{invalid: (($v.Title.$dirty && !$v.Title.required) || ($v.Title.$dirty && !$v.Title.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Title.$dirty && !$v.Title.required"><font color="red">Поле обязательно для заполнения</font></div>       
<div class="helper-text invalid" v-else-if="($v.Title.$dirty && !$v.Title.maxLength)"><font color="red">Введите корректное название</font></div>
</div>

  <!------------------------------------------------>

      <label for="Description"><b> Описание </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Description.$touch()"
        class="form-control"
            id="Description"
            type="text"
            v-model.trim="Description"
            :class="{invalid: (($v.Description.$dirty && !$v.Description.required) || ($v.Description.$dirty && !$v.Description.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Description.$dirty && !$v.Description.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-else-if="($v.Description.$dirty && !$v.Description.maxLength)"><font color="red">Введите корректное описание</font></div>
 </div>
  <!------------------------------------------------>

 <label for="Address"><b> Адрес </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Address.$touch()"
        class="form-control"
            id="Address"
            type="text"
            v-model.trim="Address"
            :class="{invalid: (($v.Address.$dirty && !$v.Address.required) || ($v.Address.$dirty && !$v.Address.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Address.$dirty && !$v.Address.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-else-if="($v.Address.$dirty && !$v.Address.maxLength)"><font color="red">Введите корректный адрес</font></div>
 </div>
<!------------------------------------------------>
 <label for="Name"><b> Имя </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Name.$touch()"
        class="form-control"
            id="Name"
            type="text"
            v-model.trim="Name"
            :class="{invalid: (($v.Name.$dirty && !$v.Name.required) || ($v.Name.$dirty && !$v.Name.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Name.$dirty && !$v.Name.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-else-if="($v.Name.$dirty && !$v.Name.maxLength)"><font color="red">Введите корректное имя</font></div>
 </div>
 <!------------------------------------------------>
 <label for="Telephone"><b> Номер / email </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Telephone.$touch()"
        class="form-control"
            id="Telephone"
            type="text"
            v-model.number.trim="Telephone"
            :class="{invalid: (($v.Telephone.$dirty && !$v.Telephone.required) || ($v.Telephone.$dirty && !$v.Telephone.maxLength))}"
        >
        <div class="helper-text invalid" v-if="$v.Telephone.$dirty && !$v.Telephone.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
<div class="helper-text invalid" v-else-if="($v.Telephone.$dirty && !$v.Telephone.maxLength)"><font color="red">Введите корректный Номер / email</font></div>
 </div>
      <!------------------------------------------------>
       <label for="CountP"><b> Количество работников </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.CountP.$touch()"
        class="form-control"
            id="CountP"
            type="text"
            v-model.trim="CountP"
            :class="{invalid: (($v.CountP.$dirty && !$v.CountP.required) || ($v.CountP.$dirty && !$v.CountP.minValue)|| ($v.CountP.$dirty && !$v.CountP.maxValue))}"
        >
        <div class="helper-text invalid" v-if="(($v.CountP.$dirty && !$v.CountP.required))"><font color="red">Поле обязательно для заполнения</font></div>
         <div class="helper-text invalid" v-if="(($v.CountP.$dirty && !$v.CountP.minValue)|| ($v.CountP.$dirty && !$v.CountP.maxValue))"><font color="red">Введите приемлемое чило работников(Не больше 11)</font></div>
      </div>
   <!------------------------------------------------>
   <hr>
    
  <!------------------------------------------------>
      

      </div>
      </div>
<div class="col-sm-4 mx-auto">

       <div>
         <button class="btn btn-primary auth-submit"
                 type="submit"><h4> Добавить вакансию</h4> </button>

      </div>
      <hr>
 <div><button type="button" class="btn btn-danger"  @click="$router.push('/Home2')"> <b>Выйти на главную</b></button> </div>
</div>
  </form>
</template>

<script>
import {required, minValue, maxValue, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'record',
  data: () => ({
   
    Title: '',
    CountP: '',
    Description: '',
    Address: '',
    Name: '',
    Telephone: '',
    agree: false
  }),
 validations: {
    CountP: {required, minValue: minValue(1), maxValue: maxValue(10)},
    Title: {required, maxLength: maxLength(45)},
    Description: {required, maxLength: maxLength(180)},
    Address: {required , maxLength: maxLength(45)},
    Name: {required , maxLength: maxLength(45)},
    Telephone: {required , maxLength: maxLength(45)}
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }

      const PostData = {
        CountP: this.CountP,
        Title: this.Title,
        Description: this.Description,
        Address: this.Address,
        Name: this.Name,
        Telephone: this.Telephone
      }

      try {
        await this.$store.dispatch('createRecord', PostData)
       // await this.$store.dispatch('createRecord', formData)
        this.$router.push('/vacancies')
      } catch (e) {}
    }
  }
}
</script>