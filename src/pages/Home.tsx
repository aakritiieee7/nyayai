import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Mic, MicOff, Send, Globe, AlertTriangle, Sparkles, Shield, Users, Scale, 
  Brain, Heart, Star, Award, CheckCircle, ArrowRight, Play, Zap, Target,
  TrendingUp, Clock, MapPin, Phone, Mail, BookOpen, FileText, MessageCircle
} from 'lucide-react';

const Home = () => {
  const [query, setQuery] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('hindi');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStat, setCurrentStat] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-rotate testimonials
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    
    // Auto-rotate stats
    const statInterval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 2000);
    
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(statInterval);
    };
  }, []);

  const categories = [
    { 
      value: 'domestic', 
      label: 'Domestic Violence', 
      emoji: '🏠', 
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200',
      description: 'Protection from domestic abuse and violence',
      cases: '12,000+ cases'
    },
    { 
      value: 'land', 
      label: 'Land Disputes', 
      emoji: '🏞️', 
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      description: 'Property and land ownership issues',
      cases: '8,500+ cases'
    },
    { 
      value: 'police', 
      label: 'Police Issues', 
      emoji: '👮', 
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200',
      description: 'Police misconduct and legal procedures',
      cases: '6,200+ cases'
    },
    { 
      value: 'caste', 
      label: 'Caste Discrimination', 
      emoji: '⚖️', 
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200',
      description: 'Protection against caste-based discrimination',
      cases: '4,800+ cases'
    },
    { 
      value: 'labor', 
      label: 'Labor Rights', 
      emoji: '👷', 
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50',
      borderColor: 'border-orange-200',
      description: 'Workers rights and employment issues',
      cases: '9,300+ cases'
    },
    { 
      value: 'women', 
      label: 'Women Rights', 
      emoji: '👩', 
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      borderColor: 'border-pink-200',
      description: 'Women empowerment and legal protection',
      cases: '15,600+ cases'
    },
  ];

  const languages = [
    { value: 'hindi', label: 'हिंदी', flag: '🇮🇳', speakers: '600M+' },
    { value: 'english', label: 'English', flag: '🇬🇧', speakers: '125M+' },
    { value: 'hinglish', label: 'Hinglish', flag: '🇮🇳', speakers: '350M+' },
    { value: 'bengali', label: 'বাংলা', flag: '🇧🇩', speakers: '265M+' },
    { value: 'tamil', label: 'தமிழ்', flag: '🇮🇳', speakers: '75M+' },
    { value: 'gujarati', label: 'ગુજરાતી', flag: '🇮🇳', speakers: '56M+' },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      text: 'न्याय सहायक ने मुझे घरेलू हिंसा के खिलाफ कानूनी सहायता पाने में मदद की। बहुत आसान और प्रभावी।',
      rating: 5,
      category: 'Domestic Violence',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      text: 'The platform helped me understand my labor rights and connected me with the right legal support.',
      rating: 5,
      category: 'Labor Rights',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    },
    {
      name: 'Sunita Devi',
      location: 'Bangalore',
      text: 'भूमि विवाद में कानूनी सलाह मिली और सही वकील से जुड़ाव हुआ। बहुत अच्छा अनुभव।',
      rating: 5,
      category: 'Land Dispute',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Queries Resolved', icon: Brain, color: 'text-blue-600' },
    { number: '500+', label: 'Legal Partners', icon: Users, color: 'text-green-600' },
    { number: '94%', label: 'Success Rate', icon: Award, color: 'text-purple-600' },
    { number: '6+', label: 'Languages', icon: Globe, color: 'text-orange-600' }
  ];

  const platformFeatures = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced GPT-4 integration with Indian legal context',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Bias Detection',
      description: 'ML models to detect caste, gender, and class bias',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FileText,
      title: 'Document Generation',
      description: 'Auto-generate FIR, RTI, and legal notices',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Expert Connect',
      description: 'Connect with verified lawyers and NGOs',
      color: 'from-purple-500 to-violet-500'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate('/ai-response', { state: { query, language: selectedLanguage, category: selectedCategory } });
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 relative overflow-hidden">
      {/* Navigation Bar */}
      <nav className="relative z-20 bg-white/90 backdrop-blur-sm shadow-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Scale className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                न्याय सहायक
              </span>
            </div>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/generate-draft')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                <FileText className="h-4 w-4" />
                <span>Generate Draft</span>
              </button>
              <button
                onClick={() => navigate('/connect-help')}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
              >
                <Users className="h-4 w-4" />
                <span>Connect Help</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Background with Animated Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Background Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`
          }}
        ></div>
        
        {/* Animated Geometric Shapes */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-200 to-yellow-200 rounded-full opacity-10 animate-spin" style={{ animationDuration: '20s' }}></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 animate-bounce delay-300">
          <Scale className="h-8 w-8 text-orange-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-32 animate-bounce delay-700">
          <Shield className="h-6 w-6 text-blue-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-32 animate-bounce delay-1000">
          <Heart className="h-7 w-7 text-pink-300 opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-pulse delay-500">
          <Brain className="h-6 w-6 text-purple-300 opacity-60" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-100 to-red-100 rounded-full text-orange-700 text-sm font-medium mb-8 animate-bounce shadow-lg">
            <Sparkles className="h-4 w-4 mr-2 animate-spin" />
            <span>AI-Powered Legal Help for India</span>
            <Star className="h-4 w-4 ml-2 text-yellow-500" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent mb-6 leading-tight animate-pulse">
            न्याय सहायक
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-700 mb-4 max-w-4xl mx-auto leading-relaxed font-medium">
            Get AI-powered legal guidance tailored for Indian law
          </p>
          
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Voice-aware, bias-detecting platform built for real people — not just lawyers. 
            Supporting Hindi, English, and regional dialects with comprehensive legal analysis.
          </p>

          {/* Animated Stats Showcase */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-xl border border-white/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                const isActive = currentStat === index;
                return (
                  <div 
                    key={index}
                    className={`transform transition-all duration-500 ${isActive ? 'scale-110' : 'scale-100'}`}
                  >
                    <Icon className={`h-8 w-8 ${stat.color} mx-auto mb-3 ${isActive ? 'animate-bounce' : ''}`} />
                    <div className={`text-2xl font-bold text-gray-900 mb-1 ${isActive ? 'text-3xl' : ''}`}>{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Platform Features Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {platformFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className={`group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Language Selection */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center mb-8">
            <Globe className="h-8 w-8 text-orange-600 mr-4 animate-spin" style={{ animationDuration: '3s' }} />
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Select Your Language
            </h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <button
                key={lang.value}
                onClick={() => setSelectedLanguage(lang.value)}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  selectedLanguage === lang.value
                    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg scale-105'
                    : 'border-gray-200 hover:border-orange-300 bg-white hover:shadow-md'
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="text-3xl mb-3 group-hover:animate-bounce">{lang.flag}</div>
                <div className={`font-bold text-lg mb-2 transition-colors ${
                  selectedLanguage === lang.value ? 'text-orange-700' : 'text-gray-700 group-hover:text-orange-600'
                }`}>
                  {lang.label}
                </div>
                <div className="text-xs text-gray-500">{lang.speakers}</div>
                {selectedLanguage === lang.value && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Category Selection */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Legal Category (Optional)
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value === selectedCategory ? '' : category.value)}
                className={`group relative p-8 rounded-3xl border-2 transition-all duration-300 transform hover:scale-105 text-left overflow-hidden ${
                  selectedCategory === category.value
                    ? 'border-orange-500 shadow-xl scale-105'
                    : 'border-gray-200 hover:border-orange-300 hover:shadow-lg'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 ${
                  selectedCategory === category.value ? 'opacity-20' : ''
                }`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="text-4xl group-hover:animate-bounce">{category.emoji}</span>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900 mb-1">{category.label}</h4>
                      <p className="text-sm text-orange-600 font-medium">{category.cases}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                </div>
                
                {selectedCategory === category.value && (
                  <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Query Input */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Describe Your Legal Issue
                </h3>
                <p className="text-gray-600 mb-6">
                  Type in any language or use voice input. Our AI will understand and help you.
                </p>
              </div>
              
              <div className="relative">
                <textarea
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  rows={6}
                  className="w-full px-8 py-6 border-2 border-gray-200 rounded-3xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 resize-none text-lg transition-all duration-300 bg-white/80 backdrop-blur-sm shadow-inner"
                  placeholder="Type your legal question here... You can write in Hindi, English, or any supported language.

Example: मेरे पति मुझे मारते हैं और दहेज मांगते हैं। मैं क्या कर सकती हूं?

Example: My employer is not paying minimum wages and discriminating based on caste."
                />
                <div className="absolute bottom-6 right-6 flex items-center space-x-3">
                  <span className="text-sm text-gray-400">{query.length}/1000</span>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <button
                  type="button"
                  onClick={toggleRecording}
                  className={`group flex items-center space-x-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg ${
                    isRecording
                      ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white animate-pulse'
                      : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-orange-100 hover:to-red-100 hover:text-orange-700'
                  }`}
                >
                  {isRecording ? (
                    <>
                      <MicOff className="h-6 w-6" />
                      <span>Stop Recording</span>
                      <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
                    </>
                  ) : (
                    <>
                      <Mic className="h-6 w-6 group-hover:animate-bounce" />
                      <span>Voice Input</span>
                      <Sparkles className="h-4 w-4 group-hover:animate-spin" />
                    </>
                  )}
                </button>

                <button
                  type="submit"
                  disabled={!query.trim()}
                  className="group flex items-center space-x-3 px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-2xl font-bold hover:from-orange-700 hover:to-red-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl"
                >
                  <Brain className="h-6 w-6 group-hover:animate-pulse" />
                  <span>Get Legal Advice</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Testimonials Section */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h3 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
            Success Stories
          </h3>
          
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                    <div className="flex items-center space-x-4 mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div>
                        <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                        <p className="text-gray-600 flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {testimonial.location}
                        </p>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="ml-2 text-sm text-gray-500">{testimonial.category}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-800 text-lg leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial Indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentTestimonial === index ? 'bg-orange-500 scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* AI Model Status */}
        <div className={`bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-6 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 animate-pulse" />
            <div>
              <h4 className="font-semibold text-yellow-800">AI Model Integration Space</h4>
              <p className="text-yellow-700 mt-1">
                Space reserved for ML model integration - bias detection, language processing, and legal analysis will be added here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;