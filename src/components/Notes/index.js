import React from 'react';
export default class Notes extends React.Component{
    render(){
        return (
            <div>
                <p><input type="text" className="form-control" ref="note"/>
                                        <button className="btn btn-primary" onClick={()=>{this.props.handleClick(this.refs.note.value)}}>发表</button></p>
                <ul className="list-group">
                    {
                        this.props.notes.map((item,index)=>{
                            return <li key={index} className="list-group-item">{item}</li>
                        })
                    }
                </ul>

            </div>
        )
    }
}