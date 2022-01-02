<template>
    <div class="container d-flex justify-content-center">
        <form class="col-3" v-on:submit.prevent="addComment">
            <h4 class="pt-5 text-black fw-bold">Commentaires et Notes</h4>
            <small style="color: #707070">Vos commentaires sur le produit</small>

            <div class="form-group my-2">
                <label for="exampleInputCommentTitle" style="color: #707070">Nom</label><span
                class="text-danger">*</span>
                <input type="text" class="form-control" v-model="Comment.title" id="exampleInputCommentTitle" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCommentContent" style="color: #707070">Content</label><span
                class="text-danger">*</span>
                <textarea type="textarea" class="form-control" v-model="Comment.content" id="exampleInputCommentContent"
                          required></textarea>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputNote" style="color: #707070">Note</label><span class="text-danger">*</span>
                <input type="number" step="any" min="0" max="5" class="form-control" v-model.number="Comment.note"
                       id="exampleInputNote" required>
            </div>

            <button type="submit" class="btn btn-light my-2 col-12">Commenter</button>
        </form>

        <div v-if="info" class="container d-flex justify-content-center align-items-start pt-5 col-9">
            <div class="col-5 row">
                <div class="row justify-content-end py-3" v-for="data in info" v-bind:key="data.id">
                    <div class="container-fluid">
                        <span class="fw-bold" style="padding-right: 0.25rem">{{ data.title }} </span>
                        <span class="fw-light" style="font-size: small;" v-for="note in parseInt(data.note)"
                              v-bind:key="note"> ⭐</span>
                    </div>

                    <div class="container-fluid flex-wrap justify-content-center align-items-center">
                        <span class="fw-normal" style="font-size: 0.75em">{{ data.content }}</span>
                    </div>

                    <div class="container-fluid flex-wrap justify-content-center align-items-center">
                        <button class="btn btn-sm fw-lighter" @click="replyComment(this.compteur)"
                                v-on:click="this.compteur += 1">Repondre
                        </button>
                    </div>

                    <div v-if="reply">
                        <form v-on:submit.prevent="addReplyComment">
                            <div class="form-group my-2">
                                <label for="exampleInputReplyTitle" style="color: #707070">Nom</label><span
                                class="text-danger">*</span>
                                <input type="text" class="form-control" v-model="Reply.title"
                                       id="exampleInputReplyTitle" required>
                            </div>

                            <div class="form-group my-2">
                                <label for="exampleInputReplyContent" style="color: #707070">Content</label><span
                                class="text-danger">*</span>
                                <textarea type="textarea" class="form-control" v-model="Reply.content"
                                          id="exampleInputReplyContent" required></textarea>
                            </div>

                            <div class="form-group my-2">
                                <label for="exampleInputReplyNote" style="color: #707070">Note</label><span
                                class="text-danger">*</span>
                                <input type="number" step="any" min="0" max="5" class="form-control"
                                       v-model.number="Reply.note" id="exampleInputReplyNote" required>
                            </div>

                            <button type="submit" class="btn btn-light my-2 col-12">Valider</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ShowComment",
    data: function () {
        return {
            compteur: 0,
            reply: false,
            info: '',
            Comment: {
                title: '',
                content: '',
                note: ''
            },
            Reply: {
                title: '',
                content: '',
                note: ''
            }
        }
    },
    methods: {
        addComment: function () {
            axios
                .post('http://localhost:8080/addComment', {
                    title: this.Comment.title,
                    content: this.Comment.content,
                    note: this.Comment.note
                })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                });
            this.$router.push({path: '/'});
        },
        replyComment: function (compteur) {
            if (compteur % 2 == 0) {
                this.reply = true;
            } else {
                this.reply = false;
            }
        },
        addReplyComment: function () {
            axios
                .post('http://localhost:8080/addComment', {
                    title: this.Reply.title,
                    content: this.Reply.content,
                    note: this.Reply.note
                })
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err.response);
                });
            this.$router.push({path: '/'});
        }
    },
    mounted() {
        axios
            .get('http://localhost:8080/comments')
            .then(response => (this.info = response.data))
            .catch(error => (console.log(error)))

    }
}
</script>

<style scoped>

</style>