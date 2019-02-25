<template>
  <navbar>
    <button class="navbar-toggler mobile-sidebar-toggler d-lg-none" type="button" @click="mobileSidebarToggle">&#9776;</button>
      <a href="#" class="img"><img src="static/img/boss/logo.jpg" height="50"
                                   class="radius-circle rotate-hover" alt="">测试开发平台</a>
    <ul class="nav navbar-nav d-md-down-none">
      <li class="nav-item">
        <a class="nav-link navbar-toggler sidebar-toggler"  @click="sidebarMinimize">&#9776;</a>
      </li>
    </ul>

    <ul class="nav navbar-nav d-md-down-none">
        <li class="nav-item header-item">
            <router-link tag="div" to='/home'  style="height:55px;border-radius: 2px;" class="nav-link">
                <p><Icon type="home" size='30' color="#2d8cf0"></Icon></p>
                <p class="header-word"> 首页 </p>
            </router-link>
        </li>
        <li class="nav-item header-item">
            <router-link tag="div" to='/project'  style="height:55px;border-radius: 2px;" class="nav-link">
                <p><Icon type="compose" size='30' color="#2d8cf0"></Icon></p>
                <p class="header-word"> 接口测试 </p>
            </router-link>
        </li>
        <li class="nav-item header-item">
            <router-link tag="div" to='/env'  style="height:55px;border-radius: 2px;" class="nav-link">
                <p><Icon type="gear-b" size='30' color="#2d8cf0"></Icon></p>
                <p class="header-word"> 环境配置 </p>
            </router-link>
      </li>
   <!--<li class="nav-item header-item">-->
        <!--<Dropdown>-->
      <!--<router-link tag="div" to='/interface'  style="height:55px;" class="nav-link">-->
            <!--<p><Icon type="bug" size='30' color="#2d8cf0"></Icon></p>-->
            <!--<p class="header-word"> 接口测试 </p>-->
        <!--</router-link>-->
        <!--&lt;!&ndash;<DropdownMenu slot="list">&ndash;&gt;-->
            <!--&lt;!&ndash;<DropdownItem>Linux</DropdownItem>&ndash;&gt;-->
            <!--&lt;!&ndash;<DropdownItem>Mac OS X</DropdownItem>&ndash;&gt;-->
            <!--&lt;!&ndash;<DropdownItem>Windows</DropdownItem>&ndash;&gt;-->
            <!--&lt;!&ndash;<DropdownItem>Core OS</DropdownItem>&ndash;&gt;-->
        <!--&lt;!&ndash;</DropdownMenu>&ndash;&gt;-->
    <!--</Dropdown>-->
      <!--</li>-->
        <li class="nav-item header-item">
            <router-link tag="div" to='/tools'  style="height:55px;border-radius: 2px;" class="nav-link">
                <p><Icon type="wrench" size='30' color="#2d8cf0"></Icon></p>
                <p class="header-word" > 测试工具 </p>
            </router-link>
        </li>

    </ul>


    <ul class="nav navbar-nav ml-auto">
      
      <li class="nav-item d-md-down-none">
        <a class="nav-link color" ><Icon type="android-notifications" size="20"></Icon><span class="badge badge-pill badge-danger">5</span></a>
      </li>


      <Dropdown class="nav-item">
        <a href="javascript:void(0)">
           <span slot="button">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="o" style="height: 50px;">
          <span class="d-md-down-none color">admin</span>
          </span>
        </a>
        <Dropdown-menu slot="list">
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="alert"></Icon>Updates<span class="badge badge-info">42</span></p>


            </Dropdown-item>
            <Dropdown-item>
              <p class="dropdown-itemp"><Icon type="chatbox-working"></Icon>Messages<span class="badge badge-success">42</span></p>

            </Dropdown-item>
             <Dropdown-item>
              <p class="dropdown-itemp">  <Icon type="chatbox-working"></Icon>Messages<span class="badge badge-danger">42</span></p>

           </Dropdown-item>
              <Dropdown-item divided>
              <p class="dropdown-itemp"><Icon type="android-contact"></Icon> Profile</p>

              </Dropdown-item>
            <Dropdown-item >
              <p class="dropdown-itemp"><Icon type="android-settings"></Icon> Settings</p>
              </Dropdown-item>

                 <Dropdown-item > <a href="" @click="Logout"  ><p  class="dropdown-itemp"><Icon type="power"></Icon>Logout</p></a></Dropdown-item>

        </Dropdown-menu>
    </Dropdown>

 
      <li class="nav-item d-md-down-none">
        <a class="nav-link navbar-toggler aside-menu-toggler"  @click="asideToggle">&#9776;</a>
      </li>
    </ul>
  </navbar>
</template>
<script>

import navbar from './Navbar'

export default {
  name: 'header',
  components: {
    navbar,
    
  },
  methods: {
    Logout(e){
         e.preventDefault();
         this.$store.dispatch('LogOut').then(() => {
                this.$router.push({ path: '/login' });
              }).catch(err => {
                this.$message.error(err);
              });
    },
    click () {
      // do nothing

    },


    sidebarToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('sidebar-hidden')
    },
    sidebarMinimize (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-minimized')
    },
    mobileSidebarToggle (e) {
      e.preventDefault()

      document.body.classList.toggle('sidebar-mobile-show')
    },
    asideToggle (e) {
      e.preventDefault()
      document.body.classList.toggle('aside-menu-hidden')
    }
  }
}
</script>

<style type="text/css" scoped>
  .dropdown-itemp{
    text-align: left;
    font-size: 15px;
    padding: 10px;
  }
 .header-item .ivu-dropdown-item{
  padding: 15px;
}
  .header-item{
    width: 130px;
    /*background-color: #20a8d8;*/
    /*background-color: white;*/

    height: 55px;
    
    
  }
  .header-item a{
        color:white !important;
  }

    .header-word{
        color:white;
        font-size: 14px;
    }

    .open{
        background-color: #20a8d8   !important;
    }
  .app-header.navbar {
      background-color: #303133;
  }

</style>
