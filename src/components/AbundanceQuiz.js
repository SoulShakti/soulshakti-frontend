import React, { useState } from 'react';

const API_URL = process.env.REACT_APP_API_URL || 'https://soulshakti-backend-1.onrender.com';

const AbundanceQuiz = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    challenge: '',
    duration: '',
    triedBefore: '',
    lifeSatisfaction: 5,
    healingGoal: '',
    recurringDreams: '',
    dreamDescription: '',
    urgency: '',
    successVision: ''
  });
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [recommendation, setRecommendation] = useState(null);

  const totalSteps = 11;
  const progress = (step / totalSteps) * 100;

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const analyzeResponses = () => {
    // Simple recommendation logic based on responses
    const satisfaction = parseInt(formData.lifeSatisfaction);
    const isUrgent = formData.urgency === 'Very urgent' || formData.urgency === 'Somewhat urgent';
    
    if (satisfaction <= 5 && isUrgent) {
      return {
        service: 'The Divine Session',
        duration: '60 minutes',
        price: '₹1,111',
        reason: 'Your responses indicate you would benefit most from deep healing with intensive gratitude practices and spiritual alignment.'
      };
    } else if (satisfaction <= 7) {
      return {
        service: 'The Sacred Session',
        duration: '45 minutes',
        price: '₹777',
        reason: 'A focused session to address your specific challenges and restore balance to your life.'
      };
    } else {
      return {
        service: 'The Blessed Session',
        duration: '30 minutes',
        price: '₹444',
        reason: 'A nurturing session to maintain your wellness and enhance your spiritual growth.'
      };
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    try {
      const recommendedService = analyzeResponses();
      setRecommendation(recommendedService);

      const quizData = {
        ...formData,
        recommendedService: recommendedService.service,
        timestamp: new Date().toISOString()
      };

      const response = await fetch(`${API_URL}/api/quiz/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(quizData)
      });

      if (!response.ok) {
        throw new Error('Failed to submit quiz');
      }

      setCompleted(true);
    } catch (error) {
      console.error('Quiz submission error:', error);
      alert('There was an error saving your responses. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const canProgress = () => {
    switch(step) {
      case 1: return formData.challenge.trim().length > 0;
      case 2: return formData.duration.length > 0;
      case 3: return formData.triedBefore.trim().length > 0;
      case 4: return true;
      case 5: return formData.healingGoal.trim().length > 0;
      case 6: return formData.recurringDreams.length > 0;
      case 7: return formData.recurringDreams === 'No' || formData.dreamDescription.trim().length > 0;
      case 8: return formData.urgency.length > 0;
      case 9: return formData.successVision.trim().length > 0;
      case 10: return formData.name.trim().length > 0 && formData.email.trim().length > 0;
      case 11: return true;
      default: return false;
    }
  };

  if (!isOpen) return null;

  if (completed && recommendation) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
          
          <div className="text-center">
            <div className="text-5xl mb-4">✨</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Your Personalized Recommendation</h2>
            <p className="text-lg text-gray-600 mb-8">Hi {formData.name}! Based on your responses, we recommend:</p>
            
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">{recommendation.service}</h3>
              <p className="text-gray-700 mb-4">{recommendation.duration} • {recommendation.price}</p>
              <p className="text-gray-600 leading-relaxed">{recommendation.reason}</p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => {
                  onClose();
                  // Scroll to booking section or redirect
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 px-8 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-amber-700 transition-all transform hover:scale-105"
              >
                🎯 Book This Session Now
              </button>
              
              <button 
                onClick={onClose}
                className="w-full border-2 border-gray-300 text-gray-700 py-4 px-8 rounded-full text-lg font-semibold hover:border-gray-400 transition-all"
              >
                View All Services
              </button>
            </div>

            <p className="text-sm text-gray-500 mt-6">✅ Recommendation saved and sent to {formData.email}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl">×</button>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Question {step} of {totalSteps}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-orange-600 to-amber-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Questions */}
        <div className="min-h-[300px]">
          {step === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What's your primary challenge or area you'd like to address?</h3>
              <textarea
                value={formData.challenge}
                onChange={(e) => handleChange('challenge', e.target.value)}
                placeholder="E.g., I struggle with stress and anxiety at work..."
                className="w-full border-2 border-gray-300 rounded-lg p-4 h-32 focus:border-orange-500 focus:outline-none"
              />
            </div>
          )}

          {step === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How long have you been experiencing this challenge?</h3>
              <div className="space-y-3">
                {['Less than 3 months', '3-6 months', '6-12 months', 'Over a year'].map(option => (
                  <label key={option} className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.duration === option ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'}`}>
                    <input
                      type="radio"
                      name="duration"
                      value={option}
                      checked={formData.duration === option}
                      onChange={(e) => handleChange('duration', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What have you tried so far to address it?</h3>
              <textarea
                value={formData.triedBefore}
                onChange={(e) => handleChange('triedBefore', e.target.value)}
                placeholder="E.g., Meditation, therapy, medication, lifestyle changes..."
                className="w-full border-2 border-gray-300 rounded-lg p-4 h-32 focus:border-orange-500 focus:outline-none"
              />
            </div>
          )}

          {step === 4 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">On a scale of 1-10, how would you rate your current life satisfaction?</h3>
              <div className="py-8">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={formData.lifeSatisfaction}
                  onChange={(e) => handleChange('lifeSatisfaction', e.target.value)}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1 (Low)</span>
                  <span className="text-3xl font-bold text-orange-600">{formData.lifeSatisfaction}</span>
                  <span>10 (High)</span>
                </div>
              </div>
            </div>
          )}

          {step === 5 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What is your healing goal?</h3>
              <textarea
                value={formData.healingGoal}
                onChange={(e) => handleChange('healingGoal', e.target.value)}
                placeholder="E.g., Find inner peace, improve relationships, increase abundance..."
                className="w-full border-2 border-gray-300 rounded-lg p-4 h-32 focus:border-orange-500 focus:outline-none"
              />
            </div>
          )}

          {step === 6 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Do you experience recurring dreams or patterns?</h3>
              <div className="space-y-3">
                {['Yes', 'No'].map(option => (
                  <label key={option} className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.recurringDreams === option ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'}`}>
                    <input
                      type="radio"
                      name="recurringDreams"
                      value={option}
                      checked={formData.recurringDreams === option}
                      onChange={(e) => handleChange('recurringDreams', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {step === 7 && formData.recurringDreams === 'Yes' && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Please describe your recurring dreams or patterns</h3>
              <textarea
                value={formData.dreamDescription}
                onChange={(e) => handleChange('dreamDescription', e.target.value)}
                placeholder="Describe the patterns you've noticed..."
                className="w-full border-2 border-gray-300 rounded-lg p-4 h-32 focus:border-orange-500 focus:outline-none"
              />
            </div>
          )}

          {((step === 7 && formData.recurringDreams === 'No') || (step === 8 && formData.recurringDreams === 'Yes')) && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How urgent is this matter for you?</h3>
              <div className="space-y-3">
                {['Very urgent', 'Somewhat urgent', 'Not urgent', 'Just exploring'].map(option => (
                  <label key={option} className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.urgency === option ? 'border-orange-500 bg-orange-50' : 'border-gray-300 hover:border-gray-400'}`}>
                    <input
                      type="radio"
                      name="urgency"
                      value={option}
                      checked={formData.urgency === option}
                      onChange={(e) => handleChange('urgency', e.target.value)}
                      className="mr-3"
                    />
                    <span className="font-medium">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          )

          {step === 9 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">What would a successful resolution look like for you?</h3>
              <textarea
                value={formData.successVision}
                onChange={(e) => handleChange('successVision', e.target.value)}
                placeholder="Describe your ideal outcome..."
                className="w-full border-2 border-gray-300 rounded-lg p-4 h-32 focus:border-orange-500 focus:outline-none"
              />
            </div>
          )}

          {step === 10 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Where should we send your personalized recommendation?</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Your Name *"
                  className="w-full border-2 border-gray-300 rounded-lg p-4 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="Your Email *"
                  className="w-full border-2 border-gray-300 rounded-lg p-4 focus:border-orange-500 focus:outline-none"
                />
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleChange('phone', e.target.value)}
                  placeholder="Your Phone (Optional)"
                  className="w-full border-2 border-gray-300 rounded-lg p-4 focus:border-orange-500 focus:outline-none"
                />
              </div>
              <p className="text-sm text-gray-500 mt-4">🔒 Your information is confidential and will never be shared.</p>
            </div>
          )}

          {step === 11 && (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Almost Done!</h3>
              <p className="text-lg text-gray-600 mb-6">Click below to get your personalized abundance roadmap</p>
            </div>
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:border-gray-400 transition-all"
            >
              ← Back
            </button>
          )}
          <button
            onClick={nextStep}
            disabled={!canProgress() || loading}
            className={`flex-1 py-3 px-6 rounded-full font-semibold transition-all ${
              canProgress() && !loading
                ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white hover:from-orange-700 hover:to-amber-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {loading ? 'Analyzing...' : step === totalSteps ? '✨ Get My Recommendation' : 'Next →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AbundanceQuiz;
