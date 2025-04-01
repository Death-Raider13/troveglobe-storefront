
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Wallet, Truck, Store } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart, subtotal } = useCart();
  const [deliveryMethod, setDeliveryMethod] = useState('delivery');
  
  if (items.length === 0) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <div className="max-w-md mx-auto">
            <ShoppingBag className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="mb-6 text-muted-foreground">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button asChild>
              <Link to="/">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted">
                  <tr className="text-left">
                    <th className="p-4">Product</th>
                    <th className="p-4 text-center">Quantity</th>
                    <th className="p-4 text-right">Price</th>
                    <th className="p-4 text-right">Total</th>
                    <th className="p-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    const itemPrice = item.discount > 0 
                      ? item.price * (1 - item.discount / 100) 
                      : item.price;
                    
                    return (
                      <tr key={item.id} className="border-t">
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="w-16 h-16 rounded overflow-hidden mr-4 flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <Link to={`/product/${item.id}`} className="font-medium hover:underline">
                                {item.name}
                              </Link>
                              {item.discount > 0 && (
                                <div className="text-xs text-destructive font-semibold mt-1">
                                  {item.discount}% OFF
                                </div>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="p-4">
                          <div className="flex items-center justify-center space-x-2">
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button 
                              variant="outline" 
                              size="icon" 
                              className="h-8 w-8"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </td>
                        <td className="p-4 text-right">
                          {item.discount > 0 ? (
                            <div>
                              <span className="font-medium">${itemPrice.toFixed(2)}</span>
                              <div className="text-xs text-muted-foreground line-through">
                                ${item.price.toFixed(2)}
                              </div>
                            </div>
                          ) : (
                            <span className="font-medium">${item.price.toFixed(2)}</span>
                          )}
                        </td>
                        <td className="p-4 text-right font-medium">
                          ${(itemPrice * item.quantity).toFixed(2)}
                        </td>
                        <td className="p-4 text-right">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-muted-foreground hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <Button 
                variant="outline" 
                className="text-muted-foreground" 
                onClick={clearCart}
              >
                Clear Cart
              </Button>
              
              <Button asChild variant="ghost">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="border rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              
              {/* Delivery Method Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-3">Delivery Method</h3>
                <RadioGroup 
                  value={deliveryMethod} 
                  onValueChange={setDeliveryMethod}
                  className="gap-3"
                >
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="delivery" id="delivery" />
                    <Label htmlFor="delivery" className="flex items-center cursor-pointer">
                      <Truck className="h-4 w-4 mr-2" />
                      <div>
                        <div>Home Delivery</div>
                        <div className="text-xs text-muted-foreground">
                          Delivery within 24-48 hours
                        </div>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 border rounded-md p-3 hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="pickup" id="pickup" />
                    <Label htmlFor="pickup" className="flex items-center cursor-pointer">
                      <Store className="h-4 w-4 mr-2" />
                      <div>
                        <div>Store Pickup</div>
                        <div className="text-xs text-muted-foreground">
                          Ready for pickup in 2 hours
                        </div>
                      </div>
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="font-medium">Free</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              
              <div className="mt-6">
                <p className="mb-2 text-sm text-muted-foreground">We accept:</p>
                <div className="flex space-x-3">
                  <div className="flex items-center justify-center bg-muted rounded p-2 h-10">
                    <CreditCard className="h-5 w-5" />
                  </div>
                  <div className="flex items-center justify-center bg-muted rounded p-2 h-10">
                    <Wallet className="h-5 w-5" />
                    <span className="ml-1 text-xs font-medium">Transfer</span>
                  </div>
                  <div className="flex items-center justify-center bg-muted rounded p-2 h-10">
                    <Wallet className="h-5 w-5" />
                    <span className="ml-1 text-xs font-medium">On-spot</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
