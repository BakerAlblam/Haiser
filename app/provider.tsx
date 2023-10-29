// app/providers.tsx
'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {NextUIProvider} from '@nextui-org/react'



const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: true,
      },
    },
  });

export default function Providers({children}: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      {children}
    </NextUIProvider>
    </QueryClientProvider>
  )
}