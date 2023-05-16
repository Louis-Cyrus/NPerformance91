import styles from "../pages/styles/presentation.module.css";
import Image from "next/image";
import profil from "../../public/images/Profil.jpg";

export default function Presentation() {
    return(
        
          <Image
            src={profil}
            height={144}
            width={144}
            alt="Photo de Profil"
          />  
        
    )
}