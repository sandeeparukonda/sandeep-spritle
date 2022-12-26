import { Component } from "react";
import {Link} from "react-router-dom"
import "./index.css"

let simpleExample = [
  [1, 2, 3, 4],
  [5, 0, 6, 8],
  [9, 10, 7, 11],
  [13, 14, 15, 12]
];

class Game extends Component {
    
    state={
        puzzle:simpleExample,
        show:true
    }

     onClick=(i,j)=>{
        const puzzle=this.state.puzzle.slice()
        const emptyRow=puzzle.findIndex((row) => row.includes(0));
        const emptyCol=puzzle[emptyRow].indexOf(0)

        if (Math.abs(emptyRow-i)+Math.abs(emptyCol-j)===1){
            puzzle[emptyRow][emptyCol]=puzzle[i][j]
            puzzle[i][j]=0 
            this.setState({puzzle})
            this.setState({show:false})
        }
    }

    onClickf=()=>{
       localStorage.removeItem("user")

    }
  
render(){
    return(
        <div className="puzzle-container">
             <h1>Play Game</h1>
            <div className="sub-container">
               
        {this.state.puzzle.map((row,i)=>(
            <div className="container"  key={i}>
                {row.map((tile,j)=>(
                    <button  className={tile === 0 ? "btn-zero" : "btn-game"} key={j} onClick={() => this.onClick(i, j)}>
                    {tile === 0 ? 0 : tile}
                  </button>
                ))}
            </div>
        ))}
        </div>
        <Link to="/">
        <button onClick={this.onClickf()} type="button" className="btn login">LogOut</button>
        </Link>
        </div>
        
    )
 }
}

export default Game