"use client";
import ThemeSwitch from "./commons/element/themeSwitcher";
import Image from "next/image";
import Provider from "./provider";
import PokemonList from "./components/home";

export default function Home() {
  return (
    <Provider>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <ThemeSwitch />
        <PokemonList />
      </main>
    </Provider>
  );
}
