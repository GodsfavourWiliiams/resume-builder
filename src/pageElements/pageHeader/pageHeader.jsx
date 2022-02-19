import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './pageHeader.css';

export default class Sidebar extends Component {
  render() {
    return (
		<div className="page-header">
		<div className="page-block container-xl">
			<div className="row align-items-center">
				<div className="col-md-12">
					<div className="page-header-title">
						<h5 className="m-b-10">Form Elements</h5>
					</div>
					<div className="breadcrumb">
						<Link to="/" className="breadcrumb-item text-decoration-none">Home</Link>
						<Link to="/" className="breadcrumb-item text-decoration-none">WorkSpace</Link>
					</div>
				</div>
			</div>
		</div>
	</div>
    )
  }
}
