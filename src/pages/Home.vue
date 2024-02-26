<template>
  <div class="home">
    <div class="home__insert-button">
      <BliButton id="insert-button" size="small" @click="goToInsertProduct">Insert Product</BliButton>
    </div>
    <span v-if="productData.length < 1" class="home__no-product">Tidak ada product</span>
    <BliTable v-else class="home__product-table">
      <thead>
        <tr>
          <th v-for="title in titles">{{ title }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in productData" :key="product.id">
          <td>{{ index + 1 }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.quantity }}</td>
          <td>{{ product.unitPrice }}</td>
          <td>
            <BliLink :id="`edit-button-${index}`" :to="`/product/edit/${product.id}`">
              Edit
            </BliLink>
            <BliLink :id="`delete-button-${index}`" to="#" @click="openDeleteModal(product)">
              Delete
            </BliLink>
          </td>
        </tr>
      </tbody>
    </BliTable>
    <span>Total Quantity: {{ totalQuantity }}</span>
    <Modal 
      :visibleModal="modal.delete.visible"
      :title="modal.delete.title"
      :description="modal.delete.description"
      :confirm="callDeleteProduct"
      :cancel="cancelDeleteModal"
    />
  </div>
</template>

<script src="./js/home"></script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;

  &__no-product {
    text-align: center;
  }

  &__insert-button {
    display: flex;
    justify-content: end;
  }
}
</style>