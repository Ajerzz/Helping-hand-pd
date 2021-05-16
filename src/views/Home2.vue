


<template>
<div>
 <div align="right"> <button type="button" class="btn btn-secondary"  @click="$router.push('/')"> <b><i class="material-icons">Выйти из аккаунта</i></b></button>  </div>  
  
    <h2>Главная страница</h2>
  
    <hr>
    <h3>
      Теперь вы авторизованы. С данного момента вы можете просматривать список вакансий и резюме. Также, если вы хотите создать своё объявление перейдите в интересующий вас раздел.
       
    </h3>

  
    <hr>
     <button type="button" class="btn btn-primary"  @click="$router.push('/vacancies')"> <b><i class="material-icons">Список вакансий</i></b></button>
    <hr>
    <button type="button" class="btn btn-primary"  @click="$router.push('/resume')"> <b><i class="material-icons">Список резюме</i></b></button>
     
    
     
<h4>

    
<img src="./HH.jpg" alt="альтернативный текст" width="600">
</h4>


  </div>
</template>

<script>


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
