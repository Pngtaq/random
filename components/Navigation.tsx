import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex justify-between px-4 py-4">
      <Link href="/" className="roboto text-white font-black text-xl">
        RESPOND AI
      </Link>
      <div className="flex gap-6 items-center">
        <Button variant="regular">
          <Link href="/sign-in">Sign In</Link>
        </Button>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
