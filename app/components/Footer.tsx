import Image from "next/image";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t border-zinc-800 bg-black">
			<div className="container mx-auto px-4 py-8">
				<div className="flex flex-col items-center justify-between gap-4 md:flex-row">
					<div className="flex flex-col items-center gap-4 md:items-start">
						<Link href="/" className="w-12 h-12">
							<Image
								src="/logo.svg"
								width={1000}
								height={1000}
								alt="Trakio Logo"
								priority
								quality={100}
							/>
						</Link>
						<p className="text-sm text-zinc-400">
							© 2024 Notify. All rights reserved.
						</p>
					</div>

					<nav className="flex gap-6">
						<Link
							href="/about"
							className="text-sm text-zinc-400 hover:text-white"
						>
							About
						</Link>
						<Link
							href="/privacy"
							className="text-sm text-zinc-400 hover:text-white"
						>
							Privacy
						</Link>
						<Link
							href="/terms"
							className="text-sm text-zinc-400 hover:text-white"
						>
							Terms
						</Link>
					</nav>
				</div>
			</div>
		</footer>
	);
}
