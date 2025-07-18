import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { getAdminProducts } from "../../actions/productActions";
import { getUsers } from '../../actions/userActions';
import { adminOrders as adminOrdersAction } from '../../actions/orderActions';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

export default function Report() {
    const { products = [] } = useSelector(state => state.productsState);
    const { adminOrders = [] } = useSelector(state => state.orderState);
    const { users = [] } = useSelector(state => state.userState);
    const dispatch = useDispatch();
    const reportRef = useRef();
    let outOfStock = 0;

    if (products.length > 0) {
        products.forEach(product => {
            if (product.stock === 0) {
                outOfStock = outOfStock + 1;
            }
        });
    }

    let totalAmount = 0;
    if (adminOrders.length > 0) {
        adminOrders.forEach(order => {
            totalAmount += order.totalPrice;
        });
    }

    useEffect(() => {
        dispatch(getAdminProducts);
        dispatch(getUsers);
        dispatch(adminOrdersAction);
    }, [dispatch]);

    const downloadPDF = () => {
        const doc = new jsPDF();

        doc.text("Admin Report", 20, 10);

        // Products Table
        doc.text("Products Report", 20, 30);
        doc.autoTable({
            startY: 40,
            head: [['Product Name', 'Stock', 'Price']],
            body: products.map(product => [product.name, product.stock, `$${product.price}`]),
        });

        // Orders Table
        doc.text("Order Report", 20, doc.autoTable.previous.finalY + 20);
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 30,
            head: [['Order ID', 'Total Price', 'Status']],
            body: adminOrders.map(order => [order._id, `$${order.totalPrice}`, order.status]),
        });

        // Users Table
        doc.text("User Report", 20, doc.autoTable.previous.finalY + 20);
        doc.autoTable({
            startY: doc.autoTable.previous.finalY + 30,
            head: [['User ID', 'Name', 'Email']],
            body: users.map(user => [user._id, user.name, user.email]),
        });

        // Save the PDF
        doc.save('admin-report.pdf');
    };

    return (
        <div className="container">
            <h1 className="my-4 text-center">Admin Report</h1>

            <button onClick={downloadPDF} className="btn btn-primary my-3">
                Download Report as PDF
            </button>

            <div ref={reportRef}>
                <div className="report-section">
                    <h2>Overview</h2>
                    <ul>
                        <li><b>Total Products:</b> {products.length}</li>
                        <li><b>Total Orders:</b> {adminOrders.length}</li>
                        <li><b>Total Users:</b> {users.length}</li>
                        <li><b>Total Sales Amount:</b> ${totalAmount.toFixed(2)}</li>
                        <li><b>Out of Stock Products:</b> {outOfStock}</li>
                    </ul>
                </div>

                <div className="report-section">
                    <h2>Products Report</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Stock</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product._id}>
                                    <td>{product.name}</td>
                                    <td>{product.stock}</td>
                                    <td>${product.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="report-section">
                    <h2>Order Report</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Total Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminOrders.map(order => (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>${order.totalPrice}</td>
                                    <td>{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="report-section">
                    <h2>User Report</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user._id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
