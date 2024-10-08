<script setup>
import { themeColor, siteName } from "../data/items";
import logo from "../assets/images/logo.svg";
</script>
<template>
  <nav class="site-nav dark js-site-navbar site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <a href="" class="logo m-0 float-left">
          <img :src="logo" alt="Logo" style="width: 200px;" />
        </a>
        <ul class="js-clone-nav d-none mt-1 d-lg-inline-block site-menu float-right">
          <li class="cta-button-outline" style="margin-right: 5px;"><a href="#">Log in</a></li>
          <li class="cta-primary" style="margin-right: 5px;">
            <a href="#">Start Free</a>
          </li>
          <!-- <li class="cta-button-outline"><a href="#">Book a call</a></li> -->
        </ul>
        <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-right">
          <li class="active">
            <a href="#" class="nav-link">How it works</a>
          </li>
          <!-- <li><a href="#" class="nav-link">Pricing</a></li> -->
          <li><a href="#" class="nav-link">Resources</a></li>
          <li><a href="#" class="nav-link">Contact</a></li>
        </ul>
        <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
          data-toggle="collapse" data-target="#main-navbar">
          <span></span>
        </a>
      </div>
    </div>
  </nav>
</template>
