import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 95,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    marginRight: 4,
    //textAlign: 'center',
    color: theme.colors.heading,
    borderWidth: 2,
    borderColor: theme.colors.secondary50,
    //paddingLeft: 16,
    paddingTop: 16,
    paddingHorizontal: 16,
    textAlignVertical: 'top',
  },
});
