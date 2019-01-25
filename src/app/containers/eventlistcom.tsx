import { connect } from 'react-redux'
import { AddeventAction } from '../actions/index'
//import Header from '../components/header'

import Container from '../components/container'

export default connect<any, any, any>(null, {
  handleSubmit: AddeventAction
})(Container)

