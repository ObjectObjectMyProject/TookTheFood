
export default {
    name: 'header',
    data: () => {
        return {
            modalState: true,
            signInData: true
        }
    },
    props: ['mail', 'auth'],
    methods: {
        signIn: function (){
            this.$parent.$emit('sign');
            console.log(this.showAuthLink);
        }
    },
    mounted: function(){

    }
}