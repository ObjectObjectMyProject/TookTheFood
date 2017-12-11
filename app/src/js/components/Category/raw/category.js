import firebase from 'firebase';


export default {
    name: 'category',
    data () {
        return {
            products: {},
            items: [],
            isLoadingItems: true

        }
    },

    computed: {

        newItems: function() {



        }
    },

    created () {





    },
    asyncComputed: {

        total () {
            let self = this;
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
                        this.count = 1;
                        self.$root.$emit('newProduct', result);
                    }
                }

            }
            class newProduct {

                constructor (picture, productName, count, cost) {
                    this.pic = picture;
                    this.productName = productName;
                    this.count = count;
                    this.cost = cost;
                }



            }

            let routeName = this.$route.params.name;
            let result = [];

            let promise = new Promise((resolve, reject) => {
                this.isLoadingItems = true;
                const database = firebase.database();
                const leadsRef = database.ref('products/' + routeName);

                leadsRef.on('value', (snapshot) => {

                    const items = snapshot.val();

                    for( let item in items){
                        result.push( new Product(items[item].cost, items[item].description, items[item].productName, items[item].url, items[item].weight ));
                    }
                });

                resolve('Grererer');
            });
            promise.then(
                (res) => {
                    setTimeout(() => {
                        this.isLoadingItems = false;
                    }, 500);

                },
                () => {

                }
            );

            return result;
        }
    },
    mounted(){




    },
    beforeUpdate () {
      


    },
    methods: {
    }
}