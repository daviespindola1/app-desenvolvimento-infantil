"use client";

import { useState } from "react";
import { Camera, Upload, Calendar, Trash2, Download } from "lucide-react";

interface Photo {
  id: string;
  url: string;
  date: string;
  period: string;
  caption?: string;
}

export default function PhotoAlbum() {
  const [photos] = useState<Photo[]>([]);
  const [selectedPeriod, setSelectedPeriod] = useState<string>("all");

  // Períodos organizados
  const periods = [
    { id: "all", label: "Todas" },
    { id: "month-1", label: "1º Mês" },
    { id: "month-2", label: "2º Mês" },
    { id: "month-3", label: "3º Mês" },
    { id: "month-4", label: "4º Mês" },
    { id: "month-5", label: "5º Mês" },
    { id: "month-6", label: "6º Mês" },
    { id: "month-7", label: "7º Mês" },
    { id: "month-8", label: "8º Mês" },
    { id: "month-9", label: "9º Mês" },
    { id: "month-10", label: "10º Mês" },
    { id: "month-11", label: "11º Mês" },
    { id: "month-12", label: "12º Mês" },
    { id: "year-1", label: "1 Ano" },
    { id: "year-2", label: "2 Anos" },
    { id: "year-3", label: "3 Anos" },
    { id: "year-4", label: "4 Anos" },
    { id: "year-5", label: "5 Anos" },
  ];

  const handleUpload = () => {
    // Implementar upload de fotos
    alert("Funcionalidade de upload será implementada com Supabase Storage");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <Camera className="w-7 h-7 text-purple-600" />
              Álbum de Memórias
            </h2>
            <p className="text-gray-600 mt-1">
              Registre os momentos especiais do seu pequeno
            </p>
          </div>
          <button
            onClick={handleUpload}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md"
          >
            <Upload className="w-4 h-4" />
            Adicionar Foto
          </button>
        </div>

        {/* Filtro de Períodos */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => setSelectedPeriod(period.id)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedPeriod === period.id
                  ? "bg-purple-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Fotos */}
      {photos.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-lg p-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mb-4">
              <Camera className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Nenhuma foto ainda
            </h3>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Comece a criar memórias! Adicione fotos do seu bebê e organize por mês ou ano.
            </p>
            <button
              onClick={handleUpload}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-md"
            >
              <Upload className="w-5 h-5" />
              Adicionar Primeira Foto
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100">
                <img
                  src={photo.url}
                  alt={photo.caption || "Foto do bebê"}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-1">
                  <Calendar className="w-3 h-3" />
                  {photo.date}
                </div>
                {photo.caption && (
                  <p className="text-sm text-gray-700 line-clamp-2">{photo.caption}</p>
                )}
              </div>
              {/* Ações ao passar o mouse */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-all">
                  <Download className="w-4 h-4 text-gray-700" />
                </button>
                <button className="p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-all">
                  <Trash2 className="w-4 h-4 text-red-600" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Total de Fotos</p>
              <p className="text-3xl font-bold mt-1">{photos.length}</p>
            </div>
            <Camera className="w-10 h-10 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Espaço Usado</p>
              <p className="text-3xl font-bold mt-1">0 MB</p>
            </div>
            <Upload className="w-10 h-10 opacity-80" />
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm opacity-90">Espaço Disponível</p>
              <p className="text-3xl font-bold mt-1">1 GB</p>
            </div>
            <Calendar className="w-10 h-10 opacity-80" />
          </div>
        </div>
      </div>

      {/* Dica */}
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <div className="text-blue-600 mt-0.5">💡</div>
          <div>
            <h4 className="font-semibold text-blue-800 mb-1">Dica</h4>
            <p className="text-sm text-blue-700">
              Organize suas fotos por mês até 1 ano e depois por ano. Você pode criar vídeos
              comemorativos e PDFs exportáveis para compartilhar com a família!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
