<template>
  <header class="shadow customWidthHeader">
    <nav>
      <nav
        class="flex items-center justify-between flex-wrap customColorHeader p-6"
      >
        <div class="flex items-center flex-shrink-0 text-white mr-6">
          <PxIcon class="mr-2" />
          <span class="font-semibold text-xl tracking-tight">Vue Crypto</span>
        </div>
        <div
          class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
        >
          <div class="text-sm lg:flex-grow"></div>
        </div>
      </nav>
    </nav>
  </header>
</template>

<script>
import PxIcon from '@/components/PxIcon'

export default {
  name: 'PxHeader',

  components: { PxIcon }
}
</script>

<style scoped>
.customColorHeader {
  background-image: linear-gradient(
    to right,
    rgb(63, 81, 181),
    rgb(100, 181, 246)
  ) !important;
}

.customWidthHeader {
  width: 100%;
}
</style>
