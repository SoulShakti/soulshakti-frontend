import React, { useState } from 'react';
import { Sun, Heart, Users, Calendar, CheckCircle, ArrowRight, Mail, Phone, Clock, Star, Brain, Moon, Sparkles, Zap } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {currentView === 'home' ? (
        <LandingPage onBookNow={() => setCurrentView('booking')} />
      ) : (
        <BookingFlow onBack={() => setCurrentView('home')} />
      )}
    </div>
  );
}

function LandingPage({ onBookNow }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%]"
               style={{
                 background: 'repeating-conic-gradient(from 0deg, transparent 0deg 2deg, rgba(255,255,255,0.3) 2deg 4deg)',
               }}>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soul Shakti 🦁
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-orange-100">
              Transform Your Life Through Gratitude
            </p>
            <p className="text-lg mb-8 text-orange-50 max-w-2xl mx-auto">
              Founded by Nagesh UG - Certified Life Coach specializing in Gratitude Healing, 
              Subconscious Reprogramming, and Integrated Divine Practices
            </p>
            <p className="text-md mb-12 text-orange-100">
              1000+ Lives Transformed | 9+ Years of Practice | 100% Dedicated to Your Growth
            </p>
            <button
              onClick={onBookNow}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2 shadow-xl"
            >
              Start Your Transformation <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Services Designed for Your Transformation
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Experience profound healing through Nagesh's unique integrated approach
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Gratitude Healing */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-3xl">🙏</span>
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-900">Gratitude Healing</h3>
            <p className="text-2xl font-bold text-orange-600 mb-3">₹1,111</p>
            <p className="text-gray-600 text-sm">
              Experience the life-changing power of gratitude. Through structured healing sessions, 
              we'll unlock abundance, joy, and transformation in every area of your life using proven gratitude techniques.
            </p>
          </div>

          {/* Subconscious Digging */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Brain className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-900">Subconscious Digging Sessions</h3>
            <p className="text-2xl font-bold text-orange-600 mb-3">₹1,111</p>
            <p className="text-gray-600 text-sm">
              Dive deep into your subconscious mind to uncover hidden beliefs and patterns that hold you back. 
              Through gentle digging techniques, we identify and transform these programs at their source.
            </p>
          </div>

          {/* Advanced Healing */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Zap className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-900">Advanced Healing Techniques</h3>
            <p className="text-2xl font-bold text-orange-600 mb-3">₹1,111</p>
            <p className="text-gray-600 text-sm">
              Utilizing theta-inspired methods and deep subconscious work, we access altered states of consciousness 
              to facilitate rapid transformation. Release emotional blockages and heal past trauma.
            </p>
          </div>

          {/* Life Coaching */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-900">Life Coaching & Counseling</h3>
            <p className="text-2xl font-bold text-orange-600 mb-3">₹1,111</p>
            <p className="text-gray-600 text-sm">
              Receive certified life coaching support with compassionate counseling to navigate life's challenges, 
              set empowering goals, and create sustainable positive change in your daily life.
            </p>
          </div>

          {/* Dream Interpretation */}
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
              <Moon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-900">Dream Interpretation</h3>
            <p className="text-2xl font-bold text-orange-600 mb-3">₹1,111</p>
            <p className="text-gray-600 text-sm">
              Every dream carries a message. Discover the hidden wisdom in your dreams and understand 
              what your subconscious is trying to tell you. Gain clarity and direction for your path forward.
            </p>
          </div>

          {/* Integrated Healing - FEATURED */}
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-400 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold">MOST COMPREHENSIVE</span>
            </div>
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mt-2">
              <Sparkles className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-orange-900">Integrated Healing Sessions</h3>
            <p className="text-2xl font-bold text-orange-600 mb-3">₹1,111</p>
            <p className="text-gray-600 text-sm">
              Experience Nagesh's signature healing method combining Gratitude Healing, Theta brainwave techniques, 
              and deep subconscious digging. This powerful blend allows us to access multiple levels of consciousness, 
              release emotional blockages, and reprogram limiting beliefs at their source for lasting transformation. 
              Duration: 60-90 minutes.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Packages Section */}
      <div className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Choose Your Healing Journey
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Select the package that resonates with your transformation needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Single Session */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-200">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-700">The Divine Session</h3>
              <p className="text-gray-700 font-medium mb-2">Single Healing Session</p>
              <p className="text-3xl font-bold text-orange-600 mb-4">₹1,111</p>
              <p className="text-sm text-gray-500 mb-3">60-90 minutes</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Gratitude Healing techniques</li>
                <li>✓ Subconscious Digging</li>
                <li>✓ Theta brainwave activation</li>
                <li>✓ Personalized healing plan</li>
              </ul>
            </div>

            {/* 6 Sessions Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">50% OFF</span>
              </div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-700">The Divine Journey</h3>
              <p className="text-gray-700 font-medium mb-2">6 Sessions Package</p>
              <div className="mb-4">
                <span className="text-lg text-gray-400 line-through mr-2">₹6,666</span>
                <span className="text-3xl font-bold text-orange-600">₹3,333</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Six 60-90 minute sessions</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Complete subconscious reprogramming</li>
                <li>✓ Sustained transformation</li>
                <li>✓ Weekly accountability</li>
                <li>✓ Progress tracking</li>
                <li>✓ Email support between sessions</li>
              </ul>
            </div>

            {/* 11 Sessions Package */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-orange-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">50% OFF</span>
              </div>
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-orange-700">The Divine Transformation</h3>
              <p className="text-gray-700 font-medium mb-2">11 Sessions Package</p>
              <div className="mb-4">
                <span className="text-lg text-gray-400 line-through mr-2">₹11,111</span>
                <span className="text-3xl font-bold text-orange-600">₹5,555</span>
              </div>
              <p className="text-sm text-gray-500 mb-3">Eleven 60-90 minute sessions</p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>✓ Deep subconscious transformation</li>
                <li>✓ Complete life pattern shifts</li>
                <li>✓ Priority scheduling</li>
                <li>✓ Comprehensive progress tracking</li>
                <li>✓ Extended email support</li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={onBookNow}
              className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-amber-700 transition-colors inline-flex items-center gap-2 shadow-xl"
            >
              Book Your Healing Session <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Journey Timeline */}
      <div className="bg-gradient-to-r from-orange-600 via-amber-500 to-orange-400 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">My Journey of Healing</h2>
          <p className="text-center text-orange-100 mb-12 text-lg">
            From personal transformation to empowering thousands
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">2015 - The Beginning</h3>
                <p className="text-orange-100">
                  Planted the seed of wellness and entrepreneurship. Discovered the power of Law of Attraction, 
                  gratitude healing, and spiritual growth through my own transformation journey.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Growth & Learning</h3>
                <p className="text-orange-100">
                  Upskilled through various healing modalities including gratitude healing, Theta healing techniques, 
                  and deep subconscious work. What healed me, I began sharing with others.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">During COVID-19</h3>
                <p className="text-orange-100">
                  Guided over 100 people through gratitude healing during the pandemic, helping them find peace, 
                  purpose, and stability during uncertain times.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Professional Certification</h3>
                <p className="text-orange-100">
                  Became a certified Life Coach and deepened my practice in Theta Healing to enhance my ability 
                  to facilitate profound transformation.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-600 font-bold">5</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Today</h3>
                <p className="text-orange-100">
                  Thousands of empowered individuals have transformed their lives through our integrated healing approach. 
                  Now expanding to reach even more souls ready for change.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Real Transformations, Real People
        </h2>
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold text-lg">
            1000+ Clients Healed | 9+ Years Experience | Certified Life Coach
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-gray-700 mb-4">
              "The gratitude healing sessions with Nagesh completely shifted my perspective. I went from feeling 
              stuck and resentful to grateful and abundant. Within weeks, opportunities started flowing into my life."
            </p>
            <p className="text-sm text-gray-600 font-semibold">— Anjali K., Bangalore</p>
            <p className="text-xs text-gray-500">Financial Struggles</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-gray-700 mb-4">
              "I had recurring nightmares for years. Nagesh's dream interpretation revealed patterns I never connected. 
              The healing work that followed released trauma I didn't know I was carrying."
            </p>
            <p className="text-sm text-gray-600 font-semibold">— Vikram P., Delhi</p>
            <p className="text-xs text-gray-500">Recurring Nightmares</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-gray-700 mb-4">
              "As someone who tried therapy for years, I was amazed at how quickly Nagesh's subconscious digging 
              got to the root. The combination of gratitude and theta techniques created shifts I'd been seeking for a decade."
            </p>
            <p className="text-sm text-gray-600 font-semibold">— Meera J., Pune</p>
            <p className="text-xs text-gray-500">Anxiety & Past Trauma</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-gray-700 mb-4">
              "Nagesh doesn't just heal you, he empowers you with tools to continue your own healing. 
              The gratitude practices he taught me have become a daily ritual that keeps me grounded and positive."
            </p>
            <p className="text-sm text-gray-600 font-semibold">— Arjun M., Hyderabad</p>
            <p className="text-xs text-gray-500">Lack of Direction</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-orange-100">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />)}
            </div>
            <p className="text-gray-700 mb-4">
              "I was skeptical about 'energy healing' but Nagesh's practical, down-to-earth approach made sense. 
              The results speak for themselves—my relationship with my family has completely transformed."
            </p>
            <p className="text-sm text-gray-600 font-semibold">— Divya R., Chennai</p>
            <p className="text-xs text-gray-500">Relationship Issues</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl shadow-lg border-2 border-orange-300">
            <p className="text-gray-700 font-semibold mb-2 italic">
              "Working with Nagesh changed my life. The combination of gratitude healing and subconscious work 
              helped me break free from patterns I'd carried for years. I'm finally living the life I always dreamed of."
            </p>
            <p className="text-sm text-orange-600 font-bold">— Healing Journey Participant</p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl shadow-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Begin Your Transformation?</h2>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands who have already experienced profound healing and lasting change
            </p>
            <button
              onClick={onBookNow}
              className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2 shadow-xl"
            >
              Start Your Journey Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact & Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-orange-400">Soul Shakti</h3>
              <p className="text-gray-400">
                Founded by Nagesh UG<br />
                Certified Life Coach & Healing Practitioner
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-400" />
                  <a href="mailto:therapovo@gmail.com" className="hover:text-orange-400">
                    therapovo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <a href="#" className="block hover:text-orange-400">Privacy Policy</a>
                <a href="#" className="block hover:text-orange-400">Terms & Conditions</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 Soul Shakti Wellness. All rights reserved.</p>
          </div>
        </div>
      </div>
    </>
  );
}

function BookingFlow({ onBack }) {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const services = [
    { 
      id: 1, 
      name: 'Single Session',
      displayName: 'The Divine Session',
      duration: 60, 
      price: 1111,
      sessions: 1,
      description: 'Single Healing Session - Gratitude Healing, Subconscious Digging, Theta activation'
    },
    { 
      id: 2, 
      name: '6 Sessions Package',
      displayName: 'The Divine Journey',
      duration: 60, 
      price: 3333,
      originalPrice: 6666,
      discount: 50,
      sessions: 6,
      description: 'Six healing sessions with complete subconscious reprogramming and ongoing support'
    },
    { 
      id: 3, 
      name: '11 Sessions Package',
      displayName: 'The Divine Transformation',
      duration: 60, 
      price: 5555,
      originalPrice: 11111,
      discount: 50,
      sessions: 11,
      description: 'Eleven sessions for deep transformation and complete life pattern shifts'
    }
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleSubmit = async () => {
    setLoading(true);
    setError('');

    try {
      const bookingData = {
        service: selectedService.name,
        displayName: selectedService.displayName,
        price: selectedService.price,
        date: selectedDate,
        time: selectedTime,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      };

      console.log('Sending booking request:', bookingData);

      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      console.log('Response status:', response.status);

      const data = await response.json();
      console.log('Response data:', data);

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Booking failed. Please try again.');
      }

      setSuccess(true);
    } catch (err) {
      console.error('Booking error:', err);
      setError(err.message || 'Failed to create booking. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center border-2 border-orange-200">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for booking with Soul Shakti. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="bg-orange-50 rounded-lg p-6 mb-8 text-left border-2 border-orange-200">
            <h3 className="font-semibold mb-3 text-orange-800">Booking Details:</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Service:</span> <span className="font-medium">{selectedService.displayName}</span></p>
              <p><span className="text-gray-600">Date:</span> <span className="font-medium">{selectedDate}</span></p>
              <p><span className="text-gray-600">Time:</span> <span className="font-medium">{selectedTime}</span></p>
              <p><span className="text-gray-600">Duration:</span> <span className="font-medium">{selectedService.duration} minutes</span></p>
              <p><span className="text-gray-600">Total:</span> <span className="font-bold text-orange-600">₹{selectedService.price}</span></p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-8 text-orange-600 hover:text-orange-700 font-semibold flex items-center gap-2"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-orange-200">
          {/* Progress Steps */}
          <div className="bg-orange-50 px-8 py-6">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <React.Fragment key={s}>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {s}
                    </div>
                  </div>
                  {s < 4 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      step > s ? 'bg-orange-600' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-lg">
                <p className="text-red-700 font-semibold mb-2">⚠️ Booking Error</p>
                <p className="text-red-600 text-sm">{error}</p>
                <p className="text-red-600 text-sm mt-2">
                  If this persists, please contact us directly at therapovo@gmail.com
                </p>
              </div>
            )}

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Choose Your Service</h2>
                <div className="space-y-4">
                  {services.map((service) => (
                    <div 
                      key={service.id}
                      onClick={() => setSelectedService(service)}
                      className={`p-6 border-2 rounded-lg cursor-pointer transition-all ${
                        selectedService?.id === service.id 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-xl text-orange-700 mb-1">{service.displayName}</h3>
                          <p className="text-sm text-gray-700 font-medium">{service.name}</p>
                          <p className="text-sm text-gray-600">{service.duration} minutes</p>
                        </div>
                        <div className="text-right">
                          {service.originalPrice && (
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-sm text-gray-400 line-through">
                                ₹{service.originalPrice}
                              </span>
                              <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded font-semibold">
                                SAVE ₹{service.originalPrice - service.price}
                              </span>
                            </div>
                          )}
                          <p className="text-2xl font-bold text-orange-600">₹{service.price}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      {service.sessions > 1 && (
                        <p className="text-sm font-semibold text-orange-600">
                          {service.sessions} Sessions • {service.discount}% OFF
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="mt-8 w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Date Selection */}
            {step === 2 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Select Date</h2>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none text-lg"
                />
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!selectedDate}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Time Selection */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Select Time</h2>
                <div className="grid grid-cols-3 gap-4">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-4 border-2 rounded-lg font-semibold transition-all ${
                        selectedTime === time
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 hover:border-orange-300 text-gray-700'
                      }`}
                    >
                      <Clock className="w-5 h-5 mx-auto mb-2" />
                      {time}
                    </button>
                  ))}
                </div>
                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(2)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    disabled={!selectedTime}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Contact Information */}
            {step === 4 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-gray-800">Your Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone/WhatsApp *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      What's the main challenge you'd like to address? (Optional)
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-orange-500 focus:outline-none"
                      rows="4"
                      maxLength="500"
                      placeholder="Share what brings you to Soul Shakti..."
                    />
                    <p className="text-xs text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-orange-50 rounded-lg border-2 border-orange-200">
                  <h3 className="font-semibold mb-4 text-orange-800">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-600">Service:</span> <span className="font-medium">{selectedService.displayName}</span></p>
                    <p><span className="text-gray-600">Date:</span> <span className="font-medium">{selectedDate}</span></p>
                    <p><span className="text-gray-600">Time:</span> <span className="font-medium">{selectedTime}</span></p>
                    <p><span className="text-gray-600">Duration:</span> <span className="font-medium">{selectedService.duration} minutes</span></p>
                    {selectedService.originalPrice && (
                      <p><span className="text-gray-600">Original Price:</span> <span className="line-through text-gray-400">₹{selectedService.originalPrice}</span></p>
                    )}
                    <div className="pt-2 border-t border-orange-200">
                      <p className="text-lg"><span className="text-gray-600">Total to Pay:</span> <span className="font-bold text-orange-600">₹{selectedService.price}</span></p>
                      {selectedService.originalPrice && (
                        <p className="text-sm text-green-600 font-semibold">You save ₹{selectedService.originalPrice - selectedService.price}!</p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  <button
                    onClick={() => setStep(3)}
                    className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                    disabled={loading}
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.email || !formData.phone || loading}
                    className="flex-1 bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-lg font-semibold hover:from-orange-700 hover:to-amber-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        Processing...
                      </>
                    ) : (
                      'Confirm Booking'
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
