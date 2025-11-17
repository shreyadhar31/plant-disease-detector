import { X } from "lucide-react";

export default function DiseaseInfo({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-2xl flex items-center justify-center z-50 p-4">
      <div className="bg-zinc-900 border border-emerald-800/50 rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-4xl font-black text-emerald-400">{data.name}</h1>
            <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-xl transition">
              <X className="w-8 h-8" />
            </button>
          </div>

          <p className="text-zinc-300 text-lg leading-relaxed mb-8">{data.description}</p>

          <Section title="Symptoms" items={data.symptoms} />
          <Section title="Causes" items={data.causes} />
          <Section title="Treatment" items={data.treatment} />
          <Section title="Prevention" items={data.prevention} />
        </div>
      </div>
    </div>
  );
}

function Section({ title, items }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-emerald-400 mb-4">{title}</h2>
      <ul className="space-y-3 text-zinc-200">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-emerald-500 mt-1">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}