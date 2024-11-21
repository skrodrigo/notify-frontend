import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
	return (
		<header className="border-b border-zinc-800 bg-black">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="text-2xl font-bold text-white">
					Notify
				</Link>

				<nav className="flex gap-4">
					<Link href="/login">
						<Button variant="ghost" className="text-white hover:text-zinc-300">
							Login
						</Button>
					</Link>
					<Link href="/register">
						<Button className="bg-white text-black hover:bg-zinc-200">
							Sign up
						</Button>
					</Link>
				</nav>
			</div>
		</header>
	);
}
