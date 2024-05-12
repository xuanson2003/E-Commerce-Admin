import Sidebar from '../../Components/Sidebar/Sidebar';
import './Admin.scss';
import { Routes, Route } from 'react-router-dom';
import config from '../../Config';
import AddProduct from '../../Components/AddProduct/AddProduct';
import ListProduct from '../../Components/ListProduct/ListProduct';

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path={config.routes.addProduct} element={<AddProduct />} />
                <Route path={config.routes.listProduct} element={<ListProduct />} />
            </Routes>
        </div>
    );
};

export default Admin;
