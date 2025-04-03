import Navbar from "./Navbar";
import {useState} from 'react';
import { SyncLoader } from 'react-spinners';
import Spline from '@splinetool/react-spline';

export default function Chisono(){
  const [loading, setLoading] = useState(true);
    return(
        <>
            {loading && (
                <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
                    <SyncLoader color="#ffffff" />
                </div>
            )}
            <div className={`${loading ? 'hidden' : 'block'}`}>
                <Navbar></Navbar>
                <ChiSonoSpline setLoading={setLoading}></ChiSonoSpline>
            </div>
        </>
    )
}
function ChiSonoSpline({ setLoading }) {
  return (
    <Spline className="fixed top-0 left-0 -z-1 w-full h-auto" scene="https://prod.spline.design/QeRFT8yuu5sRQmAf/scene.splinecode" onLoad={() => setLoading(false)}/>
  );
}