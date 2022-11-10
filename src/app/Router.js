import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "../Pages/ItemDetailContainer";
import ItemListContainer from "../Pages/ItemListContainer";
import Layout from "./Layout";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route element={<Layout />} path={process.env.PUBLIC_URL} >
                <Route index element={<ItemListContainer />} />
                <Route path='category/:id' element={<ItemListContainer />} />
                <Route path='item/:id' element={<ItemDetailContainer />} />
            </Route>
        </Routes>
    </BrowserRouter>
)


export default Router;