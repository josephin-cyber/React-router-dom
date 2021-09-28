import { useHistory } from "react-router-dom";

const SecondFile = ()=>{

    const history = useHistory();

    return(
    
        <div style ={{textAlign: 'center', padding: 50}}>
            <h1> Deuxième fichier</h1>
            <button  onClick={() => {history.goBack()}}> Click</button>
        </div>
    
    );
    
    }
    
export default SecondFile;