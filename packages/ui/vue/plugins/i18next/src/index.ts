/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/

import type { Container } from "inversify";
import {
  symbolForI18n,
} from "org.eclipse.daanse.board.app.lib.i18next"
import type {i18n} from "org.eclipse.daanse.board.app.lib.i18next"
import type {Plugin} from "@vue/runtime-core";
import { Options } from '@vitejs/plugin-vue'

let i18n:i18n;
const init = (container: Container) => {
  i18n = container.get<i18n>(symbolForI18n);
}

const I18nextVuePlugin:Plugin = {
  install(app, options:Options) {
    // configure the app
    app.provide('i18n',i18n)
  }
}
export {
  init,
  I18nextVuePlugin
}
