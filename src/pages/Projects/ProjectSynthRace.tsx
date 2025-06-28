import { motion } from 'framer-motion';
import SlideFade from '../../components/animation/SlideFade';
import CenteredDiv from '../../components/layout/CenteredDiv';

const steamlink = "https://store.steampowered.com/widget/2944360/";

export default function ProjectSynthRace() {
    return <CenteredDiv>
    <SlideFade>
        <iframe
            src={steamlink}
            frameBorder="0"
            width="646"
            height="190">
        </iframe>
    </SlideFade>
    </CenteredDiv>
}