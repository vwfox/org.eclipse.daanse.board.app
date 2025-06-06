<!--
Copyright (c) 2025 Contributors to the Eclipse Foundation.

This program and the accompanying materials are made
available under the terms of the Eclipse Public License 2.0
which is available at https://www.eclipse.org/legal/epl-2.0/

SPDX-License-Identifier: EPL-2.0

Contributors:
    Smart City Jena
-->
<script setup lang="ts">

import { computed, ref, watch, inject, onMounted } from 'vue'
import {
  identifier as RepoManagerId,
  Repository,
  RepositoryRegistryI,
  Entity,
  WritableRepository, type RepositoryObserver
} from 'org.eclipse.daanse.board.app.lib.repository.persistence'
import { useLayoutStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.layout'
import { useConnectionsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.connection'
import { useDataSourcesStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.datasouce'
import { useWidgetsStore } from 'org.eclipse.daanse.board.app.ui.vue.stores.widgets'
import {
  useToast,
  VaButton,
  VaFileUpload, VaIcon, VaList, VaListItem, VaListItemLabel, VaListItemSection, VaSidebar,
  VaSidebarItem,
  VaSidebarItemContent,
  VaSidebarItemTitle
} from 'vuestic-ui'
import { computedAsync } from '@vueuse/core'
import type { Container } from 'inversify'
import Default from '@/components/saveLoad/Default.vue'


const releaseEndPointUrl = ref<String>('')
if (window && (window as any)['__env'] && (window as any)['__env'].settings
  && (window as any)['__env'].settings.releaseEndPointUrl) {
  releaseEndPointUrl.value = (window as any)['__env'].settings.releaseEndPointUrl
}

const container = inject<Container>('container')
const repoManager: RepositoryRegistryI | undefined =
  container?.get<RepositoryRegistryI>(RepoManagerId)
repoManager.addObserver({
  update: async (event, repo) => {
    console.log('repos updated')
    nodes.value = (await repoManager?.getAvailableReposetories()).map((repo: Repository) => {
      return {
        id: repo.uri.toString(),
        label: repo.name,
        icon: 'inventory'
      }
    })
  }
} as RepositoryObserver)
const { init, notify, closeAll } = useToast()

const data = ref<undefined | { context: string, state?: any }>({
  context: 'SAVE',
  state: undefined
})
const deleteFile = ref(undefined)
const uploadFile = ref(undefined)
const sureuploadFile = ref(false)
const url_name = ref('https://')
const loadingUrl = ref(false)
const errorMessage = ref('')
const error = ref(false)
const date = ref(new Date())
const upload = ref(undefined)
const isOpenedName = ref(false)
const save_Ename = ref('')
const content = ref<any>(undefined)
const selectedRepo = ref<Repository | undefined>(undefined)
const urlDialog = ref(false)


const nodes = computedAsync(async () => {
  return (await repoManager?.getAvailableReposetories()).map((repo: Repository) => {
    return {
      id: repo.uri.toString(),
      label: repo.name,
      icon: 'inventory'
    }
  })
})

const sameName = computedAsync(async () => {
  const fu = new URL((selectedRepo.value as Repository).uri)
  fu.pathname = save_Ename.value + '.json'
  const entity_exists = await (selectedRepo.value as Repository).getEntityByUri(fu)
  return entity_exists != null
})


const RepoClick = async (row: any) => {
  selectedRepo.value = (await repoManager.findRepositoryByUri(new URL(row.id)))
}
watch(upload, (newVal) => {
  if (newVal) {
    let name = (newVal[0] as any).name
    let reader = new FileReader()
    reader.addEventListener('load', (result) => {
      save_Ename.value = name.split('.')[0]
      isOpenedName.value = true
      content.value = result.target?.result ?? undefined

    })
    reader.readAsText(newVal[0])
  }
})
onMounted(async () => {
  data.value!.state = getData()


})

const getData = () => {
  const layoutStore = useLayoutStore()
  const stores = useDataSourcesStore()
  const conections = useConnectionsStore()
  const widgets = useWidgetsStore()

  const data = {
    layout: layoutStore.layout,
    datasources: stores.dataSources,
    conections: conections.connections,
    widgets: widgets.widgets
  }
  return JSON.stringify(data)
}

const loadData = (dataraw: any) => {
  const data = JSON.parse(dataraw)
  const layoutStore = useLayoutStore()
  const stores = useDataSourcesStore()
  const conections = useConnectionsStore()
  const widgets = useWidgetsStore()

  console.log(data)
  if (data.layout) layoutStore.layout = data.layout
  if (data.datasources) stores.dataSources = data.datasources
  if (data.conections) conections.connections = data.conections
  if (data.widgets) widgets.widgets = data.widgets

}
const type = computed(() => {

  if (!selectedRepo.value) return ''

  const proto = Object.getPrototypeOf(selectedRepo.value)
  if (!proto?.constructor || !('type' in proto.constructor)) return ''

  return (proto.constructor as any).type
})
const customViewComponent = computed(() => {
  const t = type.value
  if (!t) return null

  if (!repoManager.isViewForRepoType(t)) return null

  const comp = repoManager.getViewForRepoType(t)
  if (!comp) return null

  return comp
})

</script>

<template>
  <div class="saveload w-full h-full flex flex-col p-4  pl-18">

    <div>

      <h6 class="va-h6">Files</h6>
      <va-divider />

      <div class="flex flex-shrink-0 h-full w-full gap-4">
        <div class="repos h-full w-[300px]">
          <div class="menu">

          </div>

          <div
            class="flex flex-col border border-gray-300 rounded-lg overflow-hidden
            w-full h-full ice">
            <div class="flex gap-4 w-full border-b border-gray-300 px-4 py-2 items-center">
              <h4 class="flex-grow text-sm font-semibold">Repositories</h4>
              <VaButton preset="secondary" @click="urlDialog=true" v-if="data"
                        icon="travel_explore">
              </VaButton>
            </div>

            <VaList
              class="w-full h-full overflow-auto flex flex-col"
              minimized-width="64px"
              width="300px"
            >
              <VaListItem
                v-for="item in nodes"
                :key="item.label"
                class="text-sm border-b border-gray-300 border-dashed
                  last:border-none px-4 py-2 cursor-pointer"
                :class="{ 'bg-gray-200':item.id == ((selectedRepo)?(selectedRepo as Repository)
                .uri.toString():'')}"
                @click="RepoClick(item)"
              >

                <VaListItemSection>
                  <VaListItemLabel>
                    <VaIcon :name="item.icon" />
                    {{ item.label }}
                  </VaListItemLabel>

                </VaListItemSection>


              </VaListItem>
            </VaList>
          </div>
        </div>

        <div class="keys w-full flex-1">
          <div id="footer" class="footer">
            <div class="flex gap-2.5" id="loadSaveModalFooter">

            </div>
            <div class="flex gap-2.5" id="loadSaveModalFooterRight">
              <VaFileUpload v-model="upload" icon="upload"
                            v-if="data &&  selectedRepo" class="marginr" />
            </div>

          </div>
          <template v-if="selectedRepo">
            <component v-if="customViewComponent" :is="customViewComponent"
                        :repo="selectedRepo" @close="loadData" :context="data"
                        :key="`custom-${type}`"></component>

            <Default v-else :repo="selectedRepo" @close="loadData" :context="data"
                      :key="'default'"></Default>
          </template>
          <div v-else class="full-height">
            <div class="full-height flexit">
              <div class="norepo"> &#60;/></div>
              <div> Please select a Repo</div>
            </div>
          </div>

        </div>
      </div>


    </div>

  </div>
</template>

<style scoped>
.marginr {
  margin-right: 15px;
}

.footer {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.flexit {
  display: flex;
  align-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .norepo {
    font-size: 50px;
    color: #c6c0c0;
  }
}

</style>
<style>
.save-modal {
  .va-data-table__table-tr.active {
    .va-data-table__table-td {
      background: #d95050 !important;
    }

  }

  .va-modal__footer, #loadSaveModalFooter {

    background: #f7f7f7;
    padding: 10px 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    gap: 10px;
  }
}

.va-menu-item {
  a {
    color: #000;
  }
}
</style>
