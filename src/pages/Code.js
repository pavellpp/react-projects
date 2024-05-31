import './Code.css'
import { useState } from 'react';
import QRCode from 'react-qr-code';

const App =() => {
  const [qrData, setQrData] = useState('');
  const [qrUrl, setQrUrl] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${(qrData)}&size=100x100}`;
    setQrUrl(qrUrl);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
      
          <p>Zadej URL nebo slovo:</p>
          <input type="text" value={qrData} onChange={(e) => setQrData(e.target.value)} />
        
        <button type="submit">Generate QR Code</button>
      </form>
      <section className='code'>
      {qrUrl && <QRCode value={qrUrl} />}
      </section>
    
    </div>
  );
}

export default App
