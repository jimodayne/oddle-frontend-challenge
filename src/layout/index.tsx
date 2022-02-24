import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import LoadingBar from '../components/LoadingBar';

const SearchModule = lazy(() => import('../modules/search'));
const LikedModule = lazy(() => import('../modules/liked'));
const UserModule = lazy(() => import('../modules/user'));

const Layout = () => {
    return (
        <div className="App">
            <Suspense fallback={<LoadingBar />}>
                <Routes>
                    <Route path="/" element={<SearchModule />} />
                    <Route path="/liked" element={<SearchModule />} />
                    <Route path="/users/:username" element={<UserModule />} />
                </Routes>
            </Suspense>
        </div>
    );
};

export default Layout;
