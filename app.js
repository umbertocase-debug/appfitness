import React, { useState } from 'react';
import { Dumbbell, Utensils, TrendingUp, Info, Plus, Save } from 'lucide-react';

const AestheticApp = () => {
  const [activeTab, setActiveTab] = useState('workout');
  const [activeRoutine, setActiveRoutine] = useState('A');
  const [history, setHistory] = useState({});

  // Dati dell'Allenamento
  const routines = {
    A: {
      title: "Routine A: Massa & Spessore",
      exercises: [
        { id: 'lento', name: 'Lento Avanti Manubri', sets: '3x8-10', tip: 'Spalle larghe: scendi fin sotto le orecchie.' },
        { id: 'lat', name: 'Lat Machine Presa Larga', sets: '3x10', tip: 'Tira con i gomiti, non con le mani.' },
        { id: 'panca', name: 'Panca Piana Manubri', sets: '3x10', tip: 'Focalizzati sulla contrazione del petto.' },
        { id: 'superset1', name: 'SS: Curl EZ + French Press', sets: '4x10+10', tip: 'Nessuna pausa. Esplosione pura per le braccia.' },
        { id: 'laterali', name: 'Alzate Laterali', sets: '3x15', tip: 'Mignolo verso l'alto, isola il deltoide.' },
      ]
    },
    B: {
      title: "Routine B: Ampiezza & V-Shape",
      exercises: [
        { id: 'trazioni', name: 'Trazioni o Lat Stretta', sets: '3xMax/10', tip: 'Fondamentale per la V. Tocca la sbarra col petto.' },
        { id: 'inclinata', name: 'Panca Inclinata Manubri', sets: '3x10', tip: 'Inclinazione 30°. Riempie la parte alta.' },
        { id: 'superset2', name: 'SS: Hammer Curl + Pushdown', sets: '4x12+12', tip: 'Presa a martello per allargare il braccio.' },
        { id: 'cavi', name: 'Alzate Laterali ai Cavi', sets: '3x12', tip: 'Tensione costante. Spalle a palla di cannone.' },
        { id: 'inclinato_curl', name: 'Curl Panca Inclinata 45°', sets: '2x12', tip: 'Massimo stretch per il bicipite.' },
      ]
    }
  };

  const nutritionPlan = {
    target: "2400 kcal | 125g Pro",
    meals: [
      { time: "Colazione", desc: "80g Avena + 150g Albume + Frutta" },
      { time: "Pranzo", desc: "100g Riso + 150g Pollo + 10g Olio EVO" },
      { time: "Spuntino", desc: "Banana + 20g Mandorle" },
      { time: "Cena", desc: "120g Riso + 150g Pesce/Carne + Verdura" }
    ]
  };

  const handleWeightChange = (id, val) => {
    setHistory({ ...history, [id]: val });
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20 font-sans text-slate-900">
      {/* Header Estetico */}
      <header className="bg-indigo-600 p-6 text-white shadow-lg rounded-b-3xl">
        <h1 className="text-2xl font-bold">Aesthetic Builder</h1>
        <p className="text-indigo-100 opacity-80 text-sm">Target: V-Shape & Arms Focus</p>
      </header>

      <main className="p-4 max-w-md mx-auto">
        
        {/* TAB WORKOUT */}
        {activeTab === 'workout' && (
          <div className="space-y-4">
            <div className="flex bg-white p-1 rounded-2xl shadow-sm border border-slate-200">
              <button 
                onClick={() => setActiveRoutine('A')}
                className={`flex-1 py-2 rounded-xl font-medium transition ${activeRoutine === 'A' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500'}`}
              >Routine A</button>
              <button 
                onClick={() => setActiveRoutine('B')}
                className={`flex-1 py-2 rounded-xl font-medium transition ${activeRoutine === 'B' ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500'}`}
              >Routine B</button>
            </div>

            <h2 className="text-lg font-bold px-2 mt-4 text-indigo-900">{routines[activeRoutine].title}</h2>

            {routines[activeRoutine].exercises.map((ex) => (
              <div key={ex.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-800">{ex.name}</h3>
                    <span className="text-indigo-600 text-sm font-semibold">{ex.sets}</span>
                  </div>
                  <div className="flex items-center gap-2">
                     <input 
                      type="number" 
                      placeholder="kg"
                      className="w-16 bg-slate-100 border-none rounded-lg p-2 text-center text-sm focus:ring-2 focus:ring-indigo-500"
                      onChange={(e) => handleWeightChange(ex.id, e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-indigo-50 p-3 rounded-xl border border-indigo-100">
                  <Info size={16} className="text-indigo-500 mt-1 shrink-0" />
                  <p className="text-xs text-indigo-900 italic">{ex.tip}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB NUTRITION */}
        {activeTab === 'nutrition' && (
          <div className="space-y-4 animate-in fade-in duration-500">
            <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-3xl text-white shadow-lg">
              <p className="text-sm opacity-90 uppercase tracking-widest font-bold">Target Giornaliero</p>
              <h2 className="text-3xl font-black">{nutritionPlan.target}</h2>
            </div>
            
            <div className="space-y-2">
              {nutritionPlan.meals.map((meal, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <div className="bg-emerald-100 p-3 rounded-xl text-emerald-600">
                    <Utensils size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-500 uppercase tracking-tighter">{meal.time}</h4>
                    <p className="text-slate-800 font-medium">{meal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB PROGRESS */}
        {activeTab === 'progress' && (
          <div className="text-center p-10 space-y-4">
            <div className="bg-indigo-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto text-indigo-600">
              <TrendingUp size={40} />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Pronto per il check-in?</h2>
            <p className="text-slate-500">Qui potrai caricare le tue foto ogni 15 giorni per monitorare la definizione della V addominale.</p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-bold shadow-lg">Aggiungi Foto</button>
          </div>
        )}
      </main>

      {/* Bottom Navigation (Material Style) */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 h-16 flex items-center justify-around shadow-[0_-4px_12px_rgba(0,0,0,0.05)] px-4">
        <button onClick={() => setActiveTab('workout')} className={`flex flex-col items-center gap-1 ${activeTab === 'workout' ? 'text-indigo-600' : 'text-slate-400'}`}>
          <Dumbbell size={24} />
          <span className="text-[10px] font-bold uppercase">Workout</span>
        </button>
        <button onClick={() => setActiveTab('nutrition')} className={`flex flex-col items-center gap-1 ${activeTab === 'nutrition' ? 'text-indigo-600' : 'text-slate-400'}`}>
          <Utensils size={24} />
          <span className="text-[10px] font-bold uppercase">Dieta</span>
        </button>
        <button onClick={() => setActiveTab('progress')} className={`flex flex-col items-center gap-1 ${activeTab === 'progress' ? 'text-indigo-600' : 'text-slate-400'}`}>
          <TrendingUp size={24} />
          <span className="text-[10px] font-bold uppercase">Progressi</span>
        </button>
      </nav>
    </div>
  );
};

export default AestheticApp;
