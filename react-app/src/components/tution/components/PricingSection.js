import React, { useState } from "react";

const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useState("Intermediate");

  const plans = [
    {
      name: "Beginner",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 699,
      features: [
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "",
        "",
      ],
      isPopular: false,
    },
    {
      name: "Intermediate",
      description: "For most businesses that want to optimize web queries",
      price: 799,
      features: [
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "Lectus quis quisque.",
      ],
      isPopular: true,
    },
    {
      name: "Pro",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 999,
      features: [
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "",
        "",
      ],
      isPopular: false,
    },
    {
      name: "Expert",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      price: 1499,
      features: [
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "Lectus quis quisque.",
        "",
        "",
      ],
      isPopular: false,
    },
  ];

  return (

    <>    <div className="pricing-section">
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <style jsx>{`
        .pricing-section {
          background-color: #f8f9fa;
          padding: 80px 0;
          min-height: 100vh;
        }

        .section-tag {
          color: #ff8c42;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #2c3e50;
          margin-bottom: 15px;
          line-height: 1.2;
        }

        .section-description {
          color: #6c757d;
          font-size: 16px;
          margin-bottom: 60px;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 40px 30px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          border: none;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .pricing-card.popular {
          background: linear-gradient(135deg, #ff8c42 0%, #ff6b1a 100%);
          color: white;
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(255, 140, 66, 0.3);
        }

        .pricing-card:not(.popular):hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .plan-name {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .plan-description {
          font-size: 14px;
          margin-bottom: 30px;
          line-height: 1.5;
          opacity: 0.8;
        }

        .pricing-card.popular .plan-description {
          color: rgba(255, 255, 255, 0.9);
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 30px 0;
        }

        .feature-item {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
          font-size: 14px;
        }

        .feature-icon {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 12px;
          font-size: 12px;
          flex-shrink: 0;
        }

        .pricing-card:not(.popular) .feature-icon {
          background-color: #f0f0f0;
          color: #999;
        }

        .pricing-card.popular .feature-icon {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
        }

        .feature-text {
          color: #6c757d;
        }

        .pricing-card.popular .feature-text {
          color: rgba(255, 255, 255, 0.9);
        }

        .price-section {
          margin-bottom: 30px;
        }

        .price {
          font-size: 3rem;
          font-weight: 800;
          line-height: 1;
        }

        .price-currency {
          font-size: 2rem;
          vertical-align: top;
        }

        .price-period {
          font-size: 14px;
          opacity: 0.7;
          margin-left: 5px;
        }

        .select-plan-btn {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-weight: 600;
          border: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .pricing-card:not(.popular) .select-plan-btn {
          background-color: #f8f9fa;
          color: #ff8c42;
          border: 2px solid #f0f0f0;
        }

        .pricing-card:not(.popular) .select-plan-btn:hover {
          background-color: #ff8c42;
          color: white;
          transform: translateY(-2px);
        }

        .pricing-card.popular .select-plan-btn {
          background-color: rgba(255, 255, 255, 0.2);
          color: white;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .pricing-card.popular .select-plan-btn:hover {
          background-color: white;
          color: #ff8c42;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .pricing-section {
            padding: 60px 0;
          }

          .pricing-card {
            padding: 30px 25px;
            margin-bottom: 30px;
          }

          .pricing-card.popular {
            transform: none;
            margin-bottom: 30px;
          }

          .price {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 576px) {
          .section-title {
            font-size: 1.8rem;
          }

          .pricing-section {
            padding: 40px 0;
          }

          .section-description {
            margin-bottom: 40px;
          }
        }
      `}</style>

      <div className="container">
        {/* Section Header */}
        <div className="row">
          <div className="col-12 text-center">
            <div className="section-tag">PRICING</div>
            <h2 className="section-title">How Much Do I Have To Pay</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {plans.map((plan, index) => (
            <div key={index} className="col-lg-3 col-md-6 col-sm-12">
              <div
                className={`pricing-card ${plan.isPopular ? "popular" : ""}`}
              >
                <div className="plan-name">{plan.name}</div>
                <div className="plan-description">{plan.description}</div>

                <ul className="features-list">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="feature-item">
                      {feature && (
                        <>
                          <div className="feature-icon">✓</div>
                          <span className="feature-text">{feature}</span>
                        </>
                      )}
                      {!feature && <div style={{ height: "32px" }}></div>}
                    </li>
                  ))}
                </ul>

                <div className="price-section">
                  <span className="price-currency">₹</span>
                  <span className="price">{plan.price}</span>
                  <span className="price-period">/month</span>
                </div>

                <button
                  className="select-plan-btn"
                  onClick={() => setSelectedPlan(plan.name)}
                >
                  Select Plan
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-muted">
              All plans include 30-day money-back guarantee. No setup fees.
            </p>
          </div>
        </div>
      </div>


      
    </div>




    </>
  );
};

export default PricingSection;
