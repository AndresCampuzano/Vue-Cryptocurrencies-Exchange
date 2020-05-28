<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <th :class="{ up: this.sortOrder == 1, down: this.sortOrder == -1 }">
          <span @click="changeSortOrder" class="underline cursor-pointer"
            >Ranking</span
          >
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Market Value</th>
        <th>24hs Variation</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Buscar..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="x in filteredAssets"
        :key="x.id"
        class="border-b border-gray-200 hover:bg-gray-100 hover:bg-orange-100"
      >
        <td>
          <img
            :src="
              `https://static.coincap.io/assets/icons/${x.symbol.toLowerCase()}@2x.png`
            "
            :alt="x.name"
            class="h-10 w-10"
          />
        </td>
        <td>
          <b># {{ x.rank }}</b>
        </td>
        <td>
          <router-link
            class="hover: underline text-blue-600"
            :to="{ name: 'coin-detail', params: { id: x.id } }"
          >
            {{ x.name }}
            <small class="ml-1 text-gray-500">
              {{ x.symbol }}
            </small>
          </router-link>
        </td>
        <td>{{ x.priceUsd | dollar }}</td>
        <td>{{ x.marketCapUsd | dollar }}</td>
        <td
          :class="
            x.changePercent24Hr.includes('-') ? 'text-red-600' : 'text-blue-600'
          "
          id="thisDoesNothing"
        >
          {{ x.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <PxButton v-on:custom-click="goToCoin(x.id)"
            ><span>Detail</span></PxButton
          >
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from '@/components/PxButton'

export default {
  name: 'PxAssetsTable',

  components: {
    PxButton
  },

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      filter: '',
      sortOrder: 1
    }
  },

  computed: {
    filteredAssets() {
      const altOrder = this.sortOrder == 1 ? -1 : 1
      return this.assets
        .filter(
          a =>
            a.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            a.name.toLowerCase().includes(this.filter.toLowerCase())
        )
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder
          }

          return altOrder
        })
    }
  },

  methods: {
    goToCoin(id) {
      this.$router.push({ name: 'coin-detail', params: { id } })
    },

    changeSortOrder() {
      this.sortOrder = this.sortOrder == 1 ? -1 : 1
    }
  }
}
</script>

<style scoped>
.up::before {
  content: '🔼';
}

.down::before {
  content: '🔻';
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
