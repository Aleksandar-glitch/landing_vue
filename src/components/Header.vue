<script setup>
import { themeColor, siteName } from "../data/items";
import logo from "../assets/images/logo.svg";
</script>
<template>
  <nav class="site-nav dark js-site-navbar site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <router-link to="/">
          <img :src="logo" alt="Logo" style="width: 200px;" />
        </router-link>
        <div class="actions">
          <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-right">
            <li class="active">
              <!-- <a href="/about" class="nav-link">How it works</a> -->
              <router-link to="/platform">How It Works</router-link>
            </li>
            <!-- <li><a href="#" class="nav-link">Pricing</a></li> -->
            <li><a href="#" class="nav-link">Resources</a></li>

            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
          <ul class="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
            <li class="cta-button-outline" style="margin-right: 5px;"><a href="#">Log in</a></li>
            <li class="cta-primary" style="margin-right: 5px;">
              <a href="#">Start Free</a>
            </li>
            <!-- <li class="cta-button-outline"><a href="#">Book a call</a></li> -->
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
