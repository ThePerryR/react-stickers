import {StyleSheet} from 'aphrodite';

import colors from './colors';

export const brandon = {
  fontFamily: 'Brandon',
  fontStyle: 'normal',
  fontWeight: 'normal',
  src: 'url("/Fonts/1507492/e416bea9-ae84-4323-b9f2-298c13bd7b0a.eot?#iefix") format("eot"),url("/Fonts/1507492/641c334a-4247-47ff-afdd-8a7dadb13595.woff2") format("woff2"),url("/Fonts/1507492/98af37a8-b4d4-4d22-a013-32f3041ec1bb.woff") format("woff"),url("/Fonts/1507492/679da323-4b66-47ac-9819-d48272e64833.ttf") format("truetype")'
};
export const leading = {
  headlineBody: 4
};

export default StyleSheet.create({
  subHeading: {
    fontSize: 20,
    lineHeight: '32px',
    textDecoration: 'none',
    color: colors.dark
  },
  note: {
    fontSize: 12,
    lineHeight: '16px',
    textDecoration: 'none',
    color: colors.light
  }
});
