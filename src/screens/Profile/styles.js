import { StyleSheet } from 'react-native';
import vh from '../../Units/vh';
import vw from '../../Units/vw';
export default StyleSheet.create({
  header: {
    paddingVertical: 5 * vh,
    backgroundColor: '#8E5609',
    justifyContent: 'center',
  },
  headerTxt: {
    color: '#fff',
    fontSize: 5 * vw,
    position: 'relative',
    textTransform: 'uppercase'
  },
  container: {
    padding: 2 * vw,
    backgroundColor: '#FFFFFF',
    paddingBottom: 5 * vh
  },
  heading: {
    fontSize: 4 * vw,
    color: '#000',
    marginVertical: 2 * vh,
  },
  pageTitle: {
    fontSize: 6 * vw,
    fontWeight: 'bold',
    marginVertical: 3 * vh,
    marginTop: 2 * vh,
    paddingLeft: 3 * vw,
    color: '#515C6F'
  },
  goBackBtn: {
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    fontSize: 8 * vw,
    color: '#FFFFFF',
  },
  primHeading: {
    fontSize: 7 * vw,
    fontWeight: 'bold',
    paddingHorizontal: 2 * vw,
    paddingVertical: 3 * vh
  },
  primText: {
    fontSize: 4.5 * vw,
    color: '#999999',
    paddingHorizontal: 2 * vw,
  },
  list: {
    fontSize: 4.8 * vw,
    fontWeight: '600'
  }
});