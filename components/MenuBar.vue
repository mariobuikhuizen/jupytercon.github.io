<template>
    <div class="clearfix menu-bar">

        <div class="float-left">
            <div class="jupyter-logo">
                <nuxt-link to="/" aria-label="home"><img src="~assets/svg/logo.svg" alt="JupyterCon logo"/></nuxt-link>
            </div>
        </div>

        <div class="float-right">
            <div class="clearfix right">
                <div class="float-right menu-btn" :class="menuOpen?'opened':'closed'" @click="menuOpen = !menuOpen"></div>
                <div class="float-right menu-text">Menu</div>
            </div>

            <div class="menu-wrapper">
                <div class="menu-overlay" :class="menuOpen?'opened':'closed'">
                    <div class="social-icons"></div>
                    <div class="terms">Privacy Policy | Terms & Conditions
                    </div>
                    <div class="menu-columns">
                        <MenuContent></MenuContent>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import MenuContent from "./MenuContent";
    import DesktopBackground from "./DesktopBackground";
    export default {
        name: "MenuBar",
        components: {DesktopBackground, MenuContent},
        data() {
            return {
                menuOpen: false,
            }
        },
    }
</script>
