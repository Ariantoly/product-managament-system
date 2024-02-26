<template>
  <BliModal :type="type" :active="visibleModal">
    <BliModalHeader @close="cancel">
      <template #title>
        {{ title }}
      </template>
    </BliModalHeader>
    <BliModalBody>
      {{ description }}
    </BliModalBody>
    <BliModalFooter>
      <BliButton id="cancel-button" prominence="tertiary" color="common" @click="cancel">
        Cancel
      </BliButton>
      <BliButton id="confirm-button" prominence="primary" color="common" @click="confirm">
        Confirm
      </BliButton>
    </BliModalFooter>
  </BliModal>
</template>

<script src="./js/modal"></script>