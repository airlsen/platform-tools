<template>
  <div class="sidebar">
    <nav class="sidebar-nav">
      <sidebar-item :routes='siderbar_routers.children'></sidebar-item>

    </nav>
  </div>
</template>
<script>
   import SidebarItem from './SidebarItem';
import { mapGetters } from 'vuex';
export default {
  name: 'sidebar',
  components: { SidebarItem },
      computed: {
        ...mapGetters([
          'siderbar_routers'
        ])
      },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  }
}
</script>

<style lang="css">
  .nav-link {
    cursor:pointer;
  }

  .sidebar {
    color: #fff;
    background: #33485c;
    background-color: #303133;
  }
</style>
