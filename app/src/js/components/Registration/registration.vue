

<template>
    <section class="registration">
        <div class="container" v-if="firstScreen">
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                    <div class="ui-title">
                        <h4> Регистрация </h4>
                    </div>
                </div>
                <div class="col">
                    <div class="ui-title center">
                        <h4> Условия </h4>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                    <div class="registration-wrap">
                        <form  class="registration-form" id="registration" method="post" novalidate>
                            <div class="ui-form__input" v-bind:class="{ error: formErrors.userNameError, 'success': formSuccess.userNameSuccess}">
                                <label>
                                    <h5> Имя пользователя: </h5>
                                    <div class="ui-form__wrapper">
                                        <div class="ui-form__wrapper-icon">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
													 viewBox="0 0 409.165 409.164" style="enable-background:new 0 0 409.165 409.164;"
													 xml:space="preserve">
														<path d="M204.583,216.671c50.664,0,91.74-48.075,91.74-107.378c0-82.237-41.074-107.377-91.74-107.377
															c-50.668,0-91.74,25.14-91.74,107.377C112.844,168.596,153.916,216.671,204.583,216.671z"/>
														<path d="M407.164,374.717L360.88,270.454c-2.117-4.771-5.836-8.728-10.465-11.138l-71.83-37.392
															c-1.584-0.823-3.502-0.663-4.926,0.415c-20.316,15.366-44.203,23.488-69.076,23.488c-24.877,0-48.762-8.122-69.078-23.488
															c-1.428-1.078-3.346-1.238-4.93-0.415L58.75,259.316c-4.631,2.41-8.346,6.365-10.465,11.138L2.001,374.717
															c-3.191,7.188-2.537,15.412,1.75,22.005c4.285,6.592,11.537,10.526,19.4,10.526h362.861c7.863,0,15.117-3.936,19.402-10.527
															C409.699,390.129,410.355,381.902,407.164,374.717z"/>
												</svg>
                                        </div>
                                        <input type="text" v-model='formData.userName' v-on:blur="nameValidate()">
                                    </div>
                                </label>
                                <p class="ui-form__error-message" v-if="formErrors.userNameError"> {{errorText.valid}} </p>
                            </div>
                            <div class="ui-form__input" v-bind:class="{ 'error': formErrors.userMailError, 'success': formSuccess.userMailSuccess}">
                                <label>
                                    <h5> Почта: </h5>
                                    <div class="ui-form__wrapper">
                                        <input type="text" v-model='formData.userMail' v-on:blur="mailValidate()">
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
                                <p class="ui-form__error-message" v-if="formErrors.userMailError"> {{errorText.valid}} </p>
                            </div>
                            <div class="ui-form__input" v-bind:class="{ 'error': formErrors.passwordError, 'success': formSuccess.passwordSuccess}">
                                <label>
                                    <h5> Пароль: </h5>
                                    <div class="ui-form__wrapper">
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
                                        <input type="password" v-model='formData.password' v-on:blur="passwordValidate()">
                                    </div>
                                </label>
                                <p class="ui-form__error-message" v-if="formErrors.passwordError"> {{errorText.valid}} </p>
                            </div>
                            <div class="ui-form__input" v-bind:class="{ 'error': formErrors.repeatPassword, 'success': formSuccess.repeatPasswordSuccess}">
                                <label>
                                    <h5> Подтверждение пароля: </h5>
                                    <div class="ui-form__wrapper">
                                        <div class="ui-form__wrapper-icon">
                                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
											 viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve">
                                                <path d="M465.99,212.009h-59.997c-8.291,0-14.999,6.709-14.999,14.999v134.993H181.004v-44.998
                                                            c0-12.371-14.16-19.363-23.993-11.996L37.017,395.002c-8.006,5.989-7.994,18.013,0,23.993l119.994,89.995
                                                            c9.69,7.322,23.993,0.501,23.993-11.996v-44.998h254.987c24.813,0,44.998-20.185,44.998-44.998V227.008
                                                            C480.989,218.717,474.28,212.009,465.99,212.009z"/>
                                                <path d="M474.983,93.022L354.989,3.026c-9.79-7.407-23.993-0.379-23.993,11.996V60.02H76.009
                                                            c-24.813,0-44.998,20.185-44.998,44.998v179.991c0,8.291,6.709,14.799,14.999,14.799h59.997c8.291,0,14.999-6.509,14.999-14.799
                                                            V149.816h209.989v45.198c0,12.44,14.292,19.374,23.993,11.996l119.994-89.995C482.989,111.026,482.977,99.001,474.983,93.022z"/>
										    </svg>
                                        </div>
                                        <input type="password" v-model='formData.repeatPassword' v-on:blur="confimPasswordValidate()">
                                    </div>
                                </label>
                                <p class="ui-form__error-message" v-if="formErrors.repeatPassword"> {{errorText.notEqual}} </p>
                            </div>
                            <transition name="fade">
                                <div class="ui-form__button" v-if="confirmBtn">
                                    <button type="button" class="send-form" @click="registrate"> Подтвердить </button>
                                </div>
                            </transition>
                        </form>
                    </div>
                </div>
                <div class="col" v-bind:class="{ 'uiBackgroundGreen': formSuccess.agreeCheckBox }">
                    <p class="ui-text"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci assumenda dolore eius in inventore nesciunt omnis, qui quod reiciendis sit temporibus, veniam voluptates! Aliquam asperiores dolores facilis fugit hic incidunt minima nobis similique velit! Aspernatur beatae culpa, dignissimos in itaque maiores, nihil pariatur placeat quo saepe sit ut voluptatum.</p>
                    <p class="ui-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid deserunt doloremque eaque et fuga in laudantium non quod sint voluptatum?
                    </p>
                    <p class="ui-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci eos eveniet explicabo ipsa, laboriosam minima mollitia sed. Aspernatur, blanditiis consectetur doloremque doloribus ducimus iure labore necessitatibus quia, quis, rem vitae!
                    </p>
                    <div class="ui-form__checkbox-wrap">
                        <label class="ui-form__checkbox">
                            <input type="checkbox" v-model="formSuccess.agreeCheckBox" @click="addAgree">
                            <div class="ui-form__checkbox-square">
                                <svg version="1.1"xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                 width="490.434px" height="490.433px" viewBox="0 0 490.434 490.433" style="enable-background:new 0 0 490.434 490.433;"
                                 xml:space="preserve">
                                    <path d="M472.003,58.36l-13.132-11.282c-21.798-18.732-54.554-16.644-73.799,4.697L165.39,295.359l-66.312-57.112
                                                                        c-21.775-18.753-54.536-16.707-73.804,4.611l-11.611,12.848c-9.416,10.413-14.305,24.149-13.595,38.18
                                                                        c0.717,14.023,6.973,27.188,17.402,36.6l121.553,111.311c10.524,9.883,24.628,15.037,39.044,14.272
                                                                        c14.416-0.763,27.894-7.386,37.311-18.329l262.245-304.71c9.162-10.646,13.717-24.494,12.661-38.496
                                                                        C489.229,80.522,482.655,67.512,472.003,58.36z"/>
                                 </svg>
                            </div>
                            <span class="ui-form__checkbox-text">
									Согласен со всеми условиями
							</span>
                        </label>
                    </div>
                </div>

            </div>
        </div>
        <section class="registration-final" v-if="secondScreen">
            <div class="registration-final__wrap">
                <div class="registration-final__pic">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                             viewBox="0 0 511.98 511.98" style="enable-background:new 0 0 511.98 511.98;" xml:space="preserve">
                        <path style="fill:#DFE3E5;" d="M445.513,511.98H66.468c-13.443,0-24.341-10.898-24.341-24.341V254.715h427.725
                            v232.924C469.853,501.082,458.956,511.98,445.513,511.98z"/>
                        <path id="SVGCleanerId_0_1_" style="fill:#DFE3E5;" d="M445.513,511.98H66.468c-13.443,0-24.341-10.898-24.341-24.341V254.715
                                h427.725v232.924C469.853,501.082,458.956,511.98,445.513,511.98z"/>
                        <path style="opacity:0.15;enable-background:new    ;" d="M221.215,409.486L42.128,254.715h427.725l-177.92,154.668
                            C271.667,427.002,241.532,427.045,221.215,409.486z"/>
                        <path style="fill:#FDB876;" d="M221.215,99.945L42.128,254.715h427.725l-177.92-154.668
                            C271.667,82.429,241.532,82.385,221.215,99.945z"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M216.31,351.535L45.176,499.433c2.493,4.49,6.364,8.107,11.042,10.283
                            l169.9-146.832c3.134-2.709,3.479-7.445,0.77-10.579C224.18,349.172,219.445,348.828,216.31,351.535z M296.854,351.652
                            c-3.128-2.717-7.862-2.388-10.581,0.739c-2.718,3.126-2.387,7.863,0.739,10.581L455.799,509.7
                            c4.672-2.182,8.536-5.802,11.022-10.294L296.854,351.652z"/>
                        <path style="fill:#FFFFFF;" d="M370.885,225.527H141.097c-5.527,0-10.008,4.481-10.008,10.008v96.062l90.126,77.889
                            c20.318,17.559,50.452,17.515,70.719-0.103l88.96-77.334v-96.514C380.893,230.008,376.413,225.527,370.885,225.527z"/>
                        <path style="fill:#4A5058;" d="M256.411,360.006c-0.934,0-1.884-0.176-2.804-0.547c-3.841-1.55-5.698-5.921-4.148-9.762
                            l66.518-164.842c1.549-3.84,5.916-5.701,9.762-4.148c3.841,1.55,5.698,5.921,4.148,9.762l-66.519,164.842
                            C262.191,358.232,259.381,360.006,256.411,360.006z"/>
                        <path style="fill:#80CBDE;" d="M325.796,171.426l-24.276,22.093c-2.669,2.43-1.384,6.866,2.17,7.493l32.759,5.776
                            c3.555,0.627,6.279-3.103,4.602-6.298L325.796,171.426z"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M325.796,171.426l-14.621,13.307c3.795,1.229,7.718,2.217,11.758,2.93
                            c4.041,0.713,8.065,1.126,12.051,1.268L325.796,171.426z"/>
                        <circle style="fill:#80CBDE;" cx="339.54" cy="93.47" r="86.62"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M402.725,34.209c8.179,16.136,11.393,34.96,8.01,54.147
                            c-8.307,47.113-53.234,78.571-100.347,70.264c-19.187-3.383-35.777-12.841-48.142-26.046c11.904,23.485,34.329,41.276,62.254,46.2
                            c47.113,8.307,92.04-23.151,100.347-70.264C429.772,80.585,420.723,53.428,402.725,34.209z"/>
                        <path style="fill:#4A5058;" d="M256.415,360.004c-4.143,0-7.5-3.357-7.5-7.5V209.04c0-4.143,3.357-7.5,7.5-7.5s7.5,3.357,7.5,7.5
                            v143.465C263.915,356.647,260.557,360.004,256.415,360.004z"/>
                        <path style="fill:#E8618C;" d="M256.414,192.552l-20.07,25.973c-2.207,2.856-0.171,7.002,3.438,7.002h33.264
                            c3.609,0,5.645-4.146,3.438-7.002L256.414,192.552z"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M256.414,192.552l-12.089,15.644c3.951,0.552,7.986,0.844,12.089,0.844
                            s8.137-0.292,12.088-0.844L256.414,192.552z"/>
                        <circle style="fill:#E8618C;" cx="256.411" cy="113.39" r="86.62"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M308.348,44.061c10.857,14.471,17.29,32.451,17.29,51.934
                            c0,47.84-38.782,86.621-86.621,86.621c-19.483,0-37.463-6.434-51.934-17.29c15.802,21.061,40.975,34.688,69.331,34.688
                            c47.84,0,86.621-38.782,86.621-86.621C343.036,85.036,329.409,59.863,308.348,44.061z"/>
                        <path style="fill:#4A5058;" d="M256.417,360.006c-2.995,0-5.824-1.806-6.983-4.763l-67.366-171.694
                            c-1.514-3.855,0.386-8.208,4.242-9.721c3.856-1.516,8.209,0.386,9.721,4.242l67.366,171.694c1.514,3.855-0.386,8.208-4.242,9.721
                            C258.255,359.839,257.328,360.006,256.417,360.006z"/>
                        <path style="fill:#FFE584;" d="M186.186,164.573l-15.255,29.064c-1.677,3.196,1.047,6.925,4.602,6.298l32.759-5.776
                            c3.555-0.627,4.84-5.063,2.17-7.493L186.186,164.573z"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M186.186,164.573l-9.188,17.505c3.987-0.143,8.011-0.556,12.051-1.268
                            c4.041-0.712,7.963-1.7,11.758-2.93L186.186,164.573z"/>
                        <circle style="fill:#FFE584;" cx="172.441" cy="86.62" r="86.62"/>
                        <path style="opacity:0.1;enable-background:new    ;" d="M211.545,9.32c13.205,12.366,22.663,28.955,26.046,48.142
                            c8.307,47.113-23.151,92.04-70.264,100.347c-19.187,3.383-38.011,0.17-54.147-8.01c19.219,17.997,46.376,27.046,74.301,22.122
                            c47.113-8.307,78.571-53.234,70.264-100.347C252.821,43.649,235.03,21.224,211.545,9.32z"/>
                    </svg>
                </div>
                <div class="registration-final__title">
                    Спасибо за регистрацию <strong>{{formData.userName}}</strong>!
                </div>
                <div class="registration-final__key">
                    <strong> Ваш уникальный идентификатор: </strong> <span> {{token}} </span>
                </div>
                <div class="registration-final__button">
                    <button @click="goToHome"> Вернуться на главную </button>
                </div>
            </div>
        </section>
    </section>
</template>

<script src="./raw/registration.js">

</script>