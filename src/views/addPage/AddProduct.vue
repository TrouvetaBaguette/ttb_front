<template>
    <div class="container d-flex justify-content-center align-items-center">
        <form>
            <h3 style="color: #4E3883" class="pt-3">Produit</h3>

            <small><span class="text-danger">*</span>champs requis</small>

            <div class="form-group my-2">
                <label for="exampleInputProductName" style="color: #707070">Nom du produit</label><span
                class="text-danger">*</span>
                <input type="text" class="form-control" id="exampleInputProductName" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputPrice" style="color: #707070">Prix</label><span class="text-danger">*</span>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputPrice" required>
            </div>

            <div class="form-group my-2">
                <label for="exampleInputIngredient1" style="color: #707070">Ingredients</label>
                <input type="text" class="form-control" id="exampleInputIngredient1">
            </div>

            <h3 style="color: #4E3883" class="pt-3">Informations Nutritionnelles</h3>

            <small><i>optionnel</i></small>

            <div class="form-group my-2">
                <label for="exampleInputSize" style="color: #707070">Taille</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputSize">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCalories" style="color: #707070">Calories</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputCalories">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputProtein" style="color: #707070">Proteine</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputProtein">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputSucre" style="color: #707070">Sucre</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputSucre">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputFiber" style="color: #707070">Fibre</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputFiber">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputFat" style="color: #707070">Gras</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputFat">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCalcium" style="color: #707070">Calcium</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputCalcium">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputCholesterol" style="color: #707070">Cholesterol</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputCholesterol">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputSodium" style="color: #707070">Sodium</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputSodium">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputPotassium" style="color: #707070">Potassium</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputPotassium">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputVitaminA" style="color: #707070">Vitamine A</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputVitaminA">
            </div>

            <div class="form-group my-2">
                <label for="exampleInputVitaminC" style="color: #707070">Vitamine C</label>
                <input type="number" step="any" min="0" class="form-control" id="exampleInputVitaminC">
            </div>

            <button type="submit" class="btn btn-light my-2">Ajouter</button>

        </form>
    </div>

</template>

<script>
export default {
    name: "AddProduct"
}
</script>

<style scoped>

</style>