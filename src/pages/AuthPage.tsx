
import React, { useState } from 'react';
import { Layout } from '@/components/layout/Layout';
import { SignInForm } from '@/components/auth/SignInForm';
import { SignUpForm } from '@/components/auth/SignUpForm';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const AuthPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-md space-y-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight">Welcome to ḰƝἿҬҬἝƉ__ƓὋȖȒṂἝҬ</h1>
            <p className="text-muted-foreground mt-2">Sign in to your account or create a new one</p>
          </div>
          
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>
            <TabsContent value="signin">
              <SignInForm />
            </TabsContent>
            <TabsContent value="signup">
              <SignUpForm />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AuthPage;
