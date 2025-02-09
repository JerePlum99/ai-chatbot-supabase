'use client';

import { useTransition } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { signInWithGoogle } from '@/app/(auth)/actions';

export function GoogleSignInButton() {
  const [isPending, startTransition] = useTransition();

  const handleGoogleSignIn = () => {
    startTransition(async () => {
      try {
        const result = await signInWithGoogle({ status: 'idle' });
        if (result.status === 'failed') {
          toast.error('Failed to sign in with Google');
          return;
        }
        
        // Redirect to Google OAuth if we have a URL
        if (result.url) {
          window.location.href = result.url;
        } else {
          toast.error('Failed to get authentication URL');
        }
      } catch (error) {
        toast.error('An unexpected error occurred');
      }
    });
  };

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isPending}
      className="w-full"
      onClick={handleGoogleSignIn}
    >
      {isPending ? (
        'Loading...'
      ) : (
        <>
          <FcGoogle className="mr-2 h-4 w-4" />
          Continue with Google
        </>
      )}
    </Button>
  );
} 