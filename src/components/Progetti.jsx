import Navbar from "./Navbar";
import progetti from "../dbJSON/progetti.json";
import "./Progetti.css";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import { useState, useEffect, useRef } from "react";
import { SyncLoader } from 'react-spinners';
import { motion, AnimatePresence } from "framer-motion";
import cardsDataGestiamoci from '/src/dbJSON/cardsGestiamoci.json';
import cardsDataTrasparenza from '/src/dbJSON/cardsTrasparenza.json'


export default function Progetti(){
    const [loading, setLoading] = useState(true);
    return(
        <>  
            <Navbar></Navbar>
            {loading && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <SyncLoader color="#ffffff" />
                </div>
            )}
            <div className={`${loading ? 'hidden' : 'block'}`}>
                <header className="flex flex-col justify-center items-center">
                    <h1 className="text-white font-medium text-4xl mt-8 justify-center "> I miei Progetti</h1>
                    <p className="text-white w-200 text-center mt-8">"In questa pagina troverai una raccolta dei progetti che ho realizzato nell'ambito della programmazione web. Ogni progetto rappresenta un'opportunità di crescita, sperimentazione e applicazione delle mie competenze in sviluppo front-end e back-end. Scopri il mio lavoro !"</p>
                </header>
                <main className="flex flex-col justify-center mt-10">
                    <div className="robot">
                        <Robot setLoading={setLoading}></Robot>
                    </div>
                    <div className="">
                        {progetti.map((progetto)=>(
                        <Card  
                        key={progetto.id}
                        id={progetto.id}
                        title={progetto.title}
                        img={progetto.img}
                        description={progetto.description}
                        animate = {progetto.animate}>
                        </Card>
                        ))}
                    </div>
                </main>
            </div>
        </>
    )
}

//? FUNZIONE CHE CREA LE CARD FISICHE DEI PROGETTI 
function Card({title, img, description ,id, animate}){   
    return (
        <div className={"card flex justify-center items-center rounded-lg "+animate} id={"card"+id} >
        <div className="flex flex-col justify-center items-center">
            <img className="card-image mt-2 rounded-lg" src={img} alt="immagine-card" />
            <h1 className="text-white text-center text-2xl font-semibold mt-2">{title}</h1>
            <div className="h-30">
                <p className="text-white text-center mb-2 mt-2">{description}</p>
            </div>
            <Link to={`/card/${id}/${title}`} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                    Scopri
                </span>
            </Link>
        </div>
        </div>

    )
}

//? FUNZIONE SFONDO ROBOT
function Robot({setLoading}) {
  return (
    <Spline scene="https://prod.spline.design/mBWYUlUIB07vQmbi/scene.splinecode" onLoad={() => setLoading(false)}/>
  );
}

//? PAGINE DEI PROGETTI

export function CardPage(){
    const { id } = useParams();
    const {title} = useParams();
    return(
        <>  
            <Navbar></Navbar>
             <CardPageContent id={id} title={title}></CardPageContent>
        </>
    )
}
//? FUNZIONE PER RIEMPIRE LA PAGINA DEI PROGETTI IN BASE AL PROGETTO SELEZIONATO
function CardPageContent ({id, title}){
        //* progetto gestiamoci
        if(id == 1){
            return(
                <>  
                    <div className="flex justify-center ">
                        <div className="flex flex-col justify-center w-400">
                            <h1 className="text-white font-medium text-center text-4xl mt-8">{title}</h1>
                            <p className="text-white text-center mt-2">Gestiamoci è un portale web che ho sviluppato per ottimizzare la gestione del magazzino della mia azienda. </p>
                        </div>
                     </div>
                     <div>
                        <CardSwitcher
                            cardsDataInject={cardsDataGestiamoci}
                        ></CardSwitcher>
                    </div>
                    <div className="mascot-ball">
                        <Spline scene="https://prod.spline.design/bMJ5XqraDq10eq0w/scene.splinecode" />
                     </div>
                </>
            )
        }
        //* progetto trasparency
        if(id==2){
            return(
                <>  
                    <div className="flex justify-center ">
                        <div className="flex flex-col justify-center w-400">
                            <h1 className="text-white font-medium text-center text-4xl mt-8">{title}</h1>
                            <p className="text-white text-center mt-2">Trasparency è un portale che ho sviluppato per l'analisi della conformità dei siti web</p>
                        </div>
                     </div>
                     <div>
                        <CardSwitcher
                            cardsDataInject={cardsDataTrasparenza}
                        ></CardSwitcher>
                    </div>
                    <div className="mascot-ball">
                        <Spline scene="https://prod.spline.design/bMJ5XqraDq10eq0w/scene.splinecode" />
                     </div>
                </>
            )
        }
}   

//? FUNZIONE PER CREARE IL COMPONONTE DELLE CARD CHE SPIEGANO IL PROGETTO
function CardSwitcher({cardsDataInject}) {
    const [activeCard, setActiveCard] = useState(0);

    const cards = cardsDataInject;
    const handleNext = () => {
        setActiveCard((prev) => (prev + 1) % cards.length);
    };

    return (
        <div className="flex justify-left mt-10 h-170 ml-20">
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeCard} // Cambia chiave per riavviare l'animazione
                    initial={{ opacity: 0, x: 100 }} // Parte invisibile e spostata a destra
                    animate={{ opacity: 1, x: 0 }} // Appare con fade-in e scorrimento
                    exit={{ opacity: 0, x: -100 }} // Esce verso sinistra
                    transition={{ duration: 0.5 }} // Durata dell'animazione
                    className="card-gestiamoci flex flex-col justify-center items-center rounded-lg bg-gray-800 p-6 shadow-lg w-80"
                >
                    {cards[activeCard].img && (
                        <img className="card-image-gestiamoci mt-2 rounded-lg w-full" src={cards[activeCard].img} alt="immagine-card" />
                    )}
                    <h1 className="text-white text-center text-2xl font-semibold mt-2">{cards[activeCard].title}</h1>
                        <p
                        className="text-white text-left mb-2 mt-2 font-medium"
                        dangerouslySetInnerHTML={{
                            __html: cards[activeCard].content.replace(/\n/g, "<br />"),
                        }}
                    />
                    <button
                        onClick={handleNext}
                        className="mt-4 bg-gradient-to-br from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-lg transition hover:from-purple-600 hover:to-pink-600"
                    >
                        Avanti
                    </button>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}