/**
 * Copyright (c) 2023 Contributors to the  Eclipse Foundation.
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors: Smart City Jena
 */
export const pkg = (config) => `
{
  "name": "org.eclipse.daanse.board.app.${config.name}",
  "version": "${config.version}",
  "description": "${config.description}",
  "author": "${config.author}",
  "homepage": "${config.homepage}",
  "license": "${config.license}",
  "main": "${config.entrypoint}",
  "types": "./dist/index.d.ts",
  "type": "module",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/eclipse-daanse/org.eclipse.daanse.board.app.git"
  },
  "scripts": {
    "build": "vite build"
  },
  "bugs": {
    "url": "https://github.com/eclipse-daanse/org.eclipse.daanse.board.app/issues"
  },
  "devDependencies": {
    "inversify": "7.5.1",
    "typescript": "^5.8.2",

    "vite-plugin-dts": "4.5.3"
  },
  "publishConfig": {
    "access": "public"
  }
}
`
