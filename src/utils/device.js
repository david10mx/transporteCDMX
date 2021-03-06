import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'
// import analytics from '@react-native-firebase/analytics'

const DEVICE_OS = { IOS: 'ios', ANDROID: 'android' }
const STATUS_BAR_PADDING = { IPHONEX: 44, IOS: 20, ANDROID: 25 }

const DEVICE_IS_ANDROID = Platform.OS === DEVICE_OS.ANDROID
const DEVICE_IS_IOS = Platform.OS === DEVICE_OS.IOS

const DEVICE_HAS_NOTCH = DeviceInfo.hasNotch()

const statusBarHeight = () => {
  if (DEVICE_IS_ANDROID) {
    return STATUS_BAR_PADDING.ANDROID
  }
  if (DEVICE_IS_IOS && DEVICE_HAS_NOTCH) {
    return STATUS_BAR_PADDING.IPHONEX
  }
  return STATUS_BAR_PADDING.IOS
}

const registerAnalyticsEvent = async (title, data) => {
  // try {
  //   await analytics().logEvent(title, data)
  // } catch (e) {
  //   console.log(e)
  // }
}

const setAnalyticsScreen = async screen => {
  // try {
  //   await analytics().setCurrentScreen(screen, screen);
  // } catch (e) {
  //   console.log(e)
  // }
}

const DEVICE_IS = {
  IOS: DEVICE_IS_IOS,
  ANDROID: DEVICE_IS_ANDROID,
}

export { statusBarHeight, DEVICE_IS, DEVICE_HAS_NOTCH, registerAnalyticsEvent }
