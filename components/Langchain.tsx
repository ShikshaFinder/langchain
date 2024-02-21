import React from "react";
import { useLangChain, LangChainProvider } from "langchain";

interface LangChainProviderProps {
  prompt: string;
}

const LangChainProvider: React.FC<LangChainProviderProps> = ({ prompt }) => {
  const { isLoading, error, result } = useLangChain(openAIKey, prompt);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <p>{result}</p>;
};

export default LangChainProvider;
