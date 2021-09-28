import { useHistory } from "react-router-dom";


const FirstFile = ()=>{


    const history = useHistory();

    function Gotopage2(){

        history.push('/Page2')
    
    }


return(

    <div style ={{textAlign: 'center', padding: 50}}>
        <h1> Premier fichier</h1>
        <button onClick={Gotopage2}> Click</button>
    </div>

);

}

export default FirstFile;