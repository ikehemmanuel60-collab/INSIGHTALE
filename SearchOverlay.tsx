import React, { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { stories } from '../data/stories';

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay: React.FC<SearchOverlayProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStories, setFilteredStories] = useState(stories);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredStories(stories);
    } else {
      const filtered = stories.filter(story =>
        story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        story.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredStories(filtered);
    }
  }, [searchTerm]);

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-start justify-center pt-20">
      <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 w-full max-w-4xl mx-4 max-h-[80vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Search Stories</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Search Input */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for stories..."
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 text-lg"
            autoFocus
          />
        </div>

        {/* Search Results */}
        <div className="overflow-y-auto max-h-96">
          {filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-600 mb-2">No stories found</h3>
              <p className="text-gray-500">Try searching with different keywords</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredStories.map((story) => (
                <Link
                  key={story.id}
                  to={`/story/${story.id}`}
                  onClick={onClose}
                  className="block group"
                >
                  <div className={`bg-gradient-to-br ${story.gradient} rounded-2xl p-4 transition-all duration-200 transform hover:scale-105 hover:shadow-lg`}>
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{story.emoji}</div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-1">
                          {story.title}
                          {story.part && (
                            <span className="block text-sm font-normal text-white/80">
                              {story.part}
                            </span>
                          )}
                        </h3>
                        <p className="text-white/80 text-sm line-clamp-2">
                          {story.description}
                        </p>
                        <div className="flex items-center space-x-2 mt-2 text-white/70 text-xs">
                          <span>{story.readTime}</span>
                          <span>•</span>
                          <span>{story.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Popular Searches */}
        {searchTerm === '' && (
          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-700 mb-3">Popular Stories</h3>
            <div className="flex flex-wrap gap-2">
              {['Prince Curse', 'Mary\'s Sneezing', 'Whispering Calabash', 'Wicked Old Woman'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchTerm(term)}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchOverlay;