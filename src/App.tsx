import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';import Footer from './components/Footer';
import Home from './pages/Home';import About from './pages/About';import Services from './pages/Services';import CFSOperations from './pages/CFSOperations';import GlobalNetwork from './pages/GlobalNetwork';import Contact from './pages/Contact';
export default function App(){return <><Navbar/><main><Routes><Route path="/" element={<Home/>}/><Route path="/about" element={<About/>}/><Route path="/services" element={<Services/>}/><Route path="/cfs-operations" element={<CFSOperations/>}/><Route path="/global-network" element={<GlobalNetwork/>}/><Route path="/contact" element={<Contact/>}/></Routes></main><Footer/></>}
