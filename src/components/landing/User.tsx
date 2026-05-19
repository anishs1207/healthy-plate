import React from 'react';
import { Star } from 'lucide-react';

const User: React.FC = () => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`}
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-20 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-green-700 max-w-3xl mx-auto">
            Hear from people who have transformed their cooking and eating habits with HeathlyPlate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative transform hover:scale-105 transition duration-300">
            <div className="absolute -top-4 -right-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <p className="italic text-green-700 mb-6">
              "The AI recipe creator has completely changed how I cook. I can now make delicious meals with whatever ingredients I have on hand!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-200 rounded-full overflow-hidden mr-3">
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Sarah Johnson"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold text-green-800">Sarah Johnson</p>
                <p className="text-sm text-green-600">Busy mom of three</p>
              </div>
            </div>
            <div className="flex mt-4">{renderStars(5)}</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative transform hover:scale-105 transition duration-300">
            <div className="absolute -top-4 -right-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <p className="italic text-green-700 mb-6">
              "The nutrition coach has helped me stay on track with my fitness goals. It's like having a personal nutritionist in my pocket!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-200 rounded-full overflow-hidden mr-3">
                <img
                  src="https://randomuser.me/api/portraits/men/2.jpg"
                  alt="Michael Torres"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold text-green-800">Michael Torres</p>
                <p className="text-sm text-green-600">Fitness enthusiast</p>
              </div>
            </div>
            <div className="flex mt-4">{renderStars(4)}</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative transform hover:scale-105 transition duration-300">
            <div className="absolute -top-4 -right-4">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                <Star className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
            <p className="italic text-green-700 mb-6">
              "I've saved so much money by tracking my ingredients and reducing food waste. Plus, the recipes are absolutely delicious!"
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-green-200 rounded-full overflow-hidden mr-3">
                <img
                  src="https://randomuser.me/api/portraits/women/3.jpg"
                  alt="Alexandra Chen"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-semibold text-green-800">Alexandra Chen</p>
                <p className="text-sm text-green-600">Budget-conscious foodie</p>
              </div>
            </div>
            <div className="flex mt-4">{renderStars(5)}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
