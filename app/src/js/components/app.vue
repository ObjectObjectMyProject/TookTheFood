<template>
    <div id="app">
        <HeaderMain/>
        <router-view></router-view>
        <FooterMain></FooterMain>
        <div class="modal-view close">
            <div class="modal-view__container">
                <header class="modal-view__header">
                    <div class="modal-view__header-close">
                        [x] Закрыть
                    </div>
                </header>
                <main class="modal-view__main">
                    <h2 class="modal-view__main-title">
                        Вход
                    </h2>
                    <p class="modal-view__main-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium cumque, dolorem ducimus ea error ex hic, illum ipsa nihil placeat quo ratione sed.
                    </p>
                </main>
                <footer class="modal-view__footer">
                    <div class="ui-form__input">
                        <label>
                            <h5> Почта: </h5>
                            <div class="ui-form__wrapper">
                                <input type="text">
                                <div class="ui-form__wrapper-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
													 viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
													<path d="M306.768,346.814h0.131c4.615,0,9.176-1.339,12.866-3.777l1.001-0.643c0.218-0.142,0.446-0.271,0.675-0.424l11.658-9.645
														l278.259-229.624c-0.576-0.795-1.557-1.339-2.602-1.339H3.233c-0.751,0-1.448,0.272-2.003,0.729l291.125,239.954
														C296.024,345.083,301.259,346.814,306.768,346.814z M0,133.899v340.37l208.55-168.471L0,133.899z M403.668,306.941L612,474.356
														V135.031L403.668,306.941z M337.431,361.585c-8.305,6.814-19.168,10.57-30.576,10.57c-11.451,0-22.304-3.734-30.587-10.516
														l-47.765-39.394L0,506.806v0.587c0,1.753,1.502,3.244,3.276,3.244h605.491c1.741,0,3.232-1.491,3.232-3.255v-0.544L383.693,323.4
														L337.431,361.585z"/>
												</svg>
                                </div>
                            </div>
                        </label>
                        <p class="ui-form__error-message"> </p>
                    </div>
                    <div class="ui-form__input">
                        <label>
                            <h5> Пароль: </h5>
                            <div class="ui-form__wrapper">
                                <input type="text">
                                <div class="ui-form__wrapper-icon">
                                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                                    width="516.375px" height="516.375px" viewBox="0 0 516.375 516.375" style="enable-background:new 0 0 516.375 516.375;"
                                                    xml:space="preserve">
                                                    <path d="M353.812,0C263.925,0,191.25,72.675,191.25,162.562c0,19.125,3.825,38.25,9.562,57.375L0,420.75v95.625h95.625V459H153
                                                            v-57.375h57.375l86.062-86.062c17.213,5.737,36.338,9.562,57.375,9.562c89.888,0,162.562-72.675,162.562-162.562S443.7,0,353.812,0
                                                            z M401.625,172.125c-32.513,0-57.375-24.862-57.375-57.375s24.862-57.375,57.375-57.375S459,82.237,459,114.75
                                                            S434.138,172.125,401.625,172.125z"/>
                                                    </svg>
                                </div>
                            </div>
                        </label>
                        <p class="ui-form__error-message"> </p>
                    </div>
                    <button class="modal-view__footer-accept"> Подтвердить </button>
                </footer>
            </div>
        </div>
    </div>

</template>

<script>
    import HeaderMain from './header/header.vue';
    import FooterMain from './footer/footer.vue';
    import Firebase from 'firebase';

    let config = {
        apiKey: "AIzaSyDWQyXRolJ0vJqwxO11HiDdlgditDUVb08",
        authDomain: "tookthefood.firebaseapp.com",
        databaseURL: "https://tookthefood.firebaseio.com",
        projectId: "tookthefood",
        storageBucket: "tookthefood.appspot.com",
        messagingSenderId: "161571327728"
    };

    let app = Firebase.initializeApp(config);
    let db = app.database();
    let usersRef = db.ref('users');


    export default {
        name: 'app',
        firebase: {
            users: usersRef
        },
        components: {
            HeaderMain,
            FooterMain
        },
        mounted: function() {

        },
        created() {

        }
    }
</script>

<style>

</style>