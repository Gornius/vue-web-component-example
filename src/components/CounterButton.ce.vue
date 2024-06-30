<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0)

const emits = defineEmits<{
    (e: 'change', newNumber: number): void,
}>();

function onclick() {
    counter.value++;
    emits('change', counter.value);
}
</script>

<template>
    <slot name="label"></slot>
    <button @click="onclick"><slot>Count is</slot>: {{ counter }}</button>
</template>
