
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

type MenuItem = {
  name: string;
  description?: string;
  price: string;
};

const Menu = () => {
  const [selectedTab, setSelectedTab] = useState("drinks");
  const { t } = useLanguage();

  const drinks: MenuItem[] = [
    { name: "Wybiska sok pomarańczowy", description: "250 ml", price: "12" },
    { name: "Wybiska sok jabłkowy", description: "250 ml", price: "12" },
    { name: "Coca Cola", description: "330 ml", price: "12" },
    { name: "Wybiska Aranciata SanPellegrino", description: "330 ml", price: "12" },
    { name: "Wybska CHINOTTO SanPellegrino", description: "330 ml", price: "12" },
    { name: "Piwo bezalkoholowe LECH FREE", description: "", price: "14" },
    { name: "Piwo bezalkoholowe MIETA LIMONKA", description: "", price: "14" },
    { name: "Wóbska woda naturalna / gazowana duża", description: "", price: "14" },
    { name: "Wóbska woda naturalna / gazowana mała", description: "", price: "9" },
  ];

  const lemonades: MenuItem[] = [
    { name: "Mojito virgin ze świeżą miętą i limonką", description: "", price: "19" },
    { name: "Lemoniada cytrynowa", description: "", price: "19" },
    { name: "Lemoniada pomarańczowa", description: "", price: "19" },
  ];

  const appetizers: MenuItem[] = [
    { name: "Tiramisu", description: "", price: "20" },
    { name: "Panna Cotta", description: "", price: "20" },
    { name: "Capucio Siciliano", description: "", price: "24" },
    { name: "Deska włoskich wędlin", description: "(dla dwóch osób)", price: "69" },
    { name: "Deska włoskich węglin", description: "(dla dwóch osób)", price: "69" },
    { name: "Deska Mr. Lobster", description: "(dla dwóch osób) - sery włoskie, węgliny włoskie, warzywa grillowane, karczochy", price: "85" },
    { name: "Bruschetta clasico", description: "", price: "20" },
  ];

  const pasta: MenuItem[] = [
    { name: "Spaghetti", description: "Oliwa, czosnek, pepperoncino", price: "34" },
    { name: "Spaghetti pomodoro", description: "Świeże pomidory, bazylia", price: "38" },
    { name: "Spaghetti carbonara", description: "Jajko, włoskie polędźić wędzone, sor pecorino, sor parmigiano, pieprz", price: "44" },
    { name: "Gnocchi 4 Formaggi", description: "Sor gorgonzola, sor taleggio, sor parmigiano, sor pecorino", price: "42" },
    { name: "Gnocchi Sorrentina", description: "Świeże pomidory włoskie, włoska mozzarella, bazylia", price: "42" },
    { name: "Risotto z kurczakiem", description: "Ryż Carnaroli, włoska, maskarpone, sor parmigiano", price: "47" },
    { name: "LASAGNE Bolognese", description: "", price: "42" },
    { name: "SPAGHETTI bolognese", description: "", price: "38" },
  ];

  const pizza: MenuItem[] = [
    { name: "FOCACCIA", description: "Sól, rozmaryn, oliwa extra virgin", price: "23" },
    { name: "MARINARA", description: "Sos ze świeżych pomidorów, czosnek, oregano, oliwa extra virgin, bazylia, bez sera", price: "28" },
    { name: "MARGHERITA", description: "Sos ze świeżych pomidorów, włoska mozzarella, bazylia", price: "34" },
    { name: "NAPOLETANA", description: "Sos ze świeżych pomidorów, włoska mozzarella, anchois, oregano, bazylia", price: "36" },
    { name: "PROSCIUTTO", description: "Sos ze świeżych pomidorów, włoska mozzarella, włoska szynka gotowana, oregano, bazylia", price: "38" },
    { name: "PROSCIUTTO E FUNGHI", description: "Sos ze świeżych pomidorów, włoska mozzarella, włoska szynka gotowana, pieczarki, oregano, bazylia", price: "40" },
    { name: "DIAVOLA", description: "Sos ze świeżych pomidorów, włoska mozzarella, włoskie salami pikantne, bazylia", price: "42" },
    { name: "CAPRICCIOSA", description: "Sos ze świeżych pomidorów, włoska mozzarella, włoska szynka gotowana, pieczarki, włoskie karczochy, oliwki, oregano, bazylia", price: "46" },
    { name: "4 STAGIONI", description: "Sos ze świeżych pomidorów, włoska mozzarella, włoska szynka gotowana, pieczarki, włoskie karczochy, oliwki, oregano, bazylia", price: "46" },
    { name: "4 FORMAGGI", description: "Sos ze świeżych pomidorów, włoska mozzarella, sor gorgonzola, sor taleggio, sor parmezan, bazylia, pieprz", price: "46" },
    { name: "VEGETARIANA", description: "Sos ze świeżych pomidorów, włoska mozzarella, bakłażan, cukinia, papryka, czerwona cebula, oregano, bazylia", price: "47" },
    { name: "MISTER LOBSTER", description: "Śmietana, włoska mozzarella, sor gorgonzola, świeże borówki, włoska szynka wędzona, bazylia, pieprz", price: "52" },
    { name: "ITALIANA", description: "Sos ze świeżych pomidorów, włoska mozzarella, rukola, włoska szynka parmeńska, pomidory koktailowe, sor parmezan, oliwa extra virgin, bazylia", price: "49" },
    { name: "SICILIANA", description: "Sos ze świeżych pomidorów, włoska mozzarella, anchois, kapary, oliwki, oregano, bazylia", price: "44" },
    { name: "TONNO E CIPOLLA", description: "Sos ze świeżych pomidorów, włoska mozzarella, tuńczyk, cebula czerwona, bazylia", price: "44" },
    { name: "SALSICCIA E FRIARIELLI", description: "Śmietana, włoska mozzarella, włoska kiełbasa, dziki brokuł neapolitański, chili, bazylia", price: "49" },
  ];

  return (
    <section id="menu" className="section-padding bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-restaurant-red text-center mb-12">
          {t('ourMenu')}
        </h2>

        <Tabs defaultValue="drinks" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white/70">
              <TabsTrigger value="drinks" className="text-base">{t('drinks')}</TabsTrigger>
              <TabsTrigger value="appetizers" className="text-base">{t('appetizers')}</TabsTrigger>
              <TabsTrigger value="pasta" className="text-base">{t('pasta')}</TabsTrigger>
              <TabsTrigger value="pizza" className="text-base">{t('pizza')}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="drinks" className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-restaurant-red mb-6 text-center">{t('coldDrinks')}</h3>
              <div className="space-y-4">
                {drinks.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0">
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                    <p className="font-semibold text-restaurant-red">{item.price} zł</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-restaurant-red mb-6 text-center">{t('lemonades')}</h3>
              <div className="space-y-4">
                {lemonades.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0">
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                    <p className="font-semibold text-restaurant-red">{item.price} zł</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="appetizers">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-restaurant-red mb-6 text-center">{t('appetizersDesserts')}</h3>
              <div className="space-y-4">
                {appetizers.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0">
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                    <p className="font-semibold text-restaurant-red">{item.price} zł</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="pasta">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-restaurant-red mb-6 text-center">{t('pastaRisotto')}</h3>
              <div className="space-y-4">
                {pasta.map((item, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-gray-200 pb-3 last:border-b-0">
                    <div>
                      <h4 className="font-medium text-gray-800">{item.name}</h4>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                    <p className="font-semibold text-restaurant-red">{item.price} zł</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 italic text-center">{t('freshFruitsFishNote')}</p>
            </div>
          </TabsContent>

          <TabsContent value="pizza">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-restaurant-red mb-6 text-center">{t('pizza')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pizza.slice(0, Math.ceil(pizza.length / 2)).map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <div className="mr-2">
                      <h4 className="font-medium text-gray-800">{item.name} <span className="text-restaurant-red">{item.price} zł</span></h4>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                  </div>
                ))}
                
                {pizza.slice(Math.ceil(pizza.length / 2)).map((item, index) => (
                  <div key={index} className="flex justify-between items-start border-b border-gray-200 pb-3">
                    <div className="mr-2">
                      <h4 className="font-medium text-gray-800">{item.name} <span className="text-restaurant-red">{item.price} zł</span></h4>
                      {item.description && <p className="text-sm text-gray-500">{item.description}</p>}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600 mt-6 italic text-center">{t('takeAwayNote')}</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Menu;
