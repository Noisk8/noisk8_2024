// app/providers.tsx
'use client'

import {NextUIProvider} from '@nextui-org/react'
import React from 'react';

interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: { // El signo de interrogación indica que la prop es opcional
    attribute: string;
    defaultTheme: string;
  };
}

export function Providers({children, themeProps}: ProvidersProps) {
  // Aquí puedes utilizar themeProps como necesites, por ejemplo, para configurar el tema.
  
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}