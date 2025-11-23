"use client";

import { useState } from "react";
import { AlertCircle, Phone, ChevronDown, ChevronUp, Heart, Thermometer, Droplet, Wind, Zap } from "lucide-react";

interface Emergency {
  id: string;
  title: string;
  icon: any;
  color: string;
  steps: string[];
  whenToSeek: string[];
}

export default function FirstAid() {
  const [expandedId, setExpandedId] = useState<string>("");

  const emergencies: Emergency[] = [
    {
      id: "choking",
      title: "Engasgo",
      icon: Wind,
      color: "from-red-500 to-red-600",
      steps: [
        "Mantenha a calma e avalie a situação",
        "Se o bebê está tossindo, deixe-o tossir (não interfira)",
        "Se não consegue respirar: coloque o bebê de bruços no seu antebraço",
        "Dê 5 pancadas firmes nas costas, entre as escápulas",
        "Vire o bebê e faça 5 compressões no peito (2 dedos no centro do tórax)",
        "Repita até o objeto sair ou o bebê desmaiar",
        "Se desmaiar: ligue 192 e inicie RCP",
      ],
      whenToSeek: [
        "Bebê não consegue respirar",
        "Lábios ou rosto ficam azulados",
        "Bebê perde a consciência",
        "Objeto não sai após tentativas",
      ],
    },
    {
      id: "fever",
      title: "Febre",
      icon: Thermometer,
      color: "from-orange-500 to-orange-600",
      steps: [
        "Meça a temperatura (axilar, retal ou timpânica)",
        "Vista o bebê com roupas leves",
        "Mantenha o ambiente fresco e ventilado",
        "Ofereça líquidos com frequência",
        "Dê antitérmico conforme orientação médica (dose por peso)",
        "Monitore a temperatura a cada 2-3 horas",
        "Observe sinais de desidratação",
      ],
      whenToSeek: [
        "Febre acima de 38°C em bebês menores de 3 meses",
        "Febre acima de 39°C em qualquer idade",
        "Febre que dura mais de 3 dias",
        "Convulsões, manchas roxas na pele",
        "Dificuldade para respirar",
        "Bebê muito irritado ou apático",
      ],
    },
    {
      id: "fall",
      title: "Quedas",
      icon: AlertCircle,
      color: "from-yellow-500 to-yellow-600",
      steps: [
        "Mantenha a calma e não mova o bebê bruscamente",
        "Observe se há ferimentos visíveis",
        "Verifique se o bebê está consciente e responsivo",
        "Aplique gelo (envolto em pano) em inchaços",
        "Observe por 24-48 horas: sono, vômitos, comportamento",
        "Anote hora da queda e sintomas",
      ],
      whenToSeek: [
        "Perda de consciência (mesmo que breve)",
        "Vômitos repetidos",
        "Sonolência excessiva ou dificuldade para acordar",
        "Convulsões",
        "Sangramento que não para",
        "Mudança no comportamento",
        "Queda de altura superior a 1 metro",
      ],
    },
    {
      id: "seizure",
      title: "Convulsões",
      icon: Zap,
      color: "from-purple-500 to-purple-600",
      steps: [
        "Mantenha a calma e cronometre a duração",
        "Deite o bebê de lado (posição de segurança)",
        "Afaste objetos que possam machucá-lo",
        "NÃO coloque nada na boca do bebê",
        "NÃO tente segurar ou impedir os movimentos",
        "Afrouxe roupas apertadas",
        "Fique ao lado até a convulsão passar",
        "Após: deixe o bebê descansar",
      ],
      whenToSeek: [
        "Primeira convulsão na vida",
        "Convulsão dura mais de 5 minutos",
        "Convulsões repetidas",
        "Dificuldade para respirar após a convulsão",
        "Bebê não recupera consciência",
        "Ligue 192 IMEDIATAMENTE",
      ],
    },
    {
      id: "allergy",
      title: "Reações Alérgicas",
      icon: Heart,
      color: "from-pink-500 to-pink-600",
      steps: [
        "Identifique o possível alérgeno (alimento, picada, medicamento)",
        "Observe os sintomas: urticária, inchaço, coceira",
        "Lave a área afetada com água",
        "Aplique compressas frias",
        "Se tiver antialérgico prescrito, administre",
        "Monitore a respiração",
      ],
      whenToSeek: [
        "Inchaço na face, lábios ou língua",
        "Dificuldade para respirar ou engolir",
        "Chiado no peito",
        "Tontura ou desmaio",
        "Urticária generalizada",
        "Sinais de anafilaxia: ligue 192 IMEDIATAMENTE",
      ],
    },
    {
      id: "drowning",
      title: "Afogamento",
      icon: Droplet,
      color: "from-blue-500 to-blue-600",
      steps: [
        "Retire o bebê da água imediatamente",
        "Ligue 192",
        "Verifique se está respirando",
        "Se NÃO respira: inicie RCP imediatamente",
        "RCP: 30 compressões + 2 ventilações (ou 5 ventilações iniciais em bebês)",
        "Continue até ajuda chegar",
        "Mesmo se o bebê parecer bem, procure atendimento médico",
      ],
      whenToSeek: [
        "SEMPRE procure atendimento após afogamento",
        "Mesmo que o bebê pareça recuperado",
        "Pode haver complicações tardias (afogamento secundário)",
        "Ligue 192 IMEDIATAMENTE",
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header de Emergência */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-white/20 p-3 rounded-xl">
            <AlertCircle className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Primeiros Socorros</h2>
            <p className="text-red-100">Guia rápido para emergências</p>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mt-4">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <div>
              <p className="font-semibold">Emergência: 192 (SAMU)</p>
              <p className="text-sm text-red-100">Tenha sempre este número à mão</p>
            </div>
          </div>
        </div>
      </div>

      {/* Lista de Emergências */}
      <div className="space-y-4">
        {emergencies.map((emergency) => {
          const Icon = emergency.icon;
          const isExpanded = expandedId === emergency.id;

          return (
            <div key={emergency.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header */}
              <button
                onClick={() => setExpandedId(isExpanded ? "" : emergency.id)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className={`bg-gradient-to-br ${emergency.color} p-3 rounded-xl text-white`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800">{emergency.title}</h3>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Conteúdo Expandido */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-4">
                  {/* Passos */}
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                      <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
                        O que fazer
                      </span>
                    </h4>
                    <ol className="space-y-2">
                      {emergency.steps.map((step, index) => (
                        <li key={index} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </span>
                          <span className="text-gray-700">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Quando Procurar Ajuda */}
                  <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-lg">
                    <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Quando procurar atendimento médico
                    </h4>
                    <ul className="space-y-1">
                      {emergency.whenToSeek.map((item, index) => (
                        <li key={index} className="text-sm text-red-700 flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Aviso Importante */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="text-yellow-600 mt-0.5">⚠️</div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Aviso Importante</h4>
            <p className="text-sm text-yellow-700">
              Este guia é apenas informativo. Em caso de emergência real, sempre ligue para o SAMU (192)
              ou procure atendimento médico imediato. Considere fazer um curso de primeiros socorros
              pediátricos.
            </p>
          </div>
        </div>
      </div>

      {/* Números de Emergência */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h3 className="font-bold text-gray-800 mb-4">Números Importantes</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-3 p-3 bg-red-50 rounded-lg">
            <Phone className="w-5 h-5 text-red-600" />
            <div>
              <p className="font-semibold text-gray-800">SAMU</p>
              <p className="text-2xl font-bold text-red-600">192</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
            <Phone className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-semibold text-gray-800">Bombeiros</p>
              <p className="text-2xl font-bold text-blue-600">193</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
            <Phone className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-semibold text-gray-800">Centro de Intoxicações</p>
              <p className="text-2xl font-bold text-green-600">0800 722 6001</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
            <Phone className="w-5 h-5 text-purple-600" />
            <div>
              <p className="font-semibold text-gray-800">Disque Saúde</p>
              <p className="text-2xl font-bold text-purple-600">136</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
