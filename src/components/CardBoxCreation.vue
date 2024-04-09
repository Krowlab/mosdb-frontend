<script setup>
import { computed } from 'vue'
import { mdiCashMinus, mdiCashPlus, mdiReceipt, mdiCreditCardOutline } from '@mdi/js'
import CardBox from '@/components/CardBox.vue'
import BaseLevel from '@/components/BaseLevel.vue'
import PillTag from '@/components/PillTag.vue'
import IconRounded from '@/components/IconRounded.vue'
import { mdiGreenhouse } from '@mdi/js'

const props = defineProps({
  name: {
    type: String,
    required: false
  },
  format: {
    type: String,
    required: false
  },
  tags: {
    type: String,
    required: false
  },
  description: {
    type: String,
    required: false
  },
  shops: {
    type: String,
    required: false
  },
  edition: {
    type: String,
    required: false
  },
  official: {
    type: String,
    required: false
  },
  authors: {
    type: String,
    required: false
  },
  order: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <CardBox class="mb-6 last:mb-0">
    <BaseLevel>
      <BaseLevel type="justify-start">
        <div class="text-center space-y-1 md:text-left md:mr-6">
          <h4 class="text-xl">{{ name }}
            <sub>{{ edition }}</sub>
          </h4>
          <p class="text-gray-500 dark:text-slate-400">
            by <b>{{ authors }}</b> sold on {{ shops }}
          </p>
          <PillTag
            // for="'(tag, index) in tags'"
          :label=tag
          :color="'danger'"
          :icon=null
          :small=false
          :outline=false
          />
        </div>
      </BaseLevel>
      <div class="text-center md:text-right space-y-2">
        <p class="text-sm text-gray-500">
          {{ description }}
        </p>
      </div>
    </BaseLevel>
  </CardBox>
</template>
