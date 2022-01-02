<template>
    <div class="bootstrap-modal-no-jquery">
        <div class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="background-color: #F0F4F8">
                    <div class="modal-header">
                        <h5 class="modal-title">Supprimer le produit</h5>
                    </div>
                    <div class="modal-body">
                        <p>Voulez-vous supprimer votre produit "{{info.label}}" ?</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn bg-danger" @click="deleteProduct">Oui</button>
                        <button type="button" class="btn bg-white" @click="closeModal">Annuler</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data: function () {
        return {
            info: '',
        }
    },
    methods: {
        closeModal() {
            this.$emit('close-modal-event');
        },
        deleteProduct() {
            axios
                .delete('http://localhost:8080/product/delete/'+ this.info.id)
                .then(res => {console.log(res.data);})
                .catch(err => {console.log(err.response);
                });
            this.closeModal();
        }
    },
    mounted() {
        axios
            .get('http://localhost:8080/product/flan')
            .then(response => (this.info = response.data))
            .catch(error => (console.log(error)))
    }
}
</script>

<style scoped>
/* Override default value of 'none' */
.modal {
    display: block;
}
</style>