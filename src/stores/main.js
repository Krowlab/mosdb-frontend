import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import axios from 'axios'

export const useMainStore = defineStore('main', () =>
{
  const userName = ref('John Doe')
  const userEmail = ref('doe.doe.doe@example.com')

  const userAvatar = computed(
    () =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${userEmail.value.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  )

  const isFieldFocusRegistered = ref(false)

  const clients = ref([])
  const history = ref([])
  const creations = ref([])

  function setUser(payload)
  {
    if (payload.name)
    {
      userName.value = payload.name
    }
    if (payload.email)
    {
      userEmail.value = payload.email
    }
  }

  function fetchSampleClients()
  {
    axios
      .get(`data-sources/clients.json?v=3`)
      .then((result) =>
      {
        clients.value = result?.data?.data
      })
      .catch((error) =>
      {
        alert(error.message)
      })
  }

  function fetchSampleHistory()
  {
    axios
      .get(`data-sources/history.json`)
      .then((result) =>
      {
        history.value = result?.data?.data
      })
      .catch((error) =>
      {
        alert(error.message)
      })
  }

  function fetchSampleHistory()
  {
    axios
      .get(`data-sources/history.json`)
      .then((result) =>
      {
        history.value = result?.data?.data
      })
      .catch((error) =>
      {
        alert(error.message)
      })
  }

  function fetchCreations()
  {
    axios
      .get(`https://backend.krowlab.de/v1/databases/65d5e6c5719d2ce420a0/collections/65d5e6ceabecd56ce6ae/documents`, {
        headers: {
          'X-Appwrite-Project': '65d5e592d4f18cb71d46'
        }
      })
      .then((result) =>
      {
        creations.value = result?.data?.documents
      })
      .catch((error) =>
      {
        alert(error.message)
      })
  }

  return {
    userName,
    userEmail,
    userAvatar,
    isFieldFocusRegistered,
    clients,
    history,
    creations,
    setUser,
    fetchSampleClients,
    fetchSampleHistory,
    fetchCreations
  }
})
