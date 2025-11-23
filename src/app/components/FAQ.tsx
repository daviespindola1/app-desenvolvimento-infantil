"use client";

import { useState } from "react";
import { Search, ChevronDown, ChevronUp, BookOpen, Baby, Moon, Utensils, Thermometer, Brain, Heart } from "lucide-react";

interface Question {
  id: string;
  question: string;
  answer: string;
  category: string;
  icon: any;
}

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedId, setExpandedId] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas", icon: BookOpen },
    { id: "sleep", label: "Sono", icon: Moon },
    { id: "feeding", label: "Alimentação", icon: Utensils },
    { id: "health", label: "Saúde", icon: Thermometer },
    { id: "development", label: "Desenvolvimento", icon: Brain },
    { id: "behavior", label: "Comportamento", icon: Heart },
  ];

  const questions: Question[] = [
    {
      id: "q1",
      question: "Meu bebê não dorme bem, o que faço?",
      answer:
        "Estabeleça uma rotina consistente: banho morno, ambiente escuro e silencioso, temperatura agradável (18-21°C). Evite estímulos antes de dormir. Bebês até 3 meses acordam frequentemente para mamar - isso é normal. Após 6 meses, você pode começar a ensinar o bebê a adormecer sozinho gradualmente. Se o problema persistir, consulte um pediatra para descartar cólicas, refluxo ou outras causas.",
      category: "sleep",
      icon: Moon,
    },
    {
      id: "q2",
      question: "Que tipo de médico cuida de bebê?",
      answer:
        "O pediatra é o médico especializado em crianças de 0 a 18 anos. Ele acompanha o crescimento, desenvolvimento, vacinas e trata doenças infantis. Recomenda-se consultas frequentes no primeiro ano: mensal até 6 meses, depois a cada 2-3 meses. Outros especialistas podem ser necessários: neonatologista (recém-nascidos prematuros), gastropediatra (problemas digestivos), neuropediatra (desenvolvimento neurológico).",
      category: "health",
      icon: Thermometer,
    },
    {
      id: "q3",
      question: "Quando devo me preocupar com febre?",
      answer:
        "Febre acima de 38°C em bebês menores de 3 meses é sempre motivo para procurar atendimento imediato. Em bebês maiores, observe: febre acima de 39°C, duração superior a 3 dias, convulsões, manchas roxas na pele, dificuldade para respirar, bebê muito irritado ou apático. Febre é uma defesa do corpo, mas precisa ser monitorada. Mantenha o bebê hidratado e use antitérmico conforme orientação médica.",
      category: "health",
      icon: Thermometer,
    },
    {
      id: "q4",
      question: "O que causa atraso na fala?",
      answer:
        "Múltiplos fatores podem causar atraso: problemas auditivos (mais comum), falta de estímulo, prematuridade, questões neurológicas, autismo. Sinais de alerta: não balbucia aos 12 meses, não fala palavras aos 18 meses, não forma frases aos 2 anos. Estimule conversando muito com o bebê, lendo livros, cantando. Evite excesso de telas. Se houver preocupação, procure avaliação com fonoaudiólogo e pediatra.",
      category: "development",
      icon: Brain,
    },
    {
      id: "q5",
      question: "Como introduzir alimentos sólidos?",
      answer:
        "A introdução alimentar deve começar aos 6 meses, mantendo o leite materno. Ofereça alimentos amassados ou em pedaços (BLW - Baby Led Weaning). Comece com frutas, legumes, cereais. Introduza um alimento novo por vez (2-3 dias) para identificar alergias. Evite: mel (antes de 1 ano), sal, açúcar, alimentos ultraprocessados. Deixe o bebê explorar texturas e sabores. Não force a comer. Consulte um pediatra ou nutricionista para orientação personalizada.",
      category: "feeding",
      icon: Utensils,
    },
    {
      id: "q6",
      question: "É normal o bebê ter cólicas?",
      answer:
        "Sim, cólicas são comuns nos primeiros 3-4 meses. Sintomas: choro intenso (geralmente à tarde/noite), bebê encolhe as pernas, barriga endurecida. Causas: imaturidade intestinal, gases, intolerâncias. Ajuda: massagem na barriga (sentido horário), compressa morna, posição de bruços no colo, movimentos de bicicleta com as pernas. Se amamenta, observe sua alimentação (laticínios, cafeína, alimentos que causam gases). Consulte o pediatra se o choro for muito intenso ou persistente.",
      category: "health",
      icon: Thermometer,
    },
    {
      id: "q7",
      question: "Quando o bebê deve sentar sozinho?",
      answer:
        "A maioria dos bebês senta sem apoio entre 6-8 meses. Marcos anteriores: 4 meses (sustenta cabeça), 5-6 meses (senta com apoio). Cada bebê tem seu ritmo. Estimule: tempo de bruços, brinquedos coloridos, interação. Sinais de alerta: não sustenta cabeça aos 4 meses, não tenta sentar aos 9 meses, desenvolvimento muito assimétrico. Evite usar andador (atrasa desenvolvimento e é perigoso). Se houver preocupação, consulte pediatra ou fisioterapeuta.",
      category: "development",
      icon: Brain,
    },
    {
      id: "q8",
      question: "Como lidar com birras?",
      answer:
        "Birras são normais entre 1-4 anos (pico aos 2 anos). A criança está aprendendo a lidar com frustrações. Como agir: mantenha a calma, não ceda à birra, ofereça escolhas limitadas ('quer a blusa azul ou vermelha?'), valide sentimentos ('sei que você está bravo'), estabeleça limites claros. Previna: rotina consistente, evite fome/sono, dê atenção positiva. Após a birra, converse sobre sentimentos. Se as birras forem muito intensas ou frequentes, considere orientação de psicólogo infantil.",
      category: "behavior",
      icon: Heart,
    },
    {
      id: "q9",
      question: "Quanto tempo de tela é seguro?",
      answer:
        "Recomendações da Academia Americana de Pediatria: 0-18 meses: ZERO tela (exceto videochamadas). 18-24 meses: apenas conteúdo educativo de alta qualidade, COM adulto. 2-5 anos: máximo 1 hora/dia de conteúdo apropriado, COM adulto. Riscos do excesso: atraso na fala, problemas de atenção, obesidade, dificuldade de sono. Priorize: brincadeiras livres, interação humana, atividades ao ar livre, leitura. Telas não devem ser usadas como 'babá eletrônica'.",
      category: "development",
      icon: Brain,
    },
    {
      id: "q10",
      question: "Como saber se meu bebê está com fome ou sono?",
      answer:
        "Sinais de fome: leva mão à boca, vira cabeça procurando seio, chupa lábios, fica agitado, chora (último sinal). Sinais de sono: boceja, esfrega olhos, fica irritado, olhar 'vidrado', perde interesse em brincar. Bebês pequenos confundem fome e sono. Dica: ofereça mama/mamadeira primeiro. Se recusar, pode ser sono. Estabeleça rotina para facilitar identificação. Com o tempo, você conhecerá os sinais específicos do seu bebê.",
      category: "feeding",
      icon: Utensils,
    },
  ];

  const filteredQuestions = questions.filter((q) => {
    const matchesSearch =
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || q.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <BookOpen className="w-7 h-7 text-purple-600" />
          Perguntas Frequentes
        </h2>
        <p className="text-gray-600 mb-4">
          Respostas validadas por especialistas para suas principais dúvidas
        </p>

        {/* Busca */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar dúvidas..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition-all"
          />
        </div>

        {/* Filtro de Categorias */}
        <div className="flex gap-2 overflow-x-auto mt-4 pb-2 scrollbar-hide">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? "bg-purple-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Lista de Perguntas */}
      <div className="space-y-3">
        {filteredQuestions.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Nenhuma pergunta encontrada
            </h3>
            <p className="text-gray-600">
              Tente buscar com outras palavras ou selecione outra categoria
            </p>
          </div>
        ) : (
          filteredQuestions.map((q) => {
            const isExpanded = expandedId === q.id;
            const Icon = q.icon;

            return (
              <div key={q.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedId(isExpanded ? "" : q.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors text-left"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="bg-purple-100 p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-gray-800">{q.question}</h3>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0 ml-2" />
                  )}
                </button>

                {isExpanded && (
                  <div className="px-6 pb-6">
                    <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-400">
                      <p className="text-gray-700 leading-relaxed">{q.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Dica */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="text-blue-600 mt-0.5">💡</div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Não encontrou sua dúvida?</h4>
            <p className="text-sm text-blue-700">
              Em breve teremos uma comunidade onde você poderá fazer perguntas e receber respostas de
              especialistas verificados e outros pais!
            </p>
          </div>
        </div>
      </div>

      {/* Aviso */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="text-yellow-600 mt-0.5">⚠️</div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Importante</h4>
            <p className="text-sm text-yellow-700">
              As informações aqui são apenas orientativas. Sempre consulte um pediatra para diagnósticos
              e tratamentos específicos para o seu bebê.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
