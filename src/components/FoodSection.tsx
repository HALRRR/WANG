import React from 'react';
import { Utensils } from 'lucide-react';

interface Food {
  name: string;
  description: string;
  image: string;
}

const FoodSection: React.FC = () => {
  const foods: Food[] = [
    {
      name: '遂宁凉粉',
      description: '遂宁特色凉粉，口感爽滑，配以特制调料，味道鲜美。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sichuan%20style%20cold%20noodle%20dish%20with%20spicy%20sauce%2C%20traditional%20Chinese%20food&image_size=landscape_4_3'
    },
    {
      name: '遂宁豆腐干',
      description: '遂宁特产豆腐干，口感细腻，味道醇厚，是当地著名的小吃。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sichuan%20style%20dried%20tofu%2C%20traditional%20Chinese%20food%2C%20sliced%20and%20arranged%20on%20a%20plate&image_size=landscape_4_3'
    },
    {
      name: '遂宁锅盔',
      description: '遂宁特色锅盔，外酥内软，口感独特，是当地居民喜爱的早餐。',
      image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Sichuan%20style%20crispy%20bread%20with%20filling%2C%20traditional%20Chinese%20food&image_size=landscape_4_3'
    }
  ];

  return (
    <section id="food" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
          家乡美食
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {foods.map((food, index) => (
            <div 
              key={food.name}
              className="bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600 hover:border-purple-500"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={food.image} 
                  alt={food.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-pink-500 mr-2" />
                  <h3 className="text-xl font-semibold">{food.name}</h3>
                </div>
                <p className="text-gray-300">{food.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodSection;