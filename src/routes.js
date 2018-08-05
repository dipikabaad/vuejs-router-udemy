import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'

export const routes = [
	//LEGACY ROUTES
	{path: '/products/:productId/view',redirect: {name: 'viewProduct'}},
	//LEGACY ROUTES

    { path: '', component: ProductList },
    { path: '/cart', component: Cart, alias: '/shopping-cart' },
    {path: '/products/:productId',props:true, name:'viewProduct', component: ViewProduct}, //question mark means without id also it works
    {path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];