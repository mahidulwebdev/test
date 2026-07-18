import { ThemeStore } from "@/type.global";
import { create } from "zustand";


export const useThemeStore = create<ThemeStore>((set) => ({
  theme: false,
  changeTheme: () => set((state) => ({ theme: !state.theme })),
}));
