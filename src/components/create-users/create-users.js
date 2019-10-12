import React, {Component} from 'react';
import './create-users.css';




class CreateUser extends Component{
    constructor (props) {
        super(props);
        this.state = {
            newUsers: []
        };
    }
    handleChange =(evt)=> {
        this.setState({[evt.target.name]: evt.target.value });
    };
    handlerCreateUser =()=>{
        this.setState({newUsers:[...this.state.newUsers,{
                username: this.state.username,
                pass: this.state.pass
            }]});
    }
    render(){
        console.log('Create', this.state);
        const {newUsers} = this.state;
        return(
            <div className="blockWrapper column">
                <p className='title'>Let's create users</p>
                <form className="createUser">
                    <div className="container">
                        <div className="group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" required onChange={this.handleChange}/>
                            <span className="highlight"/>
                            <span className="bar"/>

                        </div>
                        <div className="group">
                            <label htmlFor="pass">Password</label>
                            <input type="password" name="pass" required onChange={this.handleChange}/>
                            <span className="highlight"/>
                            <span className="bar"/>

                        </div>
                    </div>
                    <div className="container buttonGroup">
                        <button type="button" onClick={()=>this.handlerCreateUser()}>Create User</button>

                    </div>
                </form>
                {
                    newUsers.length ?
                        <div className="tableWrapper">
                            <p className='title'>Users</p>
                            <table>
                                <thead>
                                <tr>
                                    <th>User name</th>
                                    <th>User Password</th>
                                </tr>
                                </thead>
                                <tbody>
                                {newUsers.map((user, i) => {
                                    return(
                                        <tr key={i}>
                                            <td>{user.username}</td>
                                            <td>{user.pass}</td>
                                        </tr>
                                    )
                                })
                                }
                                </tbody>

                            </table>
                        </div>
                    :""
                }

            </div>
        )
    }
};
export default CreateUser;