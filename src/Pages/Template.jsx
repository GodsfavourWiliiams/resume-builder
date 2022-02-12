import React, { Component } from 'react';
import './Template.css'

export default class Template extends Component {
  render() {
    return (
<div className='container'>
   <div class="col-xl-6 col-md-12">
                <div class="row">
                    <div class="col-sm-6 my-4">
                        <div class="card prod-p-card background-pattern">
                            <div class="card-body">
                                <div class="row align-items-center m-b-0">
                                    <div class="col">
                                        <h6 class="m-b-5">Total Profit</h6>
                                        <h3 class="m-b-0">$1,783</h3>
                                    </div>
                                    <div class="col-auto">
                                        <i class="material-icons-two-tone text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 my-4">
                        <div class="card prod-p-card bg-primary background-pattern-white">
                            <div class="card-body">
                                <div class="row align-items-center m-b-0">
                                    <div class="col">
                                        <h6 class="m-b-5 text-white">Total Orders</h6>
                                        <h3 class="m-b-0 text-white">15,830</h3>
                                    </div>
                                    <div class="col-auto">
                                        <i class="material-icons-two-tone text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 my-2">
                        <div class="card prod-p-card bg-primary background-pattern-white">
                            <div class="card-body">
                                <div class="row align-items-center m-b-0">
                                    <div class="col">
                                        <h6 class="m-b-5 text-white">Average Price</h6>
                                        <h3 class="m-b-0 text-white">$6,780</h3>
                                    </div>
                                    <div class="col-auto">
                                        <i class="material-icons-two-tone text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 my-2">
                        <div class="card prod-p-card background-pattern">
                            <div class="card-body">
                                <div class="row align-items-center m-b-0">
                                    <div class="col">
                                        <h6 class="m-b-5">Product Sold</h6>
                                        <h3 class="m-b-0">6,784</h3>
                                    </div>
                                    <div class="col-auto">
                                        <i class="material-icons-two-tone text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
     </div>
     <div className="row">
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                Earnings (Monthly)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$40,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-calendar fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                Earnings (Annual)</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-info shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                            </div>
                                            <div class="row no-gutters align-items-center">
                                                <div class="col-auto">
                                                    <div class="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                </div>
                                                <div class="col">
                                                    <div class="progress progress-sm mr-2">
                                                        <div class="progress-bar bg-info" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-warning  shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                Pending Requests</div>
                                            <div class="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-comments fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
     </div>
    )
  }
}
