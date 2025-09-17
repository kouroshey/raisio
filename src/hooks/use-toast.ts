"use client";

import type { ToasterProps } from "sonner";

import * as React from "react";

const TOAST_DURATION = 4000;

type ToastType = "error" | "success";

interface Toast extends ToasterProps {
  id: string;
  type: ToastType;
  title: string;
  description?: string;
}

interface State {
  toasts: Toast[];
}

type Action = { type: "ADD"; toast: Toast } | { type: "REMOVE"; toastId: string };

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD":
      return { ...state, toasts: [action.toast] }; // فقط یکی نگه می‌داریم
    case "REMOVE":
      return { ...state, toasts: state.toasts.filter((t) => t.id !== action.toastId) };
    default:
      return state;
  }
}

let memoryState: State = { toasts: [] };
const listeners: ((state: State) => void)[] = [];

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function genId() {
  return Date.now().toString();
}

function showToast(type: ToastType, title: string, description?: string) {
  const id = genId();

  dispatch({
    type: "ADD",
    toast: { id, type, title, description },
  });

  const timeout = setTimeout(() => {
    dispatch({ type: "REMOVE", toastId: id });
    toastTimeouts.delete(id);
  }, TOAST_DURATION);

  toastTimeouts.set(id, timeout);
}

export const toast = {
  success: (title: string, description?: string) => showToast("success", title, description),
  error: (title: string, description?: string) => showToast("error", title, description),
};

export function useToast() {
  const [state, setState] = React.useState<State>(memoryState);

  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) listeners.splice(index, 1);
    };
  }, []);

  return state;
}
