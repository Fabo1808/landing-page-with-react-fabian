import React from "react";

//include images into your bundle
import { Jumbotron } from "./Jumbotron.jsx";
import { Card } from "./Card.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
let year = new Date().getFullYear();
const Home = () => {
	return (
		<div className="container-fluid p-0">
			<Navbar />
			<div className="container">
				<div className="row">
					<div className="col-12">
						<Jumbotron />
					</div>
				</div>
				<div className="row pb-5">
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://www.laportadacanada.com/userfiles/images/culturalesfo1.png.jpg"
							cardTitle="La última cena"
							cardDescription="Pintado en una época en la que las imágenes religiosas todavía eran un tema artístico dominante, La Última Cena representa la última vez que Jesús partió el pan con sus discípulos antes de su crucifixión."
							buttonUrl="https://es.wikipedia.org/wiki/La_%C3%BAltima_cena_(Leonardo_da_Vinci)"
							buttonLabel="Find out more"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://visionultravioleta.com/wp-content/uploads/2017/11/grito.jpg"
							cardTitle="El Grito"
							cardDescription="Primero lo primero: El Grito no es una sola obra de arte. Según el blog del Museo Británico, hay dos pinturas, dos pasteles y luego un número no especificado de impresiones."
							buttonUrl="https://es.wikipedia.org/wiki/El_grito"
							buttonLabel="Find out more"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="https://www.copiamuseo.com/wp-content/uploads/2019/09/la-joven-de-la-perla-de-Vermeer-reproduccion-1.jpg"
							cardTitle="La joven de la perla"
							cardDescription="La obra maestra del óleo sobre lienzo es brillante en su simplicidad. La niña, que llevaba un turbante azul y dorado y un arete de perlas de gran tamaño, es todo el foco con solo un fondo oscuro detrás de ella."
							buttonUrl="https://es.wikipedia.org/wiki/La_joven_de_la_perla"
							buttonLabel="Find out more"
						/>
					</div>
					<div className="col-xl-3 col-md-4 col-lg-3">
						<Card
							imageUrl="http://2.bp.blogspot.com/-6w0vLmXd61o/TlKQB0-5zmI/AAAAAAAABAg/kUwdycBoFtY/s1600/Vincent+van+Gogh.+The+Starry+Night.jpg"
							cardTitle="La noche estrellada"
							cardDescription="La pintura comparativamente abstracta es el ejemplo característico del uso innovador y audaz de pinceladas gruesas de van Gogh. Los llamativos azules y amarillos de la pintura y la atmósfera de ensueño y remolinos han intrigado a los amantes del arte durante décadas."
							buttonUrl="https://es.wikipedia.org/wiki/La_noche_estrellada"
							buttonLabel="Find out more"
						/>
					</div>
				</div>
			</div>
			<footer className="footer py-3 bg-dark">
				<div className="container">
					<p className="text-white text-center">
						Builded with 🦾 using React.js - {year}
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Home;
