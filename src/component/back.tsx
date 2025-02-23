"use client"

import React from 'react';
import { useRouter } from 'next/navigation';

const GoBack = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // This will navigate to the previous page
  };

  return (
    <button onClick={handleGoBack} style={styles.button}>
      <span style={styles.arrow}>&lt;</span> Back
    </button>
  );
};

const styles = {
  button: {
    display: 'flex',
    alignItems: 'center',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontSize: '12px',
    color: '#475467', 
    padding: '0',
    margin: '0',
    fontWeight: 'medium',
  },
  arrow: {
    marginRight: '10px',
    fontSize: '18px',
  },
};

export default GoBack;