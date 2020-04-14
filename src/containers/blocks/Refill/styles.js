import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  toursList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: '#f2f5fa',
  },
  textField: {
    width: '90%',
    marginTop: '20px',
  },
  list: {
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '90%',
    height: '60%',
  },
  account: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%',
    height: '30%',
    fontSize: '30px',
  },
  oneTour: {
    height: '40px',
    width: '96%',
    marginTop: '10px',
    borderBottom: '1px solid grey',
    ':hover': {
      borderRadius: '10px',
      backgroundColor: '#fff',
    },
  },
})