"use client";
import { Button } from "@/components/ui/button";
import { TypeAnimation } from "react-type-animation";

import Link from "next/link";
export default function Home() {
  return (
    <div className=" text-white text-center">
      <h1 className="text-6xl tracking-wide orbitron font-black lg:text-8xl pt-60">
        RESPOND AI
      </h1>
      <h1 className="pt-3 tracking-wide roboto md:px-40 lg:px-80 px-8 typewriter">
        <TypeAnimation
          sequence={[
            "Explore our carefully curated prompts, participate in our community discussions, and discover how a simple idea can lead to extraordinary results.",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "1.3rem", display: "inline-block" }}
          repeat={0}
        />
      </h1>
      <Link href="/dashboard">
        <Button variant="regular" className="mt-6">
          Go to Prompt
        </Button>
      </Link>
    </div>
  );
}
