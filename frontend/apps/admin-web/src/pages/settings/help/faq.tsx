import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>
      
      <Card className="shadow-sm border rounded-lg">
        <CardContent className="p-6">
          <ol className="list-decimal list-inside space-y-6">
            <li className="text-lg font-semibold text-gray-900">
              How to reset my password?
              <p className="text-gray-700 mt-2">
                - To reset your password, go to the <span className="font-bold">Security Settings</span> section and follow the instructions.
              </p>
            </li>
            <li className="text-lg font-semibold text-gray-900">
              How to add a new admin?
              <p className="text-gray-700 mt-2">
                - To add a new admin, go to the <span className="font-bold">User Management</span> section and fill out the required information.
              </p>
            </li>
            <li className="text-lg font-semibold text-gray-900">
              How to update Generator inventory?
              <p className="text-gray-700 mt-2">
                - To update inventory, go to the <span className="font-bold">Inventory</span> section and adjust the stock levels as needed.
              </p>
            </li>
          </ol>
        </CardContent>
      </Card>

      <div className="flex justify-end mt-6">
        <Link to="/settings/help">
          <Button className="text-orange-500 border border-orange-500 px-6 py-2 rounded-lg">
            Back
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FAQ;
