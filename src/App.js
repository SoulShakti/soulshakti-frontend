import React, { useState } from 'react';
import { Sun, Heart, Users, Calendar, CheckCircle, ArrowRight, Mail, Phone, Clock, Star } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Main App Component
export default function App() {
  const [currentView, setCurrentView] = useState('landing');
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [assessmentAnswers, setAssessmentAnswers] = useState({});
  const [bookingStep, setBookingStep] = useState(0);
  const [bookingData, setBookingData] = useState({});

  const resetToHome = () => {
    setCurrentView('landing');
    setAssessmentStep(0);
    setBookingStep(0);
    setAssessmentAnswers({});
    setBookingData({});
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {currentView === 'landing' && <LandingPage setCurrentView={setCurrentView} />}
      {currentView === 'assessment' && (
        <AssessmentFlow
          step={assessmentStep}
          setStep={setAssessmentStep}
          answers={assessmentAnswers}
          setAnswers={setAssessmentAnswers}
          setCurrentView={setCurrentView}
          resetToHome={resetToHome}
        />
      )}
      {currentView === 'booking' && (
        <BookingFlow
          step={bookingStep}
          setStep={setBookingStep}
          data={bookingData}
          setData={setBookingData}
          setCurrentView={setCurrentView}
          resetToHome={resetToHome}
        />
      )}
    </div>
  );
}

// Landing Page Component
function LandingPage({ setCurrentView }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-orange-600 via-amber-500 to-orange-400 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
               style={{
                 background: 'repeating-conic-gradient(from 0deg, transparent 0deg 2deg, rgba(255,255,255,0.3) 2deg 4deg)',
               }}>
          </div>
        </div>

        <nav className="relative z-10 container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sun className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold">Soul Shakti</span>
          </div>
          <button
            onClick={() => setCurrentView('booking')}
            className="bg-white text-orange-600 px-6 py-2 rounded-full font-semibold hover:bg-orange-50 transition-all"
          >
            Book Session
          </button>
        </nav>

        <div className="relative z-10 container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Awaken Your Divine Shakti 🦁
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-orange-50">
            Transform Your Life with Maa Durga's Blessings
          </p>
          <p className="text-lg mb-8 text-orange-100 max-w-2xl mx-auto">
            Founded by Nagesh - Certified Life Coach specializing in Gratitude Healing, 
            Subconscious Reprogramming, and Integrated Divine Practices
          </p>
          <button
            onClick={() => setCurrentView('assessment')}
            className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-2xl"
          >
            Begin Your Divine Journey →
          </button>
        </div>
      </header>

      {/* Services Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-orange-900">
          Divine Healing Services 🙏
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Blessed practices to awaken your inner strength and divine energy
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-12 h-12 text-orange-600" />,
              title: "Gratitude Healing",
              description: "Transform your life through the divine power of gratitude and appreciation"
            },
            {
              icon: <Users className="w-12 h-12 text-orange-600" />,
              title: "Subconscious Reprogramming",
              description: "Release limiting beliefs with Maa Durga's empowering energy"
            },
            {
              icon: <Sun className="w-12 h-12 text-orange-600" />,
              title: "Energy Healing",
              description: "Align your chakras and awaken your divine Shakti power"
            },
            {
              icon: <Calendar className="w-12 h-12 text-orange-600" />,
              title: "Life Purpose Coaching",
              description: "Discover your dharma and live with divine purpose"
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-orange-600" />,
              title: "Stress & Anxiety Relief",
              description: "Find inner peace through sacred healing practices"
            },
            {
              icon: <Star className="w-12 h-12 text-orange-600" />,
              title: "Relationship Healing",
              description: "Transform relationships with compassion and divine love"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100 hover:border-orange-300">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-orange-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gradient-to-r from-orange-100 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-orange-900">
            Divine Healing Packages ✨
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Choose your path to transformation
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Single Session",
                price: "₹2,999",
                features: [
                  "60-minute one-on-one session",
                  "Personalized healing plan",
                  "Follow-up support (7 days)",
                  "Guided meditation recording"
                ]
              },
              {
                name: "Transformation Package",
                price: "₹14,999",
                popular: true,
                features: [
                  "6 sessions (twice weekly)",
                  "Comprehensive assessment",
                  "Daily check-ins via WhatsApp",
                  "Lifetime community access",
                  "Bonus: Energy healing session"
                ]
              },
              {
                name: "Divine Journey",
                price: "₹28,999",
                features: [
                  "12 sessions (3 months)",
                  "Complete life transformation",
                  "24/7 priority support",
                  "Monthly energy healing",
                  "Personalized rituals & practices"
                ]
              }
            ].map((pkg, index) => (
              <div key={index} className={`bg-white p-8 rounded-2xl shadow-xl ${pkg.popular ? 'ring-4 ring-orange-500 transform scale-105' : ''}`}>
                {pkg.popular && (
                  <div className="bg-orange-500 text-white text-sm font-bold py-1 px-4 rounded-full inline-block mb-4">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2 text-orange-900">{pkg.name}</h3>
                <div className="text-4xl font-bold mb-6 text-orange-600">{pkg.price}</div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => setCurrentView('booking')}
                  className={`w-full py-3 rounded-full font-bold transition-all ${
                    pkg.popular
                      ? 'bg-orange-600 text-white hover:bg-orange-700'
                      : 'bg-orange-100 text-orange-600 hover:bg-orange-200'
                  }`}
                >
                  Choose Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
          Nagesh's Divine Journey 🦁
        </h2>

        <div className="max-w-3xl mx-auto space-y-8">
          {[
            {
              year: "2015",
              title: "The Awakening",
              description: "Discovered the transformative power of gratitude healing after personal life challenges"
            },
            {
              year: "2017",
              title: "Certification & Training",
              description: "Completed advanced certifications in life coaching and energy healing practices"
            },
            {
              year: "2019",
              title: "Divine Connection",
              description: "Deepened spiritual practice through Maa Durga's blessings and sacred rituals"
            },
            {
              year: "2021",
              title: "Soul Shakti Founded",
              description: "Established Soul Shakti Wellness to share divine healing with the world"
            },
            {
              year: "2025",
              title: "1000+ Lives Transformed",
              description: "Blessed to guide thousands on their journey to inner peace and divine purpose"
            }
          ].map((milestone, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                {index < 4 && <div className="w-1 h-full bg-orange-300"></div>}
              </div>
              <div className="pb-8">
                <div className="text-orange-600 font-bold">{milestone.year}</div>
                <h3 className="text-xl font-bold mb-2 text-orange-900">{milestone.title}</h3>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-to-r from-orange-50 to-amber-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-orange-900">
            Divine Transformations 🌟
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Priya S.",
                text: "Nagesh's gratitude healing sessions transformed my life completely. The divine energy I felt was incredible!",
                rating: 5
              },
              {
                name: "Rahul M.",
                text: "After 6 sessions, I found my true purpose. The Maa Durga blessings are real and powerful!",
                rating: 5
              },
              {
                name: "Anjali K.",
                text: "Soul Shakti helped me heal from years of anxiety. I feel blessed and empowered now!",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="font-bold text-orange-900">{testimonial.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6 text-orange-900">
          Ready to Awaken Your Divine Shakti? 🦁
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Begin your transformation journey with Maa Durga's blessings
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={() => setCurrentView('assessment')}
            className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-700 transition-all transform hover:scale-105 shadow-xl"
          >
            Take Free Assessment
          </button>
          <button
            onClick={() => setCurrentView('booking')}
            className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-orange-50 transition-all"
          >
            Book Your Session
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-orange-600 to-amber-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sun className="w-8 h-8" />
            <span className="text-2xl font-bold">Soul Shakti Wellness</span>
          </div>
          <p className="mb-4">Founded by Nagesh - Divine Healing & Life Transformation</p>
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:soulshaktie@gmail.com" className="flex items-center gap-2 hover:text-orange-200">
              <Mail className="w-5 h-5" />
              soulshaktie@gmail.com
            </a>
          </div>
          <p className="text-orange-200">© 2025 Soul Shakti Wellness. Blessed with Maa Durga's divine grace 🙏</p>
        </div>
      </footer>
    </div>
  );
}

// Assessment Flow Component
function AssessmentFlow({ step, setStep, answers, setAnswers, setCurrentView, resetToHome }) {
  const [contactInfo, setContactInfo] = useState({});
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: 1,
      text: "How do you feel about your current life situation?",
      type: "multiple",
      options: [
        "Very satisfied and fulfilled",
        "Generally happy but seeking growth",
        "Feeling stuck or unfulfilled",
        "Struggling significantly"
      ]
    },
    {
      id: 2,
      text: "Rate your current stress level (1-10)",
      type: "slider",
      min: 1,
      max: 10
    },
    {
      id: 3,
      text: "What area of life needs the most attention?",
      type: "multiple",
      options: [
        "Career & Purpose",
        "Relationships & Love",
        "Health & Wellbeing",
        "Spiritual Growth",
        "Financial Abundance"
      ]
    },
    {
      id: 4,
      text: "How often do you practice gratitude?",
      type: "multiple",
      options: [
        "Daily - it's part of my routine",
        "Sometimes - when I remember",
        "Rarely - I should do it more",
        "Never - I don't know how"
      ]
    },
    {
      id: 5,
      text: "Describe your biggest challenge in one sentence:",
      type: "textarea"
    },
    {
      id: 6,
      text: "Rate your connection to your inner self (1-10)",
      type: "slider",
      min: 1,
      max: 10
    },
    {
      id: 7,
      text: "What would transformation mean for you?",
      type: "textarea"
    },
    {
      id: 8,
      text: "Are you ready to commit to your divine healing journey?",
      type: "multiple",
      options: [
        "Yes, absolutely ready to transform!",
        "Yes, but need guidance on next steps",
        "Maybe, want to learn more first",
        "Not sure yet, just exploring"
      ]
    }
  ];

  const handleNext = () => {
    if (step < questions.length) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    
    setTimeout(() => {
      const analysis = generateAnalysis(answers);
      setResults(analysis);
      setLoading(false);
    }, 2000);
  };

  const generateAnalysis = (answers) => {
    const stressLevel = parseInt(answers[2]) || 5;
    const selfConnection = parseInt(answers[6]) || 5;
    
    const score = Math.max(50, Math.min(100, 100 - (stressLevel * 5) + (selfConnection * 5)));

    return {
      overallScore: score,
      primaryFocus: answers[3] || "Spiritual Growth & Inner Peace",
      recommendations: [
        "Begin daily gratitude practice with Maa Durga's blessings",
        "Schedule regular meditation and energy healing sessions",
        "Work on subconscious reprogramming for limiting beliefs",
        "Join our transformation package for comprehensive healing"
      ],
      nextSteps: [
        "Book a free 15-minute consultation call",
        "Join our divine community WhatsApp group",
        "Start the 7-day gratitude challenge",
        "Schedule your first transformation session"
      ]
    };
  };

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="text-center mb-8">
              <Sun className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-orange-900 mb-2">
                Your Divine Assessment Results 🙏
              </h2>
              <p className="text-gray-600">Blessed with Maa Durga's guidance</p>
            </div>

            <div className="mb-8">
              <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-xl p-6 mb-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-orange-600 mb-2">{results.overallScore}%</div>
                  <div className="text-gray-700">Divine Readiness Score</div>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Primary Focus Area</h3>
                <p className="text-gray-700 bg-orange-50 p-4 rounded-lg">{results.primaryFocus}</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold text-orange-900 mb-3">Personalized Recommendations</h3>
                <ul className="space-y-2">
                  {results.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-orange-900 mb-3">Your Next Steps</h3>
                <ul className="space-y-2">
                  {results.nextSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <ArrowRight className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setCurrentView('booking')}
                className="flex-1 bg-orange-600 text-white py-4 rounded-full font-bold hover:bg-orange-700 transition-all"
              >
                Book Your First Session
              </button>
              <button
                onClick={resetToHome}
                className="flex-1 bg-orange-100 text-orange-600 py-4 rounded-full font-bold hover:bg-orange-200 transition-all"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Sun className="w-16 h-16 text-orange-600 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-orange-900 mb-2">
            Analyzing Your Divine Path... 🙏
          </h2>
          <p className="text-gray-600">Connecting with Maa Durga's wisdom</p>
        </div>
      </div>
    );
  }

  if (step >= questions.length) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <h2 className="text-3xl font-bold text-orange-900 mb-6 text-center">
              Contact Information 📧
            </h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                <input
                  type="text"
                  value={contactInfo.name || ''}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={contactInfo.email || ''}
                  onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                  className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={contactInfo.phone || ''}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
            </div>

            <button
              onClick={handleSubmit}
              disabled={!contactInfo.name || !contactInfo.email || !contactInfo.phone}
              className="w-full bg-orange-600 text-white py-4 rounded-full font-bold hover:bg-orange-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Get My Divine Assessment Results 🙏
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[step];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-orange-900">Question {step + 1} of {questions.length}</span>
            <span className="text-sm text-gray-600">{Math.round(((step + 1) / questions.length) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-orange-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-600 to-amber-500 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((step + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          <h2 className="text-2xl font-bold text-orange-900 mb-6">
            {currentQuestion.text}
          </h2>

          {currentQuestion.type === 'multiple' && (
            <div className="space-y-3">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setAnswers({...answers, [currentQuestion.id]: option});
                    handleNext();
                  }}
                  className="w-full text-left p-4 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition-all"
                >
                  {option}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'slider' && (
            <div>
              <input
                type="range"
                min={currentQuestion.min}
                max={currentQuestion.max}
                value={answers[currentQuestion.id] || 5}
                onChange={(e) => setAnswers({...answers, [currentQuestion.id]: e.target.value})}
                className="w-full h-3 bg-orange-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="text-center mt-4">
                <span className="text-4xl font-bold text-orange-600">{answers[currentQuestion.id] || 5}</span>
              </div>
              <button
                onClick={handleNext}
                className="w-full mt-6 bg-orange-600 text-white py-3 rounded-full font-bold hover:bg-orange-700 transition-all"
              >
                Continue →
              </button>
            </div>
          )}

          {currentQuestion.type === 'textarea' && (
            <div>
              <textarea
                value={answers[currentQuestion.id] || ''}
                onChange={(e) => setAnswers({...answers, [currentQuestion.id]: e.target.value})}
                className="w-full border-2 border-orange-200 rounded-lg p-4 h-32 focus:border-orange-500 focus:outline-none"
                placeholder="Share your thoughts..."
              />
              <button
                onClick={handleNext}
                disabled={!answers[currentQuestion.id]}
                className="w-full mt-4 bg-orange-600 text-white py-3 rounded-full font-bold hover:bg-orange-700 transition-all disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </div>
          )}

          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 text-orange-600 hover:text-orange-700 font-semibold"
            >
              ← Previous Question
            </button>
          )}
        </div>

        <button
          onClick={resetToHome}
          className="mt-6 text-gray-600 hover:text-gray-800 mx-auto block"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

// Booking Flow Component
function BookingFlow({ step, setStep, data, setData, setCurrentView, resetToHome }) {
  const [processing, setProcessing] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const services = [
    { name: "Single Session", price: 2999, duration: "60 min" },
    { name: "Transformation Package (6 sessions)", price: 14999, duration: "3 weeks" },
    { name: "Divine Journey (12 sessions)", price: 28999, duration: "3 months" },
    { name: "Energy Healing Session", price: 3999, duration: "90 min" }
  ];

  const handlePayment = () => {
    setProcessing(true);
    setTimeout(() => {
      setConfirmed(true);
      setProcessing(false);
    }, 2000);
  };

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-orange-900 mb-4">
              Booking Confirmed! 🙏
            </h2>
            <p className="text-gray-600 mb-6">
              Your divine transformation journey begins! Blessed with Maa Durga's grace.
            </p>
            
            <div className="bg-orange-50 rounded-xl p-6 mb-6">
              <div className="text-sm text-gray-600 mb-2">Booking Reference</div>
              <div className="text-2xl font-bold text-orange-900 mb-4">
                SSW-{Math.random().toString(36).substr(2, 9).toUpperCase()}
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <div className="text-sm text-gray-600">Service</div>
                  <div className="font-semibold text-orange-900">{data.service}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Date & Time</div>
                  <div className="font-semibold text-orange-900">{data.date} at {data.time}</div>
                </div>
              </div>
            </div>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800">
                ✓ Confirmation email sent to <strong>{data.email}</strong>
              </p>
            </div>

            <button
              onClick={resetToHome}
              className="w-full bg-orange-600 text-white py-4 rounded-full font-bold hover:bg-orange-700 transition-all"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (processing) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white flex items-center justify-center">
        <div className="text-center">
          <Sun className="w-16 h-16 text-orange-600 animate-spin mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-orange-900 mb-2">Processing Your Booking... 🙏</h2>
          <p className="text-gray-600">Securing your divine appointment</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="mb-8">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-orange-900">Step {step + 1} of 5</span>
            <span className="text-sm text-gray-600">{Math.round(((step + 1) / 5) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-orange-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-orange-600 to-amber-500 h-3 rounded-full transition-all"
              style={{ width: `${((step + 1) / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {step === 0 && (
            <div>
              <h2 className="text-2xl font-bold text-orange-900 mb-6">Select Your Service</h2>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setData({...data, service: service.name, price: service.price});
                      setStep(1);
                    }}
                    className="w-full text-left p-4 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition-all"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-orange-900">{service.name}</div>
                        <div className="text-sm text-gray-600">{service.duration}</div>
                      </div>
                      <div className="text-xl font-bold text-orange-600">₹{service.price.toLocaleString()}</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div>
              <h2 className="text-2xl font-bold text-orange-900 mb-6">Choose Date & Time</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Date</label>
                  <input
                    type="date"
                    value={data.date || ''}
                    onChange={(e) => setData({...data, date: e.target.value})}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Preferred Time</label>
                  <select
                    value={data.time || ''}
                    onChange={(e) => setData({...data, time: e.target.value})}
                    className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                  >
                    <option value="">Select time...</option>
                    <option value="09:00 AM">09:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="02:00 PM">02:00 PM</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:00 PM">06:00 PM</option>
                  </select>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!data.date || !data.time}
                  className="w-full bg-orange-600 text-white py-3 rounded-full font-bold hover:bg-orange-700 transition-all disabled:bg-gray-300"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-bold text-orange-900 mb-6">Session Format</h2>
              <div className="space-y-3">
                {['Online (Zoom/Google Meet)', 'Phone Call'].map((format, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setData({...data, format: format});
                      setStep(3);
                    }}
                    className="w-full text-left p-4 rounded-lg border-2 border-orange-200 hover:border-orange-500 hover:bg-orange-50 transition-all"
                  >
                    {format}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-bold text-orange-900 mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    value={data.name || ''}
                    onChange={(e) => setData({...data, name: e.target.value})}
                    className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    value={data.email || ''}
                    onChange={(e) => setData({...data, email: e.target.value})}
                    className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone</label>
                  <input
                    type="tel"
                    value={data.phone || ''}
                    onChange={(e) => setData({...data, phone: e.target.value})}
                    className="w-full border-2 border-orange-200 rounded-lg p-3 focus:border-orange-500 focus:outline-none"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <button
                  onClick={() => setStep(4)}
                  disabled={!data.name || !data.email || !data.phone}
                  className="w-full bg-orange-600 text-white py-3 rounded-full font-bold hover:bg-orange-700 transition-all disabled:bg-gray-300"
                >
                  Continue →
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-2xl font-bold text-orange-900 mb-6">Confirm & Pay</h2>
              
              <div className="bg-orange-50 rounded-xl p-6 mb-6">
                <h3 className="font-bold text-orange-900 mb-4">Booking Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service:</span>
                    <span className="font-semibold text-orange-900">{data.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time:</span>
                    <span className="font-semibold text-orange-900">{data.date} at {data.time}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Format:</span>
                    <span className="font-semibold text-orange-900">{data.format}</span>
                  </div>
                  <div className="border-t-2 border-orange-200 mt-4 pt-4 flex justify-between text-xl">
                    <span className="font-bold text-orange-900">Total:</span>
                    <span className="font-bold text-orange-600">₹{data.price?.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={handlePayment}
                  className="w-full bg-orange-600 text-white py-4 rounded-full font-bold hover:bg-orange-700 transition-all"
                >
                  Pay Now with Razorpay - ₹{data.price?.toLocaleString()}
                </button>
                
                <button
                  onClick={handlePayment}
                  className="w-full bg-orange-100 text-orange-600 border-2 border-orange-600 py-4 rounded-full font-bold hover:bg-orange-200 transition-all"
                >
                  Book Now, Pay After Session
                </button>
              </div>

              <p className="text-sm text-gray-600 text-center mt-4">
                🔒 Secure payment powered by Razorpay
              </p>
            </div>
          )}

          {step > 0 && step < 4 && (
            <button
              onClick={() => setStep(step - 1)}
              className="mt-4 text-orange-600 hover:text-orange-700 font-semibold"
            >
              ← Previous Step
            </button>
          )}
        </div>

        <button
          onClick={resetToHome}
          className="mt-6 text-gray-600 hover:text-gray-800 mx-auto block"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}
