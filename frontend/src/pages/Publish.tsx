import { useState } from 'react';
import { AppBar } from '../components/AppBar';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, ArrowLeft } from 'lucide-react';

export const Publish = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [subtitle, _] = useState('');
  const [error, setError] = useState('');
  const [publishing, setPublishing] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPublishing(true);
    setError('');
    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/v1/blog`,
        {
          title,
          subtitle,
          content,
        },
        {
          headers: {
            Authorization: localStorage.getItem('token'),
          },
        }
      );
      navigate(`/blog/${response.data.id}`);
    } catch (err) {
      setError('Failed to publish. Please try again.');
      setPublishing(false);
    }
  };

  const estimateReadTime = () => {
    const wordsPerMinute = 100;
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
  };

  return (
    <div className="min-h-screen bg-white">
      <AppBar />
      <main className="max-w-3xl mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/blogs')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 group"
        >
          <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
          <span>Back to blogs</span>
        </button>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-600 rounded-lg flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="w-full text-4xl font-serif placeholder-gray-300 focus:outline-none"
              required
            />
          </div>

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tell your story..."
            className="w-full min-h-[500px] text-lg font-serif leading-relaxed placeholder-gray-300 focus:outline-none resize-none"
            required
          />

          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4">
            <div className="max-w-3xl mx-auto flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {content && estimateReadTime()}
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="px-4 py-2 text-gray-600 hover:text-gray-900"
                  onClick={() => navigate('/blogs')}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={publishing}
                  className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {publishing ? 'Publishing...' : 'Publish'}
                </button>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
};
