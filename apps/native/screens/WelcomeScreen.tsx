import { observer } from "mobx-react-lite"
import React, { FC } from "react"
import { Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import { Button, Text } from "../components"
import { isRTL } from "../i18n"
import { useStores } from "../models"
import { AppStackScreenProps } from "../navigators"
import { colors, spacing } from "../theme"
import Swiper from 'react-native-swiper'
// import { useHeader } from "../utils/useHeader"
import { useSafeAreaInsetsStyle } from "../utils/useSafeAreaInsetsStyle"

const welcomeLogo = require("./../assets/images/logo.png")
const welcomeFace = require("./../assets/images/welcome-face.png")
const onboarding1 = require("./../assets/images/onboarding-1.png")
const onboarding2 = require("./../assets/images/onboarding-2.png")
interface WelcomeScreenProps extends AppStackScreenProps<"Welcome"> { }

export const WelcomeScreen: FC<WelcomeScreenProps> = observer(function WelcomeScreen(_props) {
  const { navigation } = _props
  const {
    authenticationStore: { logout },
  } = useStores()

  function goNext() {
    navigation.navigate("Demo", { screen: "DemoShowroom", params: {} })
  }



  return (
    <View style={$container}>
      <View style={$topContainer}>
        <Swiper style={$wrapper} showsButtons={false} activeDotColor={colors.palette.neutral100} dotColor={colors.palette.neutral500} autoplay>
          <View style={$slide1}>

            <Image style={$welcomeLogo} source={welcomeLogo} resizeMode="contain" />
            <Text
              size='md'
              testID="welcome-heading"
              style={$welcomeHeading}
              tx="welcomeScreen.exploreMovies"
              preset="heading"
            />
            <Text tx="welcomeScreen.exciting" preset="subheading" />
          </View>
          <View style={$slide1}>
            <Image style={$onboarding1} source={onboarding1} resizeMode="contain" />
            <View style={$onboardingWrapper}>
              <Text style={$welcomeHeading} tx="welcomeScreen.onboardingTitle" preset='subheading' />
              <Text style={$welcomeHeading} tx="welcomeScreen.onboardingSubtitle" preset="formLabel" />
            </View>


          </View>

          <View style={$slide1}>
            <Image style={$onboarding1} source={onboarding2} resizeMode="contain" />
            <View style={$onboardingWrapper}>
              <Text style={$welcomeHeading} tx="welcomeScreen.onboardingTitle2" preset='subheading' />
              <Text style={$welcomeHeading} tx="welcomeScreen.onboardingSubtitle2" preset="formLabel" />
            </View>
          </View>
        </Swiper>

      </View>

      <View style={[$bottomContainer]}>

        {/* <Text tx="welcomeScreen.exciting" preset="subheading" />  */}
        <Button
          testID="next-screen-button"
          preset="reversed"
          tx="welcomeScreen.letsGo"
          onPress={goNext}
        />
      </View>
    </View>
  )
})

const $onboardingWrapper: ViewStyle = {
  position: 'absolute',
  backgroundColor: 'rgba(20, 20, 20, 0.9)',
  width: '100%',
  flex: 1,
  padding: spacing.md,
  bottom: spacing.md,
  paddingBottom: spacing.md,
}
const $wrapper: ViewStyle = {}
const $slide1: ViewStyle = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'black'
}


const $container: ViewStyle = {
  flex: 1,
  backgroundColor: '#000',
}

const $topContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 1,
  flexBasis: "57%",
  justifyContent: "center",
  // paddingHorizontal: spacing.lg,
  // backgroundColor: colors.palette.neutral200,
  backgroundColor: '#000',

}

const $bottomContainer: ViewStyle = {
  flexShrink: 1,
  flexGrow: 0,
  flexBasis: "20%",
  backgroundColor: colors.palette.neutral100,
  borderTopLeftRadius: 16,
  borderTopRightRadius: 16,
  paddingHorizontal: spacing.lg,
  justifyContent: "space-around",
}

const $onboarding1: ImageStyle = {
  height: '80%',
  flex: 1
}
const $welcomeLogo: ImageStyle = {
  height: 88,
  width: "100%",
  marginBottom: spacing.md,
}

const $welcomeFace: ImageStyle = {
  height: 169,
  width: 269,
  position: "absolute",
  bottom: -47,
  right: -80,
  transform: [{ scaleX: isRTL ? -1 : 1 }],
}

const $welcomeHeading: TextStyle = {
  marginBottom: spacing.md,
  color: colors.palette.neutral200,
}
