"use client";

import { useState } from "react";
import { Baby, Calendar, Ruler, Weight, Edit2, Save, Camera } from "lucide-react";

interface ChildData {
  name: string;
  birthDate: string;
  weight: string;
  height: string;
  headCircumference: string;
  photo?: string;
}

export default function ChildProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [childData, setChildData] = useState<ChildData>({
    name: "",
    birthDate: "",
    weight: "",
    height: "",
    headCircumference: "",
  });

  const calculateAge = (birthDate: string) => {
    if (!birthDate) return "Não informado";
    const birth = new Date(birthDate);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - birth.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) return `${diffDays} dias`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} meses`;
    const years = Math.floor(diffDays / 365);
    const months = Math.floor((diffDays % 365) / 30);
    return `${years} ano${years > 1 ? 's' : ''} e ${months} mês${months !== 1 ? 'es' : ''}`;
  };

  const handleSave = () => {
    setIsEditing(false);
    // Aqui você salvaria no banco de dados
  };

  return (
    <div className="space-y-6">
      {/* Card Principal */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <Baby className="w-7 h-7 text-purple-600" />
            Perfil da Criança
          </h2>
          <button
            onClick={() => isEditing ? handleSave() : setIsEditing(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              isEditing
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-purple-100 hover:bg-purple-200 text-purple-700"
            }`}
          >
            {isEditing ? (
              <>
                <Save className="w-4 h-4" />
                Salvar
              </>
            ) : (
              <>
                <Edit2 className="w-4 h-4" />
                Editar
              </>
            )}
          </button>
        </div>

        {/* Foto do Bebê */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-pink-200 to-purple-200 flex items-center justify-center overflow-hidden">
              {childData.photo ? (
                <img src={childData.photo} alt="Foto do bebê" className="w-full h-full object-cover" />
              ) : (
                <Baby className="w-16 h-16 text-purple-400" />
              )}
            </div>
            {isEditing && (
              <button className="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full hover:bg-purple-700 transition-all">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Formulário */}
        <div className="space-y-4">
          {/* Nome */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Nome Completo
            </label>
            <input
              type="text"
              disabled={!isEditing}
              value={childData.name}
              onChange={(e) => setChildData({ ...childData, name: e.target.value })}
              placeholder="Digite o nome do bebê"
              className={`w-full px-4 py-3 rounded-lg border ${
                isEditing
                  ? "border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  : "border-gray-200 bg-gray-50"
              } transition-all outline-none`}
            />
          </div>

          {/* Data de Nascimento */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
              <Calendar className="w-4 h-4 text-purple-600" />
              Data de Nascimento
            </label>
            <input
              type="date"
              disabled={!isEditing}
              value={childData.birthDate}
              onChange={(e) => setChildData({ ...childData, birthDate: e.target.value })}
              className={`w-full px-4 py-3 rounded-lg border ${
                isEditing
                  ? "border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                  : "border-gray-200 bg-gray-50"
              } transition-all outline-none`}
            />
            {childData.birthDate && (
              <p className="mt-2 text-sm text-purple-600 font-medium">
                Idade: {calculateAge(childData.birthDate)}
              </p>
            )}
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Peso */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Weight className="w-4 h-4 text-purple-600" />
                Peso (kg)
              </label>
              <input
                type="number"
                step="0.1"
                disabled={!isEditing}
                value={childData.weight}
                onChange={(e) => setChildData({ ...childData, weight: e.target.value })}
                placeholder="0.0"
                className={`w-full px-4 py-3 rounded-lg border ${
                  isEditing
                    ? "border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    : "border-gray-200 bg-gray-50"
                } transition-all outline-none`}
              />
            </div>

            {/* Altura */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                <Ruler className="w-4 h-4 text-purple-600" />
                Altura (cm)
              </label>
              <input
                type="number"
                step="0.1"
                disabled={!isEditing}
                value={childData.height}
                onChange={(e) => setChildData({ ...childData, height: e.target.value })}
                placeholder="0.0"
                className={`w-full px-4 py-3 rounded-lg border ${
                  isEditing
                    ? "border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    : "border-gray-200 bg-gray-50"
                } transition-all outline-none`}
              />
            </div>

            {/* Perímetro Cefálico */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Perímetro Cefálico (cm)
              </label>
              <input
                type="number"
                step="0.1"
                disabled={!isEditing}
                value={childData.headCircumference}
                onChange={(e) => setChildData({ ...childData, headCircumference: e.target.value })}
                placeholder="0.0"
                className={`w-full px-4 py-3 rounded-lg border ${
                  isEditing
                    ? "border-purple-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    : "border-gray-200 bg-gray-50"
                } transition-all outline-none`}
              />
            </div>
          </div>
        </div>

        {/* Dica */}
        {!childData.name && (
          <div className="mt-6 p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-800">
              💡 <strong>Dica:</strong> Preencha o perfil do seu bebê para acompanhar o desenvolvimento e receber orientações personalizadas!
            </p>
          </div>
        )}
      </div>

      {/* Cards de Informação Rápida */}
      {childData.name && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Última Atualização</p>
                <p className="text-2xl font-bold">Hoje</p>
              </div>
              <Calendar className="w-8 h-8 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Marcos Atingidos</p>
                <p className="text-2xl font-bold">0/12</p>
              </div>
              <Baby className="w-8 h-8 opacity-80" />
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm opacity-90">Memórias</p>
                <p className="text-2xl font-bold">0 fotos</p>
              </div>
              <Camera className="w-8 h-8 opacity-80" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
