import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'

export const routes = [
    { path: '', component: ProductList },
    { path: '/cart', component: Cart },
    {path: '/products/test/:productId',name:'viewProduct', component: ViewProduct}, //question mark means without id also it works
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];