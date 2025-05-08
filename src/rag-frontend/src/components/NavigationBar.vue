<script setup lang="ts">
import { ElMenu, ElMenuItem } from "element-plus";


</script>

<template>
  <div class="nav-bar-container">
    <el-menu
        class="nav-bar"
        mode="horizontal"
        :router="true"
    >


      <el-menu-item index="/dashboard">RAG问答</el-menu-item>
      <el-menu-item index="/ware">知识库</el-menu-item>


    </el-menu>

  </div>
</template>