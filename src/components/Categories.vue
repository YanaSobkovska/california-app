<script>
export default {
    name: 'Categories',
}
</script>

<template>
    <div class="categories-wrap">
        <div class="block-title">
            <h2 class='categories-title'>Shop our latest offers and categories</h2>
            <h5 class='categories-subtitle'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque in est
                dui,
                aliquam, tempor. Faucibus morbi turpis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
        </div>
        <v-row
            class='categories-container d-flex flex-column align-center flex-sm-column-reverse align-sm-center flex-md-row   justify-md-space-between  align-md-stretch'
            no-gutters>
            <v-col cols='12' class='categories-block col-sm-12 col-md-6 d-flex align-stretch'>
                <div class="categories-cards-wrapper pb-4 pt-sm-2 pt-md-0 pr-md-2">
                    <v-row
                        class='block-column d-flex flex-column-reverse align-center flex-sm-row align-sm-start  flex-md-column justify-space-between'
                        no-gutters>
                        <v-col cols='12' class=' col-sm-6 col-md-12 mb-md-16 d-flex align-center'>
                            <div class="categories-card-wrapper   pr-sm-2 pr-md-0 ">
                                <div class=" categories-card  d-flex flex-column align-stretch">
                                    <div class="categories-card-img pl-10 pr-16" max-width='500px'>
                                        <img src="../assets/svg/laptop_svg.svg" alt="Laptops">
                                    </div>
                                    <div class="categories-card-title d-flex flex-column align-end pr-10">
                                        <div class="subtitle">
                                            Laptops
                                        </div>
                                        <h3>True Laptop <br> Solution</h3>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols='12' class=' col-sm-6 col-md-12 d-flex justify-center'>
                            <div class="categories-card-wrapper pb-4 pb-sm-0 pl-sm-2 pl-md-0">
                                <div class="categories-card  d-flex flex-row justify-space-between">
                                    <div class="categories-card-img">
                                        <img src="../assets/svg/watch_svg.svg" height='100%' alt="Watch">
                                    </div>
                                    <div class="categories-card-title  pr-10 d-flex flex-column align-end justify-center">
                                        <div class="subtitle">
                                            Watch
                                        </div>
                                        <h3>Not just <br> stylisht</h3>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols='12' class='categories-block col-sm-12 col-md-6  d-flex justify-center align-stretch'>
                <div class="categories-cards-wrapper pt-2 pt-md-0 pb-sm-2 pl-md-2">
                    <v-row class='block-row  d-flex flex-column flex-sm-row justify-center' no-gutters>
                        <v-col cols='12' class=' col-sm-6 d-flex justify-center align-stretch '>
                            <div class="categories-card-wrapper  d-flex justify-space-between pb-4 pb-sm-0 pr-sm-2">
                                <div class='categories-card  d-flex flex-column align-center'>
                                    <div class="categories-card-img pl-4 pb-10 d-flex justify-end">
                                        <img src="../assets/svg/phones_svg.svg" width='100%' alt="Phones">
                                    </div>
                                    <div class="categories-card-title">
                                        <div class="subtitle">
                                            Phones
                                        </div>
                                        <h3>Your day to day life</h3>
                                    </div>
                                </div>
                            </div>
                        </v-col>
                        <v-col cols='12' class=' col-sm-6 d-flex justify-center align-stretch'>
                            <div class="categories-card-wrapper pl-sm-2">
                                <div class='categories-card'>
                                    <div class="categories-card-title pr-10 pb-4 pb-sm-8 pb-md-10">
                                        <div class="subtitle">
                                            Tablet
                                        </div>
                                        <h3>Empower your work</h3>
                                    </div>
                                    <div class="categories-card-img">
                                        <img src="../assets/svg/tablet_svg.svg" alt="Tablet">
                                    </div>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<style  lang='scss' scoped>
.block-column {
    .categories-card-title {
        h3 {
            text-align: end;
        }
    }
}

.block-row {
    .categories-card {
        padding: 150px 0;

        .categories-card-title {
            padding: 0 40px;

            .subtitle {
                text-align: center;
            }
        }
    }
}

.categories-cards-wrapper {
    width: 100%;
}

.categories-card-wrapper {
    width: 100%;
    height: auto;
}

.categories-card {
    width: 100%;
    padding: 0;
    -webkit-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 15px -3px rgba(0, 0, 0, 0.75);

    .categories-card-img {
        width: 100%;

        img {
            width: 100%;
            height: auto;
        }
    }

    .subtitle {
        padding: 0;
    }
}
</style>