import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Star, BookOpen } from 'lucide-react';
import { getStoryById } from '../data/stories';

const StoryPage: React.FC = () => {
  const { storyId } = useParams();
  const story = getStoryById(storyId || '');

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Story Not Found</h1>
          <p className="text-white/80 mb-8">Sorry, we couldn't find that story.</p>
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full px-6 py-3 text-white font-medium transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Stories</span>
          </Link>
        </div>
      </div>
    );
  }

  const difficultyColors = {
    Easy: 'bg-green-500',
    Medium: 'bg-yellow-500',
    Hard: 'bg-red-500'
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center space-x-2 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full px-4 py-2 text-white font-medium transition-all duration-200 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Stories</span>
        </Link>

        {/* Story Header */}
        <div className={`bg-gradient-to-br ${story.gradient} rounded-3xl p-8 mb-8 text-center shadow-2xl`}>
          <div className="text-8xl mb-6">{story.emoji}</div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {story.title}
            {story.part && (
              <span className="block text-2xl font-normal text-white/90 mt-2">
                {story.part}
              </span>
            )}
          </h1>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            {story.description}
          </p>
          
          {/* Story Meta */}
          <div className="flex justify-center items-center space-x-6 text-white/80">
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{story.readTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-5 h-5" />
              <span>Folktale</span>
            </div>
            <div className={`${difficultyColors[story.difficulty]} px-3 py-1 rounded-full flex items-center space-x-1`}>
              <Star className="w-4 h-4" />
              <span>{story.difficulty}</span>
            </div>
          </div>
        </div>

        {/* Story Content */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          <div className="prose prose-lg max-w-none">
            <div className="text-white/90 leading-relaxed space-y-6">
              {story.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-loose">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 rounded-full px-8 py-4 text-white font-bold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            <BookOpen className="w-5 h-5" />
            <span>Read More Stories</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;