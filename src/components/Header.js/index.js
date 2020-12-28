import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Menu,
  useMediaQuery,
  Link,
} from '@material-ui/core'
import { customStyle } from './customStyle'

const useStyles = makeStyles(() => customStyle)

const Header = ({ history }) => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const menuItems = [
    { name: 'Home', url: '/' },
    { name: 'Login', url: '/login' },
    { name: 'Registration', url: '/registration' },
  ]

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClick = (pageURL) => {
    history.push(pageURL)
    setAnchorEl(null)
  }

  const handleBtnClick = (pageURL) => {
    history.push(pageURL)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.navbar} position="static">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h4" className={classes.title}>
            colleag
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                onClick={handleMenu}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon className={classes.navIcon} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={() => handleMenuClick()}
              >
                {menuItems.map(({ name, url }, index) => (
                  <MenuItem key={index} onClick={() => handleMenuClick(url)}>
                    {name}
                  </MenuItem>
                ))}
              </Menu>
            </div>
          ) : (
            <div className={classes.desktopLinks}>
              <div className={classes.linksWrapper}>
                {menuItems.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    onClick={() => handleBtnClick(url)}
                    className={classes.links}
                  >
                    {name}
                  </Link>
                ))}
              </div>
              <div className={classes.profilWrapper}>
                <Link className={classes.links}>Se connecter</Link>
                <IconButton                  
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Header)
