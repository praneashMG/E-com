import { Fragment, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteProduct, getAdminProducts } from "../../actions/productActions";
import { clearError, clearProductDeleted } from "../../slices/productSlice";
import Loader from '../layouts/Loader';
import { MDBDataTable } from 'mdbreact';
import { toast } from 'react-toastify';

export default function ProductList() {
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector(state => state.productsState);
    const { isProductDeleted } = useSelector(state => state.productState);

    useEffect(() => {
        if (isProductDeleted) {
            toast.success("Product deleted successfully");
            dispatch(clearProductDeleted());
            dispatch(getAdminProducts());
        }

        if (error) {
            toast.error(error);
            dispatch(clearError());
        }

        dispatch(getAdminProducts());
    }, [dispatch, error, isProductDeleted]);

    const deleteHandler = (id) => {
        dispatch(deleteProduct(id));
    };

    const setProducts = () => {
        const data = {
            columns: [
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Price',
                    field: 'price',
                    sort: 'asc'
                },
                {
                    label: 'Stock',
                    field: 'stock',
                    sort: 'asc'
                },
                {
                    label: 'Actions',
                    field: 'actions'
                }
            ],
            rows: []
        };

        products.forEach(product => {
            data.rows.push({
                id: product._id,
                name: product.name,
                price: `₹${product.price}`,
                stock: product.stock,
                actions: <Fragment>
                    <Link to={`/admin/product/${product._id}`} className="btn btn-primary py-1 px-2">
                        <i className="fa fa-pencil"></i>
                    </Link>
                    <Button
                        variant="danger"
                        className="py-1 px-2 ml-2"
                        onClick={() => deleteHandler(product._id)}
                    >
                        <i className="fa fa-trash"></i>
                    </Button>
                </Fragment>
            });
        });

        return data;
    };

    return (
        <Fragment>
            <div className="container container-fluid">
                <h1 className="my-5">All Products</h1>
                {loading ? <Loader /> : (
                    <MDBDataTable
                        data={setProducts()}
                        className="px-3"
                        bordered
                        striped
                        hover
                    />
                )}
            </div>
        </Fragment>
    );
}
