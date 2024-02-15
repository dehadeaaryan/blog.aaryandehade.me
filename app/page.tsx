"use client";

import Image from "next/image";
import { getSubdomain } from "@/lib/domain";

export default function Home() {
    const subdomain = typeof window !== 'undefined' ? getSubdomain(window.location.href) : '';
    return (
        <div className="w-screen h-screen">
            <h1>Aaryan Dehade&apos;s Blog</h1>
            <p>Welcome to {subdomain}!</p>
        </div>
    );
}
