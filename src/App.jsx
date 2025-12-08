import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import DiseaseInfo from "./DiseaseInfo";
import diseaseData from "./diseaseData";

export default function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      setResult(null);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  const handlePredict = () => {
    if (!image) return;
    setLoading(true);
    setTimeout(() => {
      setResult({ label: "Black spot", confidence: 0.80});
      setLoading(false);
    }, 3000);
  };

  const reset = () => {
    setImage(null);
    setPreview(null);
    setResult(null);
  };

  return (
    <div 
      className="min-h-screen relative overflow-hidden flex items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 30%, #a7f3d0 60%, #6ee7b7 100%)",
      }}
    >
     
      <div className="relative z-10 text-center px-6 max-w-5xl">
  
      {/* Your original huge beautiful title stays below */}
  <h1 className="text-7xl md:text-9xl font-black text-emerald-900 drop-shadow-2xl mb-2">
   🪴Plant Disease Detection🪴
  </h1>
  <h2 className="text-6xl md:text-8xl font-black text-emerald-700 drop-shadow-2xl -mt-6 mb-16">
    
  </h2>

  {/* Optional tagline (you can remove if you want) */}
  <p className="text-xl md:text-2xl text-emerald-800 font-medium opacity-90 mb-12">
    "Hey plant parent! Let’s check if your green buddy is feeling okay🔍."
  </p>

        {!preview ? (
          <div {...getRootProps()} className="max-w-2xl mx-auto cursor-pointer group">
            <input {...getInputProps()} />
            <div className={`bg-white/85 backdrop-blur-xl border-4 border-emerald-300 rounded-3xl p-16 transition-all duration-300 group-hover:bg-white/95 group-hover:scale-105 group-hover:shadow-2xl ${isDragActive ? 'border-emerald-500 shadow-emerald-400/50' : ''}`}>
              <div className="text-9xl mb-6">Leaf</div>
              <p className="text-emerald-900 text-4xl md:text-5xl font-bold mb-4">
                Drag & Drop or Choose File
              </p>
              <p className="text-emerald-700 text-xl">
                Upload a clear photo of your plant leaf
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-10 max-w-3xl mx-auto">
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-emerald-300">
              <img src={preview} alt="Leaf" className="w-full max-h-96 object-cover" />
            </div>

            <button
              onClick={handlePredict}
              disabled={loading}
              className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-black text-4xl py-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-all disabled:opacity-70"
            >
              {loading ? "Analyzing Leaf..." : "Diagnose Now – Free!"}
            </button>

            <button onClick={reset} className="text-emerald-700 hover:text-emerald-900 underline text-lg">
              Choose another photo
            </button>
          </div>
        )}

        {result && !loading && (
          <div className="mt-20">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-16 border border-emerald-300 shadow-2xl">
              <h3 className="text-5xl md:text-6xl font-black text-emerald-900 mb-6">
                {result.label}
              </h3>
              <div className="text-9xl font-black text-emerald-600 mb-10">
                {(result.confidence * 100).toFixed(0)}%
              </div>
              <button
                onClick={() => setShowModal(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-black text-4xl py-10 px-20 rounded-3xl shadow-2xl transform hover:scale-105 transition"
              >
                View Treatment
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal stays the same */}
      {showModal && result && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-screen overflow-y-auto p-10">
            <button onClick={() => setShowModal(false)} className="float-right text-5xl text-gray-500 hover:text-gray-800">
              ×
            </button>
            <DiseaseInfo data={{ name: result.label, ...diseaseData[result.label] }} />
          </div>
        </div>
      )}
    </div>
  );
}
