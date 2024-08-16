//please work on this page - papa
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Link } from "react-router-dom";

const AdminManagement = () => {

  
  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Admin Management</h1>
        </div>

        {/* Admin Card */}
        <Card className="shadow-sm border rounded-lg mb-6">
          <CardContent className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
            <Avatar className="h-14 w-14">
            <AvatarImage
              src={
                'https://png.pngtree.com/png-clipart/20230927/original/pngtree-man-avatar-image-for-profile-png-image_13001882.png'
              }
              alt={''}
            />
            <AvatarFallback>hello</AvatarFallback>
          </Avatar>
              <div>
                <h2 className="text-lg font-bold text-gray-900">Fan Shenbin</h2>
                <p className="text-gray-600">jingdoligh@gmail.com</p>
                <p className="text-gray-600">Administrator</p>
              </div>
            </div>
            <Link to="/settings/admin/details">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-900"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.4201 11.9544C15.8297 12.3646 16.0598 12.9206 16.0598 13.5003C16.0598 14.08 15.8297 14.636 15.4201 15.0461L9.1717 21.2974C8.7614 21.7075 8.2049 21.9379 7.6247 21.9378C7.0445 21.9376 6.4881 21.707 6.0779 21.2966C5.6677 20.8863 5.4374 20.3298 5.4375 19.7496C5.4376 19.1693 5.6683 18.613 6.0786 18.2028L11.7811 12.5003L6.0786 6.7978C5.68 6.3854 5.4592 5.83293 5.4639 5.25937C5.4686 4.68581 5.6984 4.13705 6.1038 3.73128C6.5092 3.3255 7.0578 3.09519 7.6313 3.08994C8.2049 3.08468 8.7575 3.30491 9.1703 3.70319L15.4215 9.953L15.4201 9.9544Z"
                  fill="#131C40"
                />
              </svg>
            </Link>
          </CardContent>
        </Card>

        {/* Add New Admin Button */}
        <Link to="/settings/admin/form" className="bg-orange-600 text-white px-4 py-2 rounded-lg mb-6">
          Add New Admin
        </Link>

        {/* Back Button */}
        <div className="flex justify-end mt-6">
          <Link to="/settings" className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminManagement;
