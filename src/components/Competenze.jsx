import Navbar from "./Navbar"
import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Competenze.css"
import Spline from '@splinetool/react-spline';
import { Link } from "react-router-dom"; // Per la navigazione tra le pagine
import 'boxicons';
export default function Competenze(){
    return(
        <>
            <Navbar></Navbar>
            <Main></Main>
        </>
    )
}
function Main(){
  return(
    <>
        <Titles></Titles>
      <div className="brain">
        <Spline scene="https://prod.spline.design/pUl1x3x16nrcYn3i/scene.splinecode" />
      </div>

    </>
  )
}

//! funzione gestione sezioni con titolo
function Titles(){
  const title = ["Soft Skill", "Linguaggi Web (Hard Skills)", "Altre (Hard Skills)"]
  const componenti = [<SoftSkillText />, <HardSkillLingu/>, <HardSkillAltre/>];
  const [indice, setIndice] = useState(0);
  const [titolo, setTitolo] = useState(0);
  const precedente = () => {
    setIndice((prevIndice) => (prevIndice === 0 ? componenti.length - 1  : prevIndice - 1));
    setTitolo((prevIndice) => (prevIndice === 0 ? title.length - 1 : prevIndice -1))
  };
  // Funzione per andare al componente successivo
  const successivo = () => {
    setIndice((prevIndice) => (prevIndice === componenti.length - 1 ? 0 : prevIndice + 1));
    setTitolo((prevIndice) => (prevIndice === title.length - 1 ? 0 : prevIndice + 1));
  };
  return(
    <>
      <div className="flex justify-center items-center space-x-4">
        <motion.div
        initial={{y:-100, opacity: 0}}
        animate={{y:0, opacity:1}}
        transition={{duration:1, ease:"easeIn"}}
        className="flex items-center space-x-2"
        >
          <i onClick={precedente} className='bx bxs-chevron-left text-white text-5xl mt-7'></i>
          <h1 className="mt-8 relative text-5xl font-bold text-white pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
            {title[titolo]}
          </h1>
          <i onClick={successivo} className='bx bxs-chevron-right text-white text-5xl mt-7'></i>
        </motion.div>
      </div>
      {componenti[indice]}
    </>
  )
}

//? SEZIONE SOFTSKILL
function SoftSkillText (){
  return(
        <div className="flex justify-between">
        <motion.div
        initial={{x:-100, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, ease:"easeIn"}}
        >
          <div className="self-start right-skill flex flex-col justify-center ml-10">
            <h2 className="mt-2 mb-10 w-100 relative text-3xl font-bold text-white pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
              da Tecnico Informatico</h2>
            <div>
              <h1 className="text-white text-2xl font-semibold ">Problem solving</h1>
              <ul className="text-white mt-2 list-disc">
                <li>Diagnosi e risoluzione di problemi software e hardware su PC desktop,<br/> laptop e periferiche.</li>
                <li> Abilità nell'individuare soluzioni alternative o innovative a problemi complessi,<br/> mantenendo una visione d'insieme e la resilienza sotto pressione.</li>
                <li>Capacità di intervenire in situazioni di crisi, come guasti improvvisi,<br/>  riducendo al minimo i disagi e ripristinando rapidamente il servizio</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl font-semibold mt-15">Organizzazione e Gestione del Tempo</h1>
              <ul className="text-white mt-2 list-disc">
                <li>Gestione ottimale del carico di lavoro per rispettare le scadenze,<br/> anche in ambienti ad alta pressione, senza compromettere la qualità.</li>
                <li>Pianificazione delle attività di manutenzione e aggiornamento.</li>
                <li>Capacità di lavorare sotto pressione e rispettare le scadenze.</li>
              </ul>
            </div>
            <div>
              <h1 className="text-white text-2xl font-semibold mt-15">Capacità di Relazione con i Clienti</h1>
              <ul className="text-white mt-2 list-disc">
                <li>Formazione e supporto agli utenti sull’utilizzo di software, hardware e nuove tecnologie.</li>
                <li>Gestione di ticket di assistenza e problem solving con approccio orientato al cliente.</li>
                <li>Capacità di lavorare in team e collaborare con reparti interni ed esterni.</li>
              </ul>
            </div>
          </div>
    	  </motion.div>
        <motion.div
        initial={{x:100, opacity: 0}}
        animate={{x:0, opacity:1}}
        transition={{duration:1, ease:"easeIn"}}
        >
          <div className="mr-10">
            <div className="flex justify-end">
              <h2 className="mt-2 w-100 relative text-right text-3xl font-bold text-white pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
              da web-developer</h2>
            </div>
            <div className="text-right mt-0">
              <h1 className="text-white text-2xl font-semibold mt-15">Problem Solving</h1>
              <ul className="text-white mt-2">
                <li><span className="font-extrabold">∙</span> Abilità avanzate nell’individuare e correggere bug nel codice.</li>
                <li><span className="font-extrabold">∙</span> Capacità di identificare e risolvere problemi legati alle performance <br/> dei siti o delle applicazioni, migliorando la velocità di caricamento e l’esperienza utente.</li>
                <li><span className="font-extrabold">∙</span> Precisione nella documentazione delle attività e dei processi IT.</li>
              </ul>
            </div>
            <div className="text-right mt-10">
              <h1 className="text-white text-2xl font-semibold mt-15">Organizzazione e Gestione del Tempo</h1>
              <ul className="text-white mt-2">
                <li><span className="font-extrabold">∙</span> Abilità di suddividere un progetto complesso in parti più piccole e gestibili,<br/>  ottimizzando il flusso di lavoro e la collaborazione con altri membri del team.</li>
                <li><span className="font-extrabold">∙</span> Capacità nell'utilizzo di applicativi di gestione progetto come (asana).</li>
                <li><span className="font-extrabold">∙</span> Capacità di rispettare le tempistiche, gestendo il tempo in modo strategico<br/> per completare i progetti senza sacrificare la qualità del codice.</li>
              </ul>
            </div>
            <div className="text-right">
              <h1 className="text-white text-2xl font-semibold mt-10">Capacità di Relazione con i Clienti</h1>
              <ul className="text-white mt-2">
                <li><span className="font-extrabold">∙</span> Abilità di comprendere i requisiti del cliente e tradurli in soluzioni web funzionali ed esteticamente gradevoli.</li>
                <li><span className="font-extrabold">∙</span> Essere in grado di spiegare concetti tecnici complessi in modo comprensibile per il cliente, facilitando decisioni informate.</li>
                <li><span className="font-extrabold">∙</span> Capacità di ricevere e integrare il feedback dei clienti durante il processo di sviluppo,<br/> migliorando continuamente il prodotto finale in base alle necessità del cliente.</li>
              </ul>
            </div>
          </div>
        </motion.div>
    </div>
  )
}

//? SEZIONE HARDSKILL 
//* hard skill linguaggi di programmazione web
function HardSkillLingu(){
  return(
    <>
    <div className="flex flex-col justify-center items-center mt-10 ">
      <div className="flex justify-between w-250">
            <div className="">
                <CodeLan img="devicon-html5-plain-wordmark colored" position={"left"} level={5} ></CodeLan>
            </div>
          <div className="">
              <CodeLan img="devicon-python-plain-wordmark colored" position={"right"} level={3} ></CodeLan>
          </div>
      </div>
      <div className="flex justify-between w-300 mt-5">
          <div className="">
            <CodeLan img="devicon-css3-plain-wordmark colored" position={"left"} level={5} ></CodeLan>
          </div>
          <div className="">
            <CodeLan img="devicon-javascript-plain colored" position={"right"} level={5} ></CodeLan>
          </div>
      </div>
      <div className="flex justify-between w-320 mt-5">
          <div className="">
            <CodeLan img="devicon-react-original-wordmark colored" position={"left"} level={2} ></CodeLan>
          </div>
          <div className="">
            <CodeLan img="devicon-tailwindcss-plain-wordmark colored" position={"right"} level={3} ></CodeLan>
          </div>
      </div>
      <div className="flex justify-between w-300 mt-5">
          <div className="">
            <CodeLan img="devicon-nodejs-plain-wordmark colored" position={"left"} level={3} ></CodeLan>
          </div>
          <div className="">
            <CodeLan img="devicon-php-plain colored" position={"right"} level={5} ></CodeLan>
          </div>
      </div>
      <div className="flex justify-between w-200">
          <div className="">
            <CodeLan img="devicon-mysql-plain-wordmark colored" position={"left"} level={5} ></CodeLan>
          </div>
          <div className="">
            <CodeLan img="devicon-figma-plain colored" position={"right"} level={2} ></CodeLan>
          </div>
      </div>
    </div>
    </>
  )
}
//* funzione per creare la card dei linguaggi di programmazione
function CodeLan({ img, level, position}) {
  let circles = [];
  for (let i = 0; i < level; i++) {
    circles.push(<div key={i} className="ml-2 w-2 h-2 bg-white rounded-full"></div>);
  }
  let index = circles.length;
  for (index; index < 5; index++) {
     circles.push(<div key={index} className="ml-2 w-2 h-2 border-1 border-white rounded-full"></div>);
  }
  if(position == "left"){
    return (
      <motion.div
      initial={{x:-100, opacity: 0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1, ease:"easeIn"}}
      >
        <div className="flex flex-col items-center justify-center w-50">
          <i className={`${img} text-8xl`}></i>
          <div className="level mt-2.5 flex items-center justify-center">
            <p className="text-white text-sm">Livello:</p>
            {circles}
          </div>
        </div>
      </motion.div>
    );
  }
  else{
    return (
      <motion.div
      initial={{x:100, opacity: 0}}
      animate={{x:0, opacity:1}}
      transition={{duration:1, ease:"easeIn"}}
      >
        <div className="flex flex-col items-center justify-center w-50">
          <i className={`${img} text-8xl`}></i>
          <div className="level mt-2.5 flex items-center justify-center">
            <p className="text-white text-sm">Livello:</p>
            {circles}
          </div>
        </div>
      </motion.div>
    );
  }
}

//* altre hard skill

function HardSkillAltre (){
  return (
    <>
      <div className="flex flex-col mt-5">
          <div className="flex justify-between ml-5 mr-5">
            <div className="">
              <div className="w-160 p-6 space-y-4 text-left">
                <h1 className="text-white font-semibold relative text-3xl font-bol pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
                  Aggiornamento servizi e software Vpn
                  </h1>
                <p className="text-white font-normal">Ho gestito l'aggiornamento del software VPN su 300 dispositivi utilizzati dagli operatori fuori sede per l'accesso alle cartelle di rete. L'attività ha incluso la sostituzione del certificato con quello nuovo, il monitoraggio dello stato di aggiornamento e l'organizzazione dei dispositivi in cluster per un controllo più efficace del processo.</p>
              </div>
            </div>
            <div className="">
              <div className="w-150 p-6 space-y-4 text-right">
                <h1 className="text-white font-semibold relative text-3xl font-bol pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
                  Aggiornamento software antivirus
                  </h1>
                <p className="text-white font-normal">Ho gestito l'aggiornamento dell'antivirus su un parco macchine di 600 dispositivi, occupandomi della disinstallazione del vecchio software e dell'installazione del nuovo. Ho monitorato lo stato di aggiornamento, risolto eventuali errori e garantito un processo efficiente e senza interruzioni.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between ml-5 mr-5">
            <div className="">
              <div className="w-150 mt-10 p-6 space-y-4">
                <h1 className="text-white font-semibold relative text-3xl font-bol pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
                  Configurazione visori Meta Quest
                  </h1>
                <p className="text-white font-normal">Mi sono occupato della configurazione dei visori Meta Quest 3 per l'utilizzo in sessioni di formazione destinate ai nuovi assunti nel settore del controllo sicurezza sul lavoro. Ho gestito l'installazione delle applicazioni necessarie, la configurazione delle impostazioni personalizzate, garantendo un'esperienza di apprendimento coinvolgente e interattiva.</p>
              </div>
            </div>
            <div className="">
              <div className="w-160 mt-10 p-6 space-y-4 text-right">
                  <h1 className="text-white font-semibold relative text-3xl font-bol pb-2 after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-blue-500 after:via-purple-500 after:to-pink-500">
                  Script per Installazione nuovi PC
                  </h1>
                <p className="text-white font-normal">Ho sviluppato uno script eseguibile che automatizza l'installazione e la configurazione iniziale dei nuovi PC, comprendendo l'installazione dell'antivirus, del software VPN e del certificato, la criptazione del disco fisso e l'installazione dei driver necessari. Questo script ha notevolmente velocizzato il processo di configurazione e deployment dei nuovi PC, sia fissi che portatili, migliorando l'efficienza complessiva e riducendo i tempi di setup per ogni dispositivo.</p>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}