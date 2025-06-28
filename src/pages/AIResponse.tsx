import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FileText, Users, AlertTriangle, Scale, CheckCircle, Info, Brain, Sparkles, Shield, Target, Zap, ArrowLeft } from 'lucide-react';

const AIResponse = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { query, language, category } = location.state || {};
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock AI response data - Space for actual AI integration
  const mockResponse = {
    cleanedQuery: query || "User query will appear here after AI processing",
    detectedIssues: [
      "Domestic Violence",
      "Women's Rights Violation"
    ],
    suggestedLaws: [
      {
        section: "IPC Section 498A",
        description: "Husband or relative of husband of a woman subjecting her to cruelty",
        relevance: "95%"
      },
      {
        section: "Protection of Women from Domestic Violence Act, 2005",
        description: "Comprehensive law to protect women from domestic violence",
        relevance: "92%"
      }
    ],
    biasDetection: {
      detected: true,
      type: "Gender",
      confidence: "92%",
      explanation: "Potential gender bias detected in the query context"
    },
    confidence: "85%",
    recommendedActions: [
      "File a complaint with local police station",
      "Approach Protection Officer under DV Act",
      "Contact local women's helpline",
      "Seek legal counsel from women's rights organization"
    ]
  };

  const analysisSteps = [
    { icon: Brain, title: "Language Processing", status: "completed", color: "text-blue-500" },
    { icon: Shield, title: "Bias Detection", status: "completed", color: "text-red-500" },
    { icon: Scale, title: "Legal Analysis", status: "completed", color: "text-green-500" },
    { icon: Target, title: "Recommendation", status: "completed", color: "text-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-green-200 to-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-orange-200 to-red-200 rounded-full opacity-10 animate-bounce" style={{ animationDuration: '3s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-8 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Home</span>
        </button>

        {/* Hero Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-blue-700 text-sm font-medium mb-6 animate-pulse">
            <Brain className="h-4 w-4 mr-2" />
            <span>AI Analysis Complete</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Legal Analysis Result
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            AI-powered analysis of your legal query with bias detection and recommendations
          </p>
        </div>

        {/* Analysis Steps */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-4 mb-12 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {analysisSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center">
                <Icon className={`h-8 w-8 ${step.color} mx-auto mb-3`} />
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <div className="flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600 capitalize">{step.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Original Query */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Info className="h-6 w-6 mr-3 text-blue-600" />
            Your Query Analysis
          </h2>
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border-l-4 border-blue-500">
            <p className="text-gray-800 text-lg leading-relaxed mb-4">{mockResponse.cleanedQuery}</p>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                Language: {language || 'Hindi'}
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                Category: {category || 'Auto-detected'}
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Confidence: {mockResponse.confidence}
              </div>
            </div>
          </div>
        </div>

        {/* Bias Detection Alert */}
        {mockResponse.biasDetection.detected && (
          <div className={`bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-3xl p-8 mb-8 transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-red-600 animate-pulse" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-red-900 mb-2">Bias Detected</h3>
                <p className="text-red-800 mb-3">
                  {mockResponse.biasDetection.type} bias detected with {mockResponse.biasDetection.confidence} confidence.
                </p>
                <p className="text-red-700 text-sm bg-red-100 rounded-lg p-3">{mockResponse.biasDetection.explanation}</p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-red-600">{mockResponse.biasDetection.confidence}</div>
                <div className="text-sm text-red-500">Confidence</div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Legal Issues Detected */}
          <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Scale className="h-6 w-6 mr-3 text-orange-600" />
              Detected Legal Issues
            </h2>
            <div className="space-y-3">
              {mockResponse.detectedIssues.map((issue, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-xl border border-orange-200">
                  <CheckCircle className="h-5 w-5 text-orange-600 flex-shrink-0" />
                  <span className="font-medium text-orange-900">{issue}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidence Score */}
          <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Analysis Confidence</h2>
            <div className="text-center">
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="2"
                  />
                  <path
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    strokeDasharray={`${parseInt(mockResponse.confidence)}, 100`}
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-900">{mockResponse.confidence}</span>
                </div>
              </div>
              <p className="text-gray-600">Analysis Accuracy</p>
            </div>
          </div>
        </div>

        {/* Suggested Laws */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Applicable Laws & Sections</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockResponse.suggestedLaws.map((law, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 border border-blue-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-blue-900 text-lg">{law.section}</h3>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-medium">
                    {law.relevance}
                  </span>
                </div>
                <p className="text-blue-800 leading-relaxed">{law.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Actions */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {mockResponse.recommendedActions.map((action, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="flex-shrink-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-green-800 font-medium">{action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className={`bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 mb-8 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button
              onClick={() => navigate('/generate-draft', { state: { response: mockResponse } })}
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-8 rounded-2xl font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FileText className="h-6 w-6 group-hover:animate-bounce" />
              <span>Generate Legal Draft</span>
              <Sparkles className="h-5 w-5 group-hover:animate-spin" />
            </button>
            <button
              onClick={() => navigate('/connect-help')}
              className="group flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Users className="h-6 w-6 group-hover:animate-bounce" />
              <span>Connect to Help</span>
              <Zap className="h-5 w-5 group-hover:animate-pulse" />
            </button>
          </div>
        </div>

        {/* AI Model Integration Placeholder */}
        <div className={`bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-200 rounded-3xl p-6 transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-yellow-600 animate-pulse" />
            <div>
              <h4 className="font-semibold text-yellow-800">AI Integration Space</h4>
              <p className="text-yellow-700 mt-1">
                This is mock data. Actual AI integration with GPT-4, bias detection ML model, and RAG pipeline will replace this.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIResponse;