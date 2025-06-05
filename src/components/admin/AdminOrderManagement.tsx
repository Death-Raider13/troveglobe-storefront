
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useOrderTracking } from '@/hooks/use-order-tracking';
import { Eye, Package, Truck, CheckCircle, XCircle } from 'lucide-react';

export const AdminOrderManagement = () => {
  const { orders } = useOrderTracking();
  const [selectedOrder, setSelectedOrder] = useState<any>(null);

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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const updateOrderStatus = (orderId: string, newStatus: string) => {
    // In a real app, this would update the order in the backend
    console.log(`Updating order ${orderId} to status: ${newStatus}`);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Order Management</CardTitle>
          <CardDescription>
            Manage all customer orders and update their status
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Customer</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Delivery</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-mono">#{order.trackingCode}</TableCell>
                  <TableCell>{order.shippingDetails.fullName}</TableCell>
                  <TableCell>{formatDate(order.orderDate)}</TableCell>
                  <TableCell>₦{order.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {order.deliveryMethod === 'delivery' ? (
                      <div className="flex items-center gap-1">
                        <Truck className="h-4 w-4" />
                        <span>Delivery</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-1">
                        <Package className="h-4 w-4" />
                        <span>Pickup</span>
                      </div>
                    )}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedOrder(order)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-2xl">
                          <DialogHeader>
                            <DialogTitle>Order Details - #{order.trackingCode}</DialogTitle>
                            <DialogDescription>
                              Complete order information and actions
                            </DialogDescription>
                          </DialogHeader>
                          {selectedOrder && (
                            <div className="space-y-4">
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <h4 className="font-medium">Customer Information</h4>
                                  <p>{selectedOrder.shippingDetails.fullName}</p>
                                  <p>{selectedOrder.shippingDetails.phoneNumber}</p>
                                  <p>{selectedOrder.shippingDetails.email}</p>
                                </div>
                                <div>
                                  <h4 className="font-medium">Order Information</h4>
                                  <p>Payment: {selectedOrder.paymentMethod}</p>
                                  <p>Total: ₦{selectedOrder.totalAmount.toFixed(2)}</p>
                                  <p>Date: {formatDate(selectedOrder.orderDate)}</p>
                                </div>
                              </div>
                              
                              <div className="flex gap-2">
                                <Button 
                                  size="sm" 
                                  onClick={() => updateOrderStatus(selectedOrder.id, 'processing')}
                                  disabled={selectedOrder.status === 'processing'}
                                >
                                  Mark Processing
                                </Button>
                                <Button 
                                  size="sm" 
                                  onClick={() => updateOrderStatus(selectedOrder.id, 'shipped')}
                                  disabled={selectedOrder.status === 'shipped' || selectedOrder.status === 'delivered'}
                                >
                                  Mark Shipped
                                </Button>
                                <Button 
                                  size="sm" 
                                  onClick={() => updateOrderStatus(selectedOrder.id, 'delivered')}
                                  disabled={selectedOrder.status === 'delivered'}
                                >
                                  Mark Delivered
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {orders.length === 0 && (
            <div className="text-center py-8">
              <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="font-medium text-lg mb-2">No Orders Yet</h3>
              <p className="text-muted-foreground">Orders will appear here when customers place them.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
