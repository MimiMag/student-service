import React, { PureComponent } from 'react'
import './Navbar.css'
import Dropdown from './Dropdown';
import { connect } from 'react-redux';
import { fetchAllBatches } from '../actions/fetchBatches';

class NavBar extends PureComponent {
  componentWillMount() {
    this.props.fetchAllBatches()
  }

  render() {
    const { batches } = this.props
    if (!batches) return null
    
    return(
      <div className='navbar'>
        <h2 className="subtitle">Display Results</h2>
        <Dropdown />
        <h2 className="subtitle">Filter students</h2>
        <Dropdown />
      </div>
    )
  }
}

const mapStateToProps = ({ batches }) => ({ batches })

export default connect(mapStateToProps, { fetchAllBatches })(NavBar)
