/*********************************************************************
 * Copyright (c) 2025 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import { type WidgetRepository, identifier } from 'org.eclipse.daanse.board.app.lib.repository.widget'
import Icon from './assets/text.svg'
import TextWidget from './TextWidget.vue'
import TextWidgetSettings from './TextWidgetSettings.vue'
import { Container } from 'inversify'
import { VariableWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'

const init = (container: Container) => {
  const widgetRepository = container.get<WidgetRepository>(identifier)

  register(widgetRepository);
}

interface ITextSettings {
  text: VariableWrapper<string>
  fontSize: VariableWrapper<number>
  fontColor: VariableWrapper<string>
  fontWeight: VariableWrapper<string>
  fontStyle: VariableWrapper<string>
  textDecoration: VariableWrapper<string>
  horizontalAlign: VariableWrapper<string>
  verticalAlign: VariableWrapper<string>
}

const register = (widgetRepository: WidgetRepository) => {
  widgetRepository.registerWidget('TextWidget', {
    component: TextWidget,
    settingsComponent: TextWidgetSettings,
    supportedDSTypes: [],
    icon: Icon,
    name: 'Text'
  })
}

export { TextWidget, TextWidgetSettings, init }

export type { ITextSettings }
