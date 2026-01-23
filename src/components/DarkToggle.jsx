import { useState, useEffect } from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function DarkToggle() {
  const [dark, setDark] = useState(
    localStorage.theme === 'dark' || 
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="p-2 rounded cursor-pointer"
    >
      {dark ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-white" />
      )}
    </button>
  );
}