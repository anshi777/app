import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, toggleUserStatus } from "../../features/AuthSlice";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function AdminDashboard() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.auth.users);
  const currentUserType = useSelector((state) => state.auth);
    // const { isAuthenticated, user } = useSelector((state) => state.auth);
  

  const [salesData, setSalesData] = useState({
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Sales",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 1000) + 200), 
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
      {
        label: "Profit",
        data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 500) + 50), 
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: true,
      },
    ],
  });

  const [totalUsers, setTotalUsers] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  useEffect(() => {
    setTotalUsers(users.length);
    setTotalSales(salesData.datasets[0].data.reduce((acc, value) => acc + value, 0));
    setTotalProfit(salesData.datasets[1].data.reduce((acc, value) => acc + value, 0));
  }, [users, salesData]);

  const handleToggleStatus = (email) => {
    dispatch(toggleUserStatus({ email }));
  };

  // if (currentUserType !== "admin") {
  //   return <div>You are not authorized to view this page</div>;
  // }

  return (
    <div style={{ marginTop: "100px", padding: "20px" }}> 
      <h3>Admin Dashboard</h3>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
        <div style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h4>Total Users</h4>
          <p>{totalUsers}</p>
        </div>
        <div style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h4>Total Sales</h4>
          <p>${totalSales}</p>
        </div>
        <div style={{ padding: "10px", textAlign: "center", border: "1px solid #ddd", borderRadius: "8px" }}>
          <h4>Total Profit</h4>
          <p>${totalProfit}</p>
        </div>
      </div>

      <h4>Sales and Profit Overview</h4>
      <div style={{ width: "80%", margin: "0 auto", marginBottom: "40px" }}>
        <Line data={salesData} />
      </div>

      <h4>Manage Users</h4>
      <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "40px" }}>
        <thead>
          <tr>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>User Type</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Status</th>
            <th style={{ padding: "10px", border: "1px solid #ddd" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.userType}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>{user.status}</td>
              <td style={{ padding: "10px", border: "1px solid #ddd" }}>
                <button
                  onClick={() => handleToggleStatus(user.email)}
                  style={{
                    padding: "5px 10px",
                    backgroundColor: user.status === "active" ? "red" : "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                  }}
                >
                  {user.status === "active" ? "Deactivate" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminDashboard;

