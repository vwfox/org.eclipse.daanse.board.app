/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import  { container } from 'org.eclipse.daanse.board.app.lib.core';
import { SettingsManager } from './classes/SettingsManager'
import { type SettingsManagerI } from './interfaces/SettingsManagerI'
const identifier = Symbol.for('SettingsManager')

if (!container.isBound(identifier)) {
  container.bind<SettingsManagerI>(identifier).toConstantValue(new SettingsManager());
  console.log("📦 SettingsManager initialized");
}
export {
  identifier,
  type SettingsManagerI
}
