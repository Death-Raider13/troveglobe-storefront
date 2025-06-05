
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { CheckCircle, XCircle, Eye, Package, Tag, Calendar } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

// Mock data for pending products - in a real app, this would come from your backend
const mockPendingProducts = [
  {
    id: '1',
    name: 'Handmade Ceramic Vase',
    seller: 'John Artisan',
    category: 'crafts',
    price: 15000,
    description: 'Beautiful handcrafted ceramic vase with traditional Nigerian patterns',
    specifications: {
      size: 'Large',
      color: 'Blue',
      material: 'Ceramic',
      condition: 'New',
      weight: '2.5 kg',
      dimensions: '30x15x15 cm'
    },
    images: ['/placeholder.svg'],
    tags: ['handmade', 'ceramic', 'traditional'],
    submittedDate: '2024-01-15T10:30:00Z',
    status: 'pending'
  },
  {
    id: '2',
    name: 'Vintage Leather Bag',
    seller: 'Mary Designer',
    category: 'accessories',
    price: 25000,
    description: 'Premium vintage leather handbag, perfect for professional use',
    specifications: {
      size: 'Medium',
      color: 'Brown',
      material: 'Leather',
      condition: 'Used - Like New',
      weight: '0.8 kg',
      dimensions: '35x25x10 cm'
    },
    images: ['/placeholder.svg'],
    tags: ['vintage', 'leather', 'handbag'],
    submittedDate: '2024-01-14T14:20:00Z',
    status: 'pending'
  }
];

export const AdminProductApproval = () => {
  const [pendingProducts, setPendingProducts] = useState(mockPendingProducts);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-NG', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString('en-NG')}`;
  };

  const approveProduct = (productId: string) => {
    setPendingProducts(prev => prev.filter(p => p.id !== productId));
    toast({
      title: "Product Approved",
      description: "The product has been approved and is now live on the store.",
    });
  };

  const rejectProduct = (productId: string) => {
    setPendingProducts(prev => prev.filter(p => p.id !== productId));
    toast({
      title: "Product Rejected",
      description: "The product has been rejected and the seller will be notified.",
      variant: "destructive",
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Product Approval</CardTitle>
          <CardDescription>
            Review and approve products submitted by sellers
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Seller</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Submitted</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {pendingProducts.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{product.seller}</TableCell>
                  <TableCell>
                    <Badge variant="outline">
                      {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium">{formatPrice(product.price)}</TableCell>
                  <TableCell>{formatDate(product.submittedDate)}</TableCell>
                  <TableCell>
                    <Badge className="bg-amber-100 text-amber-800">
                      Pending Review
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setSelectedProduct(product)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle>Product Review - {product.name}</DialogTitle>
                            <DialogDescription>
                              Review all product details before approval
                            </DialogDescription>
                          </DialogHeader>
                          {selectedProduct && (
                            <div className="space-y-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <img 
                                    src={selectedProduct.images[0]} 
                                    alt={selectedProduct.name}
                                    className="w-full h-64 object-cover rounded-lg"
                                  />
                                </div>
                                <div>
                                  <h3 className="text-xl font-bold mb-2">{selectedProduct.name}</h3>
                                  <p className="text-2xl font-bold text-primary mb-4">
                                    {formatPrice(selectedProduct.price)}
                                  </p>
                                  <p className="text-muted-foreground mb-4">
                                    {selectedProduct.description}
                                  </p>
                                  
                                  <div className="space-y-2">
                                    <div><span className="font-medium">Seller:</span> {selectedProduct.seller}</div>
                                    <div><span className="font-medium">Category:</span> {selectedProduct.category}</div>
                                    <div><span className="font-medium">Submitted:</span> {formatDate(selectedProduct.submittedDate)}</div>
                                  </div>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 gap-6">
                                <div>
                                  <h4 className="font-medium mb-3">Specifications</h4>
                                  <div className="space-y-2 text-sm">
                                    <div><span className="text-muted-foreground">Size:</span> {selectedProduct.specifications.size}</div>
                                    <div><span className="text-muted-foreground">Color:</span> {selectedProduct.specifications.color}</div>
                                    <div><span className="text-muted-foreground">Material:</span> {selectedProduct.specifications.material}</div>
                                    <div><span className="text-muted-foreground">Condition:</span> {selectedProduct.specifications.condition}</div>
                                    <div><span className="text-muted-foreground">Weight:</span> {selectedProduct.specifications.weight}</div>
                                    <div><span className="text-muted-foreground">Dimensions:</span> {selectedProduct.specifications.dimensions}</div>
                                  </div>
                                </div>
                                
                                <div>
                                  <h4 className="font-medium mb-3">Tags</h4>
                                  <div className="flex flex-wrap gap-2">
                                    {selectedProduct.tags.map((tag: string, index: number) => (
                                      <Badge key={index} variant="secondary">{tag}</Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                              
                              <div className="flex gap-3 pt-4 border-t">
                                <Button 
                                  onClick={() => approveProduct(selectedProduct.id)}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                  Approve Product
                                </Button>
                                <Button 
                                  variant="destructive"
                                  onClick={() => rejectProduct(selectedProduct.id)}
                                  className="flex items-center gap-2"
                                >
                                  <XCircle className="h-4 w-4" />
                                  Reject Product
                                </Button>
                              </div>
                            </div>
                          )}
                        </DialogContent>
                      </Dialog>
                      
                      <Button 
                        size="sm" 
                        onClick={() => approveProduct(product.id)}
                        className="flex items-center gap-1"
                      >
                        <CheckCircle className="h-4 w-4" />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => rejectProduct(product.id)}
                        className="flex items-center gap-1"
                      >
                        <XCircle className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          
          {pendingProducts.length === 0 && (
            <div className="text-center py-8">
              <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="font-medium text-lg mb-2">No Pending Products</h3>
              <p className="text-muted-foreground">Products submitted by sellers will appear here for review.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
