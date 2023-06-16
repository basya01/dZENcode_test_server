class ProductDTO {
  constructor(
    serialNumber,
    isNew,
    photo,
    title,
    specification,
    typeId,
    orderId
  ) {
    this.serialNumber = serialNumber;
    this.isNew = isNew;
    this.photo = photo;
    this.title = title;
    this.specification = specification;
    this.typeId = typeId;
    this.orderId = orderId;
  }
}

export default ProductDTO;
