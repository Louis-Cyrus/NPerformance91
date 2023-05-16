import Head from "next/head";
import styles from "./layout.module.css";
import Header from "./Header/header";

export default function Layout({ children }) {
    return(
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta
                    name="description"
                    content="Remise en forme, perte de poids, réathlétisation, préparation physique et récupération"
                />
            </Head>
            <Header/>
            <main>{children}</main>
        </div>
    );
}