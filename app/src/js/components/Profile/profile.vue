<template>
    <section class="profile">
        <h1> Привет </h1>
        <div>Пользователь {{ $route.params.id }}</div>
        <section class="profile-cart" v-for="item in cart">
            <div class="profile-cart__item">
                <div class="profile-cart__item-picture">
                    {{ item.pic }}
                </div>
                <div class="profile-cart__item-name">
                    {{ item.productName }}
                </div>
                <div class="profile-cart__item-count">
                    {{ item.count }}
                </div>
                <div class="profile-cart__item-cost">
                    {{ item.cost }}
                </div>
                <div class="profile-cart__item-delete">
                   Удалить
                </div>
            </div>
        </section>
    </section>
</template>

<script src="./raw/profile.js">

</script>

<style>
</style>