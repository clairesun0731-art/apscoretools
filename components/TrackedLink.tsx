"use client";

import Link from "next/link";
import type { ComponentProps } from "react";
import { trackEvent } from "@/lib/gtag";

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName: string;
  eventParams?: Record<string, string | number | boolean | undefined>;
};

export default function TrackedLink({
  children,
  eventName,
  eventParams = {},
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        trackEvent(eventName, eventParams);
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
