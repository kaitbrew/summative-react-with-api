import { useState } from 'react';

function CatFactApp() {
  const [fact, setFact] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchRandomFact = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://catfact.ninja/fact');
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      console.error('Error fetching cat fact:', error);
      setFact('Failed to fetch cat fact. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Random Cat Facts</h1>
      <button 
        onClick={fetchRandomFact}
        disabled={loading}
        style={{ 
          padding: '10px 20px', 
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer'
        }}
      >
        {loading ? 'Loading...' : 'Get Random Cat Fact'}
      </button>
      
      {fact && (
        <div style={{ 
          marginTop: '20px', 
          padding: '15px', 
          backgroundColor: '#f0f0f0',
          borderRadius: '8px'
        }}>
          <p>{fact}</p>
        </div>
      )}
    </div>
  );
}

export default CatFactApp;