import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './SMEDigest.css';

const SMEDigest = () => {
  const radarData = [
    { subject: 'Business\nInformation', value: 75 },
    { subject: 'Business', value: 80 },
    { subject: 'Financial\nCapacity', value: 70 },
    { subject: 'Financial\nCapacity', value: 65 },
    { subject: 'Business\nPerformance', value: 60 },
    { subject: 'Business\nLinkages', value: 55 },
  ];

  const smeIndices = [
    { code: 'SCI-C', name: 'SME: Creditworthiness Index', band: 'Moderate Risk', bandClass: 'moderate', description: 'Assess cashflow, financial strength, credit behaviour, banking records, and business diversity.' },
    { code: 'RSI', name: 'Risk Matrix Profile', band: 'Moderate Risk', bandClass: 'moderate', description: 'Analyre leverage risk, credit stress, operational, practices, market stability, and governance concerns.' },
    { code: 'BPSI', name: 'Business Performance & Stability Index', band: 'Moderate', bandClass: 'moderate', description: 'Evaluate stock discipline, customer consistency, business diversifaation, and delivery capacity.' },
    { code: 'MGQI', name: 'Management & Governance Quality index', band: 'Weak', bandClass: 'weak', description: 'Measure financial controls, record-keeping, governance and owner capability.' },
  ];

  return (
    <div className="sme-digest">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">aX</div>
          <div className="logo-text-container">
            <span className="logo-text">aXiom Zorn</span>
            <span className="logo-tagline">Authentic data that drives change</span>
          </div>
        </div>
      </header>

      <h1 className="title">SME DATA DIGEST</h1>

      <div className="content-grid">
        <div className="left-column">
          <section className="section">
            <h2 className="section-header">A. Identification</h2>
            <div className="identification-content">
              <div className="business-photo">
                <img src="https://via.placeholder.com/400x200" alt="Business" />
              </div>
            </div>
            <div className="info-grid">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">Aguti Jesca</span>
              </div>
              <div className="info-row">
                <span className="info-label">Location:</span>
                <span className="info-value">Western Region, Kasese District, Kasese Town Council, Petta</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone:</span>
                <span className="info-value">0701-234567</span>
              </div>
              <div className="info-row">
                <span className="info-label">Sector:</span>
                <span className="info-value">Trade (Grocery Stall)</span>
              </div>
              <div className="info-row">
                <span className="info-label">Registration:</span>
                <span className="info-value">Informal (Unregistered)</span>
              </div>
              <div className="info-row">
                <span className="info-label">Years in Operation:</span>
                <span className="info-value">6 Years</span>
              </div>
              <div className="info-row">
                <span className="info-label">Employees:</span>
                <span className="info-value">2</span>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-header">B. SME Financial Snapshot</h2>
            <div className="financial-list">
              <div className="financial-item">
                <span className="checkmark">✓</span>
                <span className="financial-label">Annual Income:</span>
                <span className="financial-value">UGX 6,000,000</span>
              </div>
              <div className="financial-item">
                <span className="checkmark">✓</span>
                <span className="financial-label">Share of Profitable Months <span className="sub-label">(Last yr):</span></span>
                <span className="financial-value">50%</span>
              </div>
              <div className="financial-item">
                <span className="checkmark">✓</span>
                <span className="financial-label">Net Monthly Cashflow:</span>
                <span className="financial-value">UGX 300,000</span>
              </div>
              <div className="financial-item">
                <span className="checkmark">✓</span>
                <span className="financial-label">Total Loan Amount:</span>
                <span className="financial-value">UGX 2,000,000</span>
              </div>
              <div className="financial-item">
                <span className="checkmark">✓</span>
                <span className="financial-label">Average Loan Repayment Rate:</span>
                <span className="financial-value">65%</span>
              </div>
              <div className="financial-item">
                <span className="checkmark">✓</span>
                <span className="financial-label">Existing Debts:</span>
                <span className="financial-value">UGX 1,500,000</span>
              </div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="credit-score-section">
            <h2 className="section-header">AZ SME Credit Score <span className="score-range">(0-100)</span></h2>
            <div className="score-display">
              <div className="score-main">
                <span className="status-label">Status:</span>
                <span className="score-value">45.6</span>
                <span className="score-rating">Weak</span>
              </div>
              <div className="loan-limit">
                <div className="limit-label">Indicative Loan Limit:</div>
                <div className="limit-amount">
                  <span className="currency-icon">≡</span>
                  UGX 4,500,000
                </div>
              </div>
            </div>
          </section>

          <section className="map-section">
            <div className="coordinates-map">
              <div className="map-placeholder">
                <div className="map-marker-large">📍</div>
              </div>
              <div className="location-info">
                <div className="location-name-large">Petta</div>
                <div className="location-coords">Latitude: 30.0828</div>
              </div>
            </div>
          </section>

          <section className="radar-section">
            <h3 className="radar-title">C. AZ SME Credit Score <span className="score-range">(0-100)</span></h3>
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#ccc" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#333', fontSize: 8 }} 
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fill: '#666', fontSize: 8 }} 
                />
                <Radar 
                  name="Metrics" 
                  dataKey="value" 
                  stroke="#2c5282" 
                  fill="#4299e1" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </section>
        </div>
      </div>

      <section className="indices-section">
        <h2 className="section-header-dark">D. SME Intelligence Indices</h2>
        <table className="indices-table">
          <thead>
            <tr>
              <th>Score (0-100)</th>
              <th>Index</th>
              <th>Band</th>
              <th className="description-col"></th>
            </tr>
          </thead>
          <tbody>
            {smeIndices.map((index) => (
              <tr key={index.code}>
                <td>
                  <div className="index-code">{index.code}</div>
                </td>
                <td className="index-name">{index.name}</td>
                <td>
                  <span className={`band-badge ${index.bandClass}`}>{index.band}</span>
                </td>
                <td className="index-description">{index.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="recommendation">
          <span className="checkmark">✓</span>
          <span className="recommendation-label">Recommendation</span>
          <span className="recommendation-value">Coaching + <em>Monitor Business Progress.</em></span>
        </div>
      </section>

      <div className="disclaimer">
        Data collected under Farmers Bureau/DEC for credit, insurance, and market services. Confidential document. For internal use only.
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-icon">aX</div>
          <span className="footer-text"><strong>AXIOM ZORN</strong> | Authentic data for drives change</span>
          <span className="footer-url">www.axiom zorn.com</span>
        </div>
      </footer>
    </div>
  );
};

export default SMEDigest;