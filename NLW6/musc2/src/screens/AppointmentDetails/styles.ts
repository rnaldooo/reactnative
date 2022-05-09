import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  banner: {
    width: '100%',
    height: 234,
    //marginBottom: 30,
    // resizeMode: 'contain',
    // flex: 1,
    // flexDirection: 'row',
    // borderWidth: 10,
    //  borderColor: theme.colors.alerta,
    //  alignSelf: 'center',
    //justifyContent: 'flex-end',
    // paddingHorizontal: 24,
  },
  bannerContent: {
    flex: 1,
    //width: '100%',
    //height: 234,
    // resizeMode: 'contain',
    // flexDirection: 'row',
    // borderWidth: 10,
    //  borderColor: theme.colors.alerta,
    //  alignSelf: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
  },
  subtitle: {
    fontSize: 13,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading,
    lineHeight: 21,
  },
  members: {
    marginLeft: 24,
    marginTop: 27,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    marginBottom: getBottomSpace(),
  },
});
