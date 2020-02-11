import React from "react";
import ReactVirtualizedTable from '../ProductList/VirtualizedProductList'
import ProductListHeader from "./ProductListHeader";

const ProductList = (props) => (
    <div>
        <ProductListHeader/>
        <ReactVirtualizedTable />
    </div>
);

export default ProductList;
