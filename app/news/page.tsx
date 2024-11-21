"use client";

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
	]);

	return (
		<div className="min-h-screen bg-black text-white">
			<main className="container mx-auto px-4 py-8">
				<div className="text-center mb-12">
					<h1 className="text-5xl font-bold">
						Publique Notícias em Tempo Real com Facilidade!
					</h1>
					<p className="mt-4 text-gray-400 text-lg">
						Crie, edite e compartilhe notícias com o mundo usando nossa
						plataforma simples e poderosa. Acompanhe suas publicações e engaje
						seu público de maneira eficiente.
					</p>
				</div>
				<div className="space-y-6">
					{newsItems.map((item) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
							key={item.id}
							className="bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors cursor-pointer"
							onClick={() => router.push(`/news/${item.id}`)}
						>
							<div className="flex flex-col md:flex-row">
								<div className="md:w-1/3">
									<Image
										src={item.imageUrl}
										alt={item.title}
										width={1000}
										height={1000}
										quality={100}
										priority
										className="w-full h-[250px] object-cover"
									/>
								</div>
								<div className="flex-1 p-6">
									<h2 className="text-2xl font-bold mb-3">{item.title}</h2>
									<p className="text-gray-400 mb-4">{item.description}</p>
									<div className="flex items-center text-sm text-blue-500">
										<span>{item.date}</span>
										<span className="mx-2">•</span>
										<span>{item.author}</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}
