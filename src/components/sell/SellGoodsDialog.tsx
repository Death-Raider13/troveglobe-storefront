
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Package, Truck, Percent } from "lucide-react";

interface SellGoodsDialogProps {
  children: React.ReactNode;
}

export const SellGoodsDialog = ({ children }: SellGoodsDialogProps) => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const navigate = useNavigate();

  const handleFirstTimeClick = () => {
    const hasSeenTerms = localStorage.getItem('sellGoodsTermsAccepted');
    if (!hasSeenTerms) {
      setShowTerms(true);
    } else {
      // Redirect to sell goods page
      navigate('/sell-goods');
    }
  };

  const handleAcceptTerms = () => {
    if (hasAccepted) {
      localStorage.setItem('sellGoodsTermsAccepted', 'true');
      setShowTerms(false);
      // Redirect to sell goods page
      navigate('/sell-goods');
    }
  };

  return (
    <>
      <div onClick={handleFirstTimeClick}>
        {children}
      </div>
      
      <Dialog open={showTerms} onOpenChange={setShowTerms}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-xl">
              <Package className="h-6 w-6 text-primary" />
              Seller Terms & Conditions
            </DialogTitle>
            <DialogDescription>
              Please read and accept our terms before you can start selling on our platform.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 py-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-amber-800 mb-2">Quality Standards</h3>
                  <p className="text-amber-700 text-sm">
                    All goods posted on this platform must be of good quality. If found wanting by either 
                    the website management or the customer, the goods will be returned and you will bear 
                    the cost of both the initial delivery and the return shipping.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Percent className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Commission Structure</h3>
                  <p className="text-blue-700 text-sm">
                    The store management will take a <Badge variant="secondary" className="mx-1">10% commission</Badge> 
                    on all goods sold through our platform.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-green-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Shipping Responsibility</h3>
                  <p className="text-green-700 text-sm">
                    The store management will be responsible for shipping goods to customers if the goods 
                    have no issues. However, if there are quality issues, all shipping costs will be 
                    borne by the seller.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 pt-4 border-t">
              <Checkbox 
                id="accept-terms" 
                checked={hasAccepted}
                onCheckedChange={(checked) => setHasAccepted(checked as boolean)}
              />
              <label 
                htmlFor="accept-terms" 
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I have read and accept all the terms and conditions above
              </label>
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setShowTerms(false)}>
              Cancel
            </Button>
            <Button 
              onClick={handleAcceptTerms} 
              disabled={!hasAccepted}
              className="bg-primary hover:bg-primary/90"
            >
              Accept & Continue
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
