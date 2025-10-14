import React, { useState } from 'react';
import { Sun, Heart, Users, Calendar, CheckCircle, ArrowRight, Mail, Phone, Clock, Star } from 'lucide-react';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
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
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Soul Shakti
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Transform Your Life Through Pranic Healing
            </p>
            <p className="text-lg mb-12 max-w-2xl mx-auto">
              Experience the ancient art of energy healing. Clear blockages, restore balance, 
              and unlock your body's natural ability to heal itself.
            </p>
            <button
              onClick={onBookNow}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-colors inline-flex items-center gap-2"
            >
              Book Your Session <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
          Why Choose Pranic Healing?
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sun className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Energy Cleansing</h3>
            <p className="text-gray-600">
              Remove negative energies and blockages that prevent your natural healing abilities
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Emotional Balance</h3>
            <p className="text-gray-600">
              Release emotional trauma and restore inner peace and harmony
            </p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Holistic Wellness</h3>
            <p className="text-gray-600">
              Address physical, emotional, and spiritual aspects of your wellbeing
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="bg-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
            Choose Your Healing Journey
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Select the package that resonates with your healing needs
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Star className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple-700">The Divine Session</h3>
              <p className="text-gray-700 font-medium mb-2">Single Pranic Healing Session</p>
              <p className="text-3xl font-bold text-purple-600 mb-4">₹1,111</p>
              <p className="text-gray-600">Experience the transformative power of Pranic Healing in a personalized one-on-one session.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">50% OFF</span>
              </div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple-700">The Divine Journey</h3>
              <p className="text-gray-700 font-medium mb-2">6 Sessions Package</p>
              <div className="mb-4">
                <span className="text-lg text-gray-400 line-through mr-2">₹6,666</span>
                <span className="text-3xl font-bold text-purple-600">₹3,333</span>
              </div>
              <p className="text-gray-600">Comprehensive healing journey for deep transformation and lasting change.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-2 border-purple-500 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-bold">50% OFF</span>
              </div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-purple-700">The Divine Transformation</h3>
              <p className="text-gray-700 font-medium mb-2">11 Sessions Package</p>
              <div className="mb-4">
                <span className="text-lg text-gray-400 line-through mr-2">₹11,111</span>
                <span className="text-3xl font-bold text-purple-600">₹5,555</span>
              </div>
              <p className="text-gray-600">Complete healing transformation program for profound spiritual growth.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={onBookNow}
              className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors inline-flex items-center gap-2"
            >
              Book Your Healing Session <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <a href="mailto:contact@soulshakti.in" className="text-purple-600 font-semibold hover:underline">
                  contact@soulshakti.in
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <a href="tel:+919876543210" className="text-purple-600 font-semibold hover:underline">
                  +91 98765 43210
                </a>
              </div>
            </div>
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
      description: 'Experience the transformative power of Pranic Healing'
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
      description: 'Comprehensive healing journey for deep transformation'
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
      description: 'Complete healing transformation program'
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
      const response = await fetch(`${API_URL}/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service: selectedService.name,
          date: selectedDate,
          time: selectedTime,
          ...formData
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Booking failed');
      }

      setSuccess(true);
    } catch (err) {
      setError(err.message || 'Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Booking Confirmed!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for booking with Soul Shakti. We've sent a confirmation email to {formData.email}.
          </p>
          <div className="bg-purple-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-semibold mb-3 text-purple-800">Booking Details:</h3>
            <div className="space-y-2 text-sm">
              <p><span className="text-gray-600">Service:</span> <span className="font-medium">{selectedService.displayName}</span></p>
              <p><span className="text-gray-600">Date:</span> <span className="font-medium">{selectedDate}</span></p>
              <p><span className="text-gray-600">Time:</span> <span className="font-medium">{selectedTime}</span></p>
              <p><span className="text-gray-600">Duration:</span> <span className="font-medium">{selectedService.duration} minutes</span></p>
            </div>
          </div>
          <button
            onClick={onBack}
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
          className="mb-8 text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2"
        >
          ← Back to Home
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Progress Steps */}
          <div className="bg-purple-50 px-8 py-6">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {[1, 2, 3, 4].map((s) => (
                <React.Fragment key={s}>
                  <div className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= s ? 'bg-purple-600 text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {s}
                    </div>
                  </div>
                  {s < 4 && (
                    <div className={`flex-1 h-1 mx-4 ${
                      step > s ? 'bg-purple-600' : 'bg-gray-200'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="p-8">
            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
                {error}
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
                          ? 'border-purple-500 bg-purple-50' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-bold text-xl text-purple-700 mb-1">{service.displayName}</h3>
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
                          <p className="text-2xl font-bold text-purple-600">₹{service.price}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{service.description}</p>
                      {service.sessions > 1 && (
                        <p className="text-sm font-semibold text-purple-600">
                          {service.sessions} Sessions • {service.discount}% OFF
                        </p>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setStep(2)}
                  disabled={!selectedService}
                  className="mt-8 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
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
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
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
                    className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
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
                          ? 'border-purple-500 bg-purple-50 text-purple-700'
                          : 'border-gray-200 hover:border-purple-300 text-gray-700'
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
                    className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
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
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
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
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      placeholder="+91 98765 43210"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message (Optional)</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-purple-500 focus:outline-none"
                      rows="4"
                      placeholder="Any special requests or information we should know?"
                    />
                  </div>
                </div>

                {/* Summary */}
                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h3 className="font-semibold mb-4 text-purple-800">Booking Summary</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="text-gray-600">Service:</span> <span className="font-medium">{selectedService.displayName}</span></p>
                    <p><span className="text-gray-600">Date:</span> <span className="font-medium">{selectedDate}</span></p>
                    <p><span className="text-gray-600">Time:</span> <span className="font-medium">{selectedTime}</span></p>
                    <p><span className="text-gray-600">Duration:</span> <span className="font-medium">{selectedService.duration} minutes</span></p>
                    <div className="pt-2 border-t border-purple-200">
                      <p className="text-lg"><span className="text-gray-600">Total:</span> <span className="font-bold text-purple-600">₹{selectedService.price}</span></p>
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
                    className="flex-1 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    {loading ? 'Booking...' : 'Confirm Booking'}
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
