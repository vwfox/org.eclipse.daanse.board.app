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
import type { Annotations43 } from "./Annotations43";

/**
 * Translation
 * @targetNSAlias `__tns__`
 * @targetNamespace `http://schemas.microsoft.com/analysisservices/2011/engine/300/300`
 */
export interface Translation2 {
  /** xsd:unsignedInt */
  Language?: string;
  /** xsd:string */
  Caption?: string;
  /** xsd:string */
  CollectionCaption?: string;
  /** xsd:string */
  Description?: string;
  /** xsd:string */
  DisplayFolder?: string;
  /** Annotations */
  Annotations?: Annotations43;
}
