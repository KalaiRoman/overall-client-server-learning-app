import React, { useState } from "react";

const SubscriptionScreen = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
      setEmail("");
    }
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-gradient-to-br from-blue-600 to-purple-700">
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-3xl shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                <div className="mb-8">
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                    Subscribe Now
                  </div>
                  <div className="text-2xl md:text-3xl text-gray-700 mb-6">
                    Get 20% Discount on Every Course
                  </div>
                  <p className="text-gray-600 mb-8 text-lg px-4">
                    Join thousands of learners and unlock exclusive discounts on
                    premium courses. Start your learning journey today!
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg mb-6">
                    <div className="flex items-center">
                      <svg
                        className="w-6 h-6 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <strong>Success!</strong> You've been subscribed
                      successfully!
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <div className="flex-1 max-w-md">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                        required
                      />
                    </div>
                    <div className="md:flex-shrink-0">
                      <button
                        onClick={handleSubmit}
                        className="w-full md:w-auto px-8 py-4 bg-gray-800 text-white text-lg font-semibold rounded-xl hover:bg-gray-700 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 text-gray-600">
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secure & Safe
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    No Spam Ever
                  </div>
                  <div className="flex items-center justify-center">
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Instant Access
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl text-blue-500 mb-4">📚</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Premium Courses
            </h3>
            <p className="text-gray-600">
              Access to 500+ premium courses across various technologies
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl text-green-500 mb-4">👥</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Expert Instructors
            </h3>
            <p className="text-gray-600">
              Learn from industry experts with years of experience
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-center hover:transform hover:-translate-y-2 transition-all">
            <div className="text-4xl text-yellow-500 mb-4">🏆</div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Certificates
            </h3>
            <p className="text-gray-600">
              Get certified upon course completion to boost your career
            </p>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl shadow-lg p-8 mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm opacity-80">Active Students</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm opacity-80">Courses Available</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">100+</div>
              <div className="text-sm opacity-80">Expert Instructors</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">95%</div>
              <div className="text-sm opacity-80">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionScreen;
