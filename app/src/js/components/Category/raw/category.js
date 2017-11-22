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





    },
    mounted(){

        var self = this;

        class newProduct {

            constructor (picture, productName, count, cost) {

                this.pic = picture;
                this.productName = productName;
                this.count = count;
                this.cost = cost;
            }



        }

        class Product {

            constructor (cost, description, productName, url, weight) {
                this.cost = cost;
                this.description = description;
                this.productName = productName;
                this.url = url;
                this.weight = weight;
                this.count = 1;
                this.plus = () => {
                    return this.count += 1;
                };
                this.minus = () => {
                    if( this.count > 1 ){
                        return this.count -= 1;
                    }
                    return 1;
                };
                this.getCost = () => {
                    return +(this.count * this.cost).toFixed(2);
                };
                this.addProduct = () => {
                    let allCost = this.getCost();
                    let result =  new newProduct( this.url, this.productName, this.count, allCost );
                    self.addNewProject(result);
                    // self.$root.$emit('newProduct', result);
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
    methods: {
        addNewProject (obj) {
            console.log(this);
            this.$root.$emit('newProduct', obj);
        }

    }
}