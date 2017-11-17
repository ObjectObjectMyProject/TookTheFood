<template>
    <section class="profile">
        <h1> Привет </h1>
        <div>Пользователь {{ $route.params.id }}</div>
        <router-view></router-view>
    </section>
</template>

<script src="./raw/profile.js">

</script>

<style>
</style>