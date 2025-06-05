
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { AdminOrderManagement } from '@/components/admin/AdminOrderManagement';
import { AdminProductApproval } from '@/components/admin/AdminProductApproval';
import { AdminDashboard } from '@/components/admin/AdminDashboard';
import { Package, ShoppingCart, Users, TrendingUp, Settings } from 'lucide-react';

const AdminPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-gray-600">ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ Store Management</p>
            </div>
            <Button variant="outline" onClick={() => window.open('/', '_blank')}>
              View Store
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="orders" className="flex items-center gap-2">
              <ShoppingCart className="h-4 w-4" />
              Orders
            </TabsTrigger>
            <TabsTrigger value="products" className="flex items-center gap-2">
              <Package className="h-4 w-4" />
              Product Approval
            </TabsTrigger>
            <TabsTrigger value="settings" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard">
            <AdminDashboard />
          </TabsContent>

          <TabsContent value="orders">
            <AdminOrderManagement />
          </TabsContent>

          <TabsContent value="products">
            <AdminProductApproval />
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Admin Settings</CardTitle>
                <CardDescription>
                  Manage your admin preferences and store settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Auto-approve products</h3>
                      <p className="text-sm text-muted-foreground">Automatically approve new products from sellers</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Email notifications</h3>
                      <p className="text-sm text-muted-foreground">Get notified about new orders and products</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium">Store appearance</h3>
                      <p className="text-sm text-muted-foreground">Customize the look and feel of your store</p>
                    </div>
                    <Button variant="outline">Configure</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;
