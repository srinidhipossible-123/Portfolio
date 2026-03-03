import { useCallback } from "react";

export const useRipple = () => {
  return useCallback((e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const span = document.createElement("span");
    span.className = "ripple-span";
    span.style.left = `${e.clientX - rect.left}px`;
    span.style.top = `${e.clientY - rect.top}px`;
    target.appendChild(span);
    setTimeout(() => span.remove(), 700);
  }, []);
};


