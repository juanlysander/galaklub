import { OrbisContext } from "@/context/OrbisContext";
import { useContext } from "react";

export const useOrbis = () => {
  const context = useContext(OrbisContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
