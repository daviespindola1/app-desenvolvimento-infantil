"use client";

import { useState } from "react";
import { CheckCircle2, Circle, ChevronDown, ChevronUp, Baby, Brain, Heart, Users } from "lucide-react";

interface Milestone {
  id: string;
  title: string;
  description: string;
  achieved: boolean;
  category: "motor" | "cognitive" | "emotional" | "social";
}

interface AgeGroup {
  age: string;
  milestones: Milestone[];
}

export default function DevelopmentMilestones() {
  const [expandedAge, setExpandedAge] = useState<string>("0-3");

  const ageGroups: AgeGroup[] = [
    {
      age: "0-3 meses",
      milestones: [
        {
          id: "m1",
          title: "Levanta a cabeça quando está de bruços",
          description: "O bebê consegue levantar a cabeça por alguns segundos quando colocado de barriga para baixo.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m2",
          title: "Segue objetos com os olhos",
          description: "Acompanha objetos em movimento com o olhar, especialmente rostos.",
          achieved: false,
          category: "cognitive",
        },
        {
          id: "m3",
          title: "Sorri em resposta a estímulos",
          description: "Sorri quando alguém fala ou sorri para ele.",
          achieved: false,
          category: "emotional",
        },
        {
          id: "m4",
          title: "Reconhece vozes familiares",
          description: "Reage de forma diferente à voz dos pais e cuidadores.",
          achieved: false,
          category: "social",
        },
      ],
    },
    {
      age: "4-6 meses",
      milestones: [
        {
          id: "m5",
          title: "Rola de barriga para cima e vice-versa",
          description: "Consegue virar o corpo sozinho.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m6",
          title: "Pega objetos com as mãos",
          description: "Alcança e segura brinquedos.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m7",
          title: "Balbucia sons",
          description: "Emite sons como 'ba-ba', 'ma-ma'.",
          achieved: false,
          category: "cognitive",
        },
        {
          id: "m8",
          title: "Ri alto",
          description: "Dá gargalhadas em resposta a brincadeiras.",
          achieved: false,
          category: "emotional",
        },
      ],
    },
    {
      age: "7-12 meses",
      milestones: [
        {
          id: "m9",
          title: "Senta sem apoio",
          description: "Consegue ficar sentado sozinho.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m10",
          title: "Engatinha",
          description: "Movimenta-se pelo chão engatinhando.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m11",
          title: "Diz primeiras palavras",
          description: "Fala 'mamã', 'papá' ou outras palavras simples.",
          achieved: false,
          category: "cognitive",
        },
        {
          id: "m12",
          title: "Demonstra ansiedade com estranhos",
          description: "Fica tímido ou chora perto de pessoas desconhecidas.",
          achieved: false,
          category: "emotional",
        },
      ],
    },
    {
      age: "1-2 anos",
      milestones: [
        {
          id: "m13",
          title: "Anda sozinho",
          description: "Caminha sem apoio.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m14",
          title: "Usa 10-20 palavras",
          description: "Vocabulário em expansão.",
          achieved: false,
          category: "cognitive",
        },
        {
          id: "m15",
          title: "Imita comportamentos",
          description: "Copia ações dos adultos.",
          achieved: false,
          category: "social",
        },
      ],
    },
    {
      age: "2-3 anos",
      milestones: [
        {
          id: "m16",
          title: "Corre e pula",
          description: "Movimentos mais coordenados.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m17",
          title: "Forma frases simples",
          description: "Combina 2-3 palavras.",
          achieved: false,
          category: "cognitive",
        },
        {
          id: "m18",
          title: "Brinca com outras crianças",
          description: "Interage em brincadeiras.",
          achieved: false,
          category: "social",
        },
      ],
    },
    {
      age: "3-5 anos",
      milestones: [
        {
          id: "m19",
          title: "Pedala triciclo",
          description: "Coordenação motora avançada.",
          achieved: false,
          category: "motor",
        },
        {
          id: "m20",
          title: "Conta histórias",
          description: "Narra eventos com sequência lógica.",
          achieved: false,
          category: "cognitive",
        },
        {
          id: "m21",
          title: "Expressa emoções complexas",
          description: "Identifica e nomeia sentimentos.",
          achieved: false,
          category: "emotional",
        },
      ],
    },
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "motor":
        return <Baby className="w-4 h-4" />;
      case "cognitive":
        return <Brain className="w-4 h-4" />;
      case "emotional":
        return <Heart className="w-4 h-4" />;
      case "social":
        return <Users className="w-4 h-4" />;
      default:
        return <Circle className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "motor":
        return "bg-blue-100 text-blue-700";
      case "cognitive":
        return "bg-purple-100 text-purple-700";
      case "emotional":
        return "bg-pink-100 text-pink-700";
      case "social":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "motor":
        return "Motor";
      case "cognitive":
        return "Cognitivo";
      case "emotional":
        return "Emocional";
      case "social":
        return "Social";
      default:
        return "";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
          <Brain className="w-7 h-7 text-purple-600" />
          Marcos do Desenvolvimento
        </h2>
        <p className="text-gray-600">
          Acompanhe o progresso do seu bebê em cada fase. Marque os marcos atingidos!
        </p>

        {/* Legenda de Categorias */}
        <div className="mt-4 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-full">
            <Baby className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">Motor</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 rounded-full">
            <Brain className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-medium text-purple-700">Cognitivo</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-pink-50 rounded-full">
            <Heart className="w-4 h-4 text-pink-600" />
            <span className="text-sm font-medium text-pink-700">Emocional</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
            <Users className="w-4 h-4 text-green-600" />
            <span className="text-sm font-medium text-green-700">Social</span>
          </div>
        </div>
      </div>

      {/* Grupos de Idade */}
      <div className="space-y-4">
        {ageGroups.map((group) => {
          const isExpanded = expandedAge === group.age;
          const achievedCount = group.milestones.filter((m) => m.achieved).length;
          const totalCount = group.milestones.length;

          return (
            <div key={group.age} className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header do Grupo */}
              <button
                onClick={() => setExpandedAge(isExpanded ? "" : group.age)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg font-bold">
                    {group.age}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">
                      {achievedCount} de {totalCount} marcos atingidos
                    </p>
                    <div className="w-48 h-2 bg-gray-200 rounded-full mt-2">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all"
                        style={{ width: `${(achievedCount / totalCount) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>

              {/* Lista de Marcos */}
              {isExpanded && (
                <div className="px-6 pb-6 space-y-3">
                  {group.milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        milestone.achieved
                          ? "bg-green-50 border-green-300"
                          : "bg-gray-50 border-gray-200 hover:border-purple-300"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => {
                            // Aqui você atualizaria o estado no banco de dados
                            milestone.achieved = !milestone.achieved;
                          }}
                          className="mt-1"
                        >
                          {milestone.achieved ? (
                            <CheckCircle2 className="w-6 h-6 text-green-600" />
                          ) : (
                            <Circle className="w-6 h-6 text-gray-400 hover:text-purple-600 transition-colors" />
                          )}
                        </button>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h4
                              className={`font-semibold ${
                                milestone.achieved ? "text-green-800" : "text-gray-800"
                              }`}
                            >
                              {milestone.title}
                            </h4>
                            <span
                              className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(
                                milestone.category
                              )}`}
                            >
                              {getCategoryIcon(milestone.category)}
                              {getCategoryLabel(milestone.category)}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Alerta Importante */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="text-yellow-600 mt-0.5">⚠️</div>
          <div>
            <h4 className="font-semibold text-yellow-800 mb-1">Importante</h4>
            <p className="text-sm text-yellow-700">
              Cada criança se desenvolve no seu próprio ritmo. Se você notar atrasos significativos ou
              tiver preocupações, consulte um pediatra.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
