import React, { Component } from "react";
import Member from "../Member/Member";
import AuthService from "./../Tools";
import { Link, Redirect } from "react-router-dom";

export default class Family extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      family: null,
      newMail: null,
      newRol: null,
      newMemberState : false,
      redirect: false
    };

    this.authService = new AuthService();
    this.ifLoggedIn()
  }

  ifLoggedIn = () => {
    this.authService.loggedin().then(user => {
      this.setState({...this.state, family: user.family});
      
    });
  };

  componentDidMount() {
    this.setState({...this.state, family: this.props.user.family})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    const mail = this.state.newmail;
    let token = this.state.family.token;
    if(this.state.newRol === 'Admin'){
      token = 'A'+token;
    }else{
      token = 'N'+token;
    }
    this.authService.mail(mail, token);
    this.setState({redirect:true})
  };

  handleFormEdit = () =>{
    let change = !this.state.newMemberState;
    this.setState({newMemberState:change})
  }

  handlerStateMail = e => {
    const newmail = e.target.value;
    this.setState({ newmail: newmail });
  };
  handlerStateRol = e => {
    const newrol = e.target.value;
    this.setState({ newrol: newrol });
  };

  render() {
    if(this.state && this.state.redirect) {
      return <Redirect to="/" />
    }
    const newMember = this.state.newMemberState ? <form action="submit" onSubmit={this.handleFormSubmit}>
    <input
      type="text"
      name="family"
      id="family"
      onChange={e => this.handlerStateMail(e)}
    />
    <label htmlFor="">Rol?</label>
    <select id="rol" name="rol" defaultValue="Select Rol" onChange={e => this.handlerStateRol(e)}>
      <option value="Admin">Admin</option>
      <option value="Nany">Nany</option>
    </select>
    <input className="submitbutton" type="submit" />
  </form> : <div></div>
    if (this.state.family) {
      return (
        <div>
          {this.state.family.tutors.map((element, index) => {
            return <Member key={index} elem={element} />;
          })}
          <input className="submitbutton" type="button" value="ADD MEMBER" onClick={this.handleFormEdit}/>
          {newMember}
          {this.state.family.kids.map((element, index) => {
            return <Member key={index} elem={element} />;
          })}
          <Link to='/newkid'><button type="button">ADD KID</button></Link>
        </div>
      );
    } else {
      return <h1>LOADING...</h1>;
    }
  }
}