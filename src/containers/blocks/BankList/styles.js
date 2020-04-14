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
    marginTop: '20px',
    width: '90%',
    height: '90%',
    overflowY: 'scroll',
  },
  listItem: {
    marginTop: '10px',
    fontSize: '25px',
  },
  select: {
    marginTop: '20px',
    width: '90%',
  },
  selectForm: {
    width: '100%',
  },
  chargeName: {
    marginLeft: '10px',
    fontSize: '25px',
  },
  paidStatus: {
    borderLeft: '1px solid grey',
  },
  cost: {
    borderLeft: '1px solid grey',
  },
})
