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
  onNext: (data: any) => void;
  onPrevious: () => void;
}

export const ShippingDetails = ({ onNext, onPrevious }: ShippingDetailsProps) => {
  const [deliveryMethod, setDeliveryMethod] = useState<'delivery' | 'pickup'>('delivery');
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
    
    onNext(shippingData);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-2">Shipping Details</h2>
        <p className="text-muted-foreground">
          Choose your delivery method and provide the necessary details.
        </p>
      </div>

      {/* Delivery Method Selection */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Delivery Method</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card 
            className={`cursor-pointer transition-all hover:shadow-md ${
              deliveryMethod === 'delivery' ? 'ring-2 ring-primary bg-primary/5' : ''
            }`}
            onClick={() => setDeliveryMethod('delivery')}
          >
            <CardHeader>
              <CardTitle>Home Delivery</CardTitle>
              <CardDescription>Delivered to your doorstep.</CardDescription>
            </CardHeader>
            <CardContent>
              Fast and reliable delivery to your provided address.
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer transition-all hover:shadow-md ${
              deliveryMethod === 'pickup' ? 'ring-2 ring-primary bg-primary/5' : ''
            }`}
            onClick={() => setDeliveryMethod('pickup')}
          >
            <CardHeader>
              <CardTitle>Store Pickup</CardTitle>
              <CardDescription>Pick up from our store.</CardDescription>
            </CardHeader>
            <CardContent>
              Convenient pickup at a store location near you.
            </CardContent>
          </Card>
        </div>
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
            <Button type="button" variant="outline" onClick={onPrevious} className="flex-1">
              Back to Cart
            </Button>
            <Button 
              type="submit" 
              className="flex-1"
              disabled={deliveryMethod === 'pickup' && !selectedStore}
            >
              Continue to Payment
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
