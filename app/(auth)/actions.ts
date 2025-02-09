'use server';

import { createClient } from '@/lib/supabase/server';

export interface GoogleOAuthActionState {
  status: 'idle' | 'in_progress' | 'success' | 'failed';
  url?: string;
}

export const signInWithGoogle = async (
  _: GoogleOAuthActionState
): Promise<GoogleOAuthActionState> => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
        queryParams: {
          access_type: 'offline',
          prompt: 'consent',
        },
      },
    });

    if (error) {
      return { status: 'failed' };
    }

    return { 
      status: 'success',
      url: data.url
    };
  } catch (error) {
    return { status: 'failed' };
  }
};
