import { Suspense } from 'react';

import { getChatsByUserId } from '@/db/cached-queries';

import { ChatHistoryClient } from '@/components/chat/chat-history-client';
import { ChatHistorySkeleton } from '@/components/chat/chat-history-skeleton';

export async function ChatHistory({ userId }: { userId: string }) {
  const chats = await getChatsByUserId(userId);

  return (
    <Suspense fallback={<ChatHistorySkeleton />}>
      <ChatHistoryClient initialChats={chats} userId={userId} />
    </Suspense>
  );
}
