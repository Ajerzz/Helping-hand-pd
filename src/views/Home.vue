<template>
  <div>
    <h2>Главная страница</h2>
    <hr>
    <h3>
      Здравствуйте, мы ради приветсвовать вас на нашем сайте. 
      Helping hand - это сайт, предназначенный для связи людей, нуждающихся в помощи, с теми, кто хочет найти быструю подработку поблизости.
       Выгул собак, помощь с переездом, мойка автомобиля, уборка дома и многие другие задачи станут легко решаемыми благодаря нашему приложению 
       
       </h3>
    <hr>
    <router-link to="/todos">Вакансии</router-link>
    <hr>
    <router-link to="/Resume">Резюме</router-link>
<h4>
    <img src="./HH.jpg" alt="альтернативный текст" width="600">
</h4>
  </div>
</template>

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

