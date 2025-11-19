import React, { useState } from 'react';
import { MapPin, Shield, AlertCircle, MessageCircle, ChevronRight, Mail, Check } from 'lucide-react';

export default function CohabitLanding() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [showListings, setShowListings] = useState(false);
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setEmailSubmitted(true);
      setShowListings(true);
      setEmail('');
      setTimeout(() => setEmailSubmitted(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-white to-blue-50">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 800">
            <defs>
              <pattern id="dots" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="1200" height="800" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <div className="mb-6">
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-gray-900 leading-tight mb-6">
              Finally, a rental where your pup can just <span className="text-amber-600">be</span>
            </h1>
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            We curate vacation rentals for sensitive pups and their people. Every stay is personally vetted, thoroughly researched, and rated for what actually matters to your dog.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => document.getElementById('listings').scrollIntoView({ behavior: 'smooth' })} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition">
              Explore DC Area Rentals
            </button>
            <button onClick={() => document.getElementById('concierge').scrollIntoView({ behavior: 'smooth' })} className="border-2 border-gray-900 text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold text-lg transition">
              Get Personal Recommendations
            </button>
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-gray-900 mb-16 text-center">How we actually vet rentals</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* FenceScore */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-amber-100 rounded-lg flex items-center justify-center">
                <Shield className="w-7 h-7 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">FenceScore™</h3>
              <p className="text-gray-600">
                Every verified stay gets a FenceScore™ so you know exactly how secure the outdoor space really is before you book. No surprises.
              </p>
            </div>

            {/* Trigger Warnings */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                <AlertCircle className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Trigger Warnings</h3>
              <p className="text-gray-600">
                We map out nearby sights, sounds, and neighborhood features to reduce surprises and increase time spent actually relaxing with your pup.
              </p>
            </div>

            {/* Trusted Reviews */}
            <div className="space-y-4">
              <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Trusted Reviews</h3>
              <p className="text-gray-600">
                Cohabit is created by and for dog parents who actually understand what sensitive pups need. We speak your language.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Listings Preview Section */}
      <section id="listings" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Currently available: DC Area</h2>
            <p className="text-lg text-gray-600">Within an 8-hour drive. 3 personally vetted stays + nearby options.</p>
          </div>

          {/* Sample Listings */}
          <div className="space-y-8 mb-12">
            {/* Listing 1 - Middleburg */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-amber-200 to-amber-100 flex items-center justify-center">
                <span className="text-amber-600 font-semibold">Middleburg, VA</span>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Stone Ridge Cottage</h3>
                    <p className="text-gray-600 mb-4">Our pick for: Pups who need space to roam safely</p>
                  </div>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold text-sm whitespace-nowrap">
                    FenceScore 9/10
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-6 border-y border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Pet Fee</p>
                    <p className="text-lg font-semibold text-gray-900">$50/night</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Fence Type</p>
                    <p className="text-lg font-semibold text-gray-900">Wood, 6ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Max Dogs</p>
                    <p className="text-lg font-semibold text-gray-900">3+</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Breed Restrictions</p>
                    <p className="text-lg font-semibold text-gray-900">None ✓</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase text-gray-500">What makes it work</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Securely fenced 2-acre yard with zero sight lines to road</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Rural location = minimal traffic noise and foot traffic</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Owner is a retired dog trainer, very pet-positive</span>
                    </li>
                  </ul>
                </div>

                <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2">
                  View on VRBO <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Listing 2 - Shenandoah */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-blue-200 to-blue-100 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">Shenandoah, VA</span>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Mountain View Cabin</h3>
                    <p className="text-gray-600 mb-4">Our pick for: Anxious pups who benefit from hiking & fresh air</p>
                  </div>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold text-sm whitespace-nowrap">
                    FenceScore 7/10
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-6 border-y border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Pet Fee</p>
                    <p className="text-lg font-semibold text-gray-900">$75/night</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Fence Type</p>
                    <p className="text-lg font-semibold text-gray-900">Partial, 4ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Max Dogs</p>
                    <p className="text-lg font-semibold text-gray-900">2</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Breed Restrictions</p>
                    <p className="text-lg font-semibold text-gray-900">None ✓</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase text-gray-500">What makes it work</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">On-leash hiking trails within 5 min walk from property</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Quiet neighborhood with low traffic and friendly neighbors</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Veterinarian 10 min away if you need emergency care</span>
                    </li>
                  </ul>
                </div>

                <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2">
                  View on VRBO <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Listing 3 - Catskills */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
              <div className="h-48 bg-gradient-to-br from-green-200 to-green-100 flex items-center justify-center">
                <span className="text-green-600 font-semibold">Catskills, NY</span>
              </div>
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Forest Edge Retreat</h3>
                    <p className="text-gray-600 mb-4">Our pick for: Pups with noise sensitivity & reactive dogs</p>
                  </div>
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-semibold text-sm whitespace-nowrap">
                    FenceScore 8/10
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 py-6 border-y border-gray-200">
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Pet Fee</p>
                    <p className="text-lg font-semibold text-gray-900">$60/night</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Fence Type</p>
                    <p className="text-lg font-semibold text-gray-900">Wood, 6ft</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Max Dogs</p>
                    <p className="text-lg font-semibold text-gray-900">3+</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Breed Restrictions</p>
                    <p className="text-lg font-semibold text-gray-900">None ✓</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-gray-900 text-sm uppercase text-gray-500">What makes it work</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Completely isolated on 3+ acres with zero neighbors visible</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Minimal traffic noise, quiet rural setting perfect for anxious pups</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">Host accommodates all breeds and sizes, very understanding</span>
                    </li>
                  </ul>
                </div>

                <button className="text-amber-600 hover:text-amber-700 font-semibold flex items-center gap-2">
                  View on VRBO <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Email Gate CTA */}
          {!showListings && (
            <div className="bg-gradient-to-r from-amber-50 to-blue-50 rounded-lg p-8 border border-amber-200 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">See all nearby rentals for each area</h3>
              <p className="text-gray-700 mb-6">Get full access to our curated list of dog-friendly rentals in Middleburg, Shenandoah, and the Catskills with direct booking links.</p>
              
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition">
                  Unlock List
                </button>
              </form>

              {emailSubmitted && (
                <p className="text-green-700 text-sm mt-3 flex items-center gap-2">
                  <Check className="w-4 h-4" /> Check your email for the full list!
                </p>
              )}
            </div>
          )}

          {showListings && (
            <div className="bg-green-50 rounded-lg p-8 border border-green-200 mb-12">
              <p className="text-green-800 flex items-center gap-2">
                <Check className="w-5 h-5" />
                <span>Full listings sent to your email. Check your inbox!</span>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Concierge CTA Section */}
      <section id="concierge" className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">Need something now?</h2>
            <p className="text-lg text-gray-600">We've got you covered.</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-blue-50 rounded-lg p-12 border border-amber-200">
            <div className="space-y-6 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Personal Rental Matching</h3>
                <p className="text-gray-600">Tell us about your pup's needs—what triggers them, how many dogs you have, your budget, where you want to go—and we'll do the research for you.</p>
              </div>

              <div className="space-y-3 py-6 border-y border-amber-200">
                <p className="text-sm text-gray-600 uppercase font-semibold">What you get:</p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Up to 5 personally vetted rental recommendations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Detailed notes on why each one works for your specific pup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Direct booking links and pet policy confirmations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">Delivered within 48 hours</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold text-gray-900">$49</span>
                <span className="text-gray-600">one-time</span>
              </div>
            </div>

            <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold text-lg transition">
              Get Personal Recommendations
            </button>
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">More markets coming soon</h2>
          <p className="text-lg text-gray-600 mb-8">We're expanding to more regions and adding hundreds of new rentals. Be first to know when your area opens up.</p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button type="submit" className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition">
              Join Waitlist
            </button>
          </form>

          {emailSubmitted && (
            <p className="text-green-700 text-sm mt-4 flex items-center justify-center gap-2">
              <Check className="w-4 h-4" /> You're on the list!
            </p>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="mb-4 font-semibold">Our Cohabit</p>
          <p className="text-sm text-gray-400 mb-6">We curate vacation rentals where sensitive pups and their people can kick back and relax together.</p>
          <p className="text-xs text-gray-500">© 2025 Our Cohabit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
