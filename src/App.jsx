import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import "./App.css";
import FundingPips from "./FundingPips";
import BrightFunded from "./BrightFunded";
import BlueGuardian from "./BlueGuardian";
import FundedSquad from "./FundedSquad";

const firms = [
{
name: "BrightFunded",
slug: "brightfunded",
logo: "BF",
type: "Challenge / Funding",
tag: "POPULAR",
account: "$5K – $200K",
split: "Up to 100%",
drawdown: "Model dependent",
link: "https://brightfunded.com/a/JecigJ6GTRqg7Tm6xfPwqg",
},
{
name: "FundingPips",
slug: "fundingpips",
logo: "FP",
type: "1-Step / 2-Step / Zero",
tag: "FEATURED",
account: "$5K – $200K",
split: "Up to 100%",
drawdown: "Model dependent",
link: "https://app.fundingpips.com/register?referral_code=E67CA536",
},
{
name: "Blue Guardian",
slug: "blueguardian",
logo: "BG",
type: "Instant / Challenge",
tag: "FLEXIBLE",
account: "Multiple Sizes",
split: "Up to 90%",
drawdown: "Plan dependent",
link: "https://blueguardian.com/?afmc=2bou",
},
{
name: "Funded Squad",
slug: "funded-squad",
logo: "FS",
type: "Instant / Challenge",
tag: "TRADER PICK",
account: "Multiple Sizes",
split: "Up to 95%",
drawdown: "Plan dependent",
link: "https://fundedsquad.com/?squad=3305",
},
];

function FirmDetails({ children }) {
const navigate = useNavigate();

return ( <div className="app">
<button className="back-button" onClick={() => navigate("/")}>
← Back to Home </button>

```
  {children}
</div>

);
}

function Home() {
return ( <div className="app"> <nav className="navbar"> <a className="logo" href="#home">
THE SEVENTEEN <span>FUNDED HUB</span> </a>

```
    <div className="nav-links">
      <a href="#home">Home</a>
      <a href="#firms">Prop Firms</a>
      <a href="#compare">Compare</a>
      <a href="#deals">Best Deals</a>
      <a href="#faq">FAQ</a>
    </div>

    <a className="nav-button" href="#firms">
      Explore Firms
    </a>
  </nav>

  <main>
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="badge">🔥 YOUR GUIDE TO PROP TRADING</div>

        <h1>
          FIND YOUR
          <br />
          <span>PERFECT FUNDED</span>
          <br />
          ACCOUNT
        </h1>

        <p>
          Compare prop firms, explore account options, understand
          trading rules and find a funded account that fits your
          trading style.
        </p>

        <div className="hero-buttons">
          <a className="primary-btn" href="#compare">
            Compare Prop Firms →
          </a>

          <a className="secondary-btn" href="#deals">
            View Best Deals
          </a>
        </div>

        <div className="stats">
          <div>
            <strong>4+</strong>
            <small>Featured Firms</small>
          </div>

          <div>
            <strong>20+</strong>
            <small>Plans To Explore</small>
          </div>

          <div>
            <strong>FREE</strong>
            <small>Research</small>
          </div>
        </div>
      </div>

      <div className="hero-card">
        <div className="card-header">
          <span>🔥 SMART COMPARISON</span>
          <span>THE SEVENTEEN</span>
        </div>

        <h3>Find The Right Prop Firm</h3>

        <div className="mini-card">
          <span>Account Size</span>
          <strong>Multiple Sizes</strong>
        </div>

        <div className="mini-card">
          <span>Funding Type</span>
          <strong>Instant / Challenge</strong>
        </div>

        <div className="mini-card">
          <span>What We Compare</span>
          <strong>Rules • Cost • Payout</strong>
        </div>

        <a className="card-btn" href="#compare">
          Compare Options →
        </a>
      </div>
    </section>

    <section className="firms-section" id="firms">
      <div className="section-title">
        <div>
          <span>POPULAR CHOICES</span>
          <h2>Featured Prop Firms</h2>
        </div>

        <a className="view-all" href="#compare">
          Compare All →
        </a>
      </div>

      <div className="firm-grid">
        {firms.map((firm) => (
          <div className="firm-card premium-firm-card" key={firm.name}>
            <div className="firm-card-top">
              <div className="firm-logo">{firm.logo}</div>

              <span className="firm-tag">{firm.tag}</span>
            </div>

            <h3>{firm.name}</h3>

            <p className="firm-type">{firm.type}</p>

            <div className="firm-stats">
              <div>
                <span>ACCOUNT SIZE</span>
                <strong>{firm.account}</strong>
              </div>

              <div>
                <span>PROFIT SPLIT</span>
                <strong>{firm.split}</strong>
              </div>

              <div>
                <span>DRAWDOWN</span>
                <strong>{firm.drawdown}</strong>
              </div>
            </div>

            <div className="firm-actions">
              <Link
                className="details-btn"
                to={`/prop-firms/${firm.slug}`}
              >
                VIEW DETAILS
              </Link>

              <a
                className="funded-btn"
                href={firm.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                GET FUNDED →
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="affiliate-note">
        Affiliate Disclosure: Some links on this website are affiliate
        links. We may earn a commission if you make an eligible purchase
        through our links, at no additional cost to you.
      </p>
    </section>

    <section className="compare-section" id="compare">
      <div className="section-title">
        <div>
          <span>MAKE A SMARTER CHOICE</span>
          <h2>Quick Comparison</h2>
        </div>
      </div>

      <div className="comparison-table">
        <div className="table-row table-head">
          <span>Prop Firm</span>
          <span>Funding Type</span>
          <span>Account Options</span>
          <span>Action</span>
        </div>

        {firms.map((firm) => (
          <div className="table-row" key={firm.name}>
            <strong>{firm.name}</strong>

            <span>{firm.type}</span>

            <span>{firm.account}</span>

            <Link
              className="table-details-btn"
              to={`/prop-firms/${firm.slug}`}
            >
              Details →
            </Link>
          </div>
        ))}
      </div>

      <p className="notice">
        ⚠️ Prop firm rules, prices, drawdown, payout conditions and
        offers can change. Always verify the latest terms on the
        firm's official website before purchasing.
      </p>
    </section>

    <section className="deals-section" id="deals">
      <div className="deals-content">
        <span>🔥 BEST DEALS</span>

        <h2>
          Find Funding.
          <br />
          <span>Trade Smarter.</span>
        </h2>

        <p>
          Discover available prop firm offers, discounts and funding
          options in one place.
        </p>

        <a className="primary-btn" href="#firms">
          Explore Available Offers →
        </a>
      </div>
    </section>

    <section className="why-section">
      <span>WHY THE SEVENTEEN?</span>

      <h2>
        Everything You Need
        <br />
        Before You Get Funded.
      </h2>

      <div className="features">
        <div>
          <div className="feature-icon">📊</div>

          <h3>Compare</h3>

          <p>
            Compare funding types, account sizes, trading rules and
            payout conditions.
          </p>
        </div>

        <div>
          <div className="feature-icon">💰</div>

          <h3>Best Deals</h3>

          <p>
            Find available discounts and special offers from
            participating prop firms.
          </p>
        </div>

        <div>
          <div className="feature-icon">📚</div>

          <h3>Understand Rules</h3>

          <p>
            Learn important prop firm rules in simple language before
            you choose an account.
          </p>
        </div>
      </div>
    </section>

    <section className="faq-section" id="faq">
      <span>FAQ</span>

      <h2>Frequently Asked Questions</h2>

      <div className="faq-list">
        <details>
          <summary>What is a funded trading account?</summary>

          <p>
            A funded trading program allows traders to trade under a
            firm's rules and potentially receive a share of eligible
            profits.
          </p>
        </details>

        <details>
          <summary>Which prop firm is the best?</summary>

          <p>
            There is no single best firm for everyone. The right
            choice depends on your strategy, risk tolerance, rules
            and payout preferences.
          </p>
        </details>

        <details>
          <summary>Do you guarantee that I will pass?</summary>

          <p>
            No. Trading involves risk and nobody can guarantee a
            challenge pass or trading profit.
          </p>
        </details>

        <details>
          <summary>Do you earn money from referrals?</summary>

          <p>
            Some links on this website may be affiliate links. If you
            make an eligible purchase through a referral link, we may
            receive a commission at no additional cost to you.
          </p>
        </details>
      </div>
    </section>

    <section className="cta-section">
      <h2>Ready To Find Your Funded Account?</h2>

      <p>
        Compare your options and choose the account that matches your
        trading style.
      </p>

      <a className="primary-btn" href="#firms">
        Explore Prop Firms →
      </a>
    </section>
  </main>

  <footer>
    <div>
      <strong>THE SEVENTEEN FUNDED HUB</strong>

      <p>Your independent guide to funded trading.</p>
    </div>

    <div>
      <p>© 2026 THE SEVENTEEN FUNDED HUB</p>

      <p>Affiliate Disclosure • Terms • Privacy</p>
    </div>
  </footer>
</div>

);
}

function App() {
return ( <BrowserRouter> <Routes>
<Route path="/" element={<Home />} />

```
    <Route
      path="/prop-firms/fundingpips"
      element={
        <FirmDetails>
          <FundingPips />
        </FirmDetails>
      }
    />

    <Route
      path="/prop-firms/brightfunded"
      element={
        <FirmDetails>
          <BrightFunded />
        </FirmDetails>
      }
    />

    <Route
      path="/prop-firms/blueguardian"
      element={
        <FirmDetails>
          <BlueGuardian />
        </FirmDetails>
      }
    />

    <Route
      path="/prop-firms/funded-squad"
      element={
        <FirmDetails>
          <FundedSquad />
        </FirmDetails>
      }
    />
  </Routes>
</BrowserRouter>

);
}

export default App;