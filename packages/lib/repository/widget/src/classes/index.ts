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

export interface WidgetConfig {
  component: any
  settingsComponent?: any
  supportedDSTypes: string[]
  icon: string
  name: string
  datasource?: string
}

export class WidgetRepository {
  private availableWidgets: Record<string, WidgetConfig> = {}

  registerWidget(typename: string, config: WidgetConfig) {
    this.availableWidgets[typename] = config
  }

  getWidget(typename: string): WidgetConfig {
    return this.availableWidgets[typename]
  }

  getAllWidgets(): Record<string, WidgetConfig> {
    return this.availableWidgets
  }
}
