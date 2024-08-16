import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ContactSupport = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h1>

      {isSubmitted ? (
        <Card className="shadow-sm border rounded-lg">
          <CardContent className="p-6 text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Confirmation</h1>
            <p className="text-gray-600 mb-8">
              Your message has been sent successfully, we will get back to you very soon.
            </p>
            <Link to="/settings/help" className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg">
              Back
            </Link>
          </CardContent>
        </Card>
      ) : (
        <>
          <p className="text-gray-600 mb-6">
            If you need further assistance or face any issues, please fill out the form below to contact support.
          </p>
          <Card className="shadow-sm border rounded-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-4 flex items-center">
                  <label className="block text-gray-700 font-medium w-1/4" htmlFor="name">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <label className="block text-gray-700 font-medium w-1/4" htmlFor="email">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    required
                  />
                </div>

                <div className="mb-4 flex items-center">
                  <label className="block text-gray-700 font-medium w-1/4" htmlFor="message">
                    Message:
                  </label>
                  <textarea
                    id="message"
                    className="w-3/4 px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
                    rows={4}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-between mt-6">
                  <Button type="submit" className="bg-orange-600 text-white px-6 py-2 rounded-lg">
                    Send
                  </Button>
                  <Link to="/settings/help" className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg">
                    Back
                  </Link>
                </div>
              </form>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};

export default ContactSupport;
