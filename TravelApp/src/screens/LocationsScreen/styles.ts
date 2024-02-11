import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
  },
  locationsContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    padding: 20,
    gap: 20,
  },
  square: {
    width: '47%',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  squareBackground: {
    borderRadius: 5,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  addressText: {
    marginTop: 5,
    fontSize: 14,
  },
});
