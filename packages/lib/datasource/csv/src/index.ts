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

import { Container } from 'inversify'
import { CsvStore, type ICsvStoreConfiguration } from './classes'

const symbol = Symbol('CsvStore')

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(CsvStore)
}

export { CsvStore, ICsvStoreConfiguration, symbol, init }
