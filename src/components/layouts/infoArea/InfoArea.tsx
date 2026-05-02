import InfoCard from "../../common/infoCard/InfoCard"
import styles from './InfoArea.module.css';

import CampField from '../../../assets/background-card-historia.png'
import GraosMoedor from '../../../assets/card-graos.png'

export default function InfoArea() {

    function goToHistory() {
        console.log('Navegar para a página de história');
        //tratar a lógica de navegação aqui, como usar o react-router para redirecionar para a página de história
    }

    function goToCoffes() {
        console.log('Navegar para a página de cafés');
        //tratar a lógica de navegação aqui, como usar o react-router para redirecionar para a página de cafés
    }

    return (
        <div className={styles.infoArea}>
            <InfoCard 
            text={"Do grão à xícara, cultivamos mais do que café — cultivamos tradição, cuidado e paixão em cada etapa."}
            bannerTitle={"Grãos & Prosa - Hitória"}
            linkTo={"História"}
            imageSrc={CampField}
            imageAlt={"Imagem do produto"}
            onClick={goToHistory}
            />
            <InfoCard 
            text={"Selecionados com rigor, nossos grãos entregam aroma, sabor e qualidade em cada detalhe. Conheça agora os detalhes que o tornam único."}
            bannerTitle={"Grãos & Prosa - Moedor"}
            linkTo={"Processo"}
            imageSrc={GraosMoedor}
            imageAlt={"Imagem do produto"}
            onClick={goToCoffes}
            />
        </div>
    );
}