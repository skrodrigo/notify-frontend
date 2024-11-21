"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type NewsItem = {
	id: number;
	title: string;
	description: string;
	date: string;
	author: string;
	imageUrl: string;
};

export default function NewsPage() {
	const params = useParams();
	const [newsItem, setNewsItem] = useState<NewsItem | null>(null);

	useEffect(() => {
		const mockNews: NewsItem[] = [
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
			// ... outros itens de notícia
		];

		const found = mockNews.find((item) => item.id === Number(params.id));
		setNewsItem(found || null);
	}, [params.id]);

	if (!newsItem) {
		return (
			<div className="min-h-screen bg-black text-white flex items-center justify-center">
				<h1>Notícia não encontrada</h1>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white">
			<main className="container mx-auto px-4 py-8">
				<Card className="bg-gray-900">
					<Image
						src={newsItem.imageUrl}
						alt={newsItem.title}
						width={1200}
						height={600}
						className="w-full object-cover"
					/>
					<CardContent className="p-6">
						<h1 className="text-3xl font-bold">{newsItem.title}</h1>
						<div className="mt-4 text-gray-400">
							<span>{newsItem.date}</span> - <span>{newsItem.author}</span>
						</div>
						<p className="mt-6 text-gray-300">{newsItem.description}</p>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
