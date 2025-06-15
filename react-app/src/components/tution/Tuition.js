import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import "./Tution.css";
import LearningSection from "./components/LearningSection";
import TutorifyMentors from "./components/TutorifyMentors";
import PricingSection from "./components/PricingSection";
import StartBestSelfSection from "./components/StartBestSelfSection";
import TestimonialCarousel from "./components/TestimonialCarousel";
import SubscriptionScreen from "./components/SubscribtionScreen";
function Tuition() {
  return (
    <div>
      {/* <div className="hero-section d-flex align-items-center justify-content-between px-5 py-5">
        <div className="hero-text col-md-6">
          <h1 className="display-5 fw-bold">
            A Classical <br /> Education for the{" "}
            <span className="text-orange">Future</span>
          </h1>
          <p className="mt-3 text-muted">
            We prepare you to engage in the world that is and to help bring
            about a world that ought to be
          </p>
          <button className="new-btn mt-4 px-4 py-2">
            Get started{" "}
            <span className="ms-2">
              <i class="fa-solid fa-arrow-right"></i>
            </span>
          </button>
        </div>
        <div className="hero-image col-md-6 text-center">
          <img
            src={stu}
            alt="Student with pencil"
            className="img-fluid student-img"
          />
        </div>
      </div> */}

      <div>
        <StartBestSelfSection />
      </div>

      <div>
        <LearningSection />
      </div>

      <div>
        <TutorifyMentors />
      </div>

      <div>
        <PricingSection />
      </div>

      <div>
        <SubscriptionScreen/>
      </div>

      {/* <div>
        <TestimonialCarousel/>
      </div> */}
    </div>
  );
}

export default Tuition;
