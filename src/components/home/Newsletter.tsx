import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally send the email to your backend
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-20 bg-blue-600 text-white" id="newsletter">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Tips, Recipes, and Motivation
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join our newsletter and receive weekly fitness tips, healthy recipes, and motivational content to help you on your journey.
          </p>

          {isSubmitted ? (
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <div className="text-xl font-medium mb-2">Thanks for subscribing!</div>
              <p>
                We've sent a confirmation email to your inbox. Check your email to complete the subscription process.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="flex-grow px-4 py-3 rounded-md border-0 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-800 text-white font-medium rounded-md hover:bg-blue-900 transition-colors"
                >
                  Subscribe
                </button>
              </div>
              <div className="text-sm mt-3 text-blue-100">
                We respect your privacy. Unsubscribe at any time.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;