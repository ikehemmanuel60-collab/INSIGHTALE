import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star } from 'lucide-react';

interface Story {
  id: string;
  title: string;
  part?: string;
  description: string;
  readTime: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  emoji: string;
  gradient: string;
}

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const difficultyColors = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-red-500'
  };

  return (
    <Link to={`/story/${story.id}`} className="group block">
      <div className={`relative bg-gradient-to-br ${story.gradient} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2`}>
        {/* Story Icon */}
        <div className="text-6xl mb-4 text-center group-hover:animate-bounce">
          {story.emoji}
        </div>

        {/* Story Title */}
        <h3 className="text-xl font-bold text-white mb-2 text-center">
          {story.title}
          {story.part && (
            <span className="block text-sm font-normal text-white/80">
              {story.part}
            </span>
          )}
        </h3>

        {/* Story Description */}
        <p className="text-white/90 text-sm mb-4 text-center line-clamp-3">
          {story.description}
        </p>

        {/* Story Meta */}
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-1 text-white/80">
            <Clock className="w-4 h-4" />
            <span className="text-xs">{story.readTime}</span>
          </div>
          
          <div className={`${difficultyColors[story.difficulty]} px-2 py-1 rounded-full`}>
            <span className="text-white text-xs font-medium">{story.difficulty}</span>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3">
            <Star className="w-6 h-6 text-white fill-current" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoryCard;