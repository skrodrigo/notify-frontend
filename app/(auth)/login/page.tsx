import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Login() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-black text-white">
			<div className="absolute top-4 left-4">
				<Link href="/">
					<Button
						variant="ghost"
						size="icon"
						className="text-white  hover:text-zinc-300 rounded-full"
						asChild
					>
						<div className="flex items-center justify-center bg-white rounded-full p-1">
							<ArrowLeft className="h-8 w-8 text-black " />
						</div>
					</Button>
				</Link>
			</div>
			<div className="w-full max-w-md space-y-6 rounded-xl border border-zinc-800  p-8">
				<div className="space-y-2 text-center">
					<h1 className="text-2xl font-bold">Login</h1>
					<p className="text-sm text-zinc-400">
						Enter your email below to login to your account.
					</p>
				</div>
				<div className="space-y-4">
					<div className="space-y-2">
						<Label
							htmlFor="email"
							className="text-sm font-normal text-zinc-400"
						>
							Email
						</Label>
						<Input
							id="email"
							type="email"
							placeholder="Your Address Email"
							required
							className="bg-black border-zinc-800 text-white placeholder-zinc-600"
						/>
					</div>
					<div className="space-y-2">
						<Label
							htmlFor="password"
							className="text-sm font-normal text-zinc-400"
						>
							Password
						</Label>
						<Input
							id="password"
							type="password"
							placeholder="Your Password"
							required
							className="bg-black border-zinc-800 text-white placeholder-zinc-600"
						/>
					</div>
					<Button
						type="submit"
						className="w-full bg-white text-black hover:bg-zinc-200"
					>
						Login
					</Button>
				</div>
				<div className="mt-4 text-center text-sm text-zinc-400">
					Don&apos;t have an account?{" "}
					<Link href="/register" className="text-blue-500 hover:underline">
						Sign up
					</Link>
				</div>
			</div>
		</div>
	);
}
