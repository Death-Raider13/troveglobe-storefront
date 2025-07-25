
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useCart } from '@/hooks/use-cart';
import { toast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { StorePickupLocations } from './StorePickupLocations';

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full Name must be at least 2 characters.",
  }),
  phoneNumber: z.string().min(10, {
    message: "Phone Number must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  address: z.string().min(5, {
    message: "Address must be at least 5 characters.",
  }).optional(),
  city: z.string().min(2, {
    message: "City must be at least 2 characters.",
  }).optional(),
  state: z.string().min(2, {
    message: "State must be at least 2 characters.",
  }).optional(),
  additionalInfo: z.string().optional(),
})

interface ShippingDetailsProps {
  deliveryMethod: string;
  onBack: () => void;
  onComplete: (shippingDetails: any) => void;
}

export const ShippingDetails = ({ deliveryMethod, onBack, onComplete }: ShippingDetailsProps) => {
  const [selectedStore, setSelectedStore] = useState<any>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      phoneNumber: "",
      email: "",
      address: "",
      city: "",
      state: "",
      additionalInfo: "",
    },
  })

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log('Shipping details:', values);
    console.log('Delivery method:', deliveryMethod);
    console.log('Selected store:', selectedStore);
    
    const shippingData = {
      ...values,
      deliveryMethod,
      ...(deliveryMethod === 'pickup' && selectedStore ? { pickupStore: selectedStore } : {})
    };
    
    onComplete(shippingData);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Shipping Details</h2>
        <p className="text-muted-foreground">
          Please provide your details for {deliveryMethod === 'pickup' ? 'store pickup' : 'home delivery'}.
        </p>
      </div>

      {/* Store Pickup Location Selection */}
      {deliveryMethod === 'pickup' && (
        <div className="border rounded-lg p-6 bg-accent/5">
          <StorePickupLocations 
            onLocationSelect={setSelectedStore}
            selectedLocation={selectedStore}
          />
        </div>
      )}

      {/* Shipping Form */}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="08012345678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="johndoe@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {deliveryMethod === 'delivery' && (
            <>
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Address</FormLabel>
                    <FormControl>
                      <Input placeholder="123 Main Street" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>City</FormLabel>
                    <FormControl>
                      <Input placeholder="Lagos" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>State</FormLabel>
                    <FormControl>
                      <Input placeholder="Lagos State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information (Optional)</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Any additional information for delivery"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button type="button" variant="outline" onClick={onBack} className="flex-1">
              Back to Payment
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              disabled={deliveryMethod === 'pickup' && !selectedStore}
            >
              Complete Order
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
