import { motion } from 'framer-motion';
import SlideFade from '../../components/animation/SlideFade';
import CenteredDiv from '../../components/layout/CenteredDiv';

export default function ProjectOverview() {
    return <SlideFade>
        <CenteredDiv>
            <h2>Header</h2>
            <p>Details</p>
        </CenteredDiv>
    </SlideFade>

}