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
    color: appColor.black,
  },
  headerText: {
    width: wp('85%'),
    alignItems: 'center',
  },
  subHeading: {
    marginHorizontal: wp('8%'),
    marginVertical: hp('2%'),
    color: appColor.black,
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
  },
  flatlist: {
    marginLeft: wp('5%'),
  },
  itemView2: {
    width: wp('40%'),
    height: hp('22%'),
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
    height: hp('12.5%'),
    marginBottom: hp('2%'),
    borderRadius: 10,
  },
  checkoutButton: {
    position: 'absolute',
    marginTop: hp('90%'),
    marginLeft: wp('35%'),
    width: wp('30%'),
    backgroundColor: appColor.green,
    height: hp('5%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  checkoutButtonText: {
    color: appColor.white,
  },
});

export default STYLES;
