import * as React from 'react';
import { Component } from 'react';
import {Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardLink} from "reactstrap";


type ProfileVariables = {
  userlist: [],
  role: string
}



interface ProfileProps  {
token: string,


}

class Profile extends Component<ProfileProps, ProfileVariables>{
constructor(props: ProfileProps) {
    super(props);
    this.state = { 
         userlist: [],
          role: ""
         }

}

 fetchUserList = () => {
      let localToken = localStorage.getItem("token")
      localToken = localToken ? localToken: ""
  fetch("http://localhost:3000/mamalist/", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": this.props.token ? this.props.token : localToken
            })
        })
        .then((res) => res.json())
        .then((userListEntry) => {
          console.log(userListEntry)
            this.setState({
              userlist: userListEntry
            });
            
        })
    }


componentDidMount(){
      let role = localStorage.getItem("role")
      if(role){
        this.setState({role: role})
      }
      this.fetchUserList();
    }






render() {


        return (
            <div>

              {this.state.userlist.map((mamalist: any) => (
      
           <Card  >
             {/* {mamalist.id} */}
        <CardImg top width="50%" src={userlist.photo} alt="Profile Picture"  />
        <CardBody className= "card-body">
           <CardTitle tag="h5">Your Name: {userlist.first_name}{userlist.last_name}</CardTitle>
          <CardSubtitle tag="h5" className="mb-2 text-muted">Number of Children: {userlist.number_of_children}</CardSubtitle>
          <CardLink href="/BabyTable">Go to Your Baby Table</CardLink>
 <CardLink href="/MamaTable">Go to Your Mama Table</CardLink>

        
</CardBody>
</Card>
              ))}
    </div>

            )
        }
    }
            export default Profile;