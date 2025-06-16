"use client";
import React from "react";
import styles from "./projectModal.module.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title: string;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, videoSrc, title }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>&times;</button>
        <h3 className={styles.modalTitle}>{title}</h3>
        <video className={styles.video} src={videoSrc} autoPlay playsInline controlsList="nodownload noplaybackrate" controls />
      </div>
    </div>
  );
};

export default ProjectModal;
