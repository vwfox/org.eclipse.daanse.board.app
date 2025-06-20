<!--
Copyright (c) 2023 Contributors to the  Eclipse Foundation.
This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/
SPDX-License-Identifier: EPL-2.0

Contributors: Smart City Jena

-->

<script lang="ts" setup>


import { toRefs } from 'vue'
import { IDataPoint } from '../../api/Datapoint'

const props = withDefaults(defineProps<IDataPoint & { config: undefined }>(), {})
const { config, data } = toRefs(props)


</script>

<template>
  <div v-if="data" class="datapoint tlc">
    {{ data }}
  </div>
</template>

<style scoped>
.tlc {
  position: absolute;
  border: 1px solid #746f6f;
  background: #6a6a6a;
  padding: 4px;
  border-radius: 6px;
  text-wrap: nowrap;
  font-size: 16px;
  margin: 22px 0;
  transform: rotate(-90deg);

}

</style>
