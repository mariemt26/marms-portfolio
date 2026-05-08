import Spline from '@splinetool/react-spline/next';

export default function Home() {

  return (
    
    <main style={{ 
      width: '100vw', 
      height: '100vh', 
      overflow: 'hidden',
      backgroundColor: '#b8968e' 
    }}>
      <Spline
        scene= "https://prod.spline.design/7cbJfOPulOlFECsi/scene.splinecode"
        style={{ width: '100%', height: '100%' }}
      />
    </main>
  );
}