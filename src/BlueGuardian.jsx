function BlueGuardian() {
  const plans = [
    {
      name: "Instant",
      phases: "No Evaluation",
      target: "Instant Access",
      daily: "3%",
      maxLoss: "6% Trailing",
      payout: "On-Demand",
    },
    {
      name: "1-Step",
      phases: "1 Phase",
      target: "1 Target",
      daily: "Plan Dependent",
      maxLoss: "Plan Dependent",
      payout: "7 Days",
    },
    {
      name: "2-Step Standard",
      phases: "2 Phases",
      target: "Multiple Targets",
      daily: "Plan Dependent",
      maxLoss: "Plan Dependent",
      payout: "7 Days",
    },
    {
      name: "2-Step Pro",
      phases: "2 Phases",
      target: "Multiple Targets",
      daily: "Plan Dependent",
      maxLoss: "10% Trailing",
      payout: "Weekly",
    },
  ];

  return (
    <section className="blueguardian-page">
      <div className="blueguardian-header">
        <span className="badge">FEATURED PROP FIRM</span>

        <h1>
          Blue <span>Guardian</span>
        </h1>

        <p>
          Explore Blue Guardian funding models, account options,
          drawdown rules and payout structures in one place.
        </p>

        <a
          className="primary-btn"
          href="https://blueguardian.com/?afmc=2bou"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET FUNDED →
        </a>
      </div>

      <div className="blueguardian-grid">
        <div className="info-card">
          <span>FUNDING MODELS</span>
          <h3>4 Options</h3>
          <p>
            Instant, 1-Step, 2-Step Standard and 2-Step Pro options
            are currently listed for CFD funding.
          </p>
        </div>

        <div className="info-card">
          <span>ACCOUNT SIZES</span>
          <h3>Up to $400K</h3>
          <p>
            Available account sizes vary depending on the selected
            funding model.
          </p>
        </div>

        <div className="info-card">
          <span>PROFIT SPLIT</span>
          <h3>Up to 90%</h3>
          <p>
            Blue Guardian advertises profit splits of up to 90%.
          </p>
        </div>

        <div className="info-card">
          <span>MARKETS</span>
          <h3>CFD + Futures</h3>
          <p>
            Blue Guardian offers both CFD and futures funding
            programs.
          </p>
        </div>
      </div>

      <div className="blueguardian-plans">
        <span>BLUE GUARDIAN MODELS</span>

        <h2>Compare Funding Models</h2>

        <div className="blue-plan-cards">
          {plans.map((plan, index) => (
            <div className="blue-plan-card" key={plan.name}>
              <div className="blue-plan-number">
                0{index + 1}
              </div>

              <div className="blue-plan-title">
                <h3>{plan.name}</h3>
                <span>{plan.phases}</span>
              </div>

              <div className="blue-plan-data">
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
                  <span>PAYOUT</span>
                  <strong>{plan.payout}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="blueguardian-feature-section">
        <div className="blue-feature-heading">
          <span>WHY LOOK AT BLUE GUARDIAN?</span>

          <h2>
            Multiple Ways
            <br />
            To Get Funded.
          </h2>
        </div>

        <div className="blue-feature-points">
          <div className="blue-feature-point">
            <div className="feature-icon">01</div>

            <div>
              <h3>Instant Funding</h3>

              <p>
                The Instant model provides access without a traditional
                evaluation and supports on-demand payouts under its
                applicable rules.
              </p>
            </div>
          </div>

          <div className="blue-feature-point">
            <div className="feature-icon">02</div>

            <div>
              <h3>1-Step Challenge</h3>

              <p>
                A single-phase evaluation designed for traders who
                prefer a simpler route to funding.
              </p>
            </div>
          </div>

          <div className="blue-feature-point">
            <div className="feature-icon">03</div>

            <div>
              <h3>2-Step Options</h3>

              <p>
                Blue Guardian lists Standard and Pro two-phase models,
                giving traders different evaluation structures.
              </p>
            </div>
          </div>

          <div className="blue-feature-point">
            <div className="feature-icon">04</div>

            <div>
              <h3>Flexible Trading Conditions</h3>

              <p>
                Current Blue Guardian information lists weekend
                holding, overnight holding and EAs as supported on
                the displayed CFD funding conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="blue-payout-section">
        <span>PAYOUTS & RULES</span>

        <h2>Important Things To Know</h2>

        <div className="blue-payout-grid">
          <div>
            <strong>Up to 90%</strong>

            <p>
              Profit split can reach 90% depending on the selected
              model and applicable add-ons.
            </p>
          </div>

          <div>
            <strong>Instant Payouts</strong>

            <p>
              The Instant model supports on-demand payout requests
              under its withdrawal conditions.
            </p>
          </div>

          <div>
            <strong>20% Consistency</strong>

            <p>
              The Instant Standard account currently lists a 20%
              consistency requirement for payouts.
            </p>
          </div>

          <div>
            <strong>Guardian Shield</strong>

            <p>
              On Instant Standard funded accounts, Guardian Shield
              can automatically close trades at 1% floating loss.
            </p>
          </div>
        </div>

        <p className="blue-payout-note">
          Rules differ between models and account sizes. Always check
          the exact Blue Guardian rule page for the account you intend
          to purchase before trading.
        </p>
      </div>

      <div className="fundingpips-warning">
        <strong>⚠️ IMPORTANT BEFORE YOU BUY</strong>

        <p>
          Blue Guardian rules, prices, available account sizes,
          drawdown calculations, payout requirements and promotions
          can change. Always verify the latest official terms before
          purchasing an account.
        </p>
      </div>

      <div className="blueguardian-final-cta">
        <span>READY TO EXPLORE?</span>

        <h2>
          Find Your
          <br />
          Blue Guardian Plan.
        </h2>

        <p>
          Compare the available funding models and choose the
          structure that fits your trading style.
        </p>

        <a
          className="primary-btn"
          href="https://blueguardian.com/?afmc=2bou"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT BLUE GUARDIAN →
        </a>
      </div>
    </section>
  );
}

export default BlueGuardian;