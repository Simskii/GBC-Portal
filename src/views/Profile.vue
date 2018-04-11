<template>
    <div class="container">
        <article class="media">
            <figure class="media-left">
                <p class="image is-64x64">
                    <img src="https://s3.amazonaws.com/uifaces/faces/twitter/k/128.jpg">
                </p>
            </figure>
            <div class="media-content">
                <div class="content">
                    <p>
                        <strong>Simon Lundh</strong>
                        <br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                    </p>
                </div>
            </div>
        </article>
        <section>
            <b-upload multiple drag-drop>
                <section class="section">
                    <div class="content has-text-centered">
                        <p>
                            <b-icon icon="upload" size="is-large">
                            </b-icon>
                        </p>
                        <p>Drag din bild för att ladda upp</p>
                    </div>
                </section>
            </b-upload>
        </section>
        <!-- <div class="columns is-multiline is-mobile">
            <div class="column is-one-third board-cover" v-for="i of 30" :key="i">
                <a href="">
                    <img :src="`https://picsum.photos/400/300?image=${i}`" alt="">
                </a>
            </div>
             <draggable v-model="data">
                <transition-group>
                    <div v-for="element in data" :key="element">
                        {{element}}
                    </div>
                </transition-group>
            </draggable>
        </div> -->
        <!-- <grid-layout :layout="data" :col-num="3" :row-height="100" :is-draggable="true" :margin="[10, 10]" :use-css-transforms="true">
            <grid-item v-for="item in data" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i">
                <img :src="`https://picsum.photos/400/300?image=${item.i}`" alt="">
            </grid-item>
        </grid-layout> -->
        <div class="columns">
            <grid :draggable="true" :sortable="true" :items="data" :cellHeight="400" :cellWidth="500">
                <template slot="cell" scope="props">
                    <div class="board-cover">
                        <img draggable="false" :src="`https://picsum.photos/400/300?image=${props.item}`" alt="">
                    </div>
                </template>
            </grid>
        </div>
    </div>
</template>

<script>
/* import { GridLayout, GridItem } from 'vue-grid-layout';
import draggable from 'vuedraggable' */
export default {
    data() {
        return {
            data: Array.from(Array(30).keys())
        }
    }
}
</script>

<style lang="scss" scoped>
section {
  margin-bottom: 50px;
}
.media {
  margin-bottom: 100px;
}

.board-cover {
  transition: 0.5s all ease;
  width: 400px;
  margin-bottom: 50px;
  &:hover {
    transform: translateY(-7px);
    cursor: pointer;
  }
  img {
    border-radius: 5px;
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.3);
  }
}
.fade-enter-active,
.fade-leave-active {
  -webkit-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-move {
  -webkit-transition: -webkit-transform 0.3s;
  transition: -webkit-transform 0.3s;
  transition: transform 0.3s;
  transition: transform 0.3s, -webkit-transform 0.3s;
}
</style>
