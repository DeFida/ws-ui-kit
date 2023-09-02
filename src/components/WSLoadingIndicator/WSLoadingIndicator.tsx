import React from 'react';
import styles from './WSLoadingIndicator.module.scss';

const WSLoadingIndicator: React.FC = () => {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingSpinner}></div>
    </div>
  );
};

export default WSLoadingIndicator;
