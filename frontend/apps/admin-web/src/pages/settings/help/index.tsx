import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent } from "@radix-ui/react-tabs";
import { Link } from "react-router-dom";

const HelpSupport = () => {
  return (
    <Tabs defaultValue="details" className="space-y-4 px-6 py-4">
      <TabsContent value="details" className="space-y-6">
        {/* Header */}
        <div className="pb-4 border-b border-gray-200">
          <h1 className="text-2xl font-bold text-gray-900">Help & Support</h1>
          <p className="text-gray-600 mt-1">
            Welcome to the Help & Support section. Here you can find essential
            information and contact support for further assistance.
          </p>
        </div>

        {/* Contact Support */}
        <Card className="shadow-sm border rounded-lg">
          <CardContent className="w-full h-full flex items-center p-4">
            <div className="relative flex items-center justify-between w-full">
              <Link to="/settings/help/contact-support" className="text-lg font-medium text-gray-900">
                Contact Support
              </Link>
               <Link to="/settings/help/contact-support">
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
            </div>
          </CardContent>
        </Card>

        {/* Frequently Asked Questions */}
        <Card className="shadow-sm border rounded-lg">
          <CardContent className="w-full h-full flex items-center p-4">
            <div className="relative flex items-center justify-between w-full">
              <Link to="/settings/help/faq" className="text-lg font-medium text-gray-900">
                Frequently Asked Questions
              </Link>
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
            </div>
          </CardContent>
        </Card>

        {/* Back Button */}
        <div className="flex justify-end mt-6">
          <Link to="/settings" className="text-orange-500 border border-orange-500 px-4 py-2 rounded-lg">
            Back
          </Link>
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default HelpSupport;
