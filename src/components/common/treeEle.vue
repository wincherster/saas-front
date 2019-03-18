<template>
  <div>
    <el-input placeholder="请输入查询条件" v-model="filterText" v-if="isFilter"></el-input>
    <el-tree accordion :show-checkbox="isShow" class="filter-tree" :data="data" :props="defaultProps" default-expand-all :filter-node-method="filterNode" ref="tree" @node-click="handleNodeClick"></el-tree>
</div>
</template>
<script>
  export default {
    props: ['treeData','isShow','isFilter'],
    watch: {
      filterText(val) {
        this.$refs.tree.filter(val);
      }
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      handleNodeClick(data){
        console.info(data)
      }
    },
    data() {
      return {
        isFilter:this.isFilter?this.isFilter:false,
        isShow:this.isShow?this.isShow:false,
        filterText: '',
        data: this.treeData,
        defaultProps: {
          children: 'children',
          label: 'text'
        }
      };
    }
  };
</script>
<style scoped>
  
</style>