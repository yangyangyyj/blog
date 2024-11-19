<script setup>
import { withBase, useRouter } from "vitepress";
import { data as notes } from "../utils/notes.data.ts";

const router = useRouter();

function getNotePage(url) {
  router.go(withBase(url));
}
</script>
<template>
  <div px-4 max-w-1200px mx-auto bg-transparent>
    <el-timeline>
      <el-timeline-item
        v-for="(item, index) in notes.concat(notes)"
        :key="index"
        :timestamp="item.date"
        placement="top"
      >
        <el-card>
          <h4 @click="getNotePage(item.url)">Update Github template</h4>
          <p>Tom committed 2018/4/12 20:46</p>
          <span class="dir">{{ item.url }} / </span>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
