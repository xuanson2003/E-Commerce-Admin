import AddProduct from '../Components/AddProduct/AddProduct';
import ListProduct from '../Components/ListProduct/ListProduct';
import config from '../Config/index';

const publicRoutes = [
    { path: config.routes.addProduct, component: AddProduct },
    { path: config.routes.listProduct, component: ListProduct },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
