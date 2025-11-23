"use client";

import { useState } from "react";
import { Baby, Heart, BookOpen, AlertCircle, Camera, BarChart3 } from "lucide-react";
import ChildProfile from "./components/ChildProfile";
import DevelopmentMilestones from "./components/DevelopmentMilestones";
import PhotoAlbum from "./components/PhotoAlbum";
import FirstAid from "./components/FirstAid";
import FAQ from "./components/FAQ";

type TabType = "profile" | "development" | "photos" | "firstaid" | "faq";

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>("profile");

  const tabs = [
    { id: "profile" as TabType, label: "Perfil", icon: Baby },
    { id: "development" as TabType, label: "Desenvolvimento", icon: BarChart3 },
    { id: "photos" as TabType, label: "Memórias", icon: Camera },
    { id: "firstaid" as TabType, label: "Primeiros Socorros", icon: AlertCircle },
    { id: "faq" as TabType, label: "Dúvidas", icon: BookOpen },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <ChildProfile />;
      case "development":
        return <DevelopmentMilestones />;
      case "photos":
        return <PhotoAlbum />;
      case "firstaid":
        return <FirstAid />;
      case "faq":
        return <FAQ />;
      default:
        return <ChildProfile />;
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-2 rounded-xl">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  BabyCare
                </h1>
                <p className="text-xs text-gray-500">Cuidando do seu pequeno</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-around items-center py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "scale-110" : ""}`} />
                  <span className="text-xs font-medium">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}
