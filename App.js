import React, { Component, Fragment } from 'react';
import './App.css';
import Hello from './components/Hello';

/* import Yoyo from './components/CComp';
 import Msg from './components/Msg'; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cage: "",
      list: [],
      station: 'A',
      start:"",   
      end:"" 
    };
  }
updateInputS(key, value){
    this.setState({
      [key]: value
    })
}

updateInputE(key, value){
    this.setState({
      [key]: value
    })
}

addItemS(station) {
     
    if (station === "A"){
      const cage = {
        id: this.state.prevCage.id,
        value: this.state.prevCage.value,
        durationB: this.state.prevCage.durationB,
        durationC: this.state.prevCage.durationC,
        durationA: this.state.prevCage.durationA,
        startA: this.state.start.slice()
   
      };
  
      
      const list = [...this.state.list];
  
      list.pop(this.state.prevCage);
      list.push(cage);
  
      
      this.setState({
        list,
        prevCage: cage,
        cage: ""
      });

    }  
    else if (station === "B"){
      const cage = {
        id: this.state.prevCage.id,
        value: this.state.prevCage.value,
        durationB: this.state.prevCage.durationB,
        durationC: this.state.prevCage.durationC,
        durationA: this.state.prevCage.durationA,
        startB: this.state.start.slice()
   
      };
  
      
      const list = [...this.state.list];
  
      list.pop(this.state.prevCage);
      list.push(cage);
  
      
      this.setState({
        list,
        prevCage: cage,
        cage: ""
      });
    }
    else {
      const cage = {
        id: this.state.prevCage.id,
        value: this.state.prevCage.value,
        durationB: this.state.prevCage.durationB,
        durationC: this.state.prevCage.durationC,
        durationA: this.state.prevCage.durationA,
        startC: this.state.start.slice()
   
      };
  
      
      const list = [...this.state.list];
  
      list.pop(this.state.prevCage);
      list.push(cage);
  
      
      this.setState({
        list,
        prevCage: cage,
        cage: ""
      });
    }
    
  }

  addItemE(station) {
    
    if (station=== "A"){
      const cage = {
        id: this.state.prevCage.id,
        startA : this.state.prevCage.startA,
        value: this.state.prevCage.value,
        durationB: this.state.prevCage.durationB,
        durationC: this.state.prevCage.durationC,
        durationA: this.state.end.slice()-this.state.prevCage.startA

   
      };
  
      
      const list = [...this.state.list];
  
      list.pop(this.state.prevCage);
      list.push(cage);
  
      
      this.setState({
        list,
        prevCage : cage,
        cage: ""
      });
    }
    else if (station === "B"){
      const cage = {
        id: this.state.prevCage.id,
        startB : this.state.prevCage.startB,
        value: this.state.prevCage.value,
        durationA: this.state.prevCage.durationA,
        durationC: this.state.prevCage.durationC,
        durationB: this.state.end.slice()-this.state.prevCage.startB
   
      };
  
      
      const list = [...this.state.list];
  
      list.pop(this.state.prevCage);
      list.push(cage);
  
      
      this.setState({
        list,
        prevCage : cage,
        cage: ""
      });
    }
    else {
      const cage = {
        id: this.state.prevCage.id,
        startC : this.state.prevCage.startC,
        value: this.state.prevCage.value,
        durationA: this.state.prevCage.durationA,
        durationB: this.state.prevCage.durationB,
        durationC: this.state.end.slice()-this.state.prevCage.startC
   
      };
  
      
      const list = [...this.state.list];
  
      list.pop(this.state.prevCage);
      list.push(cage);
  
      
      this.setState({
        list,
        prevCage : cage,
        cage: ""
      });
    }
    
    console.log("end" + JSON.stringify(this.state.list))
    
  }

  updateInput(key, value) {
    
    this.setState({ [key]: value });
  }

  
  addItem() {
    
    const cage = {
      id: 1 + Math.random(),
      value: this.state.cage.slice()
 
    };

    
    const list = [...this.state.list];

    list.push(cage);

    
    this.setState({
      list,
      prevCage: cage,
      cage: ""
      
    });
    console.log('dd' + JSON.stringify(list))
    
  }

  deleteItem(id) {
    
    const list = [...this.state.list];
    
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  
  stationSelect = event => {
       
      this.setState({
         station : event.target.value
       });
       

  }

  render() {
    return (
      <div>
      <Hello name="REBARTEK" />
      {/*<Count></Count> */ }
      {/* < Yoyo name="Honey Singh"/ > */}
      <h1 className="app-title">CAGES</h1>
      Add cage &nbsp;
        <input 
         type= 'text'
         placeholder="Enter cage name"
         value= {this.state.cage}
         onChange ={e => this.updateInput("cage", e.target.value)}
        />
        <button
         className="add-btn btn-floating"
         onClick= {() => this.addItem()}
         disabled={!this.state.cage.length}
         >
           Add
         </button>
      <br></br>
         
      Select cage &nbsp;
        
        <select>
            {this.state.list.map(cage =>
              <option value={cage.id}>{cage.value}</option>
            )
            }      
        </select>
        <br></br>  
        <br></br>
        <br></br>
        <br></br>
        Select station &nbsp;
        <select value={this.state.station} onChange={this.stationSelect}> 
          <option value='A'> Station A</option>
          <option value= 'B'> Station B</option>
          <option value='C'> Station C</option>
        </select>
        <br></br>
        <div>
            <h1>Station {this.state.station}</h1>
            Add start time &nbsp;
            <input
                 type="Text"
                 placeholder="Start time(HH:MM)"
                 value = {this.state.start}
                 onChange={e => this.updateInputS("start", e.target.value)}
                 />
           <button
                className="add-btn btn-floating"
                onClick={() => this.addItemS(this.state.station)}
                disabled={!this.state.start.length}
          >
              <i className="material-icons">+ </i>
          </button>
          <br></br>
            Add end time &nbsp;
            <input
                 type="Text"
                 placeholder="End time(HH:MM)"
                 value = {this.state.end}
                 onChange={e => this.updateInputE("end", e.target.value)}
            />
            <button
                    className="add-btn btn-floating"
                    onClick={() => this.addItemE(this.state.station)}
                    disabled={!this.state.end.length}
                >
                    <i className="material-icons">+ </i>
             </button>
                
            </div>
        

        
        <br></br>
        <br></br>
        <div>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                    <th>
                        Cage
                    </th>
                    <th>
                        Station A

                    </th>
                    <th>
                        Station B
                    </th>
                    <th>
                        Station C 
                    </th>
                    </tr>
                    </thead>
                   <tbody>
                 
               
                {
                   
                this.state.list.map(cage => {
                   return(
                   <Fragment>
                   <tr>
                      <td>
                        {cage.value}
                      </td>
                      <td>
                          {cage.durationA}
                      </td>
                      <td>
                         {cage.durationB}
                      </td>
                      <td>
                        {cage.durationC}  
                      </td>
                          
                    </tr>
                    </Fragment>
                    )
                
                })
                   
                  
            } 
              </tbody> 
              </table>

                
            
            
            </div>
        
         
         
         
           
    
      </div>
    );
  }
}
export default App;
