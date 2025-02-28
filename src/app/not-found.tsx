import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-medium mb-4">404 NotFound</h1>
        <Link href="/">-- Back Home --</Link>
    </div>
  )
}
