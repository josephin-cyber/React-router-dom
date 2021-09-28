import FirstFile from './file1';
import SecondFile from './file2';
import ThirdFile from './file3';
import { Route, BrowserRouter } from "react-router-dom";


const App = ()=>{

  return(

  <BrowserRouter>
  <Route exact path='/' component={FirstFile}/>
  <Route path='/Page2' component={SecondFile}/>
  <Route path='/Page3' component={ThirdFile}/>
  </BrowserRouter>

  );


}

export default App;