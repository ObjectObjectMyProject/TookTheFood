
export default {
    name: 'header',
    data: () => {
        return {
            modalState: true,
            signIn: false
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