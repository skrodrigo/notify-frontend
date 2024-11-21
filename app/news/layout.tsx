import type { Metadata } from "next";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const metadata: Metadata = {
	title: "Notify - Notícias",
	description: "Veja as últimas notícias publicadas na plataforma Notify.",
};

export default function NewsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="min-h-screen bg-zinc-50">
			<Header />
			{children}
			<Footer />
		</main>
	);
}
