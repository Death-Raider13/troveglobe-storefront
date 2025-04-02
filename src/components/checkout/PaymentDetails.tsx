
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Copy, CheckCircle2 } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

type PaymentDetailsProps = {
  paymentMethod: string;
  onBack: () => void;
  onComplete: () => void;
}

const PaymentDetails = ({ paymentMethod, onBack, onComplete }: PaymentDetailsProps) => {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: `${label} copied to clipboard`,
        });
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
      });
  };
  
  if (paymentMethod === 'transfer') {
    return (
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Bank Transfer Details</h2>
        
        <div className="space-y-4 mb-6">
          <div className="p-4 bg-muted/50 rounded-md">
            <p className="text-sm text-muted-foreground mb-2">Please transfer the exact amount to the account below:</p>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Bank Name:</span>
                <div className="flex items-center">
                  <span className="text-sm mr-2">First Bank</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => copyToClipboard("First Bank", "Bank name")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Account Name:</span>
                <div className="flex items-center">
                  <span className="text-sm mr-2">E-Commerce Store Ltd</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => copyToClipboard("E-Commerce Store Ltd", "Account name")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Account Number:</span>
                <div className="flex items-center">
                  <span className="text-sm mr-2">1234567890</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-6 w-6" 
                    onClick={() => copyToClipboard("1234567890", "Account number")}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4 bg-green-50 border border-green-200 rounded-md">
            <div className="flex items-start">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-700">How to complete your order:</p>
                <ol className="text-sm text-green-600 ml-4 mt-1 list-decimal">
                  <li>Make the transfer using your bank app or USSD</li>
                  <li>Take a screenshot of your payment confirmation</li>
                  <li>Click the "I've Made the Payment" button below</li>
                  <li>We'll verify and process your order within 24 hours</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <Button onClick={onComplete}>
            I've Made the Payment
          </Button>
        </div>
      </div>
    );
  } else if (paymentMethod === 'onspot') {
    return (
      <div className="border rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">On-spot Payment</h2>
        
        <div className="p-4 bg-muted/50 rounded-md mb-6">
          <div className="flex items-start">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
            <div>
              <p className="text-sm">You have chosen to pay when your order is delivered or at pickup.</p>
              <ul className="text-sm text-muted-foreground ml-4 mt-2 list-disc">
                <li>No advance payment is required</li>
                <li>Please have the exact amount ready at delivery/pickup</li>
                <li>Cash payments only for on-spot transactions</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="flex justify-between">
          <Button variant="outline" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <Button onClick={onComplete}>
            Complete Order
          </Button>
        </div>
      </div>
    );
  }
  
  return null;
};

export default PaymentDetails;
