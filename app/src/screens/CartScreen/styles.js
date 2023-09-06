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
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    backgroundColor: appColor.white,
    height: hp('6%'),
    flexDirection: 'row',
  },
  heading: {
    fontSize: hp('2.5%'),
    marginRight: wp('40%'),
    color: appColor.black,
  },
  subHeading: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('2%'),
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
  },
  flatlist: {
    marginLeft: wp('5%'),
  },
  itemView2: {
    width: wp('85%'),
    height: hp('15%'),
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
  },
  itemImageView: {
    width: wp('30%'),
    height: hp('13%'),
    marginTop: hp('1%'),
    borderRadius: 15,
  },
  exitButton: {
    marginLeft: wp('28%'),
    marginTop: hp('1%'),
  },
  dummyTextView: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('100%'),
  },
  dummyText: {
    color: appColor.black,
  },
});

export default STYLES;
