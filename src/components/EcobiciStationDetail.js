import React, { memo } from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { Button, Title } from 'react-native-paper'
import EcobiciStationModel from '../models/EcobiciStation'
import theme, { sharedStyles } from '../styles'
import { translate } from '../i18n'
import ListHeader from './ListHeader'

const EcobiciStationDetail = ({ station, fetchEcobiciStations, isLoading, lastUpdate }) => {
  return (
    <View style={[sharedStyles.m3, sharedStyles.fullRelativeHeight]}>
      <ListHeader text={`${translate('last_updated')} - ${lastUpdate}`} />
      <Title style={sharedStyles.textAlignCenter}>{station.status}</Title>
      <Title style={[sharedStyles.textAlignCenter, sharedStyles.mt3]}>{station.stationType}</Title>
      <View style={[sharedStyles.flexDRow, sharedStyles.mt3]}>
        <View
          style={[sharedStyles.flex1, sharedStyles.flexDRow, sharedStyles.justifyContentCenter]}>
          <Title
            style={{ color: station.calculatePinColor(station.availability?.bikes) }}>{`${translate(
            'bikes',
          )}: ${station.availability?.bikes}`}</Title>
        </View>
        <View
          style={[sharedStyles.flex1, sharedStyles.flexDRow, sharedStyles.justifyContentCenter]}>
          <Title
            style={{ color: station.calculatePinColor(station.availability?.slots) }}>{`${translate(
            'slots',
          )}: ${station.availability?.slots}`}</Title>
        </View>
      </View>
      <Button
        theme={theme}
        mode="text"
        style={sharedStyles.mt3}
        labelStyle={theme.colors.colorSecondary}
        onPress={isLoading ? null : fetchEcobiciStations}>
        {isLoading ? translate('loading_stations') : translate('reload_information')}
      </Button>
    </View>
  )
}

EcobiciStationDetail.propTypes = {
  isLoading: PropTypes.bool,
  fetchEcobiciStations: PropTypes.func.isRequired,
  station: PropTypes.instanceOf(EcobiciStationModel),
  lastUpdate: PropTypes.string,
}

export default memo(EcobiciStationDetail)
