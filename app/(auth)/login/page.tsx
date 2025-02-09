'use client';

import { GoogleSignInButton } from '@/components/auth/google-sign-in-button';

export default function LoginPage() {
  return (
    <div className="flex h-[calc(100vh-theme(spacing.16))] items-center justify-center py-10">
      <div className="w-full max-w-sm space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Sign in with your Google account to continue
          </p>
        </div>
        <GoogleSignInButton />
      </div>
    </div>
  );
}
