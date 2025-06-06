/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from 'inversify'
import {identifier,RepositoryRegistryI} from "org.eclipse.daanse.board.app.lib.repository.persistence";
import {type} from "org.eclipse.daanse.board.app.lib.persistence.git";
import GitRepositoryV from './GitRepositoryV.vue'

const init = (container: Container) => {
  const repoRegistry = container.get<RepositoryRegistryI>(identifier);
  repoRegistry.registerViewForRepoType(type,GitRepositoryV);
  console.log('📦 GitRepositoryUI registered');
}

export {
  init
}
