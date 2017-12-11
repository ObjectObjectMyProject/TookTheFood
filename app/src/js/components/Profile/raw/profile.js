import firebase from 'firebase';


export default {
    name: 'user',
    data () {
        return {
            cart: null
        }
    },
    mounted () {
        this.$root.$on('setCartItems', (items) => {
            this.cart = items;
            console.dir(this.cart);
        });

    },
    asyncComputed () {

    },
    created () {

    }
}