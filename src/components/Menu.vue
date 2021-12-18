<script setup lang="ts">
import { routes } from '../router/router'
</script>
<template>
    <ul class="mt-8">
        <li v-for="item in routes" :key="item.name" class="mt-2">
            <router-link class="" active-class="text-blue-600 font-bold underline" :to="item.path">
                <span>{{item.name}}</span>
            </router-link>
        </li>
    </ul>
</template>