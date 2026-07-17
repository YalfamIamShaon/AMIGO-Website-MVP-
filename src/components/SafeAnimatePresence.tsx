"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";

interface SafeAnimatePresenceProps {
  children: React.ReactNode;
  initial?: boolean;
  mode?: "sync" | "popLayout" | "wait";
  onExitComplete?: () => void;
}

export const SafeAnimatePresence: React.FC<SafeAnimatePresenceProps> = ({
  children,
  ...props
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return <AnimatePresence {...props}>{children}</AnimatePresence>;
};
