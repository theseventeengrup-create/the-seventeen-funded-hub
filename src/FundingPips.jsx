function FundingPips() {
  const models = [
    {
      name: "1 Step Flex",
      phases: "1 Phase",
      target: "12%",
      daily: "3%",
      maxLoss: "12%",
      reward: "85% Bi-Weekly",
      sizes: "$5K – $100K",
    },
    {
      name: "2 Step Standard",
      phases: "2 Phases",
      target: "8% + 5%",
      daily: "5%",
      maxLoss: "10%",
      reward: "Up to 100%",
      sizes: "$5K – $100K",
    },
    {
      name: "2 Step Pro",
      phases: "2 Phases",
      target: "6% + 6%",
      daily: "3%",
      maxLoss: "6%",
      reward: "80% Weekly",
      sizes: "$5K – $200K",
    },
    {
      name: "2 Step Flex",
      phases: "2 Phases",
      target: "10% + 6%",
      daily: "4%",
      maxLoss: "12%",
      reward: "Up to 100%",
      sizes: "$5K – $100K",
    },
    {
      name: "Zero",
      phases: "No Evaluation",
      target: "Instant",
      daily: "3%",
      maxLoss: "5% Trailing",
      reward: "95% Bi-Weekly",
      sizes: "$5K – $200K",
    },
  ];

  return (
    <section className="fundingpips-page">

      {/* HEADER / SEO INTRO */}

      <div className="fundingpips-header">
        <span className="badge">FEATURED PROP FIRM</span>

        <h1>
          Funding<span>Pips</span> Prop Firm & Funded Trading Accounts
        </h1>

        <p>
          Explore FundingPips funded trading accounts, evaluation models,
          account sizes, profit targets, daily loss limits, maximum loss
          rules and reward options. Compare the available FundingPips
          trading models in one place before choosing an account.
        </p>

        <a
          className="primary-btn"
          href="https://app.fundingpips.com/register?referral_code=E67CA536"
          target="_blank"
          rel="noopener noreferrer"
        >
          GET FUNDED →
        </a>
      </div>

      {/* SEO OVERVIEW */}

      <div className="fundingpips-feature-section">

        <div className="feature-heading">
          <span>FUNDINGPIPS OVERVIEW</span>

          <h2>
            FundingPips
            <br />
            Funded Trading Explained.
          </h2>
        </div>

        <div className="feature-points">

          <div className="feature-point">
            <div className="feature-icon">01</div>
            <div>
              <h3>Multiple Funding Models</h3>
              <p>
                FundingPips offers different trading account structures,
                including one-phase, two-phase and instant funding models.
                Each model has its own objectives and risk limits.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">02</div>
            <div>
              <h3>Different Risk Rules</h3>
              <p>
                Daily loss limits and maximum loss conditions vary between
                FundingPips models. Traders should understand these limits
                before selecting an account.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">03</div>
            <div>
              <h3>Different Account Sizes</h3>
              <p>
                Available account sizes depend on the selected FundingPips
                model, with options ranging from smaller funded accounts
                to larger allocations.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">04</div>
            <div>
              <h3>Reward Structures</h3>
              <p>
                Reward percentages and payout cycles can differ depending
                on the selected funding model and applicable conditions.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* QUICK STATS */}

      <div className="fundingpips-grid">

        <div className="info-card">
          <span>ACCOUNT SIZES</span>
          <h3>$5K – $200K</h3>
          <p>
            Available sizes depend on the selected FundingPips model.
          </p>
        </div>

        <div className="info-card">
          <span>TRADING MODELS</span>
          <h3>5 Models</h3>
          <p>
            1 Step Flex, 2 Step Standard, 2 Step Flex, 2 Step Pro and Zero.
          </p>
        </div>

        <div className="info-card">
          <span>PROFIT REWARD</span>
          <h3>Up to 100%</h3>
          <p>
            Reward structure depends on the model and selected reward cycle.
          </p>
        </div>

        <div className="info-card">
          <span>REWARD METHODS</span>
          <h3>4 Options</h3>
          <p>
            Card, Crypto, Rise and Bank Transfer are available options.
          </p>
        </div>

      </div>

      {/* MODELS */}

      <div className="fundingpips-models">

        <span>FUNDINGPIPS MODELS</span>

        <h2>Compare FundingPips Funding Models</h2>

        <p>
          Compare the main FundingPips funded account models by profit
          target, daily loss limit, maximum loss, reward structure and
          available account size. The right model depends on your trading
          style and risk management approach.
        </p>

        <div className="funding-model-cards">

          {models.map((model, index) => (
            <div className="funding-model-card" key={model.name}>

              <div className="model-number">
                0{index + 1}
              </div>

              <div className="model-title">
                <h3>{model.name}</h3>
                <span>{model.phases}</span>
              </div>

              <div className="model-data">
                <div>
                  <span>PROFIT TARGET</span>
                  <strong>{model.target}</strong>
                </div>

                <div>
                  <span>DAILY LOSS</span>
                  <strong>{model.daily}</strong>
                </div>

                <div>
                  <span>MAX LOSS</span>
                  <strong>{model.maxLoss}</strong>
                </div>

                <div>
                  <span>REWARD</span>
                  <strong>{model.reward}</strong>
                </div>

                <div>
                  <span>ACCOUNT SIZE</span>
                  <strong>{model.sizes}</strong>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* WHY FUNDINGPIPS */}

      <div className="fundingpips-feature-section">

        <div className="feature-heading">
          <span>WHY TRADERS LOOK AT FUNDINGPIPS</span>

          <h2>
            Built Around
            <br />
            Different Trading Styles.
          </h2>
        </div>

        <div className="feature-points">

          <div className="feature-point">
            <div className="feature-icon">01</div>
            <div>
              <h3>Multiple Models</h3>
              <p>
                Choose between one-phase, two-phase and instant funding
                structures.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">02</div>
            <div>
              <h3>Multiple Account Sizes</h3>
              <p>
                Account sizes range from smaller accounts to larger
                allocations depending on the model.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">03</div>
            <div>
              <h3>Different Reward Cycles</h3>
              <p>
                Reward frequency and split vary by model, giving traders
                different payout structures to choose from.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">04</div>
            <div>
              <h3>Multiple Reward Methods</h3>
              <p>
                FundingPips currently lists Card, Crypto, Rise and Bank
                Transfer as reward methods.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* REWARD METHODS */}

      <div className="reward-section">

        <span>REWARD METHODS</span>

        <h2>How Can You Receive FundingPips Rewards?</h2>

        <div className="reward-grid">

          <div>
            <strong>💳 Card</strong>
            <p>Visa / Mastercard options where available.</p>
          </div>

          <div>
            <strong>₿ Crypto</strong>
            <p>USDT / USDC via ERC20.</p>
          </div>

          <div>
            <strong>⚡ Rise</strong>
            <p>Available with required verification.</p>
          </div>

          <div>
            <strong>🏦 Bank Transfer</strong>
            <p>Direct transfer where supported.</p>
          </div>

        </div>

        <p className="reward-note">
          FundingPips states that reward requests are generally processed
          within 1–3 working days, excluding weekends. Minimums and
          availability can depend on the selected method and region.
        </p>

      </div>

      {/* FAQ / SEO CONTENT */}

      <div className="fundingpips-feature-section">

        <div className="feature-heading">
          <span>FUNDINGPIPS FAQ</span>

          <h2>
            Common Questions
            <br />
            About FundingPips.
          </h2>
        </div>

        <div className="feature-points">

          <div className="feature-point">
            <div className="feature-icon">01</div>
            <div>
              <h3>What is FundingPips?</h3>
              <p>
                FundingPips is a prop trading firm offering different
                funded trading account models. Traders can compare
                evaluation-based and instant funding structures depending
                on the available program.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">02</div>
            <div>
              <h3>What FundingPips account sizes are available?</h3>
              <p>
                The available account size depends on the selected model.
                The models shown on this page currently range from $5K
                accounts up to $200K accounts.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">03</div>
            <div>
              <h3>Which FundingPips model is best?</h3>
              <p>
                There is no single best model for every trader. Your choice
                should depend on your preferred evaluation structure,
                profit target, daily loss limit, maximum loss and reward
                cycle.
              </p>
            </div>
          </div>

          <div className="feature-point">
            <div className="feature-icon">04</div>
            <div>
              <h3>Can FundingPips rules change?</h3>
              <p>
                Yes. Prop firm programs, trading rules, account conditions,
                reward structures and available models can change. Always
                check the latest official FundingPips terms before buying
                an account.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* IMPORTANT */}

      <div className="fundingpips-warning">

        <strong>⚠️ IMPORTANT BEFORE YOU BUY</strong>

        <p>
          FundingPips uses a simulated trading environment. Rules,
          targets, loss limits, reward conditions and available models
          can change. The information on THE SEVENTEEN FUNDED HUB is
          provided for comparison and educational purposes. Always verify
          the latest official FundingPips terms before purchasing an account.
        </p>

      </div>

      {/* CTA */}

      <div className="fundingpips-final-cta">

        <span>READY TO EXPLORE?</span>

        <h2>
          Find Your
          <br />
          Funding Model.
        </h2>

        <p>
          Compare the current FundingPips options and choose the model
          that fits your trading style, risk tolerance and trading goals.
        </p>

        <a
          className="primary-btn"
          href="https://app.fundingpips.com/register?referral_code=E67CA536"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISIT FUNDINGPIPS →
        </a>

      </div>

    </section>
  );
}

export default FundingPips;