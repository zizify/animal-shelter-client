import React from 'react';
import Pet from './Pet';

import {connect} from 'react-redux';

import {fetchCat, adoptCat} from '../actions/cat';
import {fetchDog, adoptDog} from '../actions/dog';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
        if (this.props.catData && this.props.dogData) {
            return(
                <div className="dashboard-container">
                    <Pet animal={this.props.catData} species="cat" onAdopt={() => this.props.dispatch(adoptCat())}/>
                    <Pet animal={this.props.dogData} species="dog" onAdopt={() => this.props.dispatch(adoptDog())}/>
                </div>
            )
        }

        else return(<div>Loading</div>);
    }
}

const mapStateToProps = state => ({
    catLoading: state.cat.loading,
    catError: state.cat.error,
    catData: state.cat.data,
    dogLoading: state.dog.loading,
    dogError: state.dog.error,
    dogData: state.dog.data
});
export default connect(mapStateToProps)(Dashboard);