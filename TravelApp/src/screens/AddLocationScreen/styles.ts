import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: 150,
    padding: 20,
    gap: 20
  },
  innerContainer: {
    zIndex: 999,
  },
  textInputContainer: {
    height: 40,
    backgroundColor: 'white',
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 0,
    marginBottom: 10,
    width: '100%',
  },
  autocompleteContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
    width: '100%',
  },
  listView: {
    position: 'absolute',
    top: 40,
    maxHeight: 200,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'teal',
    borderRadius: 10,
    padding: 15,
    maxHeight: 70,
  },
  button: {
    color: 'white',
    textAlign: 'center',
    padding: 10,
    fontSize: 18,
  },
  red: {
    backgroundColor: 'red',
  }
});
