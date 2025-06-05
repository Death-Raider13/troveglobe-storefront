
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SellGoodsForm } from '@/components/sell/SellGoodsForm';

const SellGoodsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Sell Your Goods</h1>
            <p className="text-muted-foreground">
              List your products on our platform and reach thousands of customers.
            </p>
          </div>
          <SellGoodsForm />
        </div>
      </div>
    </Layout>
  );
};

export default SellGoodsPage;
