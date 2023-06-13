import { ThemeState } from "./types";

export const InitThemeState: ThemeState = {
    isDark: window.localStorage.getItem('theme') === 'dark' ? true : false
}