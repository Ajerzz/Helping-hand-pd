<template>
  <div id="app">
    <thead>
      <b><i>Вы еще не зарегестрированы</i></b>
      
    </thead>
    <h1>
      Helping hand
    </h1>
    

    <router-view />
    
  </div>
</template>



<style>
#app {
   
  background-image: url("./back.png");
  min-height: 1000px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
   color: rgba(15, 1, 9, 0.952);
  margin-top: 60px;
}
h1 {
  color: rgba(15, 1, 9, 0.952)
}
</style>
