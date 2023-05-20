import Head from "next/head";
import styles from "./styles/contact.module.css";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import {BsInstagram}  from "react-icons/bs";

function ContactForm() {
    const [state, handleSubmit] = useForm("xvonyel");

    if (state.succeeded) {
        return <p>Merci 🎉</p>;
    }

    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <div className={styles.contactFormItems}>
                <label htmlFor="name" className={styles.contactFormItem}>
                    Nom et Prénom
                </label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className={styles.contactFormInput} 
                    required
                />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            
            <div className={styles.contactFormItems}>
                <label htmlFor="email" className={styles.contactFormItem}>
                    Email
                </label>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    className={styles.contactFormInput}
                    required
                />
            
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div className={styles.contactFormItems}>
                <label htmlFor="phone" className={styles.contactFormItem}>
                    Numéro de téléphone
                </label>
                <input
                    id="phone"
                    type="tel"
                    name="phone"
                    className={styles.contactFormInput}
                    required
                />

                <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                />
            </div>

            <div className={styles.contactFormItems}>
                <label htmlFor="adresse" className={styles.contactFormItem}>
                    Adresse
                </label>
                <input 
                    type="text"
                    id="adresse"
                    name="adresse"
                    className={styles.contactFormInput}
                    required
                />
            </div>

            <div className={styles.contactFormItems}>
                <label htmlFor="postal" className={styles.contactFormItem}>
                    Code Postal
                </label>
                <input
                    type="number"
                    id="postal"
                    name="postal"
                    className={styles.contactFormInput}
                    required
                />
            </div>

            <div className={styles.contactFormItems}>
                <label htmlFor="ville" className={styles.contactFormItem}>
                    Ville
                </label>
                <input
                    type="text"
                    id="ville"
                    name="ville"
                    className={styles.contactFormInput}
                    required
                />
            </div>

            <div className={styles.contactFormItems}>
                <label htmlFor="objectif" className={styles.contactFormItem}>
                    Quel est votre objectif ?
                </label>
                <select name="objectif" id="objectif" className={styles.contactFormInput} required>
                    <option value=""></option>
                    <option value="Remise en forme">Remise en forme</option>
                    <option value="Perte de poids">Perte de poids</option>
                    <option value="Préparation physique">Préparation physique</option>
                    <option value="Réathlétisation">Réathlétisation</option>
                    <option value="Récupération">Récupération</option>
                    <option value="Autre">Autre</option>
                </select>
            </div>

            <div className={styles.contactFormItems}>
                <label htmlFor="message" className={styles.contactFormItem}>
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows="5"
                    cols="33"
                    className={styles.contactFormInput}
                />
            </div>

            <button type="submit" disabled={state.submitting} className={styles.button}>
                Soumettre
            </button>
        </form>
    );
}

export default function Contact() {
    return(
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <div className={styles.contact}>
                
                <section className={styles.contactSection1}>
                    <h2 className={styles.contactTitle}>Contact</h2>

                    <div className={styles.contactContent}>
                        <p className={styles.informations}>
                            Plus d&apos;informations au: <br/><span className={styles.information}>06 15 42 31 77</span>
                        </p>

                        <p className={styles.informations}>
                            Ou par mail: <br/><span className={styles.information}>contact.nperformance@gmail.com</span>
                        </p>

                        <p className={styles.informations}>
                            Ou sur les réseaux sociaux: <br/>Instagram <a className={styles.information} href="https://www.instagram.com/nperformance91/"><BsInstagram className={styles.social}/></a>
                        </p>

                        <p className={styles.informations}>
                            Adresse: <br/><span className={styles.information}>3 Rue de l&apos;Arpajonnais, Saulx-les-Chartreux, France</span>
                        </p>

                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.6454429591386!2d2.2702189765950633!3d48.69314311232112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e5d8065e6410bb%3A0x14b40041771b135a!2s3%20Rue%20de%20l&#39;Arpajonnais%2C%2091160%20Saulx-les-Chartreux!5e0!3m2!1sfr!2sfr!4v1684587423970!5m2!1sfr!2sfr" 
                            width="450" 
                            height="350" 
                            allowfullscreen="" 
                            loading="lazy" 
                            referrerpolicy="no-referrer-when-downgrade"
                            className={styles.map}
                        />
                    </div>
                </section>

                <section className={styles.contactSection2}>
                    <h2 className={styles.contactTitle}>Formulaire de contact</h2>

                    <ContactForm/>
                </section>
            </div>
        </>
    )
}