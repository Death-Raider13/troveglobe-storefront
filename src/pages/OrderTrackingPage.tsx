
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { useOrderTracking } from '@/hooks/use-order-tracking';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Package2, TruckIcon, Store, MapPin, Phone, Calendar, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderTrackingPage = () => {
  const { orders } = useOrderTracking();
  const [trackingCode, setTrackingCode] = useState('');
  const [searchedOrder, setSearchedOrder] = useState<any>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);
  
  const handleSearch = () => {
    if (!trackingCode.trim()) return;
    
    setSearchAttempted(true);
    const order = orders.find(o => o.trackingCode === trackingCode.trim());
    setSearchedOrder(order || null);
  };
  
  // Helper to format dates
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-NG', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);
  };
  
  // Helper for status color
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'pending': return 'bg-amber-100 text-amber-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'shipped': return 'bg-purple-100 text-purple-800';
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Track Your Order</h1>
        
        <Tabs defaultValue="track">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="track">Track by Code</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>
          
          {/* Track by Code Tab */}
          <TabsContent value="track">
            <Card>
              <CardHeader>
                <CardTitle>Enter Your Tracking Code</CardTitle>
                <CardDescription>
                  Enter the tracking code that was provided when your order was confirmed.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2">
                  <Input
                    placeholder="e.g. KG-123456"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="flex-1"
                  />
                  <Button onClick={handleSearch}>Track</Button>
                </div>
                
                {searchAttempted && (
                  <div className="mt-6">
                    {searchedOrder ? (
                      <div className="border rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-bold">Order #{searchedOrder.trackingCode}</h3>
                            <p className="text-sm text-muted-foreground">
                              Placed on {formatDate(searchedOrder.orderDate)}
                            </p>
                          </div>
                          <Badge className={getStatusColor(searchedOrder.status)}>
                            {searchedOrder.status.charAt(0).toUpperCase() + searchedOrder.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                          {/* Delivery Details */}
                          <div>
                            <h4 className="font-medium mb-3 flex items-center">
                              {searchedOrder.deliveryMethod === 'delivery' ? (
                                <TruckIcon className="h-4 w-4 mr-2" />
                              ) : (
                                <Store className="h-4 w-4 mr-2" />
                              )}
                              {searchedOrder.deliveryMethod === 'delivery' ? 'Home Delivery' : 'Store Pickup'}
                            </h4>
                            
                            {searchedOrder.deliveryMethod === 'delivery' && searchedOrder.riderDetails && (
                              <div className="bg-accent/30 rounded-md p-3">
                                <p className="font-medium">Dispatch Rider Details:</p>
                                <div className="flex items-center mt-2">
                                  <User className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{searchedOrder.riderDetails.name}</span>
                                </div>
                                <div className="flex items-center mt-1">
                                  <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{searchedOrder.riderDetails.phoneNumber}</span>
                                </div>
                              </div>
                            )}
                            
                            {searchedOrder.deliveryMethod === 'pickup' && searchedOrder.pickupLocation && (
                              <div className="bg-accent/30 rounded-md p-3">
                                <p className="font-medium">Store Pickup Location:</p>
                                <div className="flex items-center mt-2">
                                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                                  <span>{searchedOrder.pickupLocation}</span>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          {/* Order Details */}
                          <div>
                            <h4 className="font-medium mb-3 flex items-center">
                              <Package2 className="h-4 w-4 mr-2" />
                              Order Details
                            </h4>
                            
                            <div>
                              <p className="text-sm text-muted-foreground">Payment Method</p>
                              <p className="font-medium">{searchedOrder.paymentMethod === 'transfer' ? 'Bank Transfer' : 'On-spot Payment'}</p>
                            </div>
                            
                            <div className="mt-3">
                              <p className="text-sm text-muted-foreground">Total Amount</p>
                              <p className="font-medium">₦{searchedOrder.totalAmount.toFixed(2)}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="border-t mt-6 pt-6">
                          <h4 className="font-medium mb-2">Shipping Details</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <p className="text-sm text-muted-foreground">Name</p>
                              <p>{searchedOrder.shippingDetails.fullName}</p>
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Phone</p>
                              <p>{searchedOrder.shippingDetails.phoneNumber}</p>
                            </div>
                            {searchedOrder.deliveryMethod === 'delivery' && (
                              <div className="md:col-span-2">
                                <p className="text-sm text-muted-foreground">Address</p>
                                <p>{searchedOrder.shippingDetails.address}, {searchedOrder.shippingDetails.city}, {searchedOrder.shippingDetails.state}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <Package2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <h3 className="font-bold text-lg mb-2">Order Not Found</h3>
                        <p className="text-muted-foreground">
                          We couldn't find any order with the tracking code "{trackingCode}".
                          <br />
                          Please check and try again.
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          {/* My Orders Tab */}
          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>My Orders</CardTitle>
                <CardDescription>
                  View and track all your recent orders here.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {orders.length > 0 ? (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border rounded-md p-4">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h3 className="font-bold">Order #{order.trackingCode}</h3>
                            <p className="text-sm text-muted-foreground">
                              Placed on {formatDate(order.orderDate)}
                            </p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between items-center mt-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                            <span className="text-sm">
                              {order.deliveryMethod === 'delivery'
                                ? 'Delivery within 72 hours after shipping'
                                : 'Ready for pickup in 48 hours'}
                            </span>
                          </div>
                          
                          <Button variant="outline" size="sm" asChild>
                            <Link to={`/track?code=${order.trackingCode}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Package2 className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                    <h3 className="font-bold text-lg mb-2">No Orders Yet</h3>
                    <p className="text-muted-foreground">
                      You haven't placed any orders yet.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link to="/">Start Shopping</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default OrderTrackingPage;
