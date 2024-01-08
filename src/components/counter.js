import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            counter : 1,
            list    : [0],
        }
    }
    compute=(op)=>{
        if (op==='+') {
            let c = this.state.counter + 1;
            this.setState({
                counter: c,
                list : new Array(c).fill(0)
            })
        }
        if (op==='-' && this.state.counter>0) {
            let c = this.state.counter - 1;
            this.setState({
                counter: c,
                list : new Array(c).fill(0)
            })
        }
    }
    render() {

        return (
            <div className="card m-3">
                <div className="card-header">
                    <strong>
                        {this.props.title} : {this.state.counter}
                    </strong>
                </div>
                <div className="ml-auto">
                    <button onClick={()=>this.compute('+')} className="btn btn-primary m-2">+</button>
                    <button onClick={()=>this.compute('-')} className="btn btn-primary m-2">-</button>

                </div>
                <div className="card-body">
                    {
                        this.state.list.map((v,index)=>
                            <img width={500} src={this.props.image} alt=""/>
                        )
                    }
                </div>


            </div>
        );
    }
}

export default Counter;