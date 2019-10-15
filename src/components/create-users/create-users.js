import React, {Component} from 'react';
import './create-users.css';
import {NavLink} from "react-router-dom";




class CreateUser extends Component{
    constructor (props) {
        super(props);
        this.state = {
            username: undefined,
            isAdmin: undefined,
        };
    };

    handleChange =(evt)=> {
        if(evt.target.name === 'isAdmin') {
            this.setState({ isAdmin: evt.target.value === 'true' })
        } else this.setState({ username: evt.target.value });
    };

    setToDef = ()=> {
        this.setState({userObj: {
                username: undefined,
                isAdmin: undefined,
            }
        });
    };

    render(){

        const {newUsers, addNewUser} = this.props;
        let {username,isAdmin} = this.state;
        console.log('Create', newUsers);
        return(
            <div className="blockWrapper column">
                <NavLink to={'/home'} className="pagination">Home</NavLink>
                <div className="flexWrapp">
                    <div className = "leftColumn">
                        <p className='title'>Let's create users</p>
                        <form className=" form createUser">
                            <div className="container">
                                <div className="group">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" required onChange={this.handleChange}/>
                                    <span className="highlight"/>
                                    <span className="bar"/>
                                </div>
                                <fieldset> <legend>User's rights</legend>
                                    <label><input type="radio" name="isAdmin" value='true'  onChange={this.handleChange}/>admin</label>
                                    <label><input type="radio" name="isAdmin" value='false' onChange={this.handleChange}/>user</label>
                                </fieldset>
                            </div>
                            <div className="container buttonGroup">
                                <button type="button" onClick={()=> {
                                    if(!username && !isAdmin) return;
                                    addNewUser({username:username,isAdmin:isAdmin});
                                    this.setToDef();
                                }}>Create User</button>

                            </div>
                        </form>
                    </div>
                    <div className="rightColumn">
                        {
                            newUsers.length ?
                                <div className="tableWrapper">
                                    <p className='title'><span className="userCount">{newUsers.length}</span> Users</p>
                                    <table>
                                        <thead>
                                        <tr>
                                            <th>User name</th>
                                            <th>User rights</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            newUsers.map((user, i) => {
                                                    return <tr key={i}>
                                                        <td>{user.username}</td>
                                                        {
                                                            user.isAdmin ?
                                                                <td>user is Admin</td>
                                                                :
                                                                <td>user is User</td>
                                                        }

                                                    </tr>
                                                }


                                            )
                                        }
                                        </tbody>

                                    </table>
                                </div>
                                :""
                        }
                    </div>
                </div>



            </div>
        )
    }
};
export default CreateUser;
