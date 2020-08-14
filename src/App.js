import React, { Component } from "react";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      member: {},
      name: "",
      age: "",
      photo: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    /////
    var name = this.state.name;
    var age = this.state.age;
    var photo = this.state.photo;
    var members = this.state.members;

    var member_obj = { name: name, age: age, photo: photo };

    members.push(member_obj);

    this.setState({ members, name: "", age: "", photo: "" }, () => {
      ///ddd
    });
  };

  deleteMember = (name) => {
    var members = this.state.members;
    var name_member = this.state.member.name;

    if (name_member == name) {
      this.setState({ member: {} });
    }
    var newmember = members.filter(function (obj) {
      return obj.name !== name;
    });

    this.setState({ members: newmember }, () => {
      /////login
    });
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  viewMember = (memberz) => {
    this.setState({ member: memberz });
  };

  memberPosition = (age) => {
    if (age < 20) {
      return "Child";
    }
    if (age > 59) {
      return "Grandparent";
    }
    if (age > 20 && age < 59) {
      return "Parent";
    }
  };
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h1>Family App</h1>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.name}
                  id="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Age</label>
                <input
                  type="number"
                  className="form-control"
                  value={this.state.age}
                  id="age"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Image</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.photo}
                  id="photo"
                  onChange={this.handleChange}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
          <div className="col-sm-6">
            {Object.keys(this.state.member).length > 0 ? (
              <div>
                <img src={this.state.member.photo} width="250" height="200" />
                <h3>Name:{this.state.member.name}</h3>
                <h3>Age:{this.state.member.age}</h3>
              </div>
            ) : (
              <h3>No member selected</h3>
            )}
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Age</th>
                  <th scope="col">Position</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {this.state.members &&
                  this.state.members.map((member) => (
                    <tr key={member.age}>
                      <td>{member.name}</td>
                      <td>{member.age}</td>
                      <td>{this.memberPosition(member.age)}</td>
                      <td>
                        <button
                          onClick={() => this.viewMember(member)}
                          className="btn btn-success"
                        >
                          View
                        </button>
                        <span> </span>
                        <button
                          onClick={() => this.deleteMember(member.name)}
                          className="btn btn-danger"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
