import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  toolbar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 75,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {
    backgroundColor: 'green',
    width: 75,
    height: 75,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 24,
    position: 'relative',
    zIndex: -1,
    pointerEvents: 'none',
  },
});
