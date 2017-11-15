
export default {
    name: 'header',
    data: () => {
        return {
            modalState: true,
            signInData: true
        }
    },
    methods: {
        signIn: function (){
            this.$parent.$emit('sign');
        }
    },
    mounted: function(){

    }
}