import React from 'react'
import { Card, CardHeader, CardContent } from 'material-ui'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import withStyles from 'material-ui/styles/withStyles'
import npage from './npage.jsx'

export default withStyles({
  root: {

  },
})(({ classes }) => (
  <div>
  <Link to="/npage"> Who is theis </Link>
  </div>
))