<template>

  <form  @submit.prevent="submitHandler">
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
            :class="{invalid: $v.Name.$dirty && !$v.Name.required}"
        >
        <div class="helper-text invalid" v-if="$v.Name.$dirty && !$v.Name.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
 </div>  


       <label for="Age"><b>Возраст  </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Age.$touch()"
        class="form-control"
            id="Age"
            type="text"
            v-model.trim="Age"
            :class="{invalid: $v.Age.$dirty && !$v.Age.required}"
        >
        <div class="helper-text invalid" v-if="$v.Age.$dirty && !$v.Age.required">
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

 

 <label for="Abilities"><b> Род деятельности </b></label>
      
      <div class="form-group">
        
        <input @blur="$v.Abilities.$touch()"
        class="form-control"
            id="Abilities"
            type="text"
            v-model.trim="Abilities"
            :class="{invalid: $v.Abilities.$dirty && !$v.Abilities.required}"
        >
        <div class="helper-text invalid" v-if="$v.Abilities.$dirty && !$v.Abilities.required">
  <font color="red">Поле обязательно для заполнения</font>
</div>
 </div>
 
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
  
   <hr>
    
  <!------------------------------------------------>
      

      </div>
      </div>
<div class="col-sm-4 mx-auto">

       <div>
         <button class="btn btn-primary auth-submit"
                 type="submit"> Добавить резюме </button>

      </div>



      <router-link to='/Home2'>Выйти на главную</router-link>
    </div>
  </form>
</template>

<script>
import {email, required, minLength, sameAs} from 'vuelidate/lib/validators'

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
   Abilities: {required},
    Age: {required},
    Description: {required},
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