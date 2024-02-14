"use client";

import Image from "next/image";
import { getSubdomain } from "@/lib/domain";

export default function Home() {

    return (
        <div className="w-screen h-screen">
            <h1>Aaryan Dehade's Blog</h1>
            <p>Welcome to {getSubdomain(window.location.href)}!</p>
        </div>
    );
}
