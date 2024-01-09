import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <div className="landing">
      <header className="landing__header">
        <div className="landing__header-logo">
          <h1 className="landing__header-logo--text">QBurst</h1>
        </div>
        <div className="landing__header-texts">
          <h1 className="landing__header-texts--title">QB Battledore</h1>
          <h2 className="landing__header-texts--subtitle">
            make a play for the badminton championship
          </h2>
          <button className="landing__header-texts--action">Show More</button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
