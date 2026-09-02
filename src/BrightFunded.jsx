function BrightFunded() {
  const plans = [
    {
      name: "2-Step Bright",
      phases: "2 Phases",
      target: "8% + 5%",
      daily: "4%",
      maxLoss: "8% Static",
      days: "5 / Stage",
    },
    {
      name: "2-Step Classic",
      phases: "2 Phases",
      target: "10% + 5%",
      daily: "5%",
      maxLoss: "10% Static",
      days: "5 / Stage",
    },
    {
      name: "1-Step",
      phases: "1 Phase",
      target: "10%",
      daily: "3%",
      maxLoss: "6% Trailing",
      days: "5",
    },
  ];

  return (
    <section className="brightfunded-page">
      <div className="brightfunded-header">
        <span className="badge">FEATURED PROP FIRM</span>

        <h1>
          Bright<span>Funded</span>
        </h1>

        <p>
          Explore BrightFunded evaluation plans, trading objectives,
          drawdown rules and reward options in one place.
        </p>

        <a
          className="primary-btn"
          href="https://brightfunded.com/a/JecigJ6GTRqg7Tm6xfPwqg"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET FUNDED →
        </a>
      </div>

      <div className="brightfunded-grid">
        <div className="info-card">
          <span>AVAILABLE PLANS</span>
          <h3>3 Plans</h3>
          <p>2-Step Bright, 2-Step Classic and 1-Step.</p>
        </div>

        <div className="info-card">
          <span>PROFIT SPLIT</span>
          <h3>80%+</h3>
          <p>
            Default funded reward split is 80/20, with higher options
            available through eligible add-ons or scaling.
          </p>
        </div>

        <div className="info-card">
          <span>MAX ALLOCATION</span>
          <h3>$400K</h3>
          <p>
            BrightFunded states an initial maximum funded allocation of
            $400,000 per trader.
          </p>
        </div>

        <div className="info-card">
          <span>PAYOUT METHODS</span>
          <h3>2 Options</h3>
          <p>USDC via ERC-20 and Bank Transfer.</p>
        </div>
      </div>

      <div className="brightfunded-plans">
        <span>BRIGHTFUNDED PLANS</span>

        <h2>Compare Evaluation Plans</h2>

        <div className="bright-plan-cards">
          {plans.map((plan, index) => (
            <div className="bright-plan-card" key={plan.name}>
              <div className="bright-plan-number">
                0{index + 1}
              </div>

              <div className="bright-plan-title">
                <h3>{plan.name}</h3>
                <span>{plan.phases}</span>
              </div>

              <div className="bright-plan-data">
                <div>
                  <span>PROFIT TARGET</span>
                  <strong>{plan.target}</strong>
                </div>

                <div>
                  <span>DAILY DRAWDOWN</span>
                  <strong>{plan.daily}</strong>
                </div>

                <div>
                  <span>MAX DRAWDOWN</span>
                  <strong>{plan.maxLoss}</strong>
                </div>

                <div>
                  <span>MIN TRADING DAYS</span>
                  <strong>{plan.days}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="brightfunded-feature-section">
        <div className="bright-feature-heading">
          <span>WHY LOOK AT BRIGHTFUNDED?</span>

          <h2>
            Choose A Plan
            <br />
            Around Your Style.
          </h2>
        </div>

        <div className="bright-feature-points">
          <div className="bright-feature-point">
            <div className="feature-icon">01</div>

            <div>
              <h3>1-Step Option</h3>

              <p>
                A single evaluation phase with a 10% profit target,
                3% daily drawdown and 6% trailing maximum drawdown.
              </p>
            </div>
          </div>

          <div className="bright-feature-point">
            <div className="feature-icon">02</div>

            <div>
              <h3>2-Step Options</h3>

              <p>
                Choose between Bright and Classic plans with different
                profit targets and drawdown limits.
              </p>
            </div>
          </div>

          <div className="bright-feature-point">
            <div className="feature-icon">03</div>

            <div>
              <h3>80% Default Reward Split</h3>

              <p>
                BrightFunded states an 80/20 default profit split on
                funded accounts, with higher options available.
              </p>
            </div>
          </div>

          <div className="bright-feature-point">
            <div className="feature-icon">04</div>

            <div>
              <h3>Scaling Plan</h3>

              <p>
                Eligible traders can qualify for additional capital
                through BrightFunded's scaling conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bright-payout-section">
        <span>PAYOUTS</span>

        <h2>Reward Information</h2>

        <div className="bright-payout-grid">
          <div>
            <strong>80% Default Split</strong>
            <p>
              The standard funded reward split is 80/20.
            </p>
          </div>

          <div>
            <strong>90% Add-On</strong>
            <p>
              A 90% profit split add-on is available where offered.
            </p>
          </div>

          <div>
            <strong>Bi-Weekly</strong>
            <p>
              After the first reward cycle, bi-weekly requests are
              available under the applicable conditions.
            </p>
          </div>

          <div>
            <strong>USDC / Bank</strong>
            <p>
              Rewards can be processed through USDC ERC-20 or bank
              transfer.
            </p>
          </div>
        </div>

        <p className="bright-payout-note">
          BrightFunded states that the first reward can be requested
          30 days after the first funded-account trade; subsequent
          requests can be made bi-weekly under the applicable rules.
        </p>
      </div>

      <div className="fundingpips-warning">
        <strong>⚠️ IMPORTANT BEFORE YOU BUY</strong>

        <p>
          BrightFunded rules, pricing, available plans, drawdown
          calculations, payout conditions and promotions can change.
          Always verify the latest official terms before purchasing.
        </p>
      </div>

      <div className="brightfunded-final-cta">
        <span>READY TO EXPLORE?</span>

        <h2>
          Find Your
          <br />
          BrightFunded Plan.
        </h2>

        <p>
          Compare the current plans and choose the evaluation structure
          that best matches your trading style.
        </p>

        <a
          className="primary-btn"
          href="https://brightfunded.com/a/JecigJ6GTRqg7Tm6xfPwqg"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT BRIGHTFUNDED →
        </a>
      </div>
    </section>
  );
}

export default BrightFunded;