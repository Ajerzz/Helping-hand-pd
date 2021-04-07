<template>

  <form  @submit.prevent="submitHandler">
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
            :class="{invalid: $v.Title.$dirty && !$v.Title.required}"
        >
        <div class="helper-text invalid" v-if="$v.Title.$dirty && !$v.Title.required">
  <font color="red">Поле обязательно для заполнения</font>
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
            :class="{invalid: $v.Description.$dirty && !$v.Description.required}"
        >
        <div class="helper-text invalid" v-if="$v.Description.$dirty && !$v.Description.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
 </div>
  <!------------------------------------------------>

 <label for="Address"><b> Адрес </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Address.$touch()"
        class="form-control"
            id="Address"
            type="text"
            v-model.trim="Address"
            :class="{invalid: $v.Address.$dirty && !$v.Address.required}"
        >
        <div class="helper-text invalid" v-if="$v.Address.$dirty && !$v.Address.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
 </div>
<!------------------------------------------------>
 <label for="Name"><b> Имя </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Name.$touch()"
        class="form-control"
            id="Name"
            type="text"
            v-model.trim="Name"
            :class="{invalid: $v.Name.$dirty && !$v.Name.required}"
        >
        <div class="helper-text invalid" v-if="$v.Name.$dirty && !$v.Name.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
 </div>
 <!------------------------------------------------>
 <label for="Telephone"><b> Номер </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Telephone.$touch()"
        class="form-control"
            id="Telephone"
            type="text"
            v-model.number.trim="Telephone"
            :class="{invalid: $v.Telephone.$dirty && !$v.Telephone.required}"
        >
        <div class="helper-text invalid" v-if="$v.Telephone.$dirty && !$v.Telephone.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
 </div>
      <!------------------------------------------------>
       <label for="CountP"><b> Количество работников </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.CountP.$touch()"
        class="form-control"
            id="CountP"
            type="text"
            v-model.trim="CountP"
            :class="{invalid: $v.CountP.$dirty && !$v.CountP.required}"
        >
        <div class="helper-text invalid" v-if="$v.CountP.$dirty && !$v.CountP.required"><font color="red">Поле обязательно для заполнения</font></div>
      </div>
   <!------------------------------------------------>
   <hr>
    
  <!------------------------------------------------>
      

      </div>
      </div>
<div class="col-sm-4 mx-auto">

       <div>
         <button class="btn btn-primary auth-submit"
                 type="submit"> Добавить вакансию </button>

      </div>



      <router-link to='/Home2'>Выйти на главную</router-link>
    </div>
  </form>
</template>

<script>
import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'

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
    CountP: {required},
    Title: {required},
    Description: {required},
    Address: {required},
    Name: {required},
    Telephone: {required}
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