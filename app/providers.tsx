"use client";
import LangChainProvider from "@/components/Langchain";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from 'next/navigation'
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

export interface ProvidersProps {
	children: React.ReactNode;
	themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

	return (
		<NextUIProvider navigate={router.push}>
			    <LangChainProvider apiKey={openAIKey}>

			<NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
			</LangChainProvider>
		</NextUIProvider>
	);
}
