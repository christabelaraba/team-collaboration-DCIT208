/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useMutation } from "@tanstack/react-query";
import { addUserRecord } from "@/api/data/query";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AdminManagementForm = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    user_role: "",
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };


  const addUserMutation = useMutation({
    mutationFn: addUserRecord,
    onSuccess: (res: any) => {
      if (res.response_code == "014") {
        toast.success("User record created successfully!");
        navigate('/settings/admin');
      }else{
        toast.error(
          res.response_message || "An error occurred. Please try again."
        );
      }
    },
    onError: (error: any) => {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    },
  });


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords don't match. Please check and try again!");
      return;
    }

    addUserMutation.mutate(formData);
  };


  
  const handleCancel = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      confirmPassword: "",
      user_role: "",
    });
    navigate('/settings/admin');
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto">
        {isSubmitted ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Management</h1>
            <p className="text-gray-700 mb-4">The new admin has been added successfully.</p>
            <p className="text-gray-700 mb-4">
              <strong>Name:</strong> {formData.first_name} {formData.last_name}
              <br />
              <strong>Email:</strong> {formData.email}
              <br />
              <strong>Role:</strong> {formData.user_role}
            </p>
            <p className="text-gray-700 mb-8">
              An email has been sent to the new admin with their login credentials and instructions for their first login.
            </p>
            <Button className="bg-orange-600 text-white px-6 py-2 rounded-lg" onClick={() => setIsSubmitted(false)}>
              OK
            </Button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-gray-900">Admin Management</h1>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex items-center">
                <label className="block text-gray-700 font-medium w-1/4" htmlFor="first_name">
                  First Name:
                </label>
                <input
                  type="text"
                  id="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
              <div className="flex items-center">
                <label className="block text-gray-700 font-medium w-1/4" htmlFor="last_name">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>
               
              <div className="flex items-center">
                <label className="block text-gray-700 font-medium w-1/4" htmlFor="email">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="flex items-center">
                <label className="block text-gray-700 font-medium w-1/4" htmlFor="password">
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="flex items-center">
                <label className="block text-gray-700 font-medium w-1/4" htmlFor="confirmPassword">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                  required
                />
              </div>

              <div className="flex items-center">
                <label className="block text-gray-700 font-medium w-1/4" htmlFor="role">
                  Role:
                </label>
                <select
                  id="role"
                  value={formData.user_role}
                  onChange={handleChange}
                  className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option value="Admin">Administrator</option>
                  <option value="Sales Manager">Sales Manager</option>
                  {/* Add more roles as needed */}
                </select>
              </div>

              <div className="flex justify-between mt-6">
                <Button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-lg">
                  Save
                </Button>
                <Button type="button" onClick={handleCancel} className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg">
                  Cancel
                </Button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminManagementForm;
