"use client";

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
				date: "15/11/2024",
				author: "Rodrigo Carvalho",
				imageUrl: "/flamengo.png",
			},
			{
				id: 2,
				title:
					"Meta é multada na União Europeia por vincular serviço de classificados",
				description:
					"Comissão Europeia disse que Meta abusou de sua posição dominante no mercado de redes sociais. Empresa nega que tenha violado a lei e disse que vai recorrer da decisão.",
				date: "15/11/2024",
				author: "Rodrigo Carvalho",
				imageUrl: "/meta.png",
			},
			{
				id: 3,
				title: "Google começa a liberar aplicativo do robô Gemini para iPhone",
				description:
					"Nesta sexta-feira, o Flamengo comemora 123 anos de vida. Apesar da rara falta competitiva de seu artilheiro pelo Rubro-Negro, Gabigol não deixou de parabenizar o clube em suas redes sociais.",
				date: "15/11/2024",
				author: "Rodrigo Carvalho",
				imageUrl: "/gemini.png",
			},
		];

		const found = mockNews.find((item) => item.id === Number(params.id));
		setNewsItem(found || null);
	}, [params.id]);

	if (!newsItem) {
		return (
			<div className="min-h-screen bg-black text-white flex items-center justify-center">
				<h1 className="text-2xl">Notícia não encontrada</h1>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-black text-white">
			<main className="max-w-5xl mx-auto px-4 py-8">
				<h1 className="text-5xl font-bold mb-8">{newsItem.title}</h1>
				<Image
					src={newsItem.imageUrl}
					alt={newsItem.title}
					width={1200}
					height={600}
					className="w-full h-[500px] object-cover rounded-lg mb-8"
				/>
				<div className="flex items-center text-blue-500 mb-8">
					<span>{newsItem.date}</span>
					<span className="mx-2">•</span>
					<span>{newsItem.author}</span>
				</div>
				<div className="text-gray-300 text-lg leading-relaxed whitespace-pre-wrap">
					{newsItem.description}
				</div>
			</main>
		</div>
	);
}
