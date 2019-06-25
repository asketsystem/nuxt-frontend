// Navigation.vue
<template>
    <div class="navigation">
        <nav>
            <ul role="menu">
                <li v-for="(navItem, index) in pages" :key="index">
                    <nuxt-link:to ="' /' + navItem.fields.slug.trim()" role="menuitem">{{navItem.fields.navTitle}}
                    </nuxt-link>
                </li>
            </ul>
        </nav>
    </div>
</template>

