'use client';

import { HeroUIProvider } from '@heroui/system';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <div>
      <ToastContainer position='bottom-right' hideProgressBar className='z-50'/>
      <HeroUIProvider>{children}</HeroUIProvider>
    </div>
  );
}
