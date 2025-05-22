import styles from './loading.module.css';

const Loading = () => {
    return (
    <div className={styles.overlay}>
      <div className={styles.spinner}></div>
      <p className={styles.loadingText}>Loading...</p>
    </div>
    );
  };

  export default Loading;