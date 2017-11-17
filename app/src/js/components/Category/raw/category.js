import firebase from 'firebase';

export default {
    name: 'category',
    data () {
        return {
            products: {},
            items: []

        }
    },
    created () {

        class Product {

            constructor (cost, description, productName, url, weight) {
                this.cost = cost;
                this.description = description;
                this.productName = productName;
                this.url = url;
                this.weight = weight;
                this.count = 0;
                this.plus = () => {
                    return this.count += 1;
                }
                this.minus = () => {
                    if( this.count > 0 ){
                        return this.count -= 1;
                    }
                    return 0;
                }
            }



        }

        const database = firebase.database();
        const leadsRef = database.ref('products/pizza');
        leadsRef.on('value', (snapshot) => {
            // console.dir(snapshot.val());

            const items = snapshot.val();

            for( let item in items){

                this.items.push( new Product(items[item].cost, items[item].description, items[item].productName, items[item].url, items[item].weight ));

                console.dir(items);
            }

        });

    },
    mounted(){

    },
    methods: {


    }
}