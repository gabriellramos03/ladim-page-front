'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 

export default function Home() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    setTimeout(() => {
      router.push('/login');
      setIsLoading(false); 
    }, 1500); 
  }, [router]);

  return (
    <div style={styles.container}>
      {isLoading ? (
        <div style={styles.spinner}></div> 
      ) : null}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
  },
  spinner: {
    border: '8px solid #f3f3f3', 
    borderTop: '8px solid #3498db',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    animation: 'spin 1s linear infinite',
  },
  '@keyframes spin': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};
