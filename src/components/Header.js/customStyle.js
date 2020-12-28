export const customStyle = {
  root: {
    flexGrow: 1,
  },
  navbar: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
  toolbar: {
    width: '100%',
    maxWidth: '1600px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    color: 'blue',
    fontWeight: '700',
  },
  desktopLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  linksWrapper: {
    width: '70%',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  links: {
    marginLeft: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    color: 'red',
    position: 'relative',
    '&::after': {
      content: "''",
      position: 'absolute',
      bottom: '-3px',
      left: 0,
      width: '100%',
      height: '2px',
      backgroundColor: 'red',
      transform: 'scaleX(0)',
      transformOrigin: 'right',
      transition: 'transform 250ms ease-in',
    },
    '&:hover': {
      textDecoration: 'none',
      '&::after': {
        transform: 'scaleX(1)',
        transformOrigin: 'left',
      },
    },   
  },
  profilWrapper: {
    display: 'flex',
    alignItems: 'center',
    color: 'red',
    fontWeight: '700',
  },
  navIcon: {
    color: 'blue',
    fontSize: '30px',
  },
}
