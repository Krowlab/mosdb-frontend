<script setup>
import { computed, ref, onMounted } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiRocket
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/LineChart.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBoxCreation from '@/components/CardBoxCreation.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import CardBoxClient from '@/components/CardBoxClient.vue'
import LayoutPublic from '@/layouts/LayoutPublic.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'

const mainStore = useMainStore()

const transactionBarItems = computed(() => mainStore.creations)
</script>

<template>
  <LayoutPublic>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiRocket" title="Works" main>
      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1">
        <CardBoxCreation
            v-for="(transaction, index) in transactionBarItems"
            :name=transaction.name
            :format=transaction.format
            :tags=transaction.tags
            :description=transaction.description
            :shops=transaction.shops
            :edition=transaction.edition
            :official=transaction.official
            :authors=transaction.authors
            :order=index
          />
      </div>



    </SectionMain>
  </LayoutPublic>
</template>
