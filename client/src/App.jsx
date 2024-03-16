import { useState } from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import DashBoard from './views/Dashboard';
import AddTrade from "./views/AddTrade";
import CurrentPortfolio from "./views/CurrentPortfolio";
import EquityCurve from "./views/EquityCurve";
import ToDo from "./views/ToDo";
import TradeLedger from './views/TradeLedger';
import TradeStats from "./views/TradeStats";
import UpdateTrade from "./views/UpdateTrade";
import NavBar from "./components/NavBar";
import TestTicker from './views/TestTicker';
import TradeDetails from './views/TradeDetails';
import './App.css';
import YahooQuote from './views/YahooQuote';



function App() {
  const [detailStocks, setDetailStocks] = useState([])
  const stateUpdater = (newValue) => {
    setDetailStocks([newValue])
  }

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<DashBoard />} />
          <Route path='/add' element={<AddTrade />} />
          <Route path='/current' element={<CurrentPortfolio stateUpdater={stateUpdater} setDetailStocks={setDetailStocks} />} />
          <Route path='/equitycurve' element={<EquityCurve />} />
          <Route path='/todo' element={<ToDo />} />
          <Route path='/ledger' element={<TradeLedger />} />
          <Route path='/stats' element={<TradeStats stateUpdater={stateUpdater} setDetailStocks={setDetailStocks} />} />
          <Route path='/update/:id' element={<UpdateTrade />} />
          <Route path='/trades/:ticker' element={<TestTicker />} />
          <Route path='/trades/details' element={<TradeDetails detailStocks={detailStocks} setDetailStocks={setDetailStocks} />} />
          <Route path='/test/:symbol' element={<YahooQuote />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
