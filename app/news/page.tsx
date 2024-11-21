"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

type NewsItem = {
	id: number;
	title: string;
	description: string;
	date: string;
	author: string;
	imageUrl: string;
};

export default function NewsPage() {
	const router = useRouter();
	const [newsItems] = useState<NewsItem[]>([
		{
			id: 1,
			title:
				"'Flamengo até morrer': Gabigol faz postagem no aniversário do clube",
			description:
				"Nesta sexta-feira, o Flamengo comemora 123 anos de vida. Apesar de estar na final...",
			date: "18/11/2024",
			author: "Rodrigo Carvalho",
			imageUrl: "/placeholder.svg?height=200&width=300",
		},
		{
			id: 2,
			title:
				"Meta é multada na União Europeia por vincular serviço de classificados",
			description:
				"Comissão Europeia disse que Meta abusou de sua posição dominante no mercado...",
			date: "18/11/2024",
			author: "Rodrigo Carvalho",
			imageUrl: "/placeholder.svg?height=200&width=300",
		},
		{
			id: 3,
			title: "Google começa a liberar aplicativo do robô Gemini para iPhone",
			description:
				"Nesta sexta-feira, o Flamengo comemora 123 anos de vida. Apesar de estar na final...",
			date: "18/11/2024",
			author: "Rodrigo Carvalho",
			imageUrl: "/placeholder.svg?height=200&width=300",
		},
	]);

	return (
		<div className="min-h-screen bg-black text-white">
			<main className="container mx-auto px-4 py-8">
				<div className="text-center">
					<h1 className="text-4xl font-bold">
						Publique Notícias em Tempo Real com Facilidade!
					</h1>
					<p className="mt-2 text-gray-400">
						Crie, edite e compartilhe notícias com o mundo usando nossa
						plataforma simples e poderosa. Acompanhe suas publicações e engaje
						seu público de maneira eficiente.
					</p>
				</div>
				<div className="mt-8 space-y-6">
					{newsItems.map((item) => (
						<Card
							key={item.id}
							className="flex flex-col md:flex-row hover:bg-gray-900 transition-colors cursor-pointer"
							onClick={() => router.push(`/news/${item.id}`)}
						>
							<Image
								src={item.imageUrl}
								alt={`Notícia ${item.id}`}
								width={300}
								height={200}
								className="object-cover"
							/>
							<CardContent className="flex-1 p-4">
								<h2 className="text-xl font-semibold">{item.title}</h2>
								<p className="mt-2 text-gray-400">{item.description}</p>
								<div className="mt-4 text-sm text-gray-500">
									<span>{item.date}</span> - <span>{item.author}</span>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</main>
		</div>
	);
}
