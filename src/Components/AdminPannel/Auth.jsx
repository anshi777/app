import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, login, signup, toggleUserStatus } from "../../features/AuthSlice";

const Auth = () => {
  const dispatch = useDispatch();
  const { users, user, isAuthenticated, loading} = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({ name: "", email: "", password: "", userType: "" });

  useEffect(() => {
    dispatch(fetchUsers()); 
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    if (formData.name && formData.email && formData.password && formData.userType) {
      dispatch(signup({ user: { name: formData.name, email: formData.email }, userType: formData.userType }));
      setFormData({ name: "", email: "", password: "", userType: "" });
    }
  };

  const handleToggleStatus = (email) => {
    dispatch(toggleUserStatus({ email }));
  };

  return (
    <div style={{ marginTop: "100px", padding: "20px",  background: "linear-gradient(to bottom, #ffb6c1, #ff69b4",fullHeight: "100vh"
    }}>
    <div className="container mx-auto p-6" >
      <h1 className="text-2xl font-bold mb-4">User Authentication</h1>
      <div className="mb-6 p-4 border rounded shadow">
        <h2 className="text-xl font-semibold mb-3">Signup</h2>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 mr-2" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="border p-2 mr-2" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="border p-2 mr-2" />
        <select name="userType" value={formData.userType} onChange={handleChange} className="border p-2 mr-2">
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">Buyer</option>
          <option value="user">Seller</option>
        </select>
        <button onClick={handleSignup} className="btn btn-success text-white px-4 py-2 gap-3 rounded">Signup</button>
      </div>
      <div className="p-4 border rounded shadow ">
        <h2 className="text-xl font-semibold mb-3">Users</h2>
        {isAuthenticated && <p className="text-green-500 mt-2">Logged in as {user?.email}</p>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Email</th>
                <th className="border p-2">role</th>
                <th className="border p-2">Password</th>
                <th className="border p-2">Status</th>
                <th className="border p-2">Actions</th>
                <th className="border p-2">Products in Carts</th>
                <th className="border p-2">Products in WishList</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-2">{user.name}</td>
                  <td className="border p-2">{user.email}</td>
                  <td className="border p-2">{user.password}</td>
                  <td className="border p-2">{user.userType}</td>
                  <td className={`border p-2 ${user.status === "active" ? "btn btn-success" : "btn btn-danger"}`}>
                    {user.status}
                  </td>
                  <td className="border p-2">
                    <button  onClick={() => handleToggleStatus(user.email)} className="btn btn-warning text-white px-3 py-1 rounded">
                      Toggle Status
                    </button>
                  </td>
                  <td className="border p-2">{user.wishlist ? user.wishlist.length : 0}</td>
<td className="border p-2">{user.cart ? user.cart.length : 0}</td>

                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </div>
  );
};

export default Auth;
