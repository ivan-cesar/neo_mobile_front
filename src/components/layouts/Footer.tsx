import {RefreshCcw, Circle, ArrowLeft } from "lucide-react";

export default function Footer() {
  return (
    <footer className="flex justify-around items-center p-4 bg-white shadow-md mobile-content">
      <RefreshCcw className="w-5 h-5 cursor-pointer" />
      <Circle className="w-5 h-5 cursor-pointer" />
      <ArrowLeft className="w-5 h-5 cursor-pointer" />
    </footer>
  );
}