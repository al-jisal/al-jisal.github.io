import {useRef} from 'react';
import { useFrame } from '@react-three/fiber';

const HeroCamera = ({ children }) => {
    const groupRef = useRef();

    useFrame(( ) => {
        
    });

    return (
        <group>{ children }</group>
    )
}
export default HeroCamera;