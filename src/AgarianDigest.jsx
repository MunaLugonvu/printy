
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import './AgarianDigest.css';

const AgrarianDigest = () => {
  const radarData = [
    { subject: 'Finance', value: 85 },
    { subject: 'Resilience', value: 82 },
    { subject: 'Management', value: 75 },
    { subject: 'Production', value: 80 },
    { subject: 'Marketing', value: 70 },
    { subject: 'Finance', value: 78 },
    { subject: 'Information\nAccess', value: 65 },
    { subject: 'Climate', value: 65 },
  ];

  const farmerIndices = [
    { code: 'FBI', score: 78, name: 'Farmer Bankability Index', band: '+752', bandClass: 'high', description: 'Measures creditworthiness, using production stability, income, diversity, financial behavior, arrhes, impact to:' },
    { code: 'CEM', score: 65, name: 'Climate Exposure Matrix', band: 'Moderate Risk', bandClass: 'moderate', description: 'Assesses rainfall variability, soil stress, and location risk affecting repayment.' },
    { code: 'HRS', score: 82, name: 'Household Resilience Score', band: 'Resilient', bandClass: 'resilient', description: 'Evaluates household\'s ability to withstand shocks.' },
    { code: 'FRRS', score: 75, name: 'Farmer Finance Readiness Score', band: 'Ready', bandClass: 'ready', description: 'Considers financial literacy, business acumen, and current indebtedness.' },
    { code: 'APCI', score: 80, name: 'Agricultural Production Capacity Index', band: 'High Capacity', bandClass: 'high-capacity', description: 'Measures productivity potential-bain land size-yields, crops sex diversity.' },
    { code: 'MACI', score: 70, name: 'Market Access & Commercialization Index', band: 'Commercial', bandClass: 'commercial', description: 'Evaluates market access, buyer relationships, product quality.' },
    { code: 'BRS', score: 78, name: 'Borrower Readiness Score', band: 'Eligible', bandClass: 'eligible', description: 'Assesses credit-stability, collateral, documentation, ability to pay back.' },
  ];

  return (
    <div className="agrarian-digest">
      <header className="header">
        <div className="logo">
          <div className="logo-icon">aX</div>
          <div className="logo-text-container">
            <span className="logo-text">aXiom Zorn</span>
            <span className="logo-tagline">Authentic data that drives change</span>
          </div>
        </div>
      </header>

      <h1 className="title">AGRARIAN DATA DIGEST</h1>

      <div className="content-grid">
        <div className="left-column">
          <section className="section">
            <h2 className="section-header">A. Identification</h2>
            <div className="identification-content">
              <div className="farmer-photo">
                <img src="https://via.placeholder.com/250x180" alt="Farmer" />
              </div>
              <div className="map-small">
                <div className="map-marker">📍</div>
                <div className="location-name">Kijuna</div>
              </div>
            </div>
            <div className="info-grid">
              <div className="info-row">
                <span className="info-label">Name:</span>
                <span className="info-value">John Doe</span>
              </div>
              <div className="info-row">
                <span className="info-label">Village:</span>
                <span className="info-value">Kijuna Village</span>
              </div>
              <div className="info-row">
                <span className="info-label">Phone:</span>
                <span className="info-value">0777-123456</span>
              </div>
              <div className="info-row">
                <span className="info-label">Farm Size:</span>
                <span className="info-value">5 acres - 8 acres Mixed Farming</span>
              </div>
              <div className="info-row">
                <span className="info-label">Total Land at Disposal:</span>
                <span className="info-value">8 acres Mixed Farming</span>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-header">B. Economic Snapshot</h2>
            <div className="economic-list">
              <div className="economic-item">
                <span className="checkmark">✓</span>
                <span className="economic-label">Annual Income (All Sources):</span>
                <span className="economic-value">UGX 12,000,000</span>
              </div>
              <div className="economic-item">
                <span className="checkmark">✓</span>
                <span className="economic-label">Expected Crop Income - This Season:</span>
                <span className="economic-value">UGX 8,000,000</span>
              </div>
              <div className="economic-item">
                <span className="checkmark">✓</span>
                <span className="economic-label">Livestock Annual Income:</span>
                <span className="economic-value">UGX 4,000,000</span>
              </div>
              <div className="economic-item">
                <span className="checkmark">✓</span>
                <span className="economic-label">Soil Type:</span>
                <span className="economic-value">Loamy</span>
              </div>
            </div>
          </section>
        </div>

        <div className="right-column">
          <section className="credit-score-section">
            <h2 className="section-header">AZ Credit Score <span className="score-range">(0-100)</span></h2>
            <div className="score-display">
              <div className="score-main">
                <div className="gore-section">
                  <span className="score-label">GORE</span>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '67.4%'}}></div>
                  </div>
                </div>
                <span className="score-value">67.4</span>
                <div className="rating-box">
                  <span className="score-rating">Fair</span>
                  <div className="rating-bar"></div>
                </div>
              </div>
              <div className="score-status">
                <span className="status-label">Status:</span>
                <div className="status-bar">
                  <div className="status-fill"></div>
                </div>
                <span className="status-value">Good</span>
              </div>
              <div className="loan-limit">
                <div className="limit-label">Indicative Loan Limit:</div>
                <div className="limit-amount">
                  <span className="currency-icon">≡</span>
                  UGX 3,000,000
                </div>
              </div>
            </div>
          </section>

          <section className="map-section">
            <div className="coordinates-map">
              <div className="map-placeholder">
                <div className="map-marker-large">📍</div>
              </div>
              <div className="coordinates">
                <div className="coord-value">-0.5594</div>
                <div className="coord-label">Longitude: 31.9341</div>
              </div>
            </div>
          </section>

          <section className="radar-section">
            <ResponsiveContainer width="100%" height={220}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#ccc" />
                <PolarAngleAxis 
                  dataKey="subject" 
                  tick={{ fill: '#333', fontSize: 9 }} 
                />
                <PolarRadiusAxis 
                  angle={90} 
                  domain={[0, 100]} 
                  tick={{ fill: '#666', fontSize: 8 }} 
                />
                <Radar 
                  name="Metrics" 
                  dataKey="value" 
                  stroke="#4a7c59" 
                  fill="#5a8c69" 
                  fillOpacity={0.6} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </section>
        </div>
      </div>

      <section className="indices-section">
        <h2 className="section-header-dark">D. Farmer Intelligence Indices</h2>
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
            {farmerIndices.map((index) => (
              <tr key={index.code}>
                <td>
                  <div className="index-code-score">
                    <span className="index-code">{index.code}</span>
                    <span className="index-score">{index.score}</span>
                  </div>
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
          <span className="recommendation-label">Recommended Action</span>
          <span className="recommendation-value">Standard Loan + <em>Buyer Contract</em></span>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo-icon">aX</div>
          <span className="footer-text"><strong>AXIOM ZORN</strong> | Authentic data for direr change</span>
          <span className="footer-url">www.axiomzorn.com</span>
        </div>
      </footer>
    </div>
  );
};

export default AgrarianDigest;