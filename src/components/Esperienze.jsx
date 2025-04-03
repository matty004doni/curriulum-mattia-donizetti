import './Esperienze.css';
import Navbar from './Navbar';
import EsperienzeArray from '/src/dbJSON/Esperienze.json';
import { useEffect, useState, useCallback } from 'react';
import { SyncLoader } from 'react-spinners';
import Spline from '@splinetool/react-spline';
import React from 'react';

export default function Esperienze() {
    const [loading, setLoading] = useState(true);

    // Funzione per gestire il caricamento
    const load = useCallback(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2200);
    }, []);

    useEffect(() => {
        load(); // Avvia il caricamento all'inizio
    }, [load]);

    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <SyncLoader color="#ffffff" />
                </div>
            )}
            <div className={`${loading ? 'hidden' : 'block'}`}>
                <Navbar />
                <div className="fixed top-0 left-0 -z-1 w-full h-auto">
                    <Rocket load={load} />
                </div>
                <div className="flex justify-center mt-20">
                    <div className="w-1/2 h-auto">
                        <ol className="relative w-500 border-s border-gray-200 dark:border-gray-700">
                            {EsperienzeArray.map((esperienza) => (
                                <Esp
                                    key={esperienza.title} 
                                    title={esperienza.title}
                                    data={esperienza.data}
                                    description={esperienza.description}
                                />
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    );
}

function Rocket({ load }) {
    return (
        <Spline 
            scene="https://prod.spline.design/dsVqt-jUPu7v6wgr/scene.splinecode"
            onLoad={() => load()} 
        />
    );
}
function FormattedText({ text }) {
    return (
        <span>
            {text.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                    {line.split(/(\*\*.*?\*\*)/g).map((part, i) => 
                        part.startsWith("**") && part.endsWith("**") ? (
                            <span key={i} className="font-semibold text-gray-300">
                                {part.replace(/\*\*/g, "")}
                            </span>
                        ) : (
                            part
                        )
                    )}
                    <br />
                </React.Fragment>
            ))}
        </span>
    );
}
function Esp({title, data, description}){
    return(                
            <li className="mb-5 ms-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg className="w-2.5 h-2.5 text-blue-500 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 className="mb-1 text-lg font-semibold text-white dark:text-white">{title}</h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{data}</time>
                <p className="text-base font-normal text-white dark:text-gray-400 w-300">
                <FormattedText text={description}></FormattedText>
                </p>
            </li>
    )
}