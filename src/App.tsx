import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './app/components/ScrollToTop';
import { HomePage } from '@/pages/Home';
import LhynHerbalsPage from '@/pages/LhynHerbals/ui/LhynHerbalsPage';
import { DialiEasePage } from '@/pages/DialiEase';
import VanReservationPage from '@/pages/VanReservation/ui/VanReservationPage';

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects/lhyn-herbals" element={<LhynHerbalsPage />} />
                <Route path="/projects/dialiease" element={<DialiEasePage />} />
                <Route path="/projects/van-reservation" element={<VanReservationPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


