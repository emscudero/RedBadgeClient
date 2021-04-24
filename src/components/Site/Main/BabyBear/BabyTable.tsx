import React, { Component} from "react";
import {Table} from "reactstrap";



interface BabyProps  {
token: string
}

interface BabyState {

}




class BabyTable extends Component<BabyProps, BabyState > {
    constructor(props: BabyProps) {
        super(props);
        this.state = {  }
    }

fetchBabyList = () => {
  let localToken = localStorage.getItem("token")
      localToken = localToken ? localToken: ""

  fetch("http://localhost:3000/babylist/", {
            method: "GET",
            headers: new Headers ({
                "Content-Type": "application/json",
                "Authorization": this.props.token ? this.props.token : localToken
            })
        })
        .then((res) => res.json())
        .then((babyList) => {
            this.setState({babyList: ""});
            console.log(this.props.token)
        })
    }



    render() { 
        return ( 
<div>
            <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Brand</th>
          <th>Title</th>
          <th>Price</th>
          <th>Store</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
  );
}
}
    
 
export default BabyTable;