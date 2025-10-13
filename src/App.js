import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Star, Heart, Sparkles, Brain, Moon, CheckCircle, ArrowRight, Menu, X, Mail, Phone, MapPin, Zap } from 'lucide-react';

export default function SoulShaktiApp() {
  const [currentView, setCurrentView] = useState('landing');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [assessmentData, setAssessmentData] = useState(null);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const savedAssessments = localStorage.getItem('soulshakti_assessments');
    const savedBookings = localStorage.getItem('soulshakti_bookings');
    if (savedAssessments) console.log('Loaded assessments:', JSON.parse(savedAssessments));
    if (savedBookings) console.log('Loaded bookings:', JSON.parse(savedBookings));
  }, []);

  const scrollToAssessment = () => {
    setCurrentView('assessment');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBooking = (recommendedService = null) => {
    setBookingData({ recommendedService });
    setCurrentView('booking');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-md z-50 border-b-2 border-orange-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button 
              onClick={() => setCurrentView('landing')}
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-amber-600 bg-clip-text text-transparent flex items-center gap-2"
            >
              <Zap className="text-orange-600" size={28} />
              Soul Shakti Wellness
            </button>
            
            <div className="hidden md:flex space-x-8">
              <button onClick={() => setCurrentView('landing')} className="text-gray-700 hover:text-orange-600 transition font-medium">Home</button>
              <button onClick={scrollToAssessment} className="text-gray-700 hover:text-orange-600 transition font-medium">Assessment</button>
              <button onClick={() => scrollToBooking()} className="text-gray-700 hover:text-orange-600 transition font-medium">Book Session</button>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} className="text-orange-600" /> : <Menu size={24} className="text-orange-600" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t-2 border-orange-100">
            <div className="px-4 py-2 space-y-2">
              <button onClick={() => { setCurrentView('landing'); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">Home</button>
              <button onClick={() => { scrollToAssessment(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">Assessment</button>
              <button onClick={() => { scrollToBooking(); setMobileMenuOpen(false); }} className="block w-full text-left py-2 text-gray-700 hover:text-orange-600 font-medium">Book Session</button>
            </div>
          </div>
        )}
      </nav>

      <div className="pt-16">
        {currentView === 'landing' && <LandingPage onStartAssessment={scrollToAssessment} onBooking={scrollToBooking} />}
        {currentView === 'assessment' && <AssessmentFlow onComplete={(data) => { setAssessmentData(data); scrollToBooking(data.recommendedService); }} onBack={() => setCurrentView('landing')} />}
        {currentView === 'booking' && <BookingFlow initialService={bookingData?.recommendedService} onBack={() => setCurrentView('landing')} />}
      </div>
    </div>
  );
}

function LandingPage({ onStartAssessment, onBooking }) {
  return (
    <div className="w-full">
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 py-20"
        style={{
          background: 'linear-gradient(135deg, #fff5e6 0%, #ffe4cc 25%, #ffd4a3 50%, #ffb366 75%, #ff9933 100%)',
        }}>
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 50% 120%, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%), conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(255,153,51,0.3) 30deg, transparent 60deg, rgba(255,153,51,0.3) 90deg, transparent 120deg, rgba(255,153,51,0.3) 150deg, transparent 180deg, rgba(255,153,51,0.3) 210deg, transparent 240deg, rgba(255,153,51,0.3) 270deg, transparent 300deg, rgba(255,153,51,0.3) 330deg, transparent 360deg)',
          }}></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Zap size={64} className="text-orange-600 animate-pulse" />
              <div className="absolute inset-0 blur-xl bg-orange-400 opacity-50"></div>
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-orange-700 via-orange-600 to-amber-600 bg-clip-text text-transparent drop-shadow-lg">
            Awaken Your Inner Shakti
          </h1>
          <h2 className="text-2xl md:text-4xl mb-6 text-orange-900 font-semibold">
            Transform Through Divine Healing Energy
          </h2>
          <p className="text-lg md:text-xl mb-8 text-orange-800 max-w-2xl mx-auto font-medium leading-relaxed">
            Channel the power of Maa Durga through Gratitude Healing, Theta Healing, and Deep Subconscious Work. 
            Experience divine transformation since 2015.
          </p>
          <button 
            onClick={onStartAssessment}
            className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-10 py-5 rounded-full text-xl font-bold hover:from-orange-700 hover:to-amber-700 transition transform hover:scale-105 shadow-2xl border-2 border-orange-400"
          >
            🦁 Begin Your Divine Journey
          </button>
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-base">
            <div className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full shadow-lg">
              <Star className="text-amber-500" size={24} />
              <span className="font-bold text-orange-900">1000+ Souls Transformed</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full shadow-lg">
              <CheckCircle className="text-green-600" size={24} />
              <span className="font-bold text-orange-900">9+ Years Divine Practice</span>
            </div>
            <div className="flex items-center gap-2 bg-white/90 px-6 py-3 rounded-full shadow-lg">
              <Heart className="text-red-500" size={24} />
              <span className="font-bold text-orange-900">100% Sacred Commitment</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent">
            Divine Services for Your Transformation
          </h2>
          <p className="text-center text-orange-800 mb-12 text-lg font-medium">Guided by Nagesh with the blessings of Maa Durga</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard 
              icon="✨" title="Gratitude Healing" price="₹1,111"
              description="Experience the life-changing power of gratitude blessed by divine energy. Through structured healing sessions, unlock abundance, joy, and transformation in every area of your life using proven gratitude techniques."
            />
            <ServiceCard 
              icon="🔍" title="Subconscious Digging Sessions" price="₹1,111"
              description="Dive deep into your subconscious mind with divine guidance to uncover hidden beliefs and patterns. Through gentle digging techniques, identify and transform these programs at their source."
            />
            <ServiceCard 
              icon="⚡" title="Advanced Healing Techniques"
              description="Utilizing theta-inspired methods and deep subconscious work channeling divine shakti energy. Access altered states of consciousness to facilitate rapid transformation and release emotional blockages."
            />
            <ServiceCard 
              icon="🧭" title="Life Coaching & Counseling" price="₹1,111"
              description="Receive certified life coaching support infused with spiritual wisdom. Navigate life's challenges with divine guidance, set empowering goals, and create sustainable positive change."
            />
            <ServiceCard 
              icon="💭" title="Dream Interpretation" price="₹1,111"
              description="Every dream carries divine messages. Discover the hidden wisdom in your dreams blessed by higher consciousness. Understand what your subconscious is revealing for your path forward."
            />
            <ServiceCard 
              icon="🦁" title="Integrated Shakti Healing Sessions" badge="Most Powerful" featured={true}
              description="Experience Nagesh's signature healing method channeling Maa Durga's divine energy. Combines Gratitude Healing, Theta brainwave techniques, and deep subconscious digging. Access multiple levels of consciousness, release blockages, and reprogram limiting beliefs with divine blessings for lasting transformation."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent">
            Choose Your Divine Healing Journey
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <PricingCard 
              icon="💭" title="Dream Interpretation" price="₹1,111" duration="30-45 minutes"
              features={["Divine dream analysis", "Subconscious insights", "Spiritual guidance", "Written summary"]}
              onBook={onBooking}
            />
            <PricingCard 
              icon="✨" title="Single Healing Session" price="₹1,111" duration="60-90 minutes"
              features={["Gratitude Healing techniques", "Subconscious Digging", "Theta brainwave activation", "Personalized healing plan"]}
              onBook={onBooking}
            />
            <PricingCard 
              icon="🦁" title="3-Session Transformation Package" price="₹3,333" duration="Three 60-90 minute sessions"
              badge="Divine Transformation" highlighted={true}
              features={["Complete subconscious reprogramming", "Sustained transformation with blessings", "Weekly divine guidance", "Progress tracking", "Sacred support between sessions"]}
              note="Divine commitment creates lasting miracles"
              onBook={onBooking}
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,153,51,0.1) 35px, rgba(255,153,51,0.1) 70px)',
          }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl font-bold text-center mb-4 text-orange-900">Nagesh's Divine Journey</h2>
          <p className="text-center text-orange-800 mb-12 text-lg font-medium">From personal awakening to empowering thousands through Soul Shakti Wellness</p>
          <div className="space-y-8">
            <TimelineItem 
              year="2015 - The Sacred Beginning"
              description="Nagesh planted the seed of Soul Shakti Wellness through divine inspiration. Discovered the power of Law of Attraction, gratitude healing, and spiritual growth blessed by Maa Durga's energy."
            />
            <TimelineItem 
              year="Spiritual Growth & Learning"
              description="Deepened practice through various healing modalities including gratitude healing by Rhonda Byrne, Theta healing techniques, and sacred subconscious work. What healed through divine grace became the foundation to help others."
            />
            <TimelineItem 
              year="During COVID-19 - Divine Service"
              description="Guided over 100 souls through gratitude healing during the pandemic with divine blessings. Helped them find peace, purpose, and stability during uncertain times through Soul Shakti's sacred programs."
            />
            <TimelineItem 
              year="Professional Certification"
              description="Nagesh became a certified Life Coach and deepened practice in Theta Healing, blessed by higher consciousness to enhance the ability to facilitate profound divine transformation."
            />
            <TimelineItem 
              year="Today - Spreading Divine Light" isLast={true}
              description="Thousands of empowered souls have transformed their lives through Soul Shakti's divine approach blessed by Maa Durga. Now expanding to reach even more seekers ready for sacred transformation."
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 bg-gradient-to-r from-orange-700 to-amber-600 bg-clip-text text-transparent">
            Divine Transformations, Sacred Testimonials
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12 mt-8">
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full shadow-lg">
              <CheckCircle className="text-orange-600" size={28} />
              <span className="font-bold text-lg text-orange-900">1000+ Divine Healings</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full shadow-lg">
              <Star className="text-amber-500" size={28} />
              <span className="font-bold text-lg text-orange-900">9+ Years Sacred Service</span>
            </div>
            <div className="flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 px-6 py-3 rounded-full shadow-lg">
              <Heart className="text-red-500" size={28} />
              <span className="font-bold text-lg text-orange-900">Certified with Divine Blessings</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <TestimonialCard 
              text="The gratitude healing sessions with Nagesh at Soul Shakti completely shifted my perspective with divine grace. I went from feeling stuck to grateful and abundant. Within weeks, opportunities started flowing into my life. His approach carries sacred energy."
              author="Anjali K., Bangalore" issue="Financial Struggles"
            />
            <TestimonialCard 
              text="I had recurring nightmares for years. Nagesh's dream interpretation session revealed divine patterns. The healing work that followed released trauma with sacred blessings. I sleep peacefully now thanks to Soul Shakti's divine guidance."
              author="Vikram P., Delhi" issue="Recurring Nightmares"
            />
            <TestimonialCard 
              text="As someone who tried therapy for years, I was amazed at how quickly Nagesh's subconscious digging reached the root with divine intervention. The combination of gratitude and theta techniques at Soul Shakti created miracles I'd been seeking for a decade."
              author="Meera J., Pune" issue="Anxiety & Past Trauma"
            />
            <TestimonialCard 
              text="Nagesh doesn't just heal you with techniques - he channels divine shakti energy. The gratitude practices blessed by Maa Durga's grace have become my daily spiritual ritual that keeps me grounded and divinely protected."
              author="Arjun M., Hyderabad" issue="Lack of Direction"
            />
            <TestimonialCard 
              text="I was skeptical about 'energy healing' but Nagesh's approach carries genuine divine power. The results speak for themselves—my relationship with my family has completely transformed through Soul Shakti's sacred blessings."
              author="Divya R., Chennai" issue="Relationship Issues"
            />
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-orange-100 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white text-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-20"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%)',
              }}></div>
            <div className="relative z-10">
              <Zap size={56} className="mx-auto mb-4 animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready for Divine Transformation?</h2>
              <p className="text-xl mb-8 text-orange-50">Join thousands blessed by Soul Shakti's divine healing energy and Maa Durga's grace</p>
              <button 
                onClick={onStartAssessment}
                className="bg-white text-orange-700 px-10 py-5 rounded-full text-xl font-bold hover:bg-orange-50 transition transform hover:scale-105 shadow-2xl border-2 border-orange-200"
              >
                🦁 Begin Your Divine Journey
              </button>
              <div className="border-t-2 border-orange-400 pt-8 mt-8">
                <p className="italic text-orange-50 text-lg font-medium">
                  "Working with Nagesh at Soul Shakti awakened my divine shakti energy. The combination of gratitude healing and sacred subconscious work helped me break free from patterns blessed by Maa Durga's grace. I'm finally living my divinely guided life."
                </p>
                <p className="mt-4 text-orange-100 font-semibold">— Soul Shakti Divine Journey Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-b from-orange-900 to-orange-950 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent">
                Soul Shakti Wellness
              </h3>
              <p className="text-orange-200 font-medium">Founded by Nagesh - Channeling divine transformation through Maa Durga's blessings since 2015</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-xl text-orange-300">Divine Contact</h4>
              <div className="space-y-3">
                <a href="mailto:soulshaktie@gmail.com" className="flex items-center gap-2 text-orange-200 hover:text-orange-100 transition font-medium">
                  <Mail size={20} />
                  <span>soulshaktie@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-orange-200 font-medium">
                  <MapPin size={20} />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-xl text-orange-300">Sacred Links</h4>
              <div className="space-y-2">
                <button className="block text-orange-200 hover:text-orange-100 transition font-medium">Privacy Policy</button>
                <button className="block text-orange-200 hover:text-orange-100 transition font-medium">Terms & Conditions</button>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-orange-800 pt-8 text-center text-orange-300">
            <p className="font-medium">© 2025 Soul Shakti Wellness. All rights reserved. 🦁 Blessed by Divine Grace</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, price, description, badge, featured }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition border-2 ${featured ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-white' : 'border-orange-200'}`}>
      {badge && (
        <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs px-4 py-1 rounded-full mb-3 font-bold shadow-md">
          {badge}
        </div>
      )}
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-orange-900">{title}</h3>
      {price && <p className="text-2xl font-bold text-orange-600 mb-3">{price}</p>}
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingCard({ icon, title, price, duration, features, badge, highlighted, note, onBook }) {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition border-2 ${highlighted ? 'border-orange-500 transform scale-105 bg-gradient-to-br from-orange-50 to-white' : 'border-orange-200'}`}>
      {badge && (
        <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white text-xs px-4 py-1 rounded-full mb-3 font-bold shadow-md">
          {badge}
        </div>
      )}
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-orange-900">{title}</h3>
      <p className="text-3xl font-bold text-orange-600 mb-2">{price}</p>
      <p className="text-sm text-gray-600 mb-6 font-medium">{duration}</p>
      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={20} className="text-orange-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      {note && <p className="text-sm text-orange-700 italic mb-4 font-medium">{note}</p>}
      <button 
        onClick={() => onBook(title)}
        className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-3 rounded-full font-bold hover:from-orange-700 hover:to-amber-700 transition shadow-lg"
      >
        Book Divine Session
      </button>
    </div>
  );
}

function TimelineItem({ year, description, isLast }) {
  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 flex-shrink-0 shadow-lg"></div>
        {!isLast && <div className="w-1 h-full bg-gradient-to-b from-orange-400 to-amber-400 mt-2"></div>}
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold mb-2 text-orange-900">{year}</h3>
        <p className="text-orange-800 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
}

function TestimonialCard({ text, author, issue }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-xl border-2 border-orange-200 hover:border-orange-400 transition">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={22} className="fill-amber-400 text-amber-400" />
        ))}
      </div>
      <p className="text-gray-700 mb-4 leading-relaxed font-medium">{text}</p>
      <div className="border-t-2 border-orange-100 pt-4">
        <p className="font-bold text-orange-900">{author}</p>
        <p className="text-sm text-orange-600 font-semibold">{issue}</p>
      </div>
    </div>
  );
}

function AssessmentFlow({ onComplete, onBack }) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });
  const [aiResults, setAiResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const questions = [
    { id: 'q1', question: "What's your primary challenge right now?", options: ["Anxiety, stress, or overwhelm", "Low self-worth or confidence", "Relationship difficulties", "Career blocks or lack of direction", "Past trauma that still affects me", "Feeling stuck in negative patterns", "Financial struggles or scarcity mindset", "Lack of purpose or meaning"] },
    { id: 'q2', question: "How long have you been experiencing this?", options: ["Less than 6 months", "6 months to 2 years", "2-5 years", "More than 5 years", "Most of my life"] },
    { id: 'q3', question: "What have you tried before?", options: ["Traditional therapy/counseling", "Self-help books or videos", "Meditation or mindfulness", "Other healing modalities", "Nothing yet, this is my first step"] },
    { id: 'q4', question: "Rate your current life satisfaction", type: 'slider', min: 1, max: 10 },
    { id: 'q5', question: "What does healing mean to you?", options: ["Freedom from anxiety and fear", "Understanding myself better", "Breaking free from old patterns", "Finding my life purpose", "Manifesting abundance", "Inner peace and happiness", "Healing relationships"] },
    { id: 'q6', question: "Have you experienced recurring dreams?", options: ["Yes, frequently", "Yes, occasionally", "No, rarely remember dreams"] },
    { id: 'q7', question: "How quickly are you looking to start?", options: ["Immediately - I'm ready now", "Within the next week", "Within the next month", "Just exploring options for now"] },
    { id: 'q8', question: "What would your life look like if this challenge was completely resolved?", type: 'textarea' }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
    if (step < 8) setTimeout(() => setStep(step + 1), 300);
  };

  const handleContactSubmit = () => {
    if (contactInfo.name && contactInfo.email && contactInfo.phone.match(/^\d{10}$/)) {
      setLoading(true);
      setTimeout(() => {
        const results = generateAIAnalysis(answers, contactInfo);
        setAiResults(results);
        const assessments = JSON.parse(localStorage.getItem('soulshakti_assessments') || '[]');
        assessments.push({ timestamp: new Date().toISOString(), answers, contactInfo, results });
        localStorage.setItem('soulshakti_assessments', JSON.stringify(assessments));
        setLoading(false);
        setStep('results');
      }, 2000);
    }
  };

  const generateAIAnalysis = (answers, contact) => {
    let recommendedService = "Single Healing Session";
    let servicePrice = "₹1,111";
    
    const duration = answers.q2;
    const satisfaction = parseInt(answers.q4) || 5;
    const dreams = answers.q6;
    
    if (dreams?.includes("frequently") || dreams?.includes("occasionally")) {
      recommendedService = "Dream Interpretation";
    } else if ((duration?.includes("2-5 years") || duration?.includes("More than 5") || duration?.includes("Most of my life")) && satisfaction <= 6) {
      recommendedService = "3-Session Transformation Package";
      servicePrice = "₹3,333";
    } else if (satisfaction < 3) {
      recommendedService = "3-Session Transformation Package";
      servicePrice = "₹3,333";
    }

    return {
      patternAnalysis: `Based on your responses blessed by divine insight, you're experiencing ${answers.q1?.toLowerCase() || 'challenges'} that have been affecting your life for ${answers.q2?.toLowerCase() || 'some time'}. This pattern often stems from deeply rooted subconscious beliefs. Your satisfaction level of ${answers.q4 || 'moderate'} out of 10 indicates significant room for divine transformation through Soul Shakti's sacred healing approach blessed by Maa Durga's energy.`,
      recommendedService,
      servicePrice,
      reasoning: `I recommend ${recommendedService} because ${recommendedService === "Dream Interpretation" ? "your recurring dreams carry divine messages from your subconscious. By interpreting these dreams with sacred guidance, we can unlock insights blessed by higher consciousness about the patterns holding you back." : recommendedService === "3-Session Transformation Package" ? "lasting transformation requires consistent divine work. With multiple sessions blessed by Maa Durga's energy, we can systematically uncover and reprogram the subconscious patterns through sacred healing." : "a focused single session channeling divine shakti energy can create powerful shifts. We'll combine gratitude healing, subconscious digging, and theta techniques blessed by sacred consciousness to address your specific challenge."}`,
      actionSteps: [
        { title: "Daily Gratitude Practice with Divine Blessings", description: "Begin each morning by writing down three specific things you're grateful for, offering them to Maa Durga. Be detailed and specific to channel divine abundance energy into your consciousness." },
        { title: "Sacred Subconscious Journaling", description: "Before bed, ask yourself: 'What belief kept me small today?' Write whatever comes up, then offer it to divine consciousness for transformation. This brings subconscious patterns into sacred awareness." }
      ],
      recommendedService
    };
  };

  const progressPercentage = step === 'contact' ? 90 : step === 'results' ? 100 : (step / 8) * 80;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <button onClick={onBack} className="mb-6 text-orange-600 hover:text-orange-700 flex items-center gap-2 font-bold">← Back to Home</button>

        <div className="mb-8">
          <div className="h-3 bg-orange-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-orange-600 to-amber-600 transition-all duration-500 shadow-lg" style={{ width: `${progressPercentage}%` }}></div>
          </div>
          <p className="text-sm text-orange-700 mt-2 text-center font-bold">{step === 'results' ? 'Divine Analysis Complete!' : step === 'contact' ? 'Almost there...' : `Question ${step} of 8`}</p>
        </div>

        {step <= 8 && step !== 'contact' && step !== 'results' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-orange-900">{questions[step - 1].question}</h2>
            {questions[step - 1].type === 'slider' ? (
              <div className="space-y-6">
                <input type="range" min="1" max="10" value={answers[questions[step - 1].id] || 5}
                  onChange={(e) => setAnswers({ ...answers, [questions[step - 1].id]: e.target.value })}
                  className="w-full h-3 bg-orange-100 rounded-lg appearance-none cursor-pointer accent-orange-600"
                />
                <div className="flex justify-between text-sm text-orange-700 font-bold">
                  <span>Very Dissatisfied (1)</span>
                  <span className="text-3xl font-bold text-orange-600">{answers[questions[step - 1].id] || 5}</span>
                  <span>Completely Satisfied (10)</span>
                </div>
                <button onClick={() => handleAnswer(questions[step - 1].id, answers[questions[step - 1].id] || 5)}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-full font-bold hover:from-orange-700 hover:to-amber-700 transition shadow-lg">
                  Continue Divine Journey
                </button>
              </div>
            ) : questions[step - 1].type === 'textarea' ? (
              <div className="space-y-6">
                <textarea value={answers[questions[step - 1].id] || ''} onChange={(e) => setAnswers({ ...answers, [questions[step - 1].id]: e.target.value })}
                  placeholder="Share your divine vision..." maxLength={500} rows={6}
                  className="w-full border-2 border-orange-200 rounded-2xl p-4 focus:border-orange-500 focus:outline-none resize-none">
                </textarea>
                <p className="text-sm text-orange-600 font-bold">{(answers[questions[step - 1].id] || '').length}/500 characters</p>
                <button onClick={() => answers[questions[step - 1].id]?.trim() && setStep('contact')}
                  disabled={!answers[questions[step - 1].id]?.trim()}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-full font-bold hover:from-orange-700 hover:to-amber-700 transition disabled:opacity-50 shadow-lg">
                  Continue to Divine Contact
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {questions[step - 1].options.map((option, index) => (
                  <button key={index} onClick={() => handleAnswer(questions[step - 1].id, option)}
                    className="w-full text-left p-4 border-2 border-orange-200 rounded-2xl hover:border-orange-500 hover:bg-orange-50 transition font-medium">
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {step === 'contact' && (
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-200">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-900">Divine Connection</h2>
            <p className="text-orange-700 mb-8 font-medium">Enter your details to receive your personalized divine healing roadmap</p>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold mb-2 text-orange-900">Full Name *</label>
                <input type="text" required value={contactInfo.name} onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                  className="w-full border-2 border-orange-200 rounded-xl p-4 focus:border-orange-500 focus:outline-none" placeholder="Your full name" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-orange-900">Email *</label>
                <input type="email" required value={contactInfo.email} onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full border-2 border-orange-200 rounded-xl p-4 focus:border-orange-500 focus:outline-none" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-orange-900">Phone/WhatsApp *</label>
                <input type="tel" required pattern="[0-9]{10}" value={contactInfo.phone} onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full border-2 border-orange-200 rounded-xl p-4 focus:border-orange-500 focus:outline-none" placeholder="10-digit mobile number" />
              </div>
              <p className="text-sm text-orange-700 flex items-center gap-2 font-medium"><CheckCircle size={16} className="text-orange-500" /> Your information is divinely protected</p>
              <button onClick={handleContactSubmit} disabled={loading}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-full font-bold hover:from-orange-700 hover:to-amber-700 transition disabled:opacity-50 shadow-lg">
                {loading ? 'Channeling Divine Analysis...' : 'Get My Sacred Roadmap'}
              </button>
            </div>
          </div>
        )}

        {step === 'results' && aiResults && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-600 to-amber-600 rounded-3xl shadow-2xl p-8 md:p-12 text-white text-center">
              <Zap size={56} className="mx-auto mb-4 animate-pulse" />
              <h2 className="text-4xl font-bold mb-4">Your Divine Healing Roadmap</h2>
              <p className="text-orange-100 text-lg font-medium">Blessed by Maa Durga's sacred energy</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-200">
              <h3 className="text-2xl font-bold mb-4 text-orange-900 flex items-center gap-2">
                <Brain className="text-orange-600" /> Divine Pattern Analysis
              </h3>
              <p className="text-gray-700 leading-relaxed font-medium">{aiResults.patternAnalysis}</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-400">
              <div className="inline-block bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm px-4 py-2 rounded-full mb-4 font-bold shadow-md">Sacred Recommendation</div>
              <h3 className="text-2xl font-bold mb-2 text-orange-900">{aiResults.recommendedService}</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">{aiResults.servicePrice}</p>
              <p className="text-gray-700 leading-relaxed mb-6 font-medium">{aiResults.reasoning}</p>
              <button onClick={() => onComplete(aiResults)}
                className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-4 rounded-full font-bold hover:from-orange-700 hover:to-amber-700 transition flex items-center justify-center gap-2 shadow-lg">
                Book Your Divine Session Now <ArrowRight size={22} />
              </button>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-orange-200">
              <h3 className="text-2xl font-bold mb-6 text-orange-900">Start Your Sacred Journey Today</h3>
              <div className="space-y-6">
                {aiResults.actionSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">{index + 1}</div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-orange-900">{step.title}</h4>
                      <p className="text-gray-700 leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-6 text-center border-2 border-orange-300">
              <p className="text-orange-900 mb-2 font-bold">📧 <strong>Check your email for divine guidance!</strong></p>
              <p className="text-orange-800 font-medium">We've sent your complete healing roadmap to <strong>{contactInfo.email}</strong></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BookingFlow({ initialService, onBack }) {
  return <div className="text-center py-20 text-gray-600">Booking flow coming soon...</div>;
}
