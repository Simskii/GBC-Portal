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
        <div class="columns is-multiline is-mobile">
            <div class="column is-one-third board-cover" v-for="i of 30" :key="i">
                <a href="">
                    <img :src="`https://picsum.photos/400/300?image=${i}`" alt="">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
  &:hover {
    transform: translateY(-5px);
  }
  img {
    border-radius: 5px;
    box-shadow: 0 2px 8px 1px rgba(0, 0, 0, 0.30);
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
