import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Music } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { Artist } from '../lib/supabase';
import Footer from '../components/Footer';

function Artists() {
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchArtists();
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  const fetchArtists = async () => {
    try {
      const { data, error } = await supabase
        .from('artists')
        .select('*')
        .order('display_order', { ascending: true });

      if (error) throw error;
      setArtists(data || []);
    } catch (error) {
      console.error('Error fetching artists:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatListeners = (count: number) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(1)}M`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-black flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-radial from-orange-400/30 via-orange-500/20 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>
        </div>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-white/5 rounded-full animate-spin-slow"></div>
          <div className="absolute inset-0 w-[500px] h-[500px] -m-[52px] border border-white/5 rounded-full animate-spin-slower"></div>
          <div className="absolute inset-0 w-[600px] h-[600px] -m-[102px] border border-white/5 rounded-full animate-spin-slowest"></div>

          <div
            className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400/60 rounded-full animate-spin-slow"
            style={{ transformOrigin: '0 192px' }}
          ></div>
          <div
            className="absolute top-1/2 left-0 w-2 h-2 bg-orange-400/60 rounded-full animate-spin-slower"
            style={{ transformOrigin: '250px 0' }}
          ></div>
          <div
            className="absolute bottom-0 right-1/2 w-2.5 h-2.5 bg-purple-400/60 rounded-full animate-spin-slowest"
            style={{ transformOrigin: '0 -300px' }}
          ></div>
        </div>

        <div className="absolute inset-0">
          <div className="absolute top-[15%] left-[20%] w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
          <div className="absolute top-[25%] right-[25%] w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[30%] left-[15%] w-1 h-1 bg-white/35 rounded-full animate-twinkle"></div>
          <div className="absolute top-[60%] right-[15%] w-1 h-1 bg-white/40 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[20%] right-[35%] w-1 h-1 bg-white/30 rounded-full animate-twinkle"></div>
          <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-white/35 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute bottom-[50%] right-[10%] w-1 h-1 bg-white/40 rounded-full animate-twinkle"></div>
          <div className="absolute top-[70%] left-[40%] w-1 h-1 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-[10%] right-[40%] w-0.5 h-0.5 bg-white/25 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-[60%] left-[60%] w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle-delayed"></div>
          <div className="absolute top-[80%] right-[50%] w-0.5 h-0.5 bg-white/25 rounded-full animate-twinkle"></div>
          <div className="absolute bottom-[10%] left-[45%] w-0.5 h-0.5 bg-white/30 rounded-full animate-twinkle-delayed"></div>
        </div>
      </div>

      <Link
        to="/"
        className="fixed top-6 right-6 z-30 p-3 text-gray-400/80 hover:text-[#FFD166] transition-all rounded-full
                   backdrop-blur-sm bg-white/5 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(255,200,60,0.3)] hover:scale-110"
      >
        <X className="w-6 h-6" />
      </Link>

      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-20">
        <img
          src="/logosolar.png"
          alt="Solar Music Group Logo"
          className="w-28 sm:w-32 md:w-36 mx-auto drop-shadow-[0_0_20px_rgba(255,140,0,0.5)]"
        />
      </div>

      <div className="relative z-10 flex-1 px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <div
            className={`text-center mb-12 transition-all duration-1000 ease-out transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD166] via-[#FFE29A] to-[#FFD166] mb-4 drop-shadow-[0_0_30px_rgba(255,200,60,0.6)]">
              Our Artists
            </h1>
            <p className="text-gray-300/80 text-lg">
              Meet the talented artists signed to Solar Music Group
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-20">
              <div className="w-12 h-12 border-4 border-[#FFD166]/30 border-t-[#FFD166] rounded-full animate-spin"></div>
            </div>
          ) : artists.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-6">
                <Music className="w-10 h-10 text-[#FFD166]/60" />
              </div>
              <p className="text-gray-400 text-lg">No artists yet. Check back soon!</p>
            </div>
          ) : (
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-1500 ease-out ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {artists.map((artist, index) => (
                <div
                  key={artist.id}
                  className="group relative transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-[#FFD166]/30 via-transparent to-[#FFD166]/30 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative mb-4">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFD166]/40 to-orange-500/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img
                          src={artist.profile_image_url}
                          alt={artist.name}
                          className="relative w-32 h-32 rounded-full object-cover border-2 border-[#FFD166]/30 group-hover:border-[#FFD166]/60 transition-all duration-300"
                        />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FFD166] transition-colors duration-300">
                        {artist.name}
                      </h3>

                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-gray-400 text-sm">
                          {formatListeners(artist.monthly_listeners)} monthly listeners
                        </span>
                      </div>

                      <a
                        href={artist.spotify_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-white rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(29,185,84,0.5)]"
                      >
                        <Music className="w-4 h-4" />
                        <span className="text-sm font-medium">Listen on Spotify</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Artists;
