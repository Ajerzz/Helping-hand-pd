


<template>

  <div>
    <h2>Главная страница</h2>
    <hr>
    <h3>
      Теперь вы авторизованы. С данного момента вы можете просматривать список вакансий и резюме. Также, если вы хотите создать своё объявление перейдите в интересующий вас раздел.
       
    </h3>

    <hr>
    <button type="button" class="btn btn-primary"><router-link to="/vacancies"><font color="white">Список вакансий</font></router-link></button>
    <hr>
     <button type="button" class="btn btn-primary"><router-link to="/resume"><font color="white">Список резюме</font></router-link></button>
    
    
<h4>
    <img src="./HH.jpg" alt="альтернативный текст" width="600">
</h4>


  </div>
</template>

<script>

// import firebase from 'firebase/app'

// export default {
// firebase.auth().onAuthStateChanged(user =>{
// if (user) {

// }
// else {
//   this.$router.push('/')
// }

// })
// }
</script>



<style scoped>
p{
  color: rgb(49, 4, 248);
  display: inline-block;
  width: 300px;
}
router-link {
  color: rgb(2, 0, 12);
  display: flex;
}
</style>






















<style scoped>
p{
  color: rgb(49, 4, 248);
  display: inline-block;
  width: 300px;
}
router-link {
  color: rgb(2, 0, 12);
  display: flex;
}
</style>
