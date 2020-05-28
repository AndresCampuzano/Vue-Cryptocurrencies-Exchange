<template>
  <header class="shadow customWidthHeader">
    <nav>
      <nav
        class="flex items-center justify-between flex-wrap customColorHeader p-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <router-link :to="{ name: 'home' }" class="flex">
            <PxIcon class="mr-2" />
            <span class="font-semibold text-xl tracking-tight">Vue Crypto</span>
          </router-link>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow">
            <router-link
              v-for="l in links"
              :key="l.title"
              :to="l.to"
              class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
              >{{ l.title }}</router-link
            >
          </div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',

  components: { PxIcon },

  props: {
    links: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped>
.customColorHeader {
  background-image: linear-gradient(to right, #3f51b5, #64b5f6) !important;
}

.customWidthHeader {
  width: 100%;
  position: fixed;
}
</style>
