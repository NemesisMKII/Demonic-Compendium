import './App.css';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './Views/HomeView';
import { ADD_DEMON_URL, DEMON_LIST_URL, DEMON_URL, HOME_URL, MODIFY_DEMON_URL } from './Constants/urls';
import DemonListView from './Views/DemonListView';
import AddDemonView from './Views/AddDemonView';
import DemonView from './Views/DemonView';
import ModifyDemonView from './Views/ModifyDemonView';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <main className='w-full h-[85%] flex'>
          <Routes>
            <Route path={HOME_URL} element={<HomeView />} />
            <Route path={DEMON_LIST_URL} element={<DemonListView />} />
            <Route path={ADD_DEMON_URL} element={<AddDemonView />} />
            <Route path={MODIFY_DEMON_URL} element={<ModifyDemonView />} />
            <Route path={DEMON_URL} element={<DemonView />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
