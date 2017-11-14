
export default class FormValidator {

    constructor(form, dataAttrName){

        this.initForm = form;
        this.stopForm = form.addEventListener('submit', (e)=>{
            e.preventDefault();
        });

        this.inputElements = form.querySelectorAll('input');
        this.formSubmit = form.querySelector('button.send-form').addEventListener('click', (e)=>{

            e.preventDefault();

            this.validateElements(this.inputElements);

            return false;
        });

        this.regExpPatterns = {
            mail : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            letters: /^[a-zA-Z]+$/,
            numbers: /^\d+$/,
            alphanumeric: /^[a-z0-9]+$/i
        };

        // Init


    }

    checkRegExp(el, reg){

        const elValue = el.value;
        const elRefExp = this.regExpPatterns[reg];
        return elRefExp.test(elValue);

    }

    validateElements(el){
        const self = this;

        el.forEach(function(item, i, arr) {
            let currentEl = item;
            let currentData = item.dataset.register;
            let elWrapper = item.parentNode.parentNode;

        if( self.checkRegExp(currentEl, currentData)) {

            elWrapper.classList.add('success');
            elWrapper.classList.remove('error');

        } else {

            elWrapper.classList.add('error');
            elWrapper.classList.remove('success');
        }


        });
    }

}

