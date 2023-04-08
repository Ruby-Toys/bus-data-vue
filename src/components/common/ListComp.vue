<template>
  <div class="table-responsive">
    <table class="table table-hover align-middle">
      <thead>
        <slot name="thead" />
      </thead>
      <tbody class="table-group-divider">
        <slot name="tbody" />
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped></style>
