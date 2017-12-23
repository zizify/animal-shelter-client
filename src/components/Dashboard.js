import React from 'react';
// import Pet from './Pet';

import {connect} from 'react-redux';

import {fetchCat} from '../actions/cat';
import {fetchDog} from '../actions/dog';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchCat());
        this.props.dispatch(fetchDog());
    }

    render() {
        return(
            <div className="dashboard-container">
                {/* <Pet animal={this.props.catData} species="cat" onAdopt={input => console.log('Pet adopted')}/> */}
                {/* <Pet animal={this.props.dogData} species="dog" onAdopt={input => console.log('Pet adopted')}/> */}
            </div>
        )
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