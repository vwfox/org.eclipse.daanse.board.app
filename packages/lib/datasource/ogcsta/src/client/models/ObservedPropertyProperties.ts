/* tslint:disable */
/* eslint-disable */
/**
 * British Geological Survey Sensors API
 * The British Geological Survey (BGS) Sensor API uses Version v1.1 of the OGC SensorThings API.<br><br> Paths/Endpoints that are not currently in use have been excluded, i.e. those relating to Actuators, MultiDatastreams, Tasks and TaskingCapabilities.<br><br> HistoricalLocations have also been removed.<br><br>
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime'

/**
 *
 * @export
 * @interface ObservedPropertyProperties
 */
export interface ObservedPropertyProperties {
  /**
   * The Id of the record in the BGS Sensor Database that is the source of information for the observed property (DIC_SEN_PROPERTY_TYPE.code)
   * @type {string}
   * @memberof ObservedPropertyProperties
   */
  senId?: string;
  /**
   * The type of data provided by the observed property (Measured or Calculated)
   * @type {string}
   * @memberof ObservedPropertyProperties
   */
  dataType?: string;
  /**
   * A description of the formula used to derive values for the observed property (data type 'Calculated' only)
   * @type {string}
   * @memberof ObservedPropertyProperties
   */
  formula?: string;
  /**
   * A flag to indicate whether details of this observed property can be publicly released (set to Y or N)
   * @type {string}
   * @memberof ObservedPropertyProperties
   */
  publishYn?: string;
}

/**
 * Check if a given object implements the ObservedPropertyProperties interface.
 */
export function instanceOfObservedPropertyProperties(value: object): value is ObservedPropertyProperties {
  return true
}

export function ObservedPropertyPropertiesFromJSON(json: any): ObservedPropertyProperties {
  return ObservedPropertyPropertiesFromJSONTyped(json, false)
}

export function ObservedPropertyPropertiesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObservedPropertyProperties {
  if (json == null) {
    return json
  }
  return {

    'senId': json['sen_id'] == null ? undefined : json['sen_id'],
    'dataType': json['data_type'] == null ? undefined : json['data_type'],
    'formula': json['formula'] == null ? undefined : json['formula'],
    'publishYn': json['publish_yn&quot;'] == null ? undefined : json['publish_yn&quot;']
  }
}

export function ObservedPropertyPropertiesToJSON(json: any): ObservedPropertyProperties {
  return ObservedPropertyPropertiesToJSONTyped(json, false)
}

export function ObservedPropertyPropertiesToJSONTyped(value?: ObservedPropertyProperties | null, ignoreDiscriminator: boolean = false): any {
  if (value == null) {
    return value
  }

  return {

    'sen_id': value['senId'],
    'data_type': value['dataType'],
    'formula': value['formula'],
    'publish_yn&quot;': value['publishYn']
  }
}

