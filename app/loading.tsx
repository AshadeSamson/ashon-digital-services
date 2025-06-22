import styles from './loading.module.css';

const Loading = () => {
    return (
    <div className={styles.overlay}>
      <div className={styles.loadingContainer}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading...</p>
      </div>
    </div>
    );
  };

  export default Loading;