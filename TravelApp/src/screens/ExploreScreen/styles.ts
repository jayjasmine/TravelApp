import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    backgroundColor: 'lightgreen',
    padding: 20,
  },
  header: {
    flex: 1,
    backgroundColor: 'lightblue',
    marginBottom: 20,
  },
  body: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightred',
    flexWrap: 'wrap',
    gap: 10,
  },
  option: {
    backgroundColor: 'lightyellow',
    flexGrow: 1,
    width: 100,
    height: 100,
    borderRadius: 7,
  },
  optionBlank: {
    flexGrow: 1,
    width: 100,
    height: 100,
  },
});
