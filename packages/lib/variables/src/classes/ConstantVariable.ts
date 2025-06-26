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

import { Variable } from './Variable'
import { VariableStorage } from '../storage/VariableStorage'
import { type TinyEmitter } from 'tiny-emitter'
import { type IConstantVariableConfig, RefreshType } from '..'
import { Container } from 'inversify'
import { Serializable } from '../interface/JSONSerializableI'
import { container, identifiers } from 'org.eclipse.daanse.board.app.lib.core'
import type { VariableRepository } from 'org.eclipse.daanse.board.app.lib.repository.variable'
import { identifier as variableRepositoryIdentifier } from 'org.eclipse.daanse.board.app.lib.repository.variable/dist/src'

const TYPE = 'ConstantVariable'
const symbol = Symbol.for(TYPE)

const init = (container: Container) => {
  container.bind(symbol).toConstantValue(ConstantVariable);
}

class ConstantVariable extends Variable implements Serializable {
  public type = TYPE

  constructor(
    name: string,
    container: Container,
    config: IConstantVariableConfig,
  ) {
    super(name, container, config)
    this.value = config.value
  }
  update(config: IConstantVariableConfig): void {
    super.update(config);
    this.value = config.value
  }

  get value(): string {
    return super.value
  }

  set value(value) {
    super.value = value
  }

  serialize(): any {
    const ret = super.serialize();
    ret.value = this.value;
    ret.type = this.type;
    return ret;
  }


}

export { ConstantVariable, symbol, init, TYPE as CONSTANT_VARIABLE }
