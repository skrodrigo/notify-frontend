import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Notify - Publique Notícias em Tempo Real com Facilidade!",
	description:
		"Crie, edite e compartilhe notícias com o mundo usando nossa plataforma simples e poderosa. Acompanhe suas publicações e engaje seu público de maneira eficiente.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">{children}</body>
		</html>
	);
}
