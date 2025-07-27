"use client";
import React from "react";
import styles from "./projectModal.module.css";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  features: string[];
  techStack: string[];
  imageSrc?: string; 
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  features,
  techStack,
  imageSrc,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button onClick={onClose} className={styles.closeBtn}>
          &times;
        </button>
        <div className={styles.contentWrapper}>
          <div className={styles.left}>
            <h2 className={styles.modalTitle}>{title}</h2>
            <h4 className={styles.subheading}>Project Description</h4>
            <p className={styles.description}>{description}</p>

            <h4 className={styles.subheading}>Key Features</h4>
            <ul className={styles.featureList}>
              {features.map((feature, index) => (
                <li key={index}>• {feature}</li>
              ))}
            </ul>

            <div className={styles.techStack}>
              {techStack.map((tech, index) => (
                <span key={index} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
          </div>

          <div className={styles.right}>
            {imageSrc ? (
              <img
                src={imageSrc}
                alt="Project Screenshot"
                className={styles.previewImage}
              />
            ) : (
              <div className={styles.preview}>
                <span className={styles.previewIcon}>📊</span>
                <p className={styles.previewText}>
                  Project screenshot or demo would appear here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
