"use client";

import { useState, useRef, useEffect } from "react";
import { Pill, AlertTriangle, Layers, FileText, ChevronRight, RotateCcw, ThumbsUp, ThumbsDown, Mic } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────
type Message = {
  id: string;
  role: "bot" | "user";
  text: string;
  urgency?: "normal" | "warning" | "danger";
};

type Category = {
  id: string;
  label: string;
  icon: React.ElementType;
  color: string;
  bg: string;
  example: string;
};

const CATEGORIES: Category[] = [
  {
    id: "DRUG_INTERACTION",
    label: "Interactions médicamenteuses",
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-50 border-orange-200 hover:bg-orange-100",
    example: "Ex : Xarelto et Aspirine",
  },
  {
    id: "CRUSHABLE_TABLET",
    label: "Écraser / Broyer un comprimé",
    icon: Layers,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-200 hover:bg-blue-100",
    example: "Ex : Puis-je écraser le Doliprane ?",
  },
  {
    id: "GALENIC_FORM",
    label: "Formes galéniques",
    icon: Pill,
    color: "text-purple-600",
    bg: "bg-purple-50 border-purple-200 hover:bg-purple-100",
    example: "Ex : Différence gélule / comprimé",
  },
  {
    id: "PATIENT_NOTICE",
    label: "Notice patient",
    icon: FileText,
    color: "text-green-600",
    bg: "bg-green-50 border-green-200 hover:bg-green-100",
    example: "Ex : Notice du Metformine",
  },
];

const WELCOME_MSG: Message = {
  id: "welcome",
  role: "bot",
  text: "Bonjour ! Je suis PharmaBot, votre assistant médicamenteux. Choisissez une catégorie ou tapez votre question directement.",
};

const URGENCY_STYLE = {
  normal: "bg-white border-gray-100",
  warning: "bg-amber-50 border-amber-200",
  danger: "bg-red-50 border-red-200",
};

// ─── Quick suggestion chips ────────────────────────────────────────────────
const SUGGESTIONS = [
  "Puis-je écraser le Xarelto ?",
  "Interactions Warfarine + Aspirine",
  "Notice du Doliprane",
  "Différence gélule / comprimé",
];

export default function KioskPage() {
  const [messages, setMessages] = useState<Message[]>([WELCOME_MSG]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [idleTimer, setIdleTimer] = useState(0);
  const [showIdle, setShowIdle] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Idle detection (60s sans interaction → invite au reset)
  useEffect(() => {
    const timer = setInterval(() => {
      setIdleTimer((t) => {
        if (t >= 60) {
          setShowIdle(true);
          return 0;
        }
        return t + 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function resetIdle() {
    setIdleTimer(0);
    setShowIdle(false);
  }

  async function sendMessage(text: string) {
    if (!text.trim()) return;
    resetIdle();

    const userMsg: Message = { id: Date.now().toString(), role: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: text, category: selectedCategory }),
      });
      const data = await res.json();
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: "bot",
        text: data.answer,
        urgency: data.urgency ?? "normal",
      };
      setMessages((prev) => [...prev, botMsg]);

      if (data.disclaimer) {
        const disclaimer: Message = {
          id: (Date.now() + 2).toString(),
          role: "bot",
          text: `⚠️ ${data.disclaimer}`,
          urgency: "warning",
        };
        setMessages((prev) => [...prev, disclaimer]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), role: "bot", text: "Une erreur est survenue. Veuillez réessayer ou appeler votre pharmacien." },
      ]);
    } finally {
      setLoading(false);
      setSelectedCategory(null);
    }
  }

  function handleReset() {
    setMessages([WELCOME_MSG]);
    setInput("");
    setSelectedCategory(null);
    setShowIdle(false);
    resetIdle();
    inputRef.current?.focus();
  }

  function handleCategorySelect(cat: Category) {
    setSelectedCategory(cat.id);
    resetIdle();
    const botMsg: Message = {
      id: Date.now().toString(),
      role: "bot",
      text: `Vous avez sélectionné « ${cat.label} ». ${cat.example} — posez votre question ci-dessous.`,
    };
    setMessages((prev) => [...prev, botMsg]);
    inputRef.current?.focus();
  }

  const hasConversation = messages.length > 1;

  return (
    <div className="kiosk-mode min-h-screen bg-gradient-to-b from-blue-700 to-blue-900 flex flex-col items-center justify-start p-4 sm:p-8">
      {/* Idle overlay */}
      {showIdle && (
        <div className="fixed inset-0 z-50 bg-black/70 flex flex-col items-center justify-center gap-6">
          <div className="bg-white rounded-3xl p-10 text-center max-w-sm mx-4 shadow-2xl">
            <Pill className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Toujours là ?</h2>
            <p className="text-gray-600 mb-6">La session va se réinitialiser pour le prochain patient.</p>
            <div className="flex gap-4">
              <button
                onClick={resetIdle}
                className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 active:scale-95 transition-transform"
              >
                Continuer
              </button>
              <button
                onClick={handleReset}
                className="flex-1 border-2 border-gray-200 text-gray-600 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 active:scale-95 transition-transform"
              >
                Nouvelle session
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
            <Pill className="w-7 h-7 text-white" />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl leading-none">PharmaBot</h1>
            <p className="text-blue-200 text-xs mt-0.5">Assistant médicamenteux</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span className="text-blue-200 text-xs">En ligne</span>
          {hasConversation && (
            <button
              onClick={handleReset}
              className="ml-3 flex items-center gap-1.5 bg-white/10 text-white text-xs px-3 py-2 rounded-xl hover:bg-white/20 active:scale-95 transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Nouvelle session
            </button>
          )}
        </div>
      </div>

      {/* Main card */}
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col" style={{ minHeight: "70vh" }}>

        {/* Chat area */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50" style={{ maxHeight: "55vh" }}>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
            >
              {msg.role === "bot" && (
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                  <Pill className="w-4 h-4 text-blue-600" />
                </div>
              )}
              <div
                className={`max-w-[78%] px-5 py-4 rounded-2xl text-sm leading-relaxed border shadow-sm ${
                  msg.role === "user"
                    ? "bg-blue-600 text-white rounded-tr-sm border-blue-600"
                    : `${URGENCY_STYLE[msg.urgency ?? "normal"]} text-gray-800 rounded-tl-sm`
                }`}
              >
                {/* Render simple markdown bold */}
                {msg.text.split(/\*\*(.*?)\*\*/).map((part, i) =>
                  i % 2 === 1 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>
                )}
              </div>
              {msg.role === "bot" && msg.urgency !== "warning" && msg.role === "bot" && messages.indexOf(msg) === messages.length - 1 && (
                <div className="flex flex-col gap-1 ml-2 mt-1">
                  <button className="w-7 h-7 rounded-full bg-green-50 border border-green-200 flex items-center justify-center hover:bg-green-100" title="Utile">
                    <ThumbsUp className="w-3.5 h-3.5 text-green-600" />
                  </button>
                  <button className="w-7 h-7 rounded-full bg-red-50 border border-red-200 flex items-center justify-center hover:bg-red-100" title="Pas utile">
                    <ThumbsDown className="w-3.5 h-3.5 text-red-500" />
                  </button>
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Pill className="w-4 h-4 text-blue-600 animate-pulse-slow" />
              </div>
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-sm px-5 py-4 shadow-sm">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Category buttons (shown at start) */}
        {!hasConversation && (
          <div className="px-5 pt-4 pb-2 bg-white border-t border-gray-100">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">
              Choisissez une catégorie
            </p>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategorySelect(cat)}
                  className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left transition-all active:scale-95 ${cat.bg}`}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white shadow-sm flex-shrink-0`}>
                    <cat.icon className={`w-5 h-5 ${cat.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-800 leading-tight">{cat.label}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{cat.example}</div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400 ml-auto flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Suggestion chips (mid-conversation) */}
        {hasConversation && !loading && (
          <div className="px-5 py-3 bg-white flex gap-2 overflow-x-auto border-t border-gray-100">
            {SUGGESTIONS.slice(0, 3).map((s) => (
              <button
                key={s}
                onClick={() => sendMessage(s)}
                className="flex-shrink-0 bg-blue-50 text-blue-700 text-xs font-medium px-3 py-2 rounded-xl border border-blue-200 hover:bg-blue-100 active:scale-95 transition-all whitespace-nowrap"
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Input area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-2xl px-4 py-3 focus-within:border-blue-400 transition-colors">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => { setInput(e.target.value); resetIdle(); }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder="Tapez votre question…"
              className="flex-1 bg-transparent text-gray-800 text-base placeholder-gray-400 outline-none"
              disabled={loading}
              autoComplete="off"
            />
            <button
              className="w-10 h-10 rounded-xl bg-gray-200 text-gray-500 flex items-center justify-center hover:bg-gray-300 active:scale-95 transition-all flex-shrink-0"
              title="Saisie vocale (bientôt disponible)"
              disabled
            >
              <Mic className="w-4 h-4" />
            </button>
            <button
              onClick={() => sendMessage(input)}
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed active:scale-95 transition-all flex-shrink-0"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <p className="text-center text-xs text-gray-400 mt-3">
            Informations à titre indicatif — Consultez toujours votre pharmacien
          </p>
        </div>
      </div>

      {/* Bottom disclaimer */}
      <div className="mt-4 text-center text-blue-300 text-xs max-w-lg">
        PharmaBot ne remplace pas le conseil d&apos;un professionnel de santé.
        En cas d&apos;urgence, appelez le <strong className="text-white">15</strong>.
      </div>
    </div>
  );
}
