import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export function Header() {
	return (
		<header className="border-b border-zinc-800 bg-black">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="w-12 h-12">
					<Image
						src="/logo.svg"
						alt="Notify"
						width={100}
						height={100}
						priority
					/>
				</Link>

				<nav className="flex gap-4">
					<Link href="/login">
						<Button variant="ghost" className="text-white hover:text-zinc-300">
							Login
						</Button>
					</Link>
					<Link href="/register">
						<Button className="bg-white text-black hover:bg-zinc-200">
							Register
						</Button>
					</Link>
				</nav>
			</div>
		</header>
	);
}
