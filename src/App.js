import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">AI Mind-Insight</div>
        <div className="status">System Online</div>
      </nav>

      <header className="hero">
        <h1>Cloud-Native Intelligence</h1>
        <p>AWS S3 & GitHub Actions로 배포된 실시간 분석 대시보드</p>
      </header>

      <main className="dashboard">
        <div className="card">
          <h3>Data Processing</h3>
          <div className="value">{loading ? "Analyzing..." : "98.2%"}</div>
          <p>Real-time node connectivity</p>
        </div>
        <div className="card highlight">
          <h3>Cloud Status</h3>
          <div className="value">Active</div>
          <p>Deployed via S3 Hosting</p>
        </div>
        <div className="card">
          <h3>System Latency</h3>
          <div className="value">24ms</div>
          <p>Global Content Delivery</p>
        </div>
      </main>

      <footer className="footer">
        <p>© 2026 AI Insight Lab. Powered by AWS Academy.</p>
      </footer>
    </div>
  );
}

export default App;