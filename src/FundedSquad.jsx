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
          Funded Squad <span>Prop Firm & Funded Trading Accounts</span>
        </h1>

        <p>
          Explore Funded Squad funded trading accounts, Instant Funding,
          1-Step and 2-Step programs, account structures, trading rules,
          drawdown limits, profit splits and payout conditions in one place.
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
            Funded Squad offers different funded trading structures,
            including Instant Funding, 1-Step and 2-Step programs.
          </p>
        </div>

        <div className="info-card">
          <span>ACCOUNT SIZES</span>

          <h3>Multiple Sizes</h3>

          <p>
            Available Funded Squad account sizes depend on the selected
            funding program and account conditions.
          </p>
        </div>

        <div className="info-card">
          <span>PROFIT SPLIT</span>

          <h3>Up to 95%</h3>

          <p>
            Funded Squad advertises profit sharing of up to 95%,
            depending on the selected program and applicable rules.
          </p>
        </div>

        <div className="info-card">
          <span>TRADING STYLE</span>

          <h3>Flexible Options</h3>

          <p>
            Different Funded Squad programs can have different trading
            conditions, risk limits and payout requirements.
          </p>
        </div>
      </div>

      <div className="fundedsquad-plans">
        <span>FUNDED SQUAD MODELS</span>

        <h2>Compare Funded Squad Funding Options</h2>

        <p>
          Compare Funded Squad Instant Funding, 1-Step and 2-Step
          programs based on evaluation structure, profit targets,
          drawdown rules and payout conditions.
        </p>

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
                Funded Squad provides different account structures,
                allowing traders to compare Instant Funding, 1-Step
                and 2-Step evaluation models.
              </p>
            </div>
          </div>

          <div className="squad-feature-point">
            <div className="feature-icon">02</div>

            <div>
              <h3>Multiple Account Sizes</h3>

              <p>
                Traders can explore different account sizes based on
                the available Funded Squad funding program and their
                preferred trading approach.
              </p>
            </div>
          </div>

          <div className="squad-feature-point">
            <div className="feature-icon">03</div>

            <div>
              <h3>Profit Sharing</h3>

              <p>
                Eligible traders can receive a share of trading profits
                according to the selected Funded Squad program and its
                applicable payout rules.
              </p>
            </div>
          </div>

          <div className="squad-feature-point">
            <div className="feature-icon">04</div>

            <div>
              <h3>Risk-Based Trading</h3>

              <p>
                Understanding daily drawdown, maximum loss, position
                risk and payout requirements is essential before
                choosing a Funded Squad account.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="squad-payout-section">
        <span>PAYOUTS & RULES</span>

        <h2>Funded Squad Payouts & Trading Rules</h2>

        <p>
          Understanding Funded Squad payout conditions and risk rules
          is important before selecting a funded trading account.
          Requirements can differ between Instant Funding, 1-Step and
          2-Step programs.
        </p>

        <div className="squad-payout-grid">
          <div>
            <strong>Up to 95%</strong>

            <p>
              Profit sharing can reach up to 95% depending on the
              selected Funded Squad program and applicable conditions.
            </p>
          </div>

          <div>
            <strong>Risk Limits</strong>

            <p>
              Daily drawdown and maximum loss rules can vary between
              different Funded Squad funding models.
            </p>
          </div>

          <div>
            <strong>Payout Conditions</strong>

            <p>
              Payout timing, minimum requirements and eligibility
              conditions depend on the selected account and program.
            </p>
          </div>

          <div>
            <strong>Trading Rules</strong>

            <p>
              Always review the exact trading restrictions, risk
              limits and payout rules before purchasing or trading
              a Funded Squad account.
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

      <div className="fundedsquad-faq">
        <span>FUNDED SQUAD FAQ</span>

        <h2>Frequently Asked Questions</h2>

        <div className="faq-list">
          <div>
            <h3>What is Funded Squad?</h3>

            <p>
              Funded Squad is a proprietary trading firm offering
              funded trading programs with different account
              structures, including Instant Funding, 1-Step and
              2-Step models.
            </p>
          </div>

          <div>
            <h3>What Funded Squad funding programs are available?</h3>

            <p>
              The listed funding options include Instant Funding,
              1-Step and 2-Step programs. Available account sizes,
              prices and conditions can change over time.
            </p>
          </div>

          <div>
            <h3>What is the Funded Squad profit split?</h3>

            <p>
              Funded Squad advertises profit sharing of up to 95%.
              The exact profit split depends on the selected program
              and applicable account conditions.
            </p>
          </div>

          <div>
            <h3>Can Funded Squad rules change?</h3>

            <p>
              Yes. Account sizes, prices, drawdown calculations,
              payout requirements and other trading conditions can
              change. Traders should verify the latest official terms
              before purchasing an account.
            </p>
          </div>
        </div>
      </div>

      <div className="fundingpips-warning">
        <strong>⚠️ IMPORTANT BEFORE YOU BUY</strong>

        <p>
          Funded Squad rules, prices, available account sizes,
          drawdown calculations, payout requirements and promotions
          can change. This page is provided for comparison and
          educational purposes. Prop firm accounts involve risk,
          and nothing on this website guarantees a challenge pass
          or trading profit. Always verify the latest official
          Funded Squad terms before purchasing or trading an account.
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
          Compare Funded Squad funding options, account structures,
          trading rules and payout conditions, then choose the
          program that matches your trading approach.
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