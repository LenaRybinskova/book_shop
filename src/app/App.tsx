import '../app/App.css'
import {HashRouter, Route, Routes} from 'react-router-dom';
import {PublicPage} from '@/features/publicPage/ui/PublicPage.tsx';
import {BookList} from '@/features/BookList/ui/BookList.tsx';


function App() {

    return (
        <HashRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<PublicPage/>}/>
                <Route path="/catalog" element={<BookList/>}/>
            </Routes>
        </HashRouter>
    )
}

export default App
