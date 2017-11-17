import firebase from 'firebase';

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
        },
        signOut: function(){

            firebase.auth().signOut().then(() => {
                console.log('Signed Out');
                this.$parent.$emit('out');
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        }
    },
    mounted: function(){

    }
}