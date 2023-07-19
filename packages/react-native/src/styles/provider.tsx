import styled, { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

const AppThemeProvider = ({ children }: AppThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export { AppThemeProvider, theme, styled };
