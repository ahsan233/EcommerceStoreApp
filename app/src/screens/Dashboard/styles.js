import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {appColor} from '../../consts/colors';
const STYLES = StyleSheet.create({
  container: {
    flex: 1,
  },
  AlignContainer: {
    alignItems: 'center',
  },
  heading: {
    fontSize: hp('3%'),
    color: appColor.black,
  },
  subHeading: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('2%'),
    color: appColor.black,
    fontSize: hp('2.5%'),
  },
  itemView: {
    height: hp('8%'),
    margin: 5,
    backgroundColor: appColor.white,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    marginHorizontal: wp('3%'),
    color: appColor.black,
    fontSize: hp('1.7%'),
  },
  flatlist: {
    marginBottom: hp('12%'),
  },
  itemView2: {
    width: wp('40%'),
    height: hp('10%'),
    margin: 10,
    backgroundColor: appColor.white,
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemImageView: {
    width: wp('38%'),
    height: hp('10%'),
    marginBottom: hp('2%'),
  },
});

export default STYLES;
