import styles from './styles/forfaits.module.css';
import Head from 'next/head';

const forfaits = [
    {
        id: 1,
        header: "Autonome",
        text: "Réservez votre créneau et profitez du studio, en présence du coach. Solo ou duo. Sur rendez-vous jusqu'à 3*/semaine",
        price: "60€/mois solo - 80€/mois duo",
    },

    {
        id: 2,
        header: "Autonome +",
        text: "Réservez votre créneau et profitez du studio avec un coach avec programme sur mesure pour atteindre tes objectifs. Sur rendez-vous jusqu'à 3*/semaine",
        price: "150€/mois",
    },

    {
        id: 3,
        header: "Performance",
        text: "Suivi Complet et programme sur mesure",
    },
];

export default function Contact () {

    return(
        <>
            <Head>
                <title>Forfaits</title>
            </Head>

            <h2 className={styles.tarifsTitle}>Fonctionnement du studio</h2>
            <span className={styles.span}>
                <p className={styles.text}>
                    Profitez d&apos;un service personnalisé dans un lieu agréable.
                    Solo ou duo, libre ou suivi. Sur rendez-vous uniquement
                </p>
            </span>

            <div className={styles.tarifs}>
                
                <div className={styles.container}>

                    <div className={styles.indication}>
                        <span className={styles.span}>
                            <h3 className={styles.tarifsSubtitle}>Comment ça marche ?</h3>
                            <ul className={styles.tarifsList}>
                                <li className={styles.tarifsText}>1. Définition de l&apos;objectif</li>
                                <li className={styles.tarifsText}>2. Séance d&apos;essai d&apos;environ 40 min</li>
                                <li className={styles.tarifsText}>3. Choix de la formule adaptée selon l&apos;objectif</li>
                                <li className={styles.tarifsText}>4. Programmation des séances</li>
                            </ul>
                        </span>
                        
                        <span className={styles.span}>
                            <h3 className={styles.tarifsSubtitle}>Comment se déroulent les séances ?</h3>
                            <ul className={styles.déroulementList}>
                                <li className={styles.tarifsText}>1. Plan de séance</li>
                                <li className={styles.tarifsText}>2. Echauffement</li>
                                <li className={styles.tarifsText}>3. Séance de 45min / 1h30</li>
                                <li className={styles.tarifsText}>4. Débrief</li>
                            </ul>
                        </span>
                    </div>
                </div>
                
                <div className={styles.container1}>
                    <h2 className={styles.title}>Forfaits</h2>
                    <div className={styles.tarifsForfaits}>
                        

                        {forfaits.map((forfait) => (
                            <div className={`${styles.forfait}`} key={forfait.id}>
                                <h3 className={styles.forfaitTitle}>{forfait.header}</h3>
                                <p className={styles.forfaitText}>{forfait.text}</p>
                                <p className={styles.forfaitPrice}>{forfait.price}</p>
                            </div>
                        ))}

                        
                    </div>
                </div>
                
            </div>
        </>
    )
}