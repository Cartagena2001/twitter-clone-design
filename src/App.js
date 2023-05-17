import BarRight from './components/BarRight';
import Content from './components/Content';
import Menu from './components/Menu';
import Sidebar from './components/Sidebar';
import Twittear from './components/Twittear';
import './index.css';

function App() {
  return (
    <div className='max-w-[75rem] mx-auto px-6 grid grid-cols-1 lg:grid-cols-5 gap-5'>
      <div className='hidden lg:block'>
        <Sidebar />
      </div>
      <div className='col-span-2'>
        <Menu/>
        <Twittear />
        <Content />
      </div>
      <div className='hidden lg:block col-span-2'>
        <BarRight />
      </div>
    </div>
  );
}

export default App;
