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
  border: 4px solid #f8f6f6;
  background: #6a6a6a;
  padding: 3px;
  border-radius: 12px;
  text-wrap: nowrap;
  margin: 22px 0;
  transform: rotate(-90deg);
  box-shadow: -3px 5px 6px #1919192b;
  font-size: 12px;

}

</style>
