import logo from './logo.svg';
import './App.css';
import { Login } from './login ';
import { Option } from './Option';
import { Lab } from './lab';
import { Input } from './input';
import { Insironlab } from './insironlab';
import { Dropdown } from './components/Dropdown';
import { Apifetch } from './components/Apifetch';
import { As_Uppercase } from './components/uppercase';
import { Samp} from './components/Samp';
import { ImageSlider } from './components/ImageSlider/ImageSlider';

import { StarRating } from './components/Star_rating/Rating';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Option /> */}
      {/* <Input /> */}
      {/* <Insironlab /> */}
      {/* <Dropdown /> */}
      {/* <Apifetch /> */}
      {/* <As_Uppercase /> */}
      {/* <ImageSlider /> */}
     <StarRating />
      
    </div>
  );
}

export default App;
