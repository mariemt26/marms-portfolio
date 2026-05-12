'use client';

//Importing all the things I need. Router for page stuff, Spline for my 3D room,
//useState for the loading screen stuff. Y'all know the driiilllll.
//Also, I need that CSS for the loading screen so it doesn't look awful.
import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { useRouter } from 'next/navigation';
import styles from './Room.module.css';

export default function Room() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  //Function that runs every time you interact (in this case, click) with the event.
  //The event is clicking on the journal on my desk. That takes you to another webpage.
  function onMouseDown(event: any) {
    console.log('clicked:', event.target.name);
    if (event.target.name === 'journal') {
      router.push('/portfolio');
    }
  }

   //This is the Spline stuff they generously provided to me through their app.
   //I haven't figured out how to make it mobile-friendly yet...that is something for another day.
   //As long as it clicks and takes the user to the portfolio page via Router, that's also all that matters to me for now.
  return (
    <main style={{ width: '100vw', height: '100vh', overflow: 'hidden', backgroundColor: '#c4a098' }}>
      {loading && (
         <div className={styles.loading}>
          <img src="/Hi.gif" alt="Loading..." className={styles.loadingGif} />
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/7cbJfOPulOlFECsi/scene.splinecode"
        onLoad={() => setLoading(false)}
        onSplineMouseDown={onMouseDown}
        style={{ width: '100%', height: '100%' }}
      />
    </main>
  );
}