import { StyleSheet } from 'aphrodite'

export default StyleSheet.create({
  restList: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: '25px',
  },
  list: {
    width: '90%',
    height: '90%',
  },
  listItem: {
    marginTop: '10px',
    fontSize: '25px',
  },
  chargeName: {
    marginLeft: '10px',
    fontSize: '25px',
  },
  paidStatus: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderLeft: '1px solid grey',
  },
  cost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderLeft: '1px solid grey',
  },
  paid: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})
