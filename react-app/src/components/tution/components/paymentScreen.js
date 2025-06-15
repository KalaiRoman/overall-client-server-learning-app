import React, { useState, useEffect } from "react";
import "./paymentScreen.css";

const PaymentScreen = () => {
  const dummyCourses = [
    {
      id: 1,
      name: "Mathematics Advanced Course",
      description:
        "Comprehensive math course covering algebra, geometry, and calculus",
      price: 4999,
      duration: "3 months",
      instructor: "Prof. Rajesh Kumar",
    },
    {
      id: 2,
      name: "Science Foundation Program",
      description:
        "Physics, Chemistry, and Biology fundamentals for competitive exams",
      price: 6999,
      duration: "6 months",
      instructor: "Prof. Anita Sharma",
    },
    {
      id: 3,
      name: "English Literature Masterclass",
      description:
        "In-depth study of classic and contemporary English literature",
      price: 3999,
      duration: "4 months",
      instructor: "Prof. Priya Menon",
    },
  ];

  const [selectedCourse, setSelectedCourse] = useState(dummyCourses[0]);
  const [paymentDetails, setPaymentDetails] = useState({
    baseAmount: 0,
    gstAmount: 0,
    discountAmount: 0,
    couponCode: "",
    couponApplied: false,
    couponError: "",
    totalAmount: 0,
    loading: false,
  });

  // Initialize payment details
  useEffect(() => {
    if (selectedCourse) {
      const gst = selectedCourse.price * 0.18;
      setPaymentDetails({
        ...paymentDetails,
        baseAmount: selectedCourse.price,
        gstAmount: gst,
        totalAmount: selectedCourse.price + gst,
      });
    }
  }, [selectedCourse]);

  const handleApplyCoupon = () => {
    if (!paymentDetails.couponCode.trim()) {
      setPaymentDetails({
        ...paymentDetails,
        couponError: "Please enter a coupon code",
      });
      return;
    }

    setPaymentDetails({ ...paymentDetails, loading: true, couponError: "" });

    setTimeout(() => {
      if (paymentDetails.couponCode.toUpperCase() === "STUDENT20") {
        const discount = paymentDetails.baseAmount * 0.2;
        setPaymentDetails({
          ...paymentDetails,
          discountAmount: discount,
          couponApplied: true,
          totalAmount:
            paymentDetails.baseAmount + paymentDetails.gstAmount - discount,
          loading: false,
        });
      } else if (paymentDetails.couponCode.toUpperCase() === "WELCOME10") {
        const discount = paymentDetails.baseAmount * 0.1;
        setPaymentDetails({
          ...paymentDetails,
          discountAmount: discount,
          couponApplied: true,
          totalAmount:
            paymentDetails.baseAmount + paymentDetails.gstAmount - discount,
          loading: false,
        });
      } else {
        setPaymentDetails({
          ...paymentDetails,
          couponError: "Invalid coupon code",
          loading: false,
        });
      }
    }, 1000);
  };

  const initiatePayment = () => {
    setPaymentDetails({ ...paymentDetails, loading: true });

    setTimeout(() => {
      alert("Redirecting to Razorpay payment gateway...");
      setPaymentDetails({ ...paymentDetails, loading: false });
    }, 1500);
  };

  return (
    <div className="payment-app">
      <div className="payment-container">
        <div className="payment-header">
          <h1>Complete Your Enrollment</h1>
          <p>Secure payment processed through Razorpay</p>
        </div>

        <div className="payment-content">
          <div className="course-selection">
            <h3>Select Your Course</h3>
            <div className="course-options">
              {dummyCourses.map((course) => (
                <div
                  key={course.id}
                  className={`course-card ${
                    selectedCourse.id === course.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedCourse(course)}
                >
                  <h4>{course.name}</h4>
                  <p>{course.description}</p>
                  <div className="course-meta">
                    <span>₹{course.price.toLocaleString()}</span>
                    <span>{course.duration}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="payment-details">
            <div className="payment-summary-card">
              <h3>Order Summary</h3>

              <div className="course-info">
                <h4>{selectedCourse.name}</h4>
                <p>Instructor: {selectedCourse.instructor}</p>
                <p>Duration: {selectedCourse.duration}</p>
              </div>

              <div className="price-breakdown">
                <div className="price-row">
                  <span>Course Fee</span>
                  <span>₹{selectedCourse.price.toLocaleString()}</span>
                </div>

                <div className="price-row">
                  <span>GST (18%)</span>
                  <span>₹{paymentDetails.gstAmount.toLocaleString()}</span>
                </div>

                {paymentDetails.couponApplied && (
                  <div className="price-row discount">
                    <span>Discount Applied</span>
                    <span>
                      -₹{paymentDetails.discountAmount.toLocaleString()}
                    </span>
                  </div>
                )}

                <div className="price-row total">
                  <span>Total Amount</span>
                  <span>₹{paymentDetails.totalAmount.toLocaleString()}</span>
                </div>
              </div>

              <div className="coupon-section">
                <h4>Apply Coupon</h4>
                <div className="coupon-input-group">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    value={paymentDetails.couponCode}
                    onChange={(e) =>
                      setPaymentDetails({
                        ...paymentDetails,
                        couponCode: e.target.value,
                        couponApplied: false,
                      })
                    }
                    disabled={paymentDetails.couponApplied}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    disabled={
                      paymentDetails.couponApplied || paymentDetails.loading
                    }
                    className={paymentDetails.couponApplied ? "applied" : ""}
                  >
                    {paymentDetails.loading ? (
                      <span className="loader"></span>
                    ) : paymentDetails.couponApplied ? (
                      "✓ Applied"
                    ) : (
                      "Apply"
                    )}
                  </button>
                </div>
                {paymentDetails.couponError && (
                  <p className="error-message">{paymentDetails.couponError}</p>
                )}
                <div className="coupon-hint">
                  <p>
                    Try these demo coupons: <strong>STUDENT20</strong> (20% off)
                    or <strong>WELCOME10</strong> (10% off)
                  </p>
                </div>
              </div>
            </div>

            <div className="payment-actions">
              <button
                onClick={initiatePayment}
                disabled={paymentDetails.loading}
                className="pay-now-btn"
              >
                {paymentDetails.loading ? (
                  <>
                    <span className="loader"></span> Processing...
                  </>
                ) : (
                  `Pay ₹${paymentDetails.totalAmount.toLocaleString()}`
                )}
              </button>

              <div className="payment-security">
                <div className="security-badge">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11V11.99z" />
                  </svg>
                  <span>100% Secure Payment</span>
                </div>
                <div className="payment-methods">
                  <img
                    src="https://razorpay.com/build/browser/static/visa.8b86a5f4.svg"
                    alt="Visa"
                  />
                  <img
                    src="https://razorpay.com/build/browser/static/mastercard.5dfad88f.svg"
                    alt="Mastercard"
                  />
                  <img
                    src="https://razorpay.com/build/browser/static/rupay.8a5c6f3e.svg"
                    alt="RuPay"
                  />
                  <img
                    src="https://razorpay.com/build/browser/static/amex.34b7ec15.svg"
                    alt="Amex"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentScreen;
