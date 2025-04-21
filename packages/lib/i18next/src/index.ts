/**
Copyright (c) 2025 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena
*/
import i18next from "i18next";
import type {i18n} from "i18next";
import type { Container } from "inversify";
const symbolForI18n = Symbol.for('I18next')

const init = (container: Container) => {
  console.log('init i18next')
  i18next.init({fallbackLng: 'en', resources: {}});
  container.bind<i18n>(symbolForI18n).toConstantValue(i18next);
}

export {
  init,
  symbolForI18n,
  i18n
}
