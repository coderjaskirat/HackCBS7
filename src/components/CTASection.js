import React from 'react';

function CTASection() {
  return (
    <section className="cta-section">
      <h3>Ready To Get Started?</h3>
      <p>Enter to be a part of the restaurant information!</p>
      <div className="cta-options">
        <div>
          <h4>Are you an owner?</h4>
          <button>Get Started</button>
        </div>
        <div>
          <h4>Are you a chef?</h4>
          <button>Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
