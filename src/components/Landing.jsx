import Spline from '@splinetool/react-spline';
import './Landing.css';
import Navbar from './Navbar';
import { useState } from "react";
import { SyncLoader } from 'react-spinners';

export default function Landing() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Navbar />
      {loading && (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <SyncLoader color="#ffffff" />
        </div>
      )}
      <div className={`${loading ? 'hidden' : 'block'}`}>
        <LandingSpline setLoading={setLoading} />
      </div>
    </>
  );
}

function LandingSpline({ setLoading }) {
  return (
    <div className="chi-sono-spline">
      <Spline 
        scene="https://prod.spline.design/t35oW8vzB0KpBlua/scene.splinecode"
        onLoad={() => setLoading(false)}  // Nasconde il loader una volta caricato
      />
    </div>
  );
}


