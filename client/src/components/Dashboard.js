import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="container">
            <header className="section center-align">
                <h1 className="header">Welcome to Your Dashboard</h1>
                <p className="flow-text grey-text text-darken-3">
                    Manage your surveys and monitor their performance.
                </p>
            </header>

            <main className="section">
                <div className="row">
                    <div className="col s12 m6">
                        <div className="card blue-grey darken-1">
                            <div className="card-content white-text">
                                <span className="card-title">Survey Overview</span>
                                <p>Here you can see an overview of your surveys.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/surveys" className="white-text">View Surveys</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col s12 m6">
                        <div className="card teal lighten-1">
                            <div className="card-content white-text">
                                <span className="card-title">Create a New Survey</span>
                                <p>Start creating a new survey to collect responses.</p>
                            </div>
                            <div className="card-action">
                                <Link to="/surveys/new" className="white-text">Create Survey</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <div className="fixed-action-btn">
                <Link to="/surveys/new" className="btn-floating btn-large red">
                    <i className="material-icons">add</i>
                </Link>
            </div>
        </div>
    );
};

export default Dashboard;
