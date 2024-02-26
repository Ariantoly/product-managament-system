<template>
  <div class="product-form">
    <div class="product-form__name">
      <div class="product-form__name__label">
        <label>Product Name<span class="required">*</span></label>
      </div>
      <div class="product-form__name__input">
        <BliField size="small" prominence="secondary">
          <BliTextField
            id="name"
            v-model="form.name"
            placeholder="Product Name"
            required
          />
        </BliField>
      </div>
    </div>
    <div class="product-form__category">
      <div class="product-form__category__label">
        <label>Category<span class="required">*</span></label>
      </div>
      <div class="product-form__category__input">
        <BliField size="small" prominence="secondary">
          <BliTextField 
            id="category"
            v-model="form.category"
            placeholder="Category"
            required
          />
        </BliField>
      </div>
    </div>
    <div class="product-form__quantity">
      <div class="product-form__quantity__label">
        <label>Quantity<span class="required">*</span></label>
      </div>
      <div class="product-form__quantity__input">
        <BliField size="small" prominence="secondary">
          <BliTextField 
            id="quantity"
            v-model="form.quantity"
            type="number"
            placeholder="Quantity"
            required
          />
        </BliField>
      </div>
    </div>
    <div class="product-form__unit-price">
      <div class="product-form__unit-price__label">
        <label>Unit Price<span class="required">*</span></label>
      </div>
      <div class="product-form__unit-price__input">
        <BliField size="small" prominence="secondary">
          <template #unit-leading>
            Rp
          </template>
          <BliTextField 
            id="unit-price"
            v-model="form.unitPrice"
            type="number"
            placeholder="Unit Price"
            required
          />
        </BliField>
      </div>
    </div>
    <BliButton id="submit-button" class="product-form__submit-button" size="small" 
      @click="submit">{{ isEditPage ? 'Edit' : 'Insert' }}</BliButton>
  </div>
</template>

<script src="./js/product-form.js"></script>

<style lang="scss" scoped>
.product-form {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__name, &__category, &__quantity, &__unit-price {
    display: flex;
    align-items: center;
    
    &__label {
      width: 20vw;
    }

    &__input {
      width: 100%;
    }
  }

  &__submit-button {
    margin-top: 10px;
  }
}

.required {
  color: red;
}
</style>