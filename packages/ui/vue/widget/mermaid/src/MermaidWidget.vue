<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->

<script lang="ts" setup>
import { computed, nextTick, ref, watch } from 'vue'
import mermaid from 'mermaid';
import { IMermaidWidgetSettings } from '.';
import {  VariableWrapper,VariableComplexStringWrapper } from 'org.eclipse.daanse.board.app.ui.vue.composables'


const config = defineModel<IMermaidWidgetSettings>('configv', { required: true});

const container = ref<HTMLDivElement | null>(null);
const timestamp = ref(Date.now());


if(!config.value.theme)config.value.theme = new VariableWrapper('default');
if(!config.value.value)config.value.value = new VariableComplexStringWrapper('flowchart TD\n' +
  '    A[Christmas] -->|Get money| B(Go shopping)\n' +
  '    B --> C{Let me think}\n' +
  '    C -->|One| D[Laptop]\n' +
  '    C -->|Two| E[iPhone]\n' +
  '    C -->|Three| F[fa:fa-car Car]\n' +
  '  ');



watch(() => config.value.theme.value, async (newTheme: any) => {
    mermaid.initialize({
        theme: newTheme,
    });

    timestamp.value = Date.now();
    await nextTick();
    try {
        await mermaid.run({
            nodes: container.value ? [container.value] : [],
        })
    } catch (error) {
        // Ignore as it's expected to throw an error if the value is not valid mermaid code
    }
}, { immediate: true });

watch(() => config.value.value, async (val) => {
    timestamp.value = Date.now();
    await nextTick();
    try {
        await mermaid.run({
            nodes: container.value ? [container.value] : [],
        });
    } catch (error) {
        // Ignore as it's expected to throw an error if the value is not valid mermaid code
    }
}, { deep: true, immediate: true });
</script>

<template>
    <div ref="container" :key="timestamp">
        {{ config.value.value }}
    </div>
</template>

<style scoped>
</style>
