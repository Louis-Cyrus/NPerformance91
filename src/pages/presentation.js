import styles from "../pages/styles/presentation.module.css";
import Image from "next/image";
import profil from "../../public/images/Profil.jpg";
import {BsInstagram}  from "react-icons/bs";

const pourquoi = [
  "Remise en forme après une longue pause (travail, études, enfants...)",
  "Préparation physique pour athlètes souhaitant être plus performants dans leur pratique, réduire le risque de blessures...",
  "Améliorer sa posture et son mode de vie, éviter les problèmes de dos, cervicales, hanches, genoux, chevilles...",
  "Perdre du poids pour une meilleure santé à long terme",
  "Le coaching sur mesure peut servir à progresser plus rapidement, perdre moins de temps (qu'en salle de sport)"
];

export default function Presentation() {
    return(
        <div className={styles.presentation}>
          <div className={styles.presentationImage}>
            <Image
            src={profil}
            height={450}
            width={450}
            alt="Photo de Profil"
            className={styles.photo}
            />
            <div className={styles.presentationQui}>
              <h2 className={styles.presentationQuiTitle}>
                Qui suis-je ?
              </h2>
              <p className={styles.presentationQuiParagraph}>
                Dafer Nalouti, ex préparateur physique<br/> de la réserve féminine du Paris FC
              </p>
              <a href="https://www.instagram.com/nperformance91/" className={styles.presentationQuiLink}><BsInstagram/></a>
            </div>  
          </div>
          
          <div className={styles.presentationText}>
            <h2 className={styles.presentationTextTitle}>
              N Performance 91 <br/>
              Remise en forme, perte de poids, réathlétisation,<br/> préparation physique et récupération.
            </h2>
            <h3 className={styles.presentationTextSubtitle}>
              Pour qui ? Pourquoi ?
            </h3>
            <ul className={styles.presentationTextParagraph}>
              {pourquoi.map((raison, index) => (
                <ol key={index} className={styles.presentationTextParagraphList}>{raison}</ol>
              ))}
            </ul>
          </div>
        </div>
    )
}