<script>
export default {
    name: 'HeaderButton',
    data() {
        return {
            searchText: '',
            isOpenInput: false,
        }
    },
    methods: {

    }
}
</script>

<template>
    <v-row align-self="center" justify="center" class='header-buttons'>
        <v-col @click='isOpenInput = true' cols="6" class="nav-btn drop-down-search-button cursor-p">
            <img src="../assets/icon/search.svg" alt="button search" />
            <!-- input -->
            <v-card-title class='drop-down-search' :class="{ 'drop-down-search-open': isOpenInput }">
                <v-text-field class='search-input' append-icon="mdi-close" @click:append='isOpenInput = false'
                    prepend-icon="mdi mdi-magnify" color='grey' v-model="searchText"
                    single-line hide-details></v-text-field>
            </v-card-title>
        </v-col>
        <v-col cols="6" class="nav-btn cursor-p">
            <img src="../assets/icon/basket.svg" alt="button basket " />
        </v-col>
    </v-row>
</template>

<style lang='scss' scoped>
.drop-down-search-button {
    position: relative;
}

.drop-down-search {
    position: absolute;
    right: -2px;
    top: 50px;
    z-index: 2;
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    transform: translate3d(0, 20px, 0);
    -webkit-transform: translate3d(0, 20px, 0);
    background-color: #fff;
    -webkit-box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
    border-top: 0;
    width: 340px;
    pointer-events: none;

    &::before {
        position: absolute;
        top: -9px;
        right: 19px;
        display: block;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 5.5px 6px 5.5px;
        border-color: transparent transparent #4e4f50 transparent;
    }
}

.drop-down-search-open {
    visibility: visible;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    -webkit-transform: translate3d(0, 0, 0);
    pointer-events: auto;
}
</style>