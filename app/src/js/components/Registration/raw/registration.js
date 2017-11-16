import FormValidator from '../../../services/FormValidator';
import firebase from 'firebase';

export default {

    data: function (){
        return {
            formData: {
                userName: ''  || 'Anonymous',
                userMail: '',
                password: '',
                repeatPassword: ''
            },
            formErrors: {
                userNameError: false,
                userMailError: false,
                passwordError: false,
                repeatPassword: false

            },

            formSuccess: {
                userNameSuccess: false,
                userMailSuccess: false,
                passwordSuccess: false,
                repeatPasswordSuccess: false,
                comparePasswordSuccess: false,
                agreeCheckBox: false
            },
            formRegExp: {
                mail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                alphanumeric: /^[a-z0-9]+$/i
            },
            errorText: {
                valid: "Поле заполнено некорректно или оно пусто.",
                notEqual: "Ошибка подтверждения пароля"
            },

            confirmBtn: false,
            firstScreen: true,
            secondScreen: false,

            token: '' || 'Ошибка генерации'


        }
    },

    computed: {
        confirmBtnView: function(){
            if(this.formErrors.userNameSuccess === true){
                return this.confirmBtn = true;
            }
        }
    },

    methods: {
        isValid: function (reg, value) {
          return reg.test(value);
        },

        goToHome: function(){


        },
        connectedToDB: function(f){

            const userData = {
                name: this.userMail,
                password: this.password
            };

        },

        registrate: function () {
            console.log(this.formData.userMail);
            firebase.auth().createUserWithEmailAndPassword(this.formData.userMail, this.formData.password )
                .then(
                    result => {
                        console.dir(result);
                        this.firstScreen = false;
                        this.secondScreen = true;
                        this.token = result.uid;
                        this.$root.$emit('say', this.token);
                    },
                    error => {
                        console.dir("Rejected: " + error);
                        let errorCode = error.code;
                        let errorMessage = error.message;
                    }
                );
        },
        mailValidate: function(){

            const reg = this.formRegExp.mail;
            const str = this.formData.userMail;
            const resp = this.isValid(reg, str);
            const strLength = this.formData.userMail.length;

            if( !resp || strLength < 5 ){
                this.formErrors.userMailError = true;
                this.formSuccess.userMailSuccess = false;

            }
            else if (resp && strLength > 5 ){
                this.formErrors.userMailError = false;
                this.formSuccess.userMailSuccess = true;

            }
            this.checkAllfields(this.formSuccess);

        },
        nameValidate: function(){

            const reg = this.formRegExp.alphanumeric;
            const str = this.formData.userName;
            const resp = this.isValid(reg, str);
            const strLength = this.formData.userName.length;
            if( !resp || strLength < 5 ){
                this.formErrors.userNameError = true;
                this.formSuccess.userNameSuccess = false;

            }
            else if (resp && strLength >= 5 ){
                this.formErrors.userNameError = false;
                this.formSuccess.userNameSuccess = true;

            }
            this.checkAllfields(this.formSuccess);
        },
        passwordValidate: function(){

            const reg = this.formRegExp.alphanumeric;
            const str = this.formData.password;
            const resp = this.isValid(reg, str);
            const strLength = this.formData.password.length;

            if( this.formSuccess.passwordSuccess ){
                if(this.formData.password !== this.formData.repeatPassword){
                    this.formErrors.passwordError = true;
                    this.formSuccess.passwordSuccess = false;
                    this.checkAllfields(this.formSuccess);
                    return false;
                }
            }

            if( !resp || strLength < 5 ){
                this.formErrors.passwordError = true;
                this.formSuccess.passwordSuccess = false;
            }
            else if (resp && strLength >= 5 ){
                this.formErrors.passwordError = false;
                this.formSuccess.passwordSuccess = true;

            }
            this.checkAllfields(this.formSuccess);

        },
        confimPasswordValidate: function(){

            const reg = this.formRegExp.alphanumeric;
            const str = this.formData.repeatPassword;
            const resp = this.isValid(reg, str);
            const strLength = this.formData.repeatPassword.length;
            const originalPass = this.formData.password;


            if( !resp || strLength < 5 ){
                this.formErrors.repeatPassword = true;
                this.formSuccess.repeatPasswordSuccess = false;
            }
            else if (resp && strLength >= 5 ){
                this.formErrors.repeatPassword = true;
                this.formSuccess.repeatPasswordSuccess = false;
                this.formSuccess.comparePasswordSuccess = false;
                if(originalPass === str){
                    this.formErrors.repeatPassword = false;
                    this.formSuccess.repeatPasswordSuccess = true;
                    this.formSuccess.comparePasswordSuccess = true;
                }
            }
            this.checkAllfields(this.formSuccess);

        },
        addAgree: function(){
            this.checkAllfields(this.formSuccess);
        },
        checkAllfields: function(obj){
            let counter = 0;
            console.dir(counter);
            console.dir(obj);
            for(let val in obj){
                if(!obj[val]){
                    counter++;
                    // console.dir("Значение равно: " + val + ' ' + obj[val]);
                }
            }
            // console.dir(counter);
            // console.dir(obj);
            console.dir(this.confirmBtn);

            if(!counter){
                return this.confirmBtn = true;
            }
            this.confirmBtn = false;

        }
    },

    ready: function(){

    },
    update: function(){

    },
    mounted: function(){


    }




}