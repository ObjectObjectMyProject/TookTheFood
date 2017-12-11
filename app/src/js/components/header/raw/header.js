import firebase from 'firebase';

export default {
    name: 'header',
    data: () => {
        return {
            modalState: true,
            signInData: true,
            cart: []
        }
    },
    props: ['uid', 'mail', 'auth'],
    methods: {

        goToCart: function(){
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    this.$router.push('/profile/' + user.uid);
                    this.$root.$emit('setCartItems', this.cart);
                }
                else {
                    this.$parent.$emit('sign');

                }
            });
        },


        addProduct (obj) {
            this.cart.push(obj);
        },

        signIn: function (){
            this.$parent.$emit('sign');
            console.log('Ne dolzno');
        },
        signOut: function(){

            firebase.auth().signOut().then(() => {
                console.log('Signed Out');
                this.$parent.$emit('out');
            }, function(error) {
                console.error('Sign Out Error', error);
            });
        },

        removeItem: function(item, index){
            this.cart.splice(index, 1);
        }
    },
    mounted: function(){
        this.$root.$on('newProduct',  (result) => {
            this.addProduct(result);
        })
    },
    computed: {

        allCount: function(){

            let arr = this.cart.map(function(name) {
                return name.count;
            }).reduce(function(prev, next){
                return prev + next;
            },0);
            return arr;
        }
    }
}