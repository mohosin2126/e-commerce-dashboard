import { Card } from "@/components/ui/card.jsx";
import { PlusCircle, Upload, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button.jsx";

export default function AllProducts() {
    return (
        <Card className="p-4">
            {/* Action Buttons */}
            <div className="flex justify-between items-center">
                {/* Left Side - Import & Export */}
                <div className="flex space-x-4">
                    <Button
                        size="sm"
                        className="h-8 gap-1 bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        <Upload className="h-3.5 w-3.5"/>
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Import</span>
                    </Button>
                    <Button
                        size="sm"
                        className="h-8 gap-1 bg-green-500 hover:bg-green-600 text-white"
                    >
                        <Download className="h-3.5 w-3.5"/>
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Export</span>
                    </Button>
                </div>

                {/* Right Side - Add Product & Delete */}
                <div className="flex space-x-4">
                    <Button
                        size="sm"
                        className="h-8 gap-1 bg-red-500 hover:bg-red-600 text-white"
                    >
                        <Trash2 className="h-3.5 w-3.5"/>
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Delete</span>
                    </Button>
                    <Button
                        size="sm"
                        className="h-8 gap-1 bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        <PlusCircle className="h-3.5 w-3.5"/>
                        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Add Product</span>
                    </Button>

                </div>
            </div>
        </Card>
    );
}
