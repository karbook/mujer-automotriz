// features/marketing/events/routes/index.tsx
import React from 'react';

export default function EventsPage() {
	return (
		<>
			{/* Sección principal con fondo e intro */}
			<section
				className="relative px-6 py-40 text-center text-white"
				style={{
					backgroundImage: 'url(/images/images-events/fondo-events.jpg)', // Cambia esta ruta a la imagen que quieras
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
				}}
			>
				{/* Overlay oscuro */}
				<div className="absolute inset-0 "></div>

				{/* Contenido */}
				<div className="relative max-w-4xl mx-auto">
					<h1 className="text-5xl font-extrabold mb-6">
						Descubre, Conecta, Destaca
					</h1>

					<div className="flex justify-center gap-6 mb-8">
						<button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-full font-semibold transition">
							Get Started
						</button>
						<button className="bg-transparent border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
							Learn More
						</button>
					</div>

					<p className="text-lg max-w-xl mx-auto">
						Sé parte de la comunidad de Mujer Automotriz donde cada evento es más que una simple reunión, es un hito en tu trayectoria profesional.
					</p>
				</div>
			</section>

			{/* Sección eventos */}
			<section className="px-6 py-20 max-w-4xl mx-auto text-center">
				<h2 className="text-4xl font-bold mb-4">Eventos Próximos</h2>

				<article className="border border-gray-300 rounded-lg p-8 shadow-md max-w-md mx-auto">
					<h3 className="text-2xl font-semibold mb-2">Motor Ladies Night</h3>
					<p className="italic mb-2">CDMX - 14 Noviembre 2024</p>

					<div className="flex justify-center gap-6 mt-6">
						<button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition">
							Comprar Tickets
						</button>
						<button className="bg-gray-200 hover:bg-gray-300 px-6 py-3 rounded-full font-semibold transition">
							Ser Sponsor
						</button>
					</div>
				</article>
			</section>
		</>
	);
}
