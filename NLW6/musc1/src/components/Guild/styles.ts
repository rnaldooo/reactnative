import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    //height: 56,
    // backgroundColor: theme.colors.primary,
    //backgroundColor: 'red',
    //borderRadius: 8,
    // marginTop: 5,
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 20,
    //color: theme.colors.heading,
    //fontFamily: theme.fonts.text500,
    //fontSize: 15,
    //textAlign: 'center',
  },

  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginBottom: 4,
    //textAlign: 'center',
  },

  type: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
    //marginBottom: 12,
  },
});
