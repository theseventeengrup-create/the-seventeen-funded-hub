function FundedSquad() {
  const plans = [
    {
      name: "Instant Funding",
      type: "Instant Access",
      target: "No Evaluation",
      daily: "3%",
      maxLoss: "5% Trailing",
      payout: "Plan Dependent",
    },
    {
      name: "1-Step",
      type: "1 Phase",
      target: "Single Target",
      daily: "Plan Dependent",
      maxLoss: "Plan Dependent",
      payout: "Plan Dependent",
    },
    {
      name: "2-Step",
      type: "2 Phases",
      target: "Multiple Targets",
      daily: "Plan Dependent",
      maxLoss: "Plan Dependent",
      payout: "Plan Dependent",
    },
  ];

  return (
    <section className="fundedsquad-page">
      <div className="fundedsquad-header">
        <span className="badge">TRADER PICK</span>

        <h1>
          Funded <span>Squad</span>
        </h1>

        <p>
          Explore Funded Squad funding options, account structures,
          trading rules and payout conditions in one place.
        </p>

        <a
          className="primary-btn"
          href="https://fundedsquad.com/?squad=3305"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET FUNDED →
        </a>
      </div>

      <div className="fundedsquad-grid">
        <div className="info-card">
          <span>FUNDING OPTIONS</span>

          <h3>Multiple Models</h3>

          <p>
            Funded Squad offers different funding structures designed
            for traders with different trading preferences.
          </p>
        </div>

        <div className="info-card">
          <span>ACCOUNT SIZES</span>

          <h3>Multiple Sizes</h3>

          <p>
            Available account sizes depend on the selected Funded
            Squad program.
          </p>
        </div>

        <div className="info-card">
          <span>PROFIT SPLIT</span>

          <h3>Up to 95%</h3>

          <p>
            Profit sharing depends on the selected account and the
            applicable program rules.
          </p>
        </div>

        <div className="info-card">
          <span>TRADING STYLE</span>

          <h3>Flexible Options</h3>

          <p>
            Different programs can have different trading conditions,
            risk limits and payout requirements.
          </p>
        </div>
      </div>

      <div className="fundedsquad-plans">
        <span>FUNDED SQUAD MODELS</span>

        <h2>Compare Funding Options</h2>

        <div className="squad-plan-cards">
          {plans.map((plan, index) => (
            <div className="squad-plan-card" key={plan.name}>
              <div className="squad-plan-number">
                0{index + 1}
              </div>

              <div className="squad-plan-title">
                <h3>{plan.name}</h3>

                <span>{plan.type}</span>
              </div>

              <div className="squad-plan-data">
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

      <div className="fundedsquad-feature-section">
        <div className="squad-feature-heading">
          <span>WHY EXPLORE FUNDED SQUAD?</span>

          <h2>
            Choose The
            <br />
            Right Funding Model.
          </h2>
        </div>

        <div className="squad-feature-points">
          <div className="squad-feature-point">
            <div className="feature-icon">01</div>

            <div>
              <h3>Different Funding Options</h3>

              <p>
                Explore different account structures instead of being
                limited to a single evaluation model.
              </p>
            </div>
          </div>

          <div className="squad-feature-point">
            <div className="feature-icon">02</div>

            <div>
              <h3>Multiple Account Sizes</h3>

              <p>
                Choose an account size based on the program and funding
                option that fits your trading plan.
              </p>
            </div>
          </div>

          <div className="squad-feature-point">
            <div className="feature-icon">03</div>

            <div>
              <h3>Profit Sharing</h3>

              <p>
                Eligible traders can receive a share of trading profits
                according to the selected program's payout rules.
              </p>
            </div>
          </div>

          <div className="squad-feature-point">
            <div className="feature-icon">04</div>

            <div>
              <h3>Risk-Based Trading</h3>

              <p>
                Understanding daily loss, maximum loss and position
                risk limits is essential before choosing an account.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="squad-payout-section">
        <span>PAYOUTS & RULES</span>

        <h2>Important Things To Know</h2>

        <div className="squad-payout-grid">
          <div>
            <strong>Profit Split</strong>

            <p>
              Profit sharing can vary depending on the selected Funded
              Squad program and applicable account conditions.
            </p>
          </div>

          <div>
            <strong>Risk Limits</strong>

            <p>
              Daily drawdown and maximum loss rules can differ between
              funding models.
            </p>
          </div>

          <div>
            <strong>Payout Conditions</strong>

            <p>
              Payout timing, minimum requirements and eligibility
              conditions depend on the selected account.
            </p>
          </div>

          <div>
            <strong>Trading Rules</strong>

            <p>
              Always review the exact trading restrictions before
              purchasing or trading a Funded Squad account.
            </p>
          </div>
        </div>

        <p className="squad-payout-note">
          Funded Squad rules, account sizes, prices, drawdown
          calculations and payout conditions can change. Always verify
          the exact current terms on the official website before
          purchasing an account.
        </p>
      </div>

      <div className="fundingpips-warning">
        <strong>⚠️ IMPORTANT BEFORE YOU BUY</strong>

        <p>
          Prop firm accounts involve risk and are subject to specific
          trading rules. Read the latest Funded Squad terms carefully
          before purchasing an account. Nothing on this website
          guarantees a challenge pass or trading profit.
        </p>
      </div>

      <div className="fundedsquad-final-cta">
        <span>READY TO EXPLORE?</span>

        <h2>
          Find Your
          <br />
          Funded Squad Plan.
        </h2>

        <p>
          Compare the available funding options and choose the
          structure that matches your trading approach.
        </p>

        <a
          className="primary-btn"
          href="https://fundedsquad.com/?squad=3305"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT FUNDED SQUAD →
        </a>
      </div>
    </section>
  );
}

export default FundedSquad;