<template>
  <div>
    <b-navbar class="p-0">
      <b-sidebar
        no-close-on-route-change
        width="210px"
        title="Sidebar"
        class="d-block"
        no-header
        visible
        shadow
      >
        <div class="p-3 px-1 border-bottom border-light text-center">
          <a href="/home">
            <img
              class="logo"
              src="../img/logo.png"
            />
          </a>
        </div>
        <div class="pt-3">
          <b-nav
            vertical
            v-for="(menu, index) in menus"
            :key="index"
          >
            <b-nav-item
              :to="menu.path"
              class="mb-2"
            >
              {{ menu.label }}
            </b-nav-item>
          </b-nav>
        </div>
      </b-sidebar>
    </b-navbar>
    <div class="main-content">
      <div class="py-1">
        <b-navbar class="topnav border-bottom border-light">
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown
              :text="user"
              right
            >
              <b-dropdown-item @click="logout">Logout</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar>
      </div>
      <slide-y-up-transition
        mode="out-in"
        origin="center top"
      >
        <router-view></router-view>
      </slide-y-up-transition>
    </div>
  </div>
</template>

<script>
import { SlideYUpTransition } from "vue2-transitions";
import menus from "../util/menus.js";

export default {
  components: {
    SlideYUpTransition,
  },
  data() {
    return {
      user: "Admin",
      menus: [],
      visible: false,
    };
  },
  methods: {
    getMenu() {},
    logout() {
      sessionStorage.clear("user");
      this.$router.push("/login");
    },
  },
  mounted() {
    this.menus = menus;
  },
  created() {
    //this.$store.dispatch("checkRoles");
    //console.log(this.$store);
    //console.log(this.$store.getters.isChecker);
  },
};
</script>

<style>
.card-header {
  background-color: white !important;
}
</style>

<style scoped>
.topnav {
  min-height: 75px;
}
.logo {
  max-width: 60px;
}
.main-content {
  margin-left: 210px;
}
.nav-link {
  color: rgba(0, 0, 0, 0.5);
}

.nav-link:hover,
.nav-link:active {
  background-color: #5086ad;
  color: #fff;
}

.router-link-active {
  background-color: #015897;
  color: #fff;
}

.border-light {
  border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
}
.b-sidebar {
  display: block !important;
}
.b-sidebar:not(.b-sidebar-right) {
  display: block !important;
}
</style>
<style>
.page-item.active .page-link {
  background-color: #015897 !important;
  border-color: #015897 !important;
  color: #fff !important;
}

.page-item .page-link {
  color: #015897 !important;
}

.btn-primary:not(:disabled):not(.disabled):active:focus,
.btn-primary:not(:disabled):not(.disabled).active:focus,
.show > .btn-primary.dropdown-toggle:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 4, 0, 0.2) !important;
}

.page-link:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 4, 0, 0.2);
}

.dropdown-item.active,
.dropdown-item:active {
  background-color: #015897 !important;
  border-color: #015897 !important;
  color: #fff !important;
}
.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #015897 !important;
  background-color: #015897 !important;
}
.td-custom {
  width: 100% !important;
}
tr.bg-warning {
  background-color: rgba(255, 193, 7, 0.7) !important;
}

.btn-modal {
  min-width: 72.95px;
}
</style>
