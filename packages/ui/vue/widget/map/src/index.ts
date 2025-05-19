/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import MapsWidget from './MapsWidget.vue'
import MapsWidgetSettings from './MapsWidgetSettings.vue'
import Icon from './assets/progress.svg'
import { useDataPointRegistry } from './composables/datapointRegistry'
import TLCDataLabelRendererDescription from './parts/dataLabelRenderer/TLCDataLabelRendererDescription'
import ValueUnitDataLabelRendererDescription from './parts/dataLabelRenderer/ValueUnitDataLabelRendererDescription'



const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)
  register(widgetRepository)

}
const register = (widgetRepository: WidgetRepository) => {
  useDataPointRegistry().registerDataPointRenderer(new TLCDataLabelRendererDescription())
  useDataPointRegistry().registerDataPointRenderer(new ValueUnitDataLabelRendererDescription())
  widgetRepository.registerWidget('MapWidget', {
    component: MapsWidget,
    settingsComponent: MapsWidgetSettings,
    supportedDSTypes: ['ogcsta'],
    icon: Icon,
    name: 'Map'
  })
}
export {
  init,
  MapsWidget,
  MapsWidgetSettings
}
