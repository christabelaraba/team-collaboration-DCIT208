import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: "Fan Shenbin",
    email: "fanshenbin@gmail.com",
    phone: "+233 53 509 7485",
    role: "Administrator",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSave = () => {
    // Implement save logic here
    console.log("Changes saved:", formData);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Profile Settings</h1>
      
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center mb-6">
          <div className="relative w-24 h-24">
          <Avatar className="h-14 w-14">
            <AvatarImage
              src={
                'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'
              }
              alt={''}
            />
            <AvatarFallback>hello</AvatarFallback>
          </Avatar>
            <button className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1">
              <svg
                className="w-5 h-5 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                ></path>
              </svg>
            </button>
          </div>
          <div className="ml-4">
            <h2 className="text-xl font-bold text-gray-900">Fan Shenbin</h2>
            <p className="text-gray-600">jingdoligh@gmail.com</p>
            <p className="text-gray-600">Administrator</p>
          </div>
        </div>

        <form className="space-y-6">
          <div className="flex items-center">
            <label className="block text-gray-700 font-medium w-1/4" htmlFor="fullName">
              Full Name:
            </label>
            <div className="w-3/4 flex items-center">
              <input
                type="text"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="ml-2 p-1">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 15.232L18.768 18.768M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <label className="block text-gray-700 font-medium w-1/4" htmlFor="email">
              Email:
            </label>
            <div className="w-3/4 flex items-center">
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="ml-2 p-1">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 15.232L18.768 18.768M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <label className="block text-gray-700 font-medium w-1/4" htmlFor="phone">
              Phone:
            </label>
            <div className="w-3/4 flex items-center">
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="ml-2 p-1">
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.232 15.232L18.768 18.768M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center">
            <label className="block text-gray-700 font-medium w-1/4" htmlFor="role">
              Role:
            </label>
            <input
              type="text"
              id="role"
              value={formData.role}
              className="w-3/4 px-3 py-2 border rounded-lg shadow-sm bg-gray-200 focus:outline-none"
              readOnly
            />
          </div>

          <div className="flex justify-between mt-6">
            <Button
              onClick={handleSave}
              className="bg-orange-600 text-white px-6 py-2 rounded-lg"
            >
              Save Changes
            </Button>
            <Link to="/settings" className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg">
              Back
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSettings;
