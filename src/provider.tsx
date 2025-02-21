import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

export function Provider({ children }: PropsWithChildren) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { refetchOnMount: false } },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
