import React from 'react';
import StoryCard from '../components/StoryCard';
import { stories } from '../data/stories';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to 
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              INSIGHTALE
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover magical folktales and embark on incredible adventures! 
            Choose a story and let your imagination soar!
          </p>
        </div>

        {/* Featured Stories Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <span className="w-2 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full mr-4"></span>
            Featured Stories
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {stories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/30 transition-all duration-300">
            <div className="text-6xl mb-4">🏰</div>
            <h3 className="text-xl font-bold text-white mb-2">Adventure Tales</h3>
            <p className="text-white/80">Brave princes and magical quests</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/30 transition-all duration-300">
            <div className="text-6xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-white mb-2">Magic Stories</h3>
            <p className="text-white/80">Enchanted objects and spells</p>
          </div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-3xl p-6 text-center hover:bg-white/30 transition-all duration-300">
            <div className="text-6xl mb-4">🧙‍♀️</div>
            <h3 className="text-xl font-bold text-white mb-2">Wisdom Tales</h3>
            <p className="text-white/80">Learn from wise characters</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;