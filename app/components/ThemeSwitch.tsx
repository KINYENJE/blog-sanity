"use client"

import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from './Icons'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <button  className="border border-purple-500 rounded-2xl  hover:bg-purple-500 hover:bg-opacity-10 dark:hover:bg-opacity-10 dark:hover:bg-amber-50 p-2"
     onClick={() => setTheme(theme === "dark" ? "light" : "dark")}> {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}

export default ThemeSwitch