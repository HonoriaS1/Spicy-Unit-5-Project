import React from 'react';
import { render } from 'react-dom';
import withStyles from 'material-ui/styles/withStyles'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Button from 'material-ui/Button'
import Abar from './abarConfederate'

export default withStyles({
  root: {
    background: '#616161',
    fontFamily: 'Ubuntu',
    textAlign: 'center',
    height: "100vh",
    width: "100vw",
  },
  lbreak: {
    height: '4rem',
  },
  buttonnext: {
    color: "#212121",
    display: 'block',
    background: "#E0E0E0",
    height: '5%',
    fontSize: '150%',
    fontFamily: 'Ubuntu',
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: '2%',
  },
  jamesiboi: {
    paddingTop: '5%',
    width: '25%',
  },
  text: {
    fontFamily: "Ubuntu",
    textAlign: "center",
    color: "#F5F5F5",
    fontSize: '150%',
  },
  buttonback: {
    color: "#212121",
    display: 'block',
    background: "#E0E0E0",
    height: '5%',
    fontSize: '150%',
    fontFamily: 'Ubuntu',
    marginTop: '5%',
    marginLeft: '2%',
    marginRight: 'auto',
  },
  itiboi: {
    fontStyle: 'italic',
    color: "#F5F5F5",
  },

})(({ classes }) => (
  <div className={classes.root}>
    <Abar />
    <p className={classes.lbreak}>​​ </p>
    <Link to='/'>
      <Button className={classes.buttonback} variant='raised'>
    Back to the Thirteenth Amendment
    </Button>
    </Link>
    <img className={classes.jamesiboi} src='https://i.imgur.com/ZgK4SvP.jpg' alt='13' />
    <p className={classes.text}>
    The Southern states responded to the Thirteenth Amendment with one of the many loop holes to come in this story,
    because of the clause that lets slavery / involuntary servitude be used as a criminal punishment
    states would make rascist laws targeting African Americans that would have them be incarcerated for things like homelessness and then
    have them put to work akin to how it was before.
    </p>
  <p />
    <Link to='/content2'>
      <Button className={classes.buttonnext} variant='raised'>
        To the Fourteenth Amendment
    </Button>
    </Link>

  </div>
))
