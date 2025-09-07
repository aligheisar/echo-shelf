import { useThemeStore } from "@/store/theme-store";

const ThemeSwitcher = () => {
  const theme = useThemeStore((state) => state.theme);
  const setTheme = useThemeStore((state) => state.setTheme);

  return (
    <div>
      <h1>{theme}</h1>
      <button onClick={() => setTheme("dark")}>dark</button>
      <button onClick={() => setTheme("light")}>light</button>
      <button onClick={() => setTheme("system")}>system</button>
    </div>
  );
};

export { ThemeSwitcher };
